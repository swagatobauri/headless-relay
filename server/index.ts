import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import Docker from 'dockerode';
import puppeteer from 'puppeteer-core';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('headless-relay Remote Browser Control Server');
});

const server = app.listen(port, () => {
  console.log(`headless-relay server running on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });
});
