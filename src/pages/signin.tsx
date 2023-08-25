import RootLayout from '@/layouts/RootLayout';
import { GoogleOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import type { ReactElement } from 'react';

const { Title } = Typography;

const SignIn = () => {
    return (
        <div style={{ padding: '0 50px' }}>
            <Row
                gutter={[16, 16]}
                style={{
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }}
            >
                <Col md={{ span: 24 }} lg={{ span: 12 }}>
                    <Image
                        src="/login.svg"
                        alt="login"
                        width={100}
                        height={100}
                        layout="responsive"
                    />
                </Col>
                <Col md={{ span: 24 }} lg={{ span: 12 }}>
                    <Row
                        justify={'center'}
                        align={'middle'}
                        style={{ flexDirection: 'column' }}
                        gutter={[32, 16]}
                    >
                        <Col>
                            <Title level={1}>Login</Title>
                        </Col>
                        <Col>
                            <Button
                                shape="round"
                                size="large"
                                onClick={() =>
                                    signIn('google', {
                                        callbackUrl:
                                            'https://web-pc-builder.vercel.app',
                                    })
                                }
                            >
                                <GoogleOutlined /> SignIn with Google
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

export default SignIn;
