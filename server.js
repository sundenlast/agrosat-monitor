const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {

    fs.readFile(
        path.join(__dirname, 'index.html'),
        (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end('Erro ao carregar index.html');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        }
    );

}).listen(PORT);

console.log(`Servidor iniciado na porta ${PORT}`);