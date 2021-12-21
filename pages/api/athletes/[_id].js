import Athlete from 'models/Athlete';
import connect from 'middleware/mongo';

export default async function handler(req, res) {
  await connect();
  const athlete = await Athlete.findById(req.query._id);
  return res.json(athlete);
}
