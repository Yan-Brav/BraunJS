function countdown () {
  // let i;
  console.log("It is countdown:");
  for (let i = 5; i >= 0; i--) {
    setTimeout(function () {
      // eslint-disable-next-line no-mixed-spaces-and-tabs
	  console.log(i === 0 ? "Start!" : i);
    }, (5 - i)*1000);
  }
}
countdown();
