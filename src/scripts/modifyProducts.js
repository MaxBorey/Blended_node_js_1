// Створіть файл src/scripts/modifyProducts.js.
// В ньому опишіть функцію modifyProducts. Вона має перезаписувати вміст файлу src/db/db.json таким чином, щоб у файлі в результаті опинився перелік тих самих продуктів, але без поля description.
// Додайте до файлу package.json скрипт modify-products для виконання коду з файлу src/scripts/modifyProducts.js.
// Виконавши скрипт modify-products, переконайтесь, що ваша функція modifyProducts коректно перезаписує вміст файлу src/db/db.json.

import { PATH_DB } from "../constans/products.js";
import fs from 'node:fs/promises';

const modifyProducts = async () => { 
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);

    const productsWithoutDescription = parseData.map(({ description, ...rest }) => rest);
    return productsWithoutDescription;
};

console.log(await modifyProducts());
