const express = require('express');
const app = express();
const PORT = 5555;

app.use(express.json());

// Middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

app.use(logger);

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// Error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
