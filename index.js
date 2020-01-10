#! /usr/bin/env node
const fs = require('fs');
const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const child_process = require('child_process');
const { injectPkgByDep, generateSolePluginConf } = require('./utils/tpl-util');
const { vueCompoTpl } = require('./utils/tpl');

const CWD = process.cwd();

program.version(require('./package.json').version)
  .usage('<command> [options]');


program.command('create <template> <name>')
  .description('create a new project based on the template')
  .action(async (tpl, name) => {
    if (tpl === 'vue-compo') {
      await generateVueCompo(name);
    }
  });

async function generateVueCompo(name) {
  let pkg = {
    name,
    version: '0.0.1',
    description: 'A terra scaffold project'
  };

  const projectDir = path.join(CWD, name);
  fs.mkdirSync(projectDir);
  // package.json path
  const filePath = path.join(projectDir, 'package.json');

  pkg = await injectPkgByDep(pkg, vueCompoTpl);
  // todo generate config files for plugins
  generateSolePluginConf(vueCompoTpl, projectDir);

  fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2));

  child_process.exec('npm install', { cwd: projectDir }, function (err, stdout) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(chalk.green('install over!'));
  });
}

program.parse(process.argv);
