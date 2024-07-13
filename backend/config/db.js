const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Praabindh's MongoDB ~ Connected`);
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
