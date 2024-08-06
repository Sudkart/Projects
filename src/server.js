//src/server.js

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000;

const server = http.createServer(app);


server.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EACCES') {
        console.error(`Port ${port} requires elevated privileges.`);
    } else if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use.`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

// Handle process events
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Exit the process with a failure code
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Exit the process with a failure code
});