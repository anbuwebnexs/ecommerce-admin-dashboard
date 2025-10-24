const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Session
app.use(session({
  secret: 'ecommerce-admin-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 } // 1 hour
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sample data (replace with database later)
let products = [
  { id: 1, name: 'Product 1', category: 'Electronics', price: 299.99, stock: 50, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', category: 'Clothing', price: 49.99, stock: 100, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', category: 'Books', price: 19.99, stock: 200, image: 'product3.jpg' }
];

let orders = [
  { id: 1, customer: 'John Doe', date: '2025-10-20', total: 349.98, status: 'Delivered', items: 2 },
  { id: 2, customer: 'Jane Smith', date: '2025-10-22', total: 99.98, status: 'Processing', items: 3 },
  { id: 3, customer: 'Bob Johnson', date: '2025-10-24', total: 199.99, status: 'Shipped', items: 1 }
];

let customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: 1249.95 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: 599.97 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 7, totalSpent: 2199.93 }
];

// Routes
app.get('/', (req, res) => {
  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    totalCustomers: customers.length,
    revenue: orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)
  };
  res.render('dashboard', { stats, recentOrders: orders.slice(0, 5) });
});

app.get('/products', (req, res) => {
  res.render('products', { products });
});

app.get('/products/add', (req, res) => {
  res.render('product-form', { product: null });
});

app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: parseFloat(req.body.price),
    stock: parseInt(req.body.stock),
    image: req.body.image || 'default.jpg'
  };
  products.push(newProduct);
  res.redirect('/products');
});

app.get('/products/edit/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.render('product-form', { product });
});

app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products[index] = {
      id: parseInt(req.params.id),
      name: req.body.name,
      category: req.body.category,
      price: parseFloat(req.body.price),
      stock: parseInt(req.body.stock),
      image: req.body.image || products[index].image
    };
  }
  res.redirect('/products');
});

app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.redirect('/products');
});

app.get('/orders', (req, res) => {
  res.render('orders', { orders });
});

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  res.render('order-detail', { order });
});

app.put('/orders/:id/status', (req, res) => {
  const index = orders.findIndex(o => o.id === parseInt(req.params.id));
  if (index !== -1) {
    orders[index].status = req.body.status;
  }
  res.redirect('/orders');
});

app.get('/customers', (req, res) => {
  res.render('customers', { customers });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Simple authentication (replace with real auth)
  if (req.body.username === 'admin' && req.body.password === 'admin123') {
    req.session.user = { username: 'admin' };
    res.redirect('/');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
