const path = require('path');

exports.getStats = (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/stats.html'));
};
