async function pageLoad() {
  let response = await fetch("IoBE_Final_Project.txt");
  let text = await response.text();
  let textArray = await intoArray(text);
}

async function intoArray(lines) {
  var lineArr = lines.split("\n");
  return lineArr;
}
