import mongoose from 'mongoose';

const { Schema } = mongoose;

const athleteSchema = new Schema({
  about: String,
  athleteName: String,
  dob: String,
  gender: String,
  imageUrl: String,
  sports: Array,
  teams: Array,
  zip: String,
});

mongoose.models = {};

const Athlete = mongoose.model('Athlete', athleteSchema);

export default Athlete;
