const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education: [{ title: String, institution: String, year: Number }],
  skills: [String],
  projects: [{
    title: String,
    description: String,
    links: {
      github: String,
      linkedin: String,
      portfolio: String,
      url: String
    }
  }],
  work: [{
    company: String,
    role: String,
    links: {
      github: String,
      linkedin: String,
      portfolio: String,
      url: String
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
