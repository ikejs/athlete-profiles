import mongoose from 'mongoose';

const AthleteSchema = new mongoose.Schema({
  about: String,
  athleteName: String,
  dob: String,
  gender: String,
  sports: Array,
  teams: Array,
  zip: String,
});

module.exports =
  mongoose.models.Athlete || mongoose.model('Athlete', AthleteSchema);
