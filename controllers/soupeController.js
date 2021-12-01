const db = require('../config/database');
const Soupe = require('../models/soupeModel');

exports.getAllSoupes = async (req, res) => {
  try {
    const soupes = await Soupe.findAll();
    //console.log(soupes);
    res.status(200).json({
    status: 'success',
    data: {
      soupes
    }
  });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.createNewSoupe = async (req, res) => {
  //console.log(req.body);
  const name = req.body.name;
  const weight = req.body.weight;
  const price = req.body.price;
  const description = req.body.description;
  const ingridients = req.body.ingridients;
  const image = req.body.image;
  const video = req.body.image;
  const nutrition = req.body.nutrition;
  const vitamines = req.body.vitamines;
  const expiry = req.body.expiry;
  try {
    const newSoupe = await Soupe.create({ 
       name,
       weight, 
       price,
       description, 
       ingridients, 
       image, 
       video, 
       nutrition, 
       vitamines,
       expiry 
        });

  res.status(201).json({
    status: 'success',
    data: {
      soupes: newSoupe
    }
  });

  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    })
  }

}

exports.getSoupeById = async (req, res) => {
   let id = req.params.id;
  try {
    const course = await Soupe.findOne({where: {id: id}})
    res.status(200).json({
    status: 'success',
    data: {
      course
    }
  });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

  
};

exports.deleteSoupe = async (req, res) => {
  let id = req.params.id;
  try {
    const soupe = await Soupe.destroy({where: {id: id}});
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })

  }
   
};