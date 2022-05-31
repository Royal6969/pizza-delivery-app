import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true, // you can't create a order without customer
      maxlength: 60
    },
    address: {
      type: String,
      required: true,
      maxlength: 200
    },
    total: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      default: 0 // when we create a new order, the initial status will be always 0 at first
    },
    paymentMethod: { // if it's cash, it will be 0, and if it's payable, it will be 1
      type: Number,
      required: true
    }
  },
  { timestamps: true } // it going to give us a date and updated date, for example when we create a new order object, it will have a creation date (it's a common praxis)
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema); // the condition is, if there's alredy a Order model in database, use it and don't create it again, else create new one Order model