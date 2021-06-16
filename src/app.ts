import express from 'express';
import path from 'path';

const app = express();

app.get('/api', (req, res) => {
    res.send('Hello world');
});

app.use(express.static('client-app/build'));
app.get('*', (req, res) => {
    // res.send(path.resolve(__dirname, '..', 'client-app', 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, '..', 'client-app', 'build', 'index.html'));
});

app.listen(5000);