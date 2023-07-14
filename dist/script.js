function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    perOp: "" });


  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;

    }

    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  function handleOperator(value) {
    const total = doCalculation();
    setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });


  }
  function doCalculation() {
    let total = parseInt(calc.total);


    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);}

    return total;
  }
  function renderDisplay() {
    return calc.current;
  }
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      perOp: "" });

  }
  // function handleEquals(){
  //   let total = doCalculation();
  //   setCalc({current:total.toString(), total:total.toString(), isInitial: true, preOp: "=" });
  // }
  return /*#__PURE__*/(
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("div", { className: "display" }, renderDisplay()), /*#__PURE__*/
    React.createElement(CalcButton, { value: "7", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "8", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "9", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "/" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "4", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "5", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "6", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "*" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "1", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "2", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "3", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "+" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "C", onClick: handleClear }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "0", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "=", onClick: handleOperator }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "-" })));



}
function CalcButton(props) {
  return /*#__PURE__*/React.createElement("button", { className: props.className, onClick: () => props.onClick(props.value) }, props.value);
}
ReactDOM.render( /*#__PURE__*/React.createElement("div", { className: "app-container" }, /*#__PURE__*/React.createElement(Calculator, null)), document.getElementById("root"));