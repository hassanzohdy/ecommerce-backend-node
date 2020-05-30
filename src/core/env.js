// Steps to parse .env file

// 1- Install @flk/fs package
// 2- Get the root directory
// 3- Get the .env file path
// 4- Get the .env file contents
// 5- Parse .env file line by line
import { fs } from '@flk/fs';
import Is from '@flk/supportive-is';

let rootDirectory = process.cwd(); // current working directory

let fileContent = fs.get(rootDirectory + '/.env');

let lines = fileContent.split(/\r\n|\n|\r/);

// /r/n
// /n
// /r

// @flk/supportive-is

let data = {};

for (let line of lines) { 
    if (! line) continue;

    let [key, value] = line.split('=');

    // remove whitespace from the beginning and the end of
    // the text
    value = value.replace(/^\s|\s$/g, '');
    key = key.replace(/^\s|\s$/g, '');

    if (Is.numeric(value)) {        
        value = Number(value);
    }

    key = key.toUpperCase();

    process.env[key] = value; // all data are stored as strings 

    data[key] = value;
}

/**
 * Get env value
 * @param   {string} key 
 * @param   {any} defaultValue
 * @returns {any} 
 */
export default function env(key, defaultValue = null) {
    key = key.toUpperCase();
    return typeof data[key] === undefined ? defaultValue : data[key];
}
