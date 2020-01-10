const fs = require('fs');
const path = require('path');

module.exports = class PluginConfGen {
  generateBabel(type, context) {
    const filePath = path.join(__dirname, '..', 'pluginConf', type, 'babel.config.js');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(path.join(context, 'babel.config.js'));
    readStream.pipe(writeStream);
  }
};
