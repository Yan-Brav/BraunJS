const input = "As I was going to Saint Ives \n";
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going", 9));
console.log(input.endsWith("going", 14));
console.log(input.includes("going"));
console.log(input.includes("going", 10));
console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));
console.log(input.repeat(2));
// const reg1 = /going/;
const reg = /\w{3,}/ig;
console.log(input.match(reg));
console.log(input.search(reg));

console.log(reg.test(input));
console.log(reg.exec(input));
console.log(reg.exec(input));
console.log(reg.exec(input));
console.log(reg.exec(input));
console.log(reg.exec(input));
const reg1 = /\w{4,}/ig;
console.log(input.replace(reg1, '****'));
const messyPhone = 'a1 d22 c 222';
console.log(messyPhone.replace(/[a-z]\d{1}/ig, ''));
const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
  '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
  '<link rel="stylesheet" href="//anything.com/flexible.css">';
// eslint-disable-next-line no-useless-escape
const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
console.log(matches);
const input1 = "Regex pros know the difference between\n" +
  "<i>greedy</i> and <i>lazy</i> matching.";
console.log(input1.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));
// input1.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
const promo = "'Opening for GOOG is the dynamic ABBA! At the box office now!'";
const bands = promo.replace(/('.*')/ig, '""');
console.log(bands);
const html1 = `<img alt='A "simple" example.'>` +
              `<img alt="Don't abuse it">`;
console.log(html1.match(/<img alt=(['"]).*?\1/g));
const html2 = '<a class="yep" href="/yep">Yep</a>';
console.log(html2.replace(/<a .*?(href=".*?").*?>/, '<a $1>'));
const html3 = '<a class="yep" href="/yep" id="nope">Yep</a>';
console.log(html3.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>'));
const input2 = "One two three";
console.log(input2.replace(/two/, '($`)'));
console.log(input2.replace(/\w+/g, '($&)'));
console.log(input2.replace(/two/, "($')"));
console.log(input2.replace(/two/, '($$)'));
const endStart = "count countdown discount recount accountable";
console.log(endStart.match(/\bcount/ig));
console.log(endStart.match(/count\b/ig));
console.log(endStart.match(/\Bcount/ig));
console.log(endStart.match(/count\B/ig));
const password = "Brasha132";
function validPass (p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}
console.log(validPass(password));
