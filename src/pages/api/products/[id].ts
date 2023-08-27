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
            const newReview = req.body;

            const existingProduct = await products.findOne({ _id: id });

            const existingTotalRatings = existingProduct?.reviews.length;
            const existingAvgRating = existingProduct?.avg_rating;
            const newRating = newReview.rating;

            const newAvgRating =
                (existingAvgRating * existingTotalRatings + newRating) /
                (existingTotalRatings + 1);

            const update = {
                $push: { reviews: newReview },
                $set: { avg_rating: newAvgRating },
            };

            const updatedProduct = await products.findOneAndUpdate(
                { _id: id },
                update,
                { returnDocument: 'after' }
            );

            res.status(200).send(updatedProduct.value);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

export default product;
