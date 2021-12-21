import connect from 'middleware/mongo';
import Athlete from 'models/Athlete';

export default async function handler(req, res) {
  const { body, method } = req;

  await connect();

  switch (method) {
    case 'POST':
      try {
        const athlete = await Athlete.create(body);
        res.json(athlete);
      } catch (error) {
        res.json({ success: false, error });
        console.log(error);
      }
      break;
    case 'GET':
      try {
        const athletes = await Athlete.find().sort({ _id: -1 });
        res.status(200).json(athletes);
      } catch (error) {
        console.log(error);
      }
      break;
    // case 'PUT':
    //   try {
    //     await Athlete.updateOne(req.body._id, req.body);
    //     res.status(201).json({ success: true });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
