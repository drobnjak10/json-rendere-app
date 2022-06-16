import React, { memo } from "react";
import { ICustomItem } from "../context/context-interfaces";

const Input = ({
  setOnChange,
  item,
}: {
  setOnChange: (evt: any) => void;
  item: ICustomItem;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnChange(e);
  };

  return (
    <div className="input-group">
      <label htmlFor={item.fieldId}>
        {typeof item.fieldValue === "boolean" ? "active" : item.fieldValue}
      </label>{" "}
      <br />
      <input type={item.fieldType!} id={item.fieldId} onChange={handleChange} />
    </div>
  );
};

export default memo(Input);
