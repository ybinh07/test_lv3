export const getDescriptionItem = async (req, res) => {
  const result = await database
    .order()
    .aggregate([
      {
        $match: {},
      },
      {
        $lookup: {
          from: "inventory",
          localField: "item",
          foreignField: "sku",
          as: "description",
        },
      },
    ])
    .toArray();
  return res.json(result);
};
