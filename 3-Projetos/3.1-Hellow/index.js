// console.log(global.luckyNum);
// global.luckyNum = `13`;
// console.log(global.luckyNum);
//-----------------------------------------------------
// console.log(process.platform);
// console.log(process.env.USER);
//-----------------------------------------------------
// const { readFile, readFileSync } = require(`fs`);
// const txt = readFileSync(`./hello.txt`, `utf8`);
// console.log(txt);
// console.log(`txt`);
//-----------------------------------------------------
// readFile(`./hello.txt`, `utf8`, (err, txt) => {
//     console.log(txt);
// });
// console.log(`txt`);
//-----------------------------------------------------
// const { readFile } = require(`fs`).promises;
// async function hello(){
//     const file = await readFile(`./hello.txt`, `utf8`);
//     return file
// }
// console.log(hello());
//-----------------------------------------------------
// const express = require(`express`);
// const { readFile } = require("fs");

// const app = express();

// app.get(`/`, (request, response) => {
//     readFile(`./home.html`, `utf8`, (err, html) => {
//         if (err) {
//             response.status(500).send(`Erro 500`);
//         }

//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`))
//-----------------------------------------------------
const express = require(`express`);
const { readFile } = require("fs").promises;

const app = express();

app.get(`/`, async (request, response) => {
    response.send(await readFile(`./home.html`, `utf8`));
})

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`))