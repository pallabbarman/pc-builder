import clientPromise from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const getCategories = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const categories = await client
            .db()
            .collection('categories')
            .find({})
            .sort({})
            .toArray();

        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};

export default getCategories;
