/* global hexo */

'use strict';

const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');
const { merge } = require('lodash');

const Util = function (hexo, pluginDir) {
  this.hexo = hexo;
  this.pluginDir = pluginDir;
  this.getFilePath = function (file) {
    return this.pluginDir ? path.resolve(this.pluginDir, file) : file;
  };
  this.getFileContent = function (file) {
    return fs.readFileSync(this.getFilePath(file), 'utf8');
  };
  this.defaultConfigFile = function (key, file) {
    let defaultConfig = file ? yaml.safeLoad(this.getFileContent(file)) : {};
    this.hexo.config[key] = merge(defaultConfig[key], this.hexo.theme.config[key], this.hexo.config[key]);
    return this.hexo.config[key];
  };
};
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {
  let config = utils.defaultConfigFile('next_nightmode', 'default.yml');

  if (!config.enable) {
    if (config.reminder) {
      hexo.log.warn('Enable `next_nightmode` in hexo or theme _config.yml');
      return;
    }
    return;
  }

  injects.style.push(utils.getFilePath('css/scheme.styl'));
  injects.head.raw('nightmode-head', utils.getFileContent('head.swig'), {}, { cache: true });
  if (!config.alpha) {
    injects.style.push(utils.getFilePath('css/button.styl'));
    injects.sidebar.raw('nightmode-sidebar', utils.getFileContent('sidebar.swig'), {}, { cache: true });
  }
  injects.bodyEnd.raw('nightmode-bodyEnd', utils.getFileContent('bodyEnd.swig'), {}, { cache: true });
});
