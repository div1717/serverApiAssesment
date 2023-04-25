const userModel = require("../models/user");

const task1 = async (req, res) => {
  try {
    const result = await userModel.find({
      income: { $lt: 5 },
      $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }],
    }).sort({id : 1});
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};

const task2 = async (req, res) => {
  try {
    const result = await userModel.find({
      gender: 'Male',
      phone_price: { $gt: 10000 },
    }).sort({id : 1});
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};


const task3 = async (req, res) => {
  try {
    const users = await userModel.find({
      last_name: { $regex: /^M/i },
      quote: { $exists: true, $type: 'string' },
    }).sort({ id: 1 });
  
    const filteredUsers = users.filter(user => {
      return user.quote.length > 15 && user.email.toLowerCase().includes(user.last_name.toLowerCase());
    });
    return res.status(200).json({ status: "Success", result: filteredUsers });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};

const task4 = async (req, res) => {
  try {
    const result = await userModel.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: /\d/ },
    }).sort({id : 1});
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};

const task5 = async (req, res) => {
    try {
      const users=await userModel.aggregate([
        { $group: { _id: "$city", total_users: { $sum: 1 },  average_income: { $avg: "$income" } } },
        { $sort: { total_users: -1 , average_income: -1 } },
        { $limit: 10 },
        { $project: { _id: 1, total_users: 1, average_income: 1  } }
      ])
      return res.status(200).json({ status: "Success", result: users });
    } catch (error) {
        console.log(error);
      return res.status(400).json({ status: "failure", error: error.message });
    }
  };
  

module.exports = { task1, task2, task3, task4, task5 };
