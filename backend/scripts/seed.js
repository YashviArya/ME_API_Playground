const mongoose = require('mongoose');
const Profile = require('../models/Profile'); // Adjust path if needed

mongoose.connect('mongodb://localhost:27017/me-api-playground', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const yashviProfile = new Profile({
  name: "Yashvi Arya",
  email: "yashvi.arya7504@gmail.com",
  education: [
    {
      degree: "B.Tech. Information Technology",
      college: "Manipal University, Jaipur",
      year: 2026
    }
  ],
  skills: ["Java", "Python", "C", "JavaScript", "HTML", "CSS", "SQL", "React", "Node.js", "Express.js", "Tailwind CSS", "NumPy", "Pandas", "PySpark", "Tableau", "Scikit-learn", "NLTK", "Seaborn", "Transformers", "Torch", "Hadoop", "MongoDB"],
  projects: [
    {
      title: "Graph Convolutional Networks (GCN)",
      description: "Developed deep learning model using PyTorch Geometric and PCA to optimize graph data analysis.",
      links: ["https://github.com/yashvi/gcn"],
      skills: ["Python", "PyTorch", "PyTorch Geometric", "PCA"]
    }
  ],
  work: [
    {
      company: "Kishori Club",
      role: "General Secretary",
      duration: "Nov 2024 - Present"
    }
  ],
  links: {
    github: "https://github.com/yashvi",
    linkedin: "https://linkedin.com/in/yashvi",
    portfolio: "https://yashvi.me"
  }
});

yashviProfile.save().then(() => {
  console.log("Profile seeded successfully");
  mongoose.disconnect();
});


