function calculator() {
  let num1 = +prompt("הקלד מספר ראשון");
  let num2 = +prompt("הקלד מספר שני");
  let operator = prompt("איזה פעולה ברצונך לבצע? + - * /");
  if (isNaN(num1)) {
    alert("ערך ראשון אינו מספר");
  } else if (isNaN(num2)) {
    alert("ערך שני אינו מספר");
  } else {
    let finalResult;
    if (operator == "+") {
      finalResult = num1 + num2;
    } else if (operator == "-") {
      finalResult = num1 - num2;
    } else if (operator == "*") {
      finalResult = num1 * num2;
    } else if (operator == "/") {
      finalResult = num1 / num2;
    } else finalResult = "נא הזן אופרטור תקני";

    alert("התוצאה היא:" + finalResult);
  }
}
