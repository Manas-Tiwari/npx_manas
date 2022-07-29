#!/usr/bin/env node

import chalk from 'chalk';
import program from './cli.js';


const btn = (text, bgColor) => {
  return chalk.hex('04052e').bgHex(bgColor).bold(text);
}

(async function () {
  console.clear();
  console.log(`\n ${btn(' Manas Tiwari ', '#f48c06')} v${program._version} ${chalk.dim('Namaste, This is Manas!')}`)
  console.log(chalk.dim(` Get to know  Manas via ${chalk.dim.italic('`npx npx_manas`')} \n`))
  //if (info) {

  //}
  // console.log('\n')
  console.log(`${chalk.italic(' Currently pursuing BTech - CSE from Dr. Akhilesh Das Gupta Inst. of Technology. ')} \n`);
  console.log(` ${btn(' Portfolio ', '6e44ff')}  ${chalk.dim('https://manas-tiwari.github.io/portfolio')}`);
  console.log(` ${btn(' Github ', '48bfe3')}     ${chalk.dim('https://Manas-Tiwari.github.io')}`);
  console.log(` ${btn(' LinkedIn ', '52b788')}   ${chalk.dim('https://linkedin.com/manas')}`);
  console.log(` ${btn(' Twitter ', '95d5b2')}    ${chalk.dim('https://twitter.com/manas-tiwari')}\n`);

})();