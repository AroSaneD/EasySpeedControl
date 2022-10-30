import * as ejs from 'ejs';
import path from 'path';
import fs from 'fs';
import { DateTime } from 'luxon';

type TemplateData = {
    jsBundle: string;
    cssBundle: string;
    currDate: string;
};

const currentDir = path.resolve();
const distDir = path.resolve(currentDir, 'dist');
const fileToCreate = distDir + '/userscript.js';

const jsBundle = fs.readFileSync(`${distDir}/speed.es.js`).toString();
const cssBundle = fs.readFileSync(`${distDir}/style.css`).toString();
const template = fs.readFileSync(`${currentDir}/src/template.js`).toString();

const currDate = DateTime.now().toISODate();

fs.writeFileSync(
    fileToCreate,
    // jsBundle
    ejs.render(template, {
        jsBundle,
        cssBundle,
        currDate,
    } as TemplateData)
);
