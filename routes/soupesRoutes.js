const Router = require('express');
const router = new Router();
const soupeController = require('../controllers/soupeController');

const { getAllSoupes, createNewSoupe, getSoupeById, deleteSoupe  } = soupeController;

router
  .route('/')
  .get(getAllSoupes)
  .post(createNewSoupe)


  router
  .route('/:id')
  .get(getSoupeById )
  .delete(deleteSoupe);
  
module.exports = router;