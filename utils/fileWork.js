const fs = require('fs');
const path = require('path');

const fullPath = path.join(
  path.dirname(process.mainModule.filename), 
  'data',
  'routes.json'
);

const getRoutesFromFile = () => {
  return fs.readFileSync(fullPath, (err, fileContent) => {
    return err ? [] : fileContent;
  }).toString();
}

const saveRoutesToFile = (data) => {
  fs.writeFile(fullPath, JSON.stringify(data), err => console.log('File save (err)', err));
};

module.exports = {
  getRoutesFromFile,
  saveRoutesToFile
};
  