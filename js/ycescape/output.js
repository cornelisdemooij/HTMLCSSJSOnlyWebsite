// Appending to output:
function appendToOutput(content) {
  mainMenuLog += content;
  output.innerHTML = mainMenuLog;
}
function appendDivToOutput(content) {
  appendToOutput("<div>" + content + "</div>");
}