console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", () => {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");
    const update = () => {
      const a = parseFloat(first.value);
      const b = parseFloat(second.value);
      let output;

      if (isNaN(a) || isNaN(b)) {
        output = "NaN";
      } else {
        switch (operation.value) {
          case "+":
            output = a + b;
            break;
          case "-":
            output = a - b;
            break;
          case "*":
            output = a * b;
            break;
          case "/":
            output = b !== 0 ? a / b : "∞";
            break;
        }
      }
      result.innerHTML = output;
    };
    first.addEventListener("input", update);
    second.addEventListener("input", update);
    operation.addEventListener("change", update);
    update();
  });
})();
