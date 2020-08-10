const saveForm = require('./saveForm');
const getAllForm = require('./getAllForm');

const homePage = (res) => {    
    res.write('<html>');
    res.write('<head><title>Enter Page</title></head>');
    res.write('<body>');

    res.write('<h1>Add new route:</h1>');
    res.write(saveForm('route', 'POST'));

    res.write('<p>Look at all Routes:</p>');
    res.write(getAllForm('routes', 'GET'));

    res.write('</body>')
    res.write('</html>');

    res.end();
}

module.exports = homePage;
