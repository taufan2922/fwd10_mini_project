let { Products } = require("../../models/index");

async function getProduct(req, res) {
  try {
    let result = await Products.findAll({
      attributes: ["id", "name", "quantity", "price"],
      include: [
        {
          association: "merchant",
          attributes: ["id", "name"],
        },
      ],
    });
    if (!result) res.json({ message: "Data not available" });
    else res.json(result);
  } catch (error) {
    res.json(error);
  }
}

async function getProductById(req, res) {
  try {
    let result = await Products.findOne({
      where: { id: req.params.id },
      include: [
        {
          association: "merchant",
          attributes: ["id", "name", "address"],
        },
      ],
    });
    if (!result) res.send("Data not found");
    else res.send(result);
  } catch (error) {
    res.json(error);
  }
}

async function createProduct(req, res) {
  try {
    let result = await Products.create(req.body);
    res.json(req.body);
  } catch (error) {
    res.json(error);
  }
}

async function updateProduct(req, res) {
  try {
    let result = await Products.findOne({ where: { id: req.params.id } });
    if (!result) res.json("Data not found");
    else {
      let updateProduct = await result.update(req.body, { where: { id: req.params.id } });
      res.json(result);
    }
  } catch (error) {
    res.json(error);
  }
}

async function deleteProduct(req, res) {
  try {
    let result = await Products.findOne({ where: { id: req.params.id } });
    if (!result) res.json("Data not found");
    else {
      let deleteProduct = await Products.destroy({ where: { id: req.params.id } });
      res.json({ message: `Product ID ${req.params.id} is deleted` });
    }
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
