import { PATH_DB } from "../constans/products.js";
import fs from 'node:fs/promises';

const getTotalPrice = async() => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);
    const totalPrice = parseData.reduce((acc, num) => acc + Number(num.price), 0);
    return totalPrice;
};

console.log(await getTotalPrice());


