'use-strict'
import { Command } from "commander";

const program = new Command();


program
  .name('manas-tiwari')
  .description('Get to know Manas Tiwari using `npx npx_manas`')
  .version('2.0.0')
  .parse()


export default program;