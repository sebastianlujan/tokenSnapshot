export default function handler(req, res) {
    let query = req.query;
    res.status(200).json(query)
  }