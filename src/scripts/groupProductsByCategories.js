// Створіть файл src/scripts/groupProductsByCategories.js.
// В ньому опишіть функцію groupProductsByCategories. Вона має повертати об’єкт, в якому назви продуктів будуть згруповані за категоріями. В результаті виконання задачі ви повинні отримати об’єкт схожої структури:
// {
//    category1: [name1, name3, name5],
//    category2: [name2, name7],
//    category3: [name4, name6],
// }
// 3. Додайте до файлу package.json скрипт group-products для виконання коду з файлу src/scripts/groupProductsByCategories.js.

// 4. Виконавши скрипт group-products, переконайтесь, що ваша функція group-products коректно групує назви продуктів за категоріями.

import { PATH_DB } from "../constants/products.js";
import fs from 'node:fs/promises';

const groupProductsByCategories = async () => { 
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseData = JSON.parse(data);

    const grouped = {}; // об'єкт для результату

    parseData.forEach(item => {
        if (!grouped[item.category]) {
            grouped[item.category] = [];
        }
        grouped[item.category].push(item.name);
    });

    return grouped;
};

console.log(await groupProductsByCategories());