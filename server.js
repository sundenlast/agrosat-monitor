const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>AgroSat Monitor funcionando!</h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});