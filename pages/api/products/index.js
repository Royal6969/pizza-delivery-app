// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../util/mongodb-connection" // to use MongoDB
import Product from "../../../models/Product"

export default async function handler(req, res) { // we make this function asynchronous because we're going to make our CRUD operations and there is no way to know how long it's going to take
  // res.status(200).json({ name: 'John Doe' }) ... the example

  // firstly I'm going to check my request method
  // to handle that let's structure with this:
  const { 
    method, 
    cookies 
  } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);

    } catch (err) {
      res.status(500).json(err); // return it directly becasuse I don't have any handler error
    }
  }

  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not Authenticated!");
    }

    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err); // return it directly becasuse I don't have any handler error
    }
  }
}