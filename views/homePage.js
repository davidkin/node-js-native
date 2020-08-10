const saveForm = require('./saveForm');
const getAllForm = require('./getAllForm');

const homePage = (res) => {
    res.write('<html>');
    res.write('<head><title>Enter Page</title></head>');
    res.write('<body>');

    res.write('<h3>Could you help in resolving some issues from this test task?</h3>');
    res.write('<div>mail: david.potapkin@dataart.com</div>');
    res.write('<div>skype: dv1d211</div>')

    res.write('<h1>Add new route:</h1>');
    res.write(saveForm('route', 'POST'));

    res.write('<p>Look at all Routes:</p>');
    res.write(getAllForm('routes', 'GET'));

    res.write('</body>')
    res.write('</html>');

    res.end();
}

module.exports = homePage;
