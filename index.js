// const express = require('express');

// подключение модуля dotenv
// require('dotenv').config();

// const app = express();

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`)
// });

// подключения модуля file system
const fs = require('fs');

// подключения модуля path
const path = require('path');

// создание файла
// fs.mkdir(path.join(__dirname, 'folder'), (err) => {
//     if (err) throw new Error();
//     console.log('папка была создана')
// });

// запись (полная перезапись) файла
// fs.writeFile(path.join(__dirname, 'folder', 'file1'),
//     'jfjfjjf',
//     (err) => {
//     if (err) throw new Error();
// });

// добавление в файл
// fs.appendFile(path.join(__dirname, 'folder', 'file1'),
//     JSON.stringify([1, 2, 3]),
//     (err) => {
//         if (err) throw new Error();
//     }
// );

// чтение файла
// fs.readFile(path.join(__dirname, 'folder', 'file1'), 'utf-8', (err, data) => {
//     if (err) throw new Error();
//     console.log(data)
// });

// удаление файла
// fs.unlink(path.join(__dirname, 'folder', 'file1.json'), (err) => {
//     if (err) throw new Error();
// });

// перемещение файла
// fs.rename(path.join(__dirname, 'folder', 'file1'), 
//     path.join(__dirname, 'file1'), (err) => {
//         if (err) throw new Error();
//     }
// );

// удаление папки
// fs.rmdir(path.join(__dirname, 'folder'), (err) => {
//     if (err) throw new Error();
// });