const message = (function () {
  const secret = "The password is determmined here!";
  return `The password has length ${secret.length} symbols.`;
})();
console.log(message);
