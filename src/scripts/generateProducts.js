import { PATH_DB } from "../constants/products.js";
import fs from 'node:fs/promises';
import { createFakeProduct } from "../utilits/createFakeProduct.js";


export async function generateProducts(count) {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);

for (let i = 0; i < count; i++) {
    const newData = createFakeProduct();
    parseData.push(newData);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2), 'utf-8');
}

generateProducts(3);