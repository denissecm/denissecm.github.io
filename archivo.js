const express = require('express');
const app = express();
//Se me hace más práctico porque puedo mezclar backend con frontend fácilmente.
app.get('/arbol', (req, res) => {
    res.send(`
        <html>
          <body>
            <img src="Árbol.png"/>
                  <p>Fraxinus uhdei</p>
            </body>
        </html>
    `);
});
//Express también facilita crear rutas 
app.listen(1984, () => {
    console.log('Servidor con Express corriendo en http://localhost:1984');
});