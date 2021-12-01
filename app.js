const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const soupesRouters = require('./routes/soupesRoutes');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = require('./.adminbro/admin');

//Database
const db = require('./config/database');

app = express();

db.authenticate()
  .then(()=>{
    console.log('Database connected...');
  })
  .catch((err)=>{
      console.log(err);
  })

 const ADMIN = {
   email: process.env.ADMIN_EMAIL || 'admin@soupe.ro',
   password: process.env.ADMIN_PASSWORD || 'AsdLkj123',
 } 

const PORT = process.env.PORT || 8000;
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'very-long-cookie-password-for-admin',
  authenticate: async(email, password) => {
    if(email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null;
  }
})
//Midleware
app.use(adminBro.options.rootPath, router);
app.use(express.json());

app.get('/', (req, res)=> {
  res.json('INDEX');
})

//Soupe route
app.use('/api/v1/soupes',soupesRouters);



app.listen(PORT, ()=> {
  console.log(`AdminBro is under ${PORT}`);
})

