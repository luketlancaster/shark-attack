const printToDom = (divId, textToPrint) => {
  document.querySelector(`#${divId}`).innerHTML = textToPrint;
}

export default { printToDom }
