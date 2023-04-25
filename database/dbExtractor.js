const userModel = require('../models/user')

let json = require('./sample_data.json');
json.map((e)=>{
    e.income=e.income.substring(1);
});

const fillData = async() =>{
   await userModel.insertMany(json);
};

module.exports = fillData;