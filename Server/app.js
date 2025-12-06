const express = require('express');
const cors = require('cors');
const mongoSanitize = require("express-mongo-sanitize");
require('dotenv').config();

const connectDatabase = require('./config/database');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

// ============================================
// MIDDLEWARE CONFIGURATION
// ============================================

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Mongo Sanitize
app.use(mongoSanitize());

// ============================================
// ROUTES
// ============================================

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});

// API Routes (to be added)
// app.use('/api/v1/auth', require('./routes/auth.routes'));
// app.use('/api/v1/users', require('./routes/user.routes'));
// app.use('/api/v1/events', require('./routes/event.routes'));

// ============================================
// ERROR HANDLING
// ============================================

// Handle 404 - Route not found
app.use(notFound);

// Global error handler (must be last)
app.use(errorHandler);

// ============================================
// SERVER INITIALIZATION
// ============================================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {

        await connectDatabase();

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            console.log(`📍 Environment: ${process.env.NODE_ENV}`);
            console.log(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN}`);
            console.log(`⏰ Server started at: ${new Date().toLocaleString()}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error.message);
        process.exit(1);
    }
};

process.on('unhandledRejection', (err) => {
    console.error('💥 UNHANDLED REJECTION! Shutting down...');
    console.error(err.name, err.message);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('💥 UNCAUGHT EXCEPTION! Shutting down...');
    console.error(err.name, err.message);
    process.exit(1);
});


startServer();

module.exports = app;
