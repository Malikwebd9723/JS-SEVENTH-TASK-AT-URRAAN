calculate = () => {
    const hour = document.getElementById("hour").value;
    const output = document.getElementById("output");
  if (hour=='' || isNaN(hour)) {
    output.innerText = "please fill the field correctly!";
  } else {
    const sec = (hour * 60) * 60;

    output.innerText = " hmm..! " + hour + " " + "hours contains" + " " + sec + " " + "seconds";

}
};
reset = () => {
  hour.value = "";
  output.innerText = "";
};
