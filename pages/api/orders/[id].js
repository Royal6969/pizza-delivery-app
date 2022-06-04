import dbConnect from '../../../util/mongodb-connection'
import Order from '../../../models/Order'

const handler = async (req, res) => {

  const { method, query: { id } } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, // if we do this, it's not going to return to updated order, so to prevent this error...
        {
          new: true, // ... we should write here this, to return the nearest version
        }
      );
      res.status(200).json(order);
    
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") { }
}

export default handler;