const express = require('express');
const api = require('./api');
const middleware = require('./middleware');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(middleware.cors);

// Products API
app.get('/', api.handleRoot);
app.get('/products', api.listProducts);
app.get('/products/:id', api.getProduct);
app.post('/products', api.createProduct);
app.put('/products/:id', api.editProduct);
app.delete('/products/:id', api.deleteProduct);

// Orders API
app.get('/orders', api.listOrders);
app.get('/orders/:id', api.getOrder);
app.post('/orders', api.createOrder);
app.put('/orders/:id', api.editOrder);
app.delete('/orders/:id', api.deleteOrder);

app.use(middleware.notFound);
app.use(middleware.handleError);

app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
