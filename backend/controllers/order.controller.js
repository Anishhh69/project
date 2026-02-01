import Order from "../models/order.js";

const addOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    totalPrice,
    shippingCharge,
  } = req.body;
  const order = await Order.create({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    totalPrice,
    shippingCharge,
  });
  res.send({ message: "Order created!", orderId: order._id });
};

// GET ALL ORDERS (Admin)
 const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
};

// GET LOGGED-IN USER ORDERS
 const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
};

//get order by id
const getOrderById=async(req,res)=>{
    const id=req.params.id;
    const order=await Order.findById(id);
    if(!order) return res.status(404).send({ error: "Order not found"});
};

// PAY ORDER
const payOrders = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    const updatedOrder = await order.save();
    res.send(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// DELIVER ORDER (Admin)
const deliverOrders = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.send(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};


export { addOrder,getOrders,getMyOrders,getOrderById,payOrders,deliverOrders};