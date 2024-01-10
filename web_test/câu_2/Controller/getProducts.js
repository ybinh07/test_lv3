import { database } from "../Database/database.js";

export const getInventoryProduct = async (req, res) => {
  const queryQuantity = req.query.quantity; // Lấy giá trị của tham số quantity từ query

  if (queryQuantity) {
    const items = await database
      .inventory()
      .find({ quantity: { $lt: 100 } }) // Sử dụng $lt để lấy các sản phẩm có số lượng ít hơn 100
      .toArray();
    
    console.log(items);
    if (items) {
      return res.json({ items });
    }
  } else {
    const items = await database.inventory().find().toArray();

    if (items) {
      return res.json({ items });
    }
  }
};