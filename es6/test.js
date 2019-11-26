'use strict';
//es6 feature: block of fake messages
const sentences = [
	{subject: 'JavaScript', verb: 'is', object: "great"},
	{subject: 'Elephants', verb: 'are', object: "large"},
];
//es6 feature: destruction of object
function say ({subject, verb, object}){
	//es6 feature: template's strings
	console.log('${subject} ${verb} ${object}');
}
//es6 feature: for..of
for(let s of sentences){
	say(s);
}