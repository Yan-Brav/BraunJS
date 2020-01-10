'use strict';
// es6 feature: block of fake messages
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Java', verb: 'is', object: 'the best' }
]
// es6 feature: destruction of object
function say ({ subject, verb, object }) {
  // es6 feature: template's strings
  console.log(`${subject} ${verb} ${object}`)
}
// es6 feature: for..of
for (const s of sentences) {
  say(s)
}
