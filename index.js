const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/generate-hash', (req, res) => {
    const queryString = req.query.queryString;
    const secret = "your_secret_key"; // Gerçek gizli anahtarınızı buraya ekleyin
    const hash = crypto.createHmac('sha256', secret).update(queryString).digest('hex');
    res.json({ hash });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
