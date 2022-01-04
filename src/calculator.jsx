import React, { useCallback, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import "./calculator.css";

export const WinCalculator = () => {
  let [state, setState] = useState("");

  function mouseEventDown(e, arg) {
    if (arg != "=") {
      e.target.style.backgroundColor = "#6e6e6e70";
    } else {
      e.target.style.backgroundColor = "rgb(10, 115, 180)";
    }
  }

  function mouseEventUp(e, arg) {
    if (arg != "=") {
      e.target.style.backgroundColor = "";
    } else {
      e.target.style.backgroundColor = "lightSkyBlue";
    }
  }

  function updateInput(input) {
    setState(state + input);
  }

  function deleteChar() {
    let newStr = state.slice(0, state.length - 1);
    setState(newStr);
  }

  function CalcInput() {
    if (state.length && !isNaN(state[0]) && !isNaN(state[state.length - 1])) {
      let res = eval(state);
      setState(res.toString());
    }
  }

  //55/66.5
  function percentage() {
    let eq = "";
    if (state == "") {
    } else {
      for (let i = state.length - 1; i >= 0; i--) {
        if (state[i] == ".") {
          eq = state[i] + eq;
        } else if (
          !isNaN(parseFloat(state[i])) &&
          typeof parseFloat(state[i]) == "number"
        ) {
          eq = state[i] + eq;
        } else {
          break;
        }
      }
    }
    if (eq != "") {
      let eqToEval = state.slice(0, state.length - eq.length - 1);
      console.log("eqToEval", eqToEval);
      let amountToGetPer = eval(eqToEval);
      let ans = amountToGetPer * (eq / 100);
      setState(eqToEval + state[eqToEval.length] + ans.toString());
    }
  }

  function squareOrSqrt(arg) {
    let eq = "";
    if (state == "") {
    } else {
      for (let i = state.length - 1; i >= 0; i--) {
        if (state[i] == ".") {
          eq += state[i];
        } else if (
          !isNaN(parseFloat(state[i])) &&
          typeof parseFloat(state[i]) == "number"
        ) {
          eq += state[i];
        } else {
          break;
        }
      }
    }

    if (eq !== "") {
      let reveq = eq.split("").reverse().join("");
      let ans;
      if (arg == "square") {
        ans = parseFloat(reveq) * parseFloat(reveq);
      } else if (arg == "sqrt") {
        console.log("in squareroot");
        ans = Math.sqrt(parseFloat(reveq));
      } else {
        ans = 1 / parseFloat(reveq);
      }

      let delLen = reveq.length;
      let startIndex = state.length - delLen;
      let copyState = state.split("");
      copyState.splice(startIndex, delLen);
      console.log("copyState", copyState);
      let newstate = copyState.concat(ans.toString().split("")).join("");
      console.log("newState", newstate);
      setState(newstate);
    }
  }

  function clear() {
    setState("");
  }

  return (
    <>
      <div className="calculatorWindow">
        <input type="text" value={state} className="input" />

        <div className="buttonArea">
          <div
            onClick={percentage}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            %
          </div>
          <div
            onClick={clear}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            CE
          </div>
          <div
            onClick={clear}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            C
          </div>
          <div
            onClick={deleteChar}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <BackspaceIcon />
          </div>
          <div
            onClick={() => {
              squareOrSqrt("frac");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <sup>1/</sup>x
          </div>
          <div
            onClick={() => {
              squareOrSqrt("square");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            x<sup>2</sup>
          </div>
          <div
            onClick={() => {
              squareOrSqrt("sqrt");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            &radic;
          </div>
          <div
            onClick={() => {
              updateInput("/");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            &#8725;
          </div>
          <div
            onClick={() => {
              updateInput(7);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>7</strong>
          </div>
          <div
            onClick={() => {
              updateInput(8);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>8</strong>
          </div>
          <div
            onClick={() => {
              updateInput(9);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>9</strong>
          </div>
          <div
            onClick={() => {
              updateInput("*");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            *
          </div>
          <div
            onClick={() => {
              updateInput(4);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>4</strong>
          </div>
          <div
            onClick={() => {
              updateInput(5);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>5</strong>
          </div>
          <div
            onClick={() => {
              updateInput(6);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>6</strong>
          </div>
          <div
            onClick={() => {
              updateInput("-");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            -
          </div>
          <div
            onClick={() => {
              updateInput(1);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>1</strong>
          </div>
          <div
            onClick={() => {
              updateInput(2);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>2</strong>
          </div>
          <div
            onClick={() => {
              updateInput(3);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>3</strong>
          </div>
          <div
            onClick={() => {
              updateInput("+");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            +
          </div>
          <div
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <sup>+</sup>&#8725;<sub>-</sub>
          </div>
          <div
            onClick={() => {
              updateInput(0);
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            <strong>0</strong>
          </div>
          <div
            onClick={() => {
              updateInput(".");
            }}
            onMouseDown={mouseEventDown}
            onMouseUp={mouseEventUp}
            className="button"
          >
            .
          </div>
          <div
            onMouseDown={(e) => {
              mouseEventDown(e, "=");
            }}
            onMouseUp={(e) => {
              mouseEventUp(e, "=");
            }}
            onClick={CalcInput}
            className="button isEqualButton"
          >
            =
          </div>
        </div>
      </div>
    </>
  );
};
