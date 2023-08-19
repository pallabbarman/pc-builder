import { Product } from '@/types/product';

const shuffleData = (data: Product[]) => {
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
};

export default shuffleData;
