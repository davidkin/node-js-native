const saveForm = require('./saveForm');

const editForm = (data, res) => {

    res.write('<h1>Update route:</h1>');
    res.write(saveForm('route', 'PUT', data));

    res.end();
};

module.exports = editForm;