import * as ejs from 'ejs';
import path from 'path';
import fs from 'fs';

type TemplateData = {
    jsBundle: string;
    cssBundle: string;
};

// const jsBundle = fs
const currentDir = path.resolve();
const distDir = path.resolve(currentDir, 'dist');
const fileToCreate = distDir + '/userscript.js';

const jsBundle = fs.readFileSync(`${distDir}/speed.es.js`).toString();
const cssBundle = fs.readFileSync(`${distDir}/style.css`).toString();
const template = fs.readFileSync(`${currentDir}/src/template.js`).toString();

fs.writeFileSync(
    fileToCreate,
    // jsBundle
    ejs.render(template, {
        jsBundle,
        cssBundle,
    } as TemplateData)
);
// console.log(template.toString());
