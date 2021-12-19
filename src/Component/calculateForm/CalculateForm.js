import React, { useState } from "react";
import s from "./calculateForm.module.css";

const CalculateForm = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operations, setOperations] = useState("+");
  const [result, setResult] = useState(null);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "value1" && setValue1(value);
    name === "value2" && setValue2(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (operations === "+") {
      setResult(parseInt(value1) + parseInt(value2));
    }
    if (operations === "-") {
      setResult(parseInt(value1) - parseInt(value2));
    }
    if (operations === "*") {
      setResult(parseInt(value1) * parseInt(value2));
    }
    if (operations === "/") {
      setResult(parseInt(value1) / parseInt(value2));
    }
  };

  const handler = (e) => {
    setOperations(e.target.value);
  };

  const onClear = () => {
    setValue1("");
    setValue2("");
    setResult("");
  };

  return (
    <form className={s.calculateForm} onSubmit={onHandleSubmit}>
      <label>
        <p className={s.inputName}>Number 1</p>
        <input
          className={s.input}
          type="number"
          name="value1"
          step="1"
          value={value1}
          onChange={onHandleChange}
          placeholder="Enter a number (example: 1,5,10..)"
        />
      </label>
      <p className={s.inputName}>Choose action</p>
      <select className={s.input} onChange={handler}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <div className={s.calculateForm__btn}>
        <label>
          <p className={s.inputName}>Number 2</p>
          <input
            className={s.input}
            type="number"
            name="value2"
            step="1"
            value={value2}
            onChange={onHandleChange}
            placeholder="Enter a number (example: 1,5,10..)"
          />
        </label>
        <br />
        <button className={s.btn}>Submit</button>
        <button className={s.btn} type="button" onClick={onClear}>
          Clear
        </button>
      </div>
      <h3>Result : {result}</h3>
    </form>
  );
};

export default CalculateForm;
