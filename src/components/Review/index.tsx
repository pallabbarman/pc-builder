import { Review as IReview } from '@/types/product';
import {
    Avatar,
    Button,
    Col,
    Form,
    Input,
    List,
    Rate,
    Row,
    Typography,
    message,
} from 'antd';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { Item } = Form;
const { TextArea } = Input;

const { Title } = Typography;

interface ReviewProps {
    reviews: IReview[];
}

const Review = ({ reviews }: ReviewProps) => {
    const [rating, setRating] = useState<number>();
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const { id } = router.query;
    const [form] = Form.useForm();
    const { data: session } = useSession();

    const onFinish = (data: IReview) => {
        const baseUrl = process.env.BASE_URL;
        const formData = { ...session?.user, ...data };

        fetch(`${baseUrl}/api/products/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                messageApi.open({
                    type: 'success',
                    content: 'Review added successfully!',
                });
                form.resetFields();
            })
            .catch(() =>
                messageApi.open({
                    type: 'error',
                    content: 'Something went wrong!',
                })
            );
    };

    return (
        <Row justify="center">
            <Col
                style={{
                    maxWidth: '830px',
                    width: '100%',
                }}
            >
                {contextHolder}
                <Title level={3}>Reviews</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={reviews}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Rate
                                    key={item.rating + 1}
                                    allowHalf
                                    disabled
                                    defaultValue={item.rating}
                                />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item?.image} />}
                                title={item?.name}
                                description={item?.review}
                            />
                        </List.Item>
                    )}
                />
                {session?.user && (
                    <Form onFinish={onFinish} form={form}>
                        <Item name="rating" rules={[{ required: true }]}>
                            <Rate
                                allowHalf
                                onChange={(value) => setRating(value)}
                                value={rating}
                            />
                        </Item>
                        <Item name="review" rules={[{ required: true }]}>
                            <TextArea
                                rows={3}
                                placeholder="Write about your experience..."
                            />
                        </Item>
                        <Button
                            type="primary"
                            block
                            htmlType="submit"
                            style={{ marginTop: '1rem' }}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Col>
        </Row>
    );
};

export default Review;
