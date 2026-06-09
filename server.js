const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <h1>🛰 AgroSat Monitor</h1>
    <p>Aplicação funcionando no Azure App Service</p>
    <p>ODS 2 - Fome Zero e Agricultura Sustentável</p>
  `);
});

server.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
});