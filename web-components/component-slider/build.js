const fs = require('fs');
const concat = require('concat');
const angularJson = require('./angular.json');
const distFolder = './dist';
(function build() {
  console.log('Building web component as a single package');
  concatFile();
})();

function concatFile() {
  const files = [
    `${distFolder}/${angularJson.defaultProject}/runtime.js`,
    `${distFolder}/${angularJson.defaultProject}/polyfills.js`,
    `${distFolder}/${angularJson.defaultProject}/main.js`,
  ];
  concat(files, distFolder + '/component.js'); // FIXME change name?
}
