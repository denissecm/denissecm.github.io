const http = require('http');
const servidor = http.createServer(async (req, res) => {
    if (req.url === '/usuarios') {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await respuesta.json();

            const resultado = datos.map(usuario => ({
                nombre: usuario.name,
                correo: usuario.email
            }));
      
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(resultado));
    } else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
});
