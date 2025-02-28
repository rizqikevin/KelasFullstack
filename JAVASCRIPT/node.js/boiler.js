// import {mkdir} from 'node:fs';

const { error } = require("console");
const fs = require("fs");
const folderName = process.argv[2];

try {
  //   fs.mkdir("project", { recursive: true }, (err) => {
  //     console.log("di dalam callback");
  //     if (err) throw err;
  //   });
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, " ");
  fs.writeFileSync(`${folderName}/app.js`, " ");
  fs.writeFileSync(`${folderName}/app.css`, " ");
  console.log("berhasil");
} catch (error) {
  console.log(error);
}


