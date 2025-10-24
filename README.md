# E-commerce Admin Dashboard

A modern admin dashboard for e-commerce platforms built with Express.js, EJS, and Bootstrap 5.

## Features

- 📊 Analytics Dashboard with key metrics
- 📦 Product Management (CRUD operations)
- 🛒 Order Management and Tracking  
- 👥 Customer Management
- 🔐 Authentication System
- 📱 Fully Responsive Design with Bootstrap 5

## Tech Stack

- **Backend**: Express.js
- **Template Engine**: EJS
- **Frontend**: Bootstrap 5
- **Session Management**: express-session

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anbuwebnexs/ecommerce-admin-dashboard.git
cd ecommerce-admin-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create the required folder structure:
```bash
mkdir -p views public/css public/js
```

4. Create the view files (see structure below)

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and visit:
```
http://localhost:3000
```

## Default Login Credentials

- **Username**: admin
- **Password**: admin123

## Project Structure

```
ecommerce-admin-dashboard/
├── app.js                 # Main application file
├── package.json
├── views/                 # EJS templates
│   ├── layout.ejs        # Main layout template
│   ├── dashboard.ejs     # Dashboard/Home page
│   ├── products.ejs      # Product listing
│   ├── product-form.ejs  # Add/Edit product form
│   ├── orders.ejs        # Order listing
│   ├── order-detail.ejs  # Order details
│   ├── customers.ejs     # Customer listing
│   └── login.ejs         # Login page
└── public/               # Static files
    ├── css/
    └── js/
```

## Creating View Files

### Step 1: Create `views/layout.ejs`

This is the main layout file that includes Bootstrap and common navigation.

### Step 2: Create `views/dashboard.ejs`

The main dashboard with analytics cards and recent orders.

### Step 3: Create `views/products.ejs`

Product listing with options to add, edit, and delete products.

### Step 4: Create `views/product-form.ejs`

Form to add or edit products.

### Step 5: Create `views/orders.ejs`

Order listing with status filters.

### Step 6: Create `views/order-detail.ejs`

Detailed view of a single order.

### Step 7: Create `views/customers.ejs`

Customer listing with their order history.

### Step 8: Create `views/login.ejs`

Login page with authentication form.

## Complete File Contents

For complete EJS template files and additional resources, please check the Issues tab or create them based on the structure above. 

Key templates use Bootstrap 5 components including:
- Navigation sidebar
- Data tables
- Forms with validation
- Cards and statistics
- Modals
- Responsive design

## Routes

- `GET /` - Dashboard home
- `GET /products` - Product listing
- `GET /products/add` - Add product form
- `POST /products` - Create product
- `GET /products/edit/:id` - Edit product form
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `GET /orders` - Order listing
- `GET /orders/:id` - Order detail
- `PUT /orders/:id/status` - Update order status
- `GET /customers` - Customer listing
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout

## Sample Data

The application comes with sample data for:
- 3 products
- 3 orders
- 3 customers

This data is stored in-memory. For production, integrate with a database like MongoDB or PostgreSQL.

## Screenshots

(Add screenshots of your dashboard here)

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] File upload for product images
- [ ] Advanced filtering and search
- [ ] Export data to CSV/PDF
- [ ] Email notifications
- [ ] Multi-user roles and permissions
- [ ] Real-time notifications
- [ ] Charts and analytics (Chart.js)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**anbuwebnexs**

## Support

If you have any questions or need help, please open an issue on GitHub.
