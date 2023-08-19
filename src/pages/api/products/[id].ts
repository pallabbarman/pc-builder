import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const product = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const client = await clientPromise;
            const products = await client
                .db()
                .collection('products')
                .findOne({ _id: new ObjectId(req.query?.id as string) });

            res.status(200).send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    } else if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const products = await client.db().collection('products');

            const id = new ObjectId(req.query?.id as string);
            const update = { $push: { reviews: req.body } };

            const review = await products.findOneAndUpdate(
                { _id: id },
                update,
                { returnDocument: 'after' }
            );

            res.status(200).send(review.value);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

export default product;
