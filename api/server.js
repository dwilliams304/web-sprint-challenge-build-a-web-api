const express = require('express');
const { logger } = require('./global-middleware/global-middleware');


const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');


const server = express();

// Configure your server here
server.use(express.json());

server.use(logger);
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
