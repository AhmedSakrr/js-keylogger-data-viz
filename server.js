const ioHook = require('iohook');
const express = require('express');
const app = express();

let startup = Date.now();
let data = {};
let timers = [];

/* API Endpoint */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  data.general = {
    runtime: Date.now() - startup,
  };
  res.json(data);
});
app.listen(3000);

/* Key Logger Ingest */
ioHook.on("keydown", event => {
  timers[event.keycode] = Date.now();
});

ioHook.on("keyup", event => {
  if(data[event.keycode] === undefined) {
    data[event.keycode] = { time: 0, duration: 0, count: 0, holds: 0, taps:0 }
  }

  let delta = Date.now() - timers[event.keycode];

  data[event.keycode].count += 1;
  data[event.keycode].duration += delta;
  data[event.keycode].time = Date.now();
  data[event.keycode].holds += (delta > 240) ? 1 : 0;
  data[event.keycode].taps += (delta < 60) ? 1 : 0;
});

ioHook.start();
console.log('[logger] listening...')
