const execa = require('execa');

class PkgManager {
  constructor(pm = 'npm') {
    this.pm = pm;
  }
  async getLatestVersion(pkg) {
    const { stdout } = await execa(this.pm, ['info', pkg, 'version']);
    return stdout;
  }
}

module.exports = PkgManager;
