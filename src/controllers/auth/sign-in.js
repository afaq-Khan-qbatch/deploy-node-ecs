import { generateTokenResponse } from '../../middlewares/auth';

const SignIn = async (req, res) => {
  const {
    user,
    error
  } = req;
  try {
    if (error) return res.status(401).json(req.error);
    const token = generateTokenResponse(req.user);
    return res.status(200).json({
      token,
      user
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default SignIn;
