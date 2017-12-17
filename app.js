

  var texts = ["music producer", "veteran", "analyst", "web developer"];
  var count = 0;
  function changeText() {
      $("#changeText").text(texts[count]);
      count < 3 ? count++ : count = 0;
  }
  setInterval(changeText, 2000);
