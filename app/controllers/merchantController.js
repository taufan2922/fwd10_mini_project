let brcypt = require("bcrypt");
let { Merchants } = require("../../models/index");

async function getMerchant(req, res) {
  try {
    let result = await Merchants.findAll({
      attributes: ["id", "name", "email", "address", "phoneNumber"],
      include: {
        association: "product",
        attributes: ["id", "name", "quantity", "price"],
      },
    });
    if (result.length < 1) res.json({ message: "Data not available" });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
}

async function getMerchantById(req, res) {
  try {
    let result = await Merchants.findOne({ where: { id: req.params.id } });
    if (result) res.json(result);
    else res.send("Data not found");
  } catch (error) {
    res.json(error);
  }
}

async function createMerchant(req, res) {
  try {
    let salt = brcypt.genSaltSync(10);
    let password = brcypt.hashSync(req.body.password, salt);
    req.body.password = password;

    let createMerchant = await Merchants.create(req.body);
    res.json(req.body);
  } catch (error) {
    res.json(error);
  }
}

async function updateMerchant(req, res) {
  try {
    let result = await Merchants.findOne({ where: { id: req.params.id } });
    if (result.length < 1) res.json({ message: "Data not available" });
    let updateMerchant = await result.update(req.body, { where: { id: req.params.id } });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
}

async function deleteMerchant(req, res) {
  try {
    let deleteMerchant = await Merchants.destroy({ where: { id: req.params.id } });
    res.json({ message: "user deleted" });
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getMerchant,
  getMerchantById,
  createMerchant,
  updateMerchant,
  deleteMerchant,
};
