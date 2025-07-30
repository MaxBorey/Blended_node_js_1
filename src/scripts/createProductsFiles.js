// Створіть в папці db папку files
// Створіть файл src/scripts/createProductsFiles.js.
// В файлі src/constants/products.js оголосіть змінну PATH_FILES_DIR. Ініціалізуйте її значенням, яке буде зберігати шлях до папки files.
// В файлі src/scripts/createProductsFiles.js опишіть функцію createProductsFiles. Вона має створювати в папці files таку кількість файлів, скільки продуктів є в масиві у файлі src/db/db.json. В кожному файлі має бути записаний об’єкт продукту. Назва кожного файлу повинна бути представлені у вигляді назви продукти (кожне слово через дефіс) з форматом json. Наприклад, luxurious-soft-soap.json
// Додайте до файлу package.json скрипт create-products-files для виконання коду з файлу src/scripts/createProductsFiles.js.
// Виконавши скрипт create-products-files, переконайтесь, що в папці files створились очікувані файли.


import { PATH_DB, PATH_FILES_DIR } from "../constants/products.js";
import fs from 'node:fs/promises';
import { join } from 'node:path';

function formatFileName(title) {
  return title.toLowerCase().split(' ').join('-') + '.json';
}

export async function createProductsFiles() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    for (const product of products) {
      const fileName = formatFileName(product.name);
      const filePath = join(PATH_FILES_DIR, fileName);
      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
    }

    console.log('✅ Продукти записані в окремі файли.');
  } catch (error) {
    console.error('❌ Помилка при створенні файлів:', error.message);
  }
}


createProductsFiles();