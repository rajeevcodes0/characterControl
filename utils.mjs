const mayBe = (fn) =>
  function $$maybe(s) {
    if (fn(s)) return s;
    return "BREAK";
  };

const compose =
  (...fns) =>
  (initialValue) => {
    const totalFunctions = fns.length;
    const arr = fns.reverse();
    let output;
    let badresult = false;
    for (let i = 0, current; (current = arr[i]); i++) {
      output = !!output ? current(output) : current(initialValue);
      if (current.name === "$$maybe" && output === "BREAK") {
        badresult = true;
        break;
      }
    }
    return !!badresult ? false : output;
  };

const isUniLength = (s) => s.length === 1;

const isAlphabet = (s) => /^[a-zA-Z]+$/.test(s);

const isUpperCase = (s) => s.toUpperCase().charCodeAt(0) === s.charCodeAt(0);

const isWellFormedInput = compose(
  (s) => true,
  mayBe(isUniLength),
  mayBe(isAlphabet)
);

const applyTransform = (isUpperCase) => (s) => {
  return isUpperCase(s) ? s.toLowerCase() : s.toUpperCase();
};

const checkAndTransform = compose(
  applyTransform(isUpperCase),
  mayBe(isWellFormedInput)
);

export { checkAndTransform };
