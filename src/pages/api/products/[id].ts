import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
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
};

export default getProduct;
