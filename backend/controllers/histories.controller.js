const db = require("../models");
const History = db.histories;
const API_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=XXX&format=json';

exports.search = async (req, res) => {
  try{
    const {query} = req.query;

    const response = await fetch(API_URL.replace('XXX', query));
    if (response.ok) {
      const results = await response.json();

      await History.create({query, results: JSON.stringify(results.query.search)});
      return res.json({results: results.query.search});
    }

    return res.status(500).send({
      message: "Error to fetch result!"
    });
  }catch(err){
    console.log('error', err);
    return res.status(500).send({
      message: "Something went wrong!"
    });
  }
};

exports.index = async (req, res) => {
  try{
    const histories = await History.findAll({
      order: [
        ['updatedAt', 'DESC']
      ]
    });
    return res.json({histories});
  }catch(err){
    console.error('Error in server:', err);
    return res.status(500).send({
      message: "Something went wrong!"
    });
  }
};

exports.delete = async (req, res) => {
  try{
    const result = await History.destroy({where: {id: req.params.id}});
    if(result) {
      return res.json({success: true});
    }
    return res.status(500).send({
      message: "Error in removing history!"
    });
  }catch(err){
    console.error('Error in server:', err);
    return res.status(500).send({
      message: "Something went wrong!"
    });
  }
};