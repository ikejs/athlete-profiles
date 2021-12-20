import connect from 'middleware/mongo';
import Athlete from 'models/Athlete';

export default async function handler(req, res) {
  const { body, method } = req;

  await connect();

  switch (method) {
    case 'POST':
      try {
        console.log('POSTED FROM CLIENT', body);
        const athlete = await Athlete.create(body);
        console.log('CREATED ATHLETE', athlete);
        res.json(athlete);
      } catch (error) {
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
