const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Praabindh's Server Running On PORT ~ ${PORT}`));
