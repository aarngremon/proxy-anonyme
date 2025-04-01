import fetch from 'node-fetch';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) {
        return res.status(400).send('URL invalide');
    }
    const response = await fetch(targetUrl);
    const content = await response.text();
    res.send(content);
});

app.listen(port, () => console.log(`Serveur démarré sur http://localhost:${port}`));
