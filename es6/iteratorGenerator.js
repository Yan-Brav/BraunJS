class Log {
  constructor () {
    this.messages = [];
  }

  add (message) {
    this.messages.push({ message: message, timestamp: Date.now() });
  }

  [Symbol.iterator] () {
    return this.messages.values();
  }
}

const log = new Log();
log.add("I don't see anything");
log.add("I don't hear anything");
log.add("I will not tell anything for anyone");

for (const entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}
