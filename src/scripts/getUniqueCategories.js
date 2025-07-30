// В ньому опишіть функцію getUniqueCategories. Вона має повертати масив унікальних категорій, які мають продукти в масиві у файлі src/db/db.json. Додайте в цьому файлі логування результату виклику функції getUniqueCategories.
// Додайте до файлу package.json скрипт get-unique-categories для виконання коду з файлу src/scripts/getUniqueCategories.js.
// Виконавши скрипт get-unique-categories, переконайтесь, що ваша функція getUniqueCategories коректно повертає унікальні категорії, які мають продукти в масиві у файлі src/db/db.json.

import { PATH_DB } from "../constans/products.js";
import fs from 'node:fs/promises';


const getUniqueCategories = async () => { 
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);

    const category = [...new Set(parseData.map(item => item.category))];
    return category;
};

console.log(await getUniqueCategories());
