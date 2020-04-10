const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const routes = require('./routes');


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1", route.api);
app.use("/api/*", (req, res) => {
  res.status(404).json({ status: 404, errot: 'Source not found'})
});

// ---
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));