import { useState, useEffect } from "react";
import "./calculator.css"; 

function Calculator() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", ".", "00"].includes(key)) {
        setValue((prev) => prev + key);
      } else if (key === "Enter") {
        e.preventDefault();
        try {
          setValue(eval(value).toString());
        } catch {
          setValue("Error");
        }
      } else if (key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        setValue("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value]);

  return (
    <div className="calc-container">
      <div className="calc-display">
        <input type="text" value={value} readOnly />
      </div>

      <div className="calc-buttons">
        <button onClick={() => setValue("")} className="ac">
          AC
        </button>
        <button onClick={() => setValue(value.slice(0, -1))} className="de">
          DE
        </button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>.</button>
        <button onClick={(e) => setValue(value + e.target.innerText)} className="op">
          /
        </button>

        <button onClick={(e) => setValue(value + e.target.innerText)}>7</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>8</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>9</button>
        <button onClick={(e) => setValue(value + e.target.innerText)} className="op">
          *
        </button>

        <button onClick={(e) => setValue(value + e.target.innerText)}>4</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>5</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>6</button>
        <button onClick={(e) => setValue(value + e.target.innerText)} className="op">
          +
        </button>

        <button onClick={(e) => setValue(value + e.target.innerText)}>1</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>2</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>3</button>
        <button onClick={(e) => setValue(value + e.target.innerText)} className="op">
          -
        </button>

        <button onClick={(e) => setValue(value + e.target.innerText)}>00</button>
        <button onClick={(e) => setValue(value + e.target.innerText)}>0</button>
        <button
          onClick={() => {
            try {
              setValue(eval(value).toString());
            } catch {
              setValue("Error");
            }
          }}
          className="equal"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
