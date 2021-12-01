const AdminBro = require('admin-bro');
const Soupe   = require('../models/soupeModel');
const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [Soupe],
  branding: {
    companyName: 'Streetsoupe admin panel',
    softwareBrothers: false,
  }
});

module.exports = adminBro;