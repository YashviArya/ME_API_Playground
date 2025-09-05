const Profile = require('../models/Profile');

// Create or update profile (upsert by email)
exports.createProfile = async (req, res) => {
  try {
    const incoming = req.body;
    if (!incoming.email) return res.status(400).json({ error: 'Email is required' });

    let profile = await Profile.findOne({ email: incoming.email });
    if (profile) {
      Object.assign(profile, incoming);
      await profile.save();
      return res.json(profile);
    }

    profile = new Profile(incoming);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const prof = await Profile.findById(req.params.id);
    if (!prof) return res.status(404).json({ error: 'Not found' });
    res.json(prof);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchProfiles = async (req, res) => {
  try {
    const q = req.query.q || '';
    const regex = new RegExp(q, 'i');
    const results = await Profile.find({
      $or: [
        { name: regex },
        { email: regex },
        { skills: regex },
        { 'projects.title': regex },
        { 'education.title': regex },
        { 'work.company': regex }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.topSkills = async (req, res) => {
  try {
    const agg = await Profile.aggregate([
      { $unwind: '$skills' },
      { $group: { _id: '$skills', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    res.json(agg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.healthCheck = (req, res) => res.status(200).json({ status: 'ok' });
