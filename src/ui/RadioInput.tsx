import React, { memo, useState } from "react";
import { ICustomItem } from "../context/context-interfaces";

const RadioInput = ({
  setOnChange,
  item,
}: {
  setOnChange: (evt: any) => void;
  item: ICustomItem;
}) => {
  const [checked, setChecked] = useState(item.fieldValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
    setOnChange(e);
  };

  const isTrue = Boolean(checked) === true || checked === "true" ? true : false;
  const isFalse = Boolean(checked) === false || checked === "false" ? true : false;

  return (
    <div
      className="input-group"
      style={{ border: "1px solid #aaa", padding: "4px" }}
    >
      <h5>{item.fieldId}</h5>
      <label htmlFor={item.fieldId}>true</label> <br />
      <input
        type={"radio"}
        value={"true"}
        checked={isTrue}
        id={item.fieldId}
        onChange={handleChange}
        name="isActive"
      />
      <label htmlFor={item.fieldId}>false</label> <br />
      <input
        type={"radio"}
        name="isActive"
        value={"false"}
        checked={isFalse}
        id={item.fieldId}
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(RadioInput);
