import dbConnect from "../../../util/mongodb-connection"
import Product from "../../../models/Product"

export default async function handler(req, res) {

  const { 
      method,
      query: { id } // we'll need an ID (it's similar to params, remember?) 
    } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }
}