import clientPromise from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const getProductsByCategory = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const client = await clientPromise;
        const products = await client
            .db()
            .collection('products')
            .find({ category: req?.query?.category })
            .sort({})
            .toArray();

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

export default getProductsByCategory;
