import express from 'express';
import { getProducts, getProduct, insertProduct } from './database.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/products', async function (req, res) {
    const products = await getProducts();
    res.send(products);
});

app.get('/product/:id', async function (req, res) {
    const id = req.params.id;
    const product = await getProduct(id);
    res.send(product);
});

app.post('/insertProduct', async function (req, res) {
    const { name, description, precio, precioPromo, cant } = req.body;
    const product = await insertProduct(name, description, precio, precioPromo, cant );
    res.send(product);
});

app.listen(3001)