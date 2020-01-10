const PkgManager = require('./pkgManager');
const PluginConfGen = require('./PluginConfGen');

const pcg = new PluginConfGen();
const pm = new PkgManager();

async function injectPkgByDep(pkg, tpl) {
  const { dependencies, devDependencies } = tpl;
  if (dependencies) {

  }

  if (devDependencies) {
    pkg.devDependencies = {};
    for (let i = 0; i < devDependencies.length; i++) {
      const dep = devDependencies[i];
      const version = await pm.getLatestVersion(dep);
      pkg.devDependencies[dep] = version
    }
  }
  return pkg;
}

async function generateSolePluginConf(tpl, path) {
  const { devDependencies } = tpl;
  // have babel
  console.log(devDependencies);
  if (devDependencies.includes('@babel/core')) {
    // generate babel config
    pcg.generateBabel('vue-compo', path);
  }
}

module.exports = { injectPkgByDep, generateSolePluginConf };
