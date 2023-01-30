import Products from '../../models/products';

const GetProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    return res.status(200).json({
      products
    });
  } catch (error) {
    return res.status(400).json({ err: { message: error.message }});
  }
};

export default GetProducts;
