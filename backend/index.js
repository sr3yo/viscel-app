
//instantiating the backend server
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');



dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5123'
}));

app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connection established'))
  .catch((err) => console.log('error with connection', err));


const UserSchema = new mongoose.Schema({
  userId: String,
  settings: Object,
  email: String,
  displayName: String,
  photoURL: String,


});
const User = mongoose.model('User', UserSchema);


app.post('/api/saveSettings', async (req, res) => {
  const { userId, settings } = req.body;

  if (!userId || !settings) {
    return res.status(400).json({ message: 'Missing userId or settings' });
  }

  await User.updateOne(
    { userId },
    { $set: { settings } },
    { upsert: true }
  );

  res.json({ message: 'Settings saved' });
});

app.listen(3000, () => {
  console.log('Backend running on PORT 3000');
});

//saving the user separate from settings
app.post('/api/saveUser', async (req, res) => {
  const { userId, email, displayName, photoURL } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'Missing the UserID' });
  }

  try {
    const existingUser = await User.findOne({ userId });

    if (existingUser) {
      existingUser.email = email;
      existingUser.displayName = displayName;
      existingUser.photoURL = photoURL;
      await existingUser.save();
      return res.json({ message: 'The user was updated', user: existingUser });
      
    } else {
      const newUser = new User({
        userId,
        email,
        displayName,
        photoURL,
      });
      await newUser.save();
      return res.json({ message: 'New user was created', user: newUser });
    }
    
  } catch (err) {
    console.error('Difficulty saving the user', err);
    return res.status(500).json({ message: 'Error saving the user' });
  }
});


