/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import chalk from 'chalk';
import fs from 'fs';

const json = JSON.stringify(jsf(schema));

fswriteFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("mock data generated"));
  }

});
