import { PATH_DB } from "../constants/products.js";
import fs from 'node:fs/promises';

export async function getProductsByMinPrice(price) {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);
    const maxPrice = parseData.filter(product => product.price >= price);
    return maxPrice;
}

getProductsByMinPrice(800).then(result => console.log(result));