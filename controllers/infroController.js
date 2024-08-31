const asyncHandler = require('express-async-handler');
const Info = require('../models/infoModel');

//@desc Get all info
//@route GET /api/get-info
//@access public

const getInfo = asyncHandler(async (req, res) => {
  const infos = await Info.find();
  res.status(200).json({ message: 'Get all info list', data: infos });
});

module.exports = {
  getInfo,
};
