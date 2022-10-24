var evalRPN = function (tokens) {
  let arr = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == "+") {
      let newItem = arr[arr.length - 1] + arr[arr.length - 2];
      arr.pop();
      arr.pop();
      arr.push(newItem);
    } else if (tokens[i] == "-") {
      let newItem = arr[arr.length - 2] - arr[arr.length - 1];
      arr.pop();
      arr.pop();
      arr.push(newItem);
    } else if (tokens[i] == "*") {
      let newItem = arr[arr.length - 1] * arr[arr.length - 2];
      arr.pop();
      arr.pop();
      arr.push(newItem);
    } else if (tokens[i] == "/") {
      let newItem = parseInt(arr[arr.length - 2] / arr[arr.length - 1]);
      arr.pop();
      arr.pop();
      arr.push(Number(newItem));
    } else {
      arr.push(Number(tokens[i]));
    }
  }
  return arr[0];
};
