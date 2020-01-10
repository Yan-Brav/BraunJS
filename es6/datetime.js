const moment = require('moment-timezone');
const d = new Date(Date.UTC(2016, 4, 27));
// const d = moment('2016-11-18').tz('America/Los_Angeles');

console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"));

const m = moment();
console.log(m);
console.log(m.add(3, 'days'));
console.log(m.endOf('month'));
console.log(m.subtract(2, 'years'));
console.log(m.startOf('year'));
console.log(moment().subtract(300, 'days').fromNow());
