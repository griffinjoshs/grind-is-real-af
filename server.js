const express = require('express');
const app = express();
const PORT = process.env.PORT || 9810;

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ message: 'Working!!!!!!' });
});

// Require the dashboard routes and use them with the /dashboard prefix
app.use('/dashboard', require('./serverFiles/routes/dashboard.routes'));
app.use('/journal', require('./serverFiles/routes/journal.routes'));
app.use('/challenges', require('./serverFiles/routes/challenges.routes'));
app.use('/goals', require('./serverFiles/routes/goals.routes'));
app.use('/rewards', require('./serverFiles/routes/rewards.routes'));

// Start the server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
