const fs = require('fs');
const path = require('path');

const fullPath = path.join(
  path.dirname(process.mainModule.filename), 
  'data',
  'routes.json'
);

const getRoutesFromFile = (callback) => {
  fs.readFile(fullPath, (err, fileContent) => {
    return err ? callback([]) : callback(JSON.parse(fileContent));
  });
}

const saveRoutesToFile = (data) => {
  fs.writeFile(fullPath, JSON.stringify(data), err => console.log('File save (err)', err));
};

module.exports = {
  getRoutesFromFile,
  saveRoutesToFile
};
  