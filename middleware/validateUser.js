const validateUser = (req, res, next) => {
  const { id, firstName, lastName, hobby } = req.body;

  if (!id || !firstName || !lastName || !hobby) {
    return res.status(400).json({ error: "id, firstName, lastName, and hobby are required" });
  }

  next(); // move to controller if valid
};

module.exports = validateUser;