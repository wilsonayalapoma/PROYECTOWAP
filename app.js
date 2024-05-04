//proyecto de inicio de ayala wilson
const express = require('express');
const app = express();
const PORT =3000;

let data = [{nombre: 'ana'}, {nombre: 'wilson'}, {nombre: 'ruben'}, {nombre: 'satuco'}]
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a mi app');
})
app.get('/users', (req, res) => {
    res.send(data);
})

app.post('/users', (req, res) => {
    console.log('peticion POST con body'+req.body);
    data.push(req.body);
    res.send('Datos Guardados correctamente');
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    data[id] = req.body;
    res.send('Datos Modificados correctamente');
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    data.splice(id, 1);
    res.send('Datos Eliminados correctamente');
});


app.listen(PORT, () => {    
    console.log('App corriendo en el puerto'+ PORT);
})