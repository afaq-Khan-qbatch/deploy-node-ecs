import Products from '../../models/products';

const AddProduct = async (req, res) => {
  const {
    body: {
      name,
      price,
      image,
      description
    }
  } = req;

  try {
    if (
      !name ||
      !price ||
      !image ||
      !description
    ) return res.status(200).json({
      message: 'name, price, image and description is required.'
    });

    await Products.create({
      name,
      price,
      image,
      description
    });

    return res.status(200).json({
      message: 'Product Added Successfully.'
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({ err: { message: error.message }});
  }
};

export default AddProduct;
