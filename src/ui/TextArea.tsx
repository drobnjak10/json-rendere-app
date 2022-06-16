import { memo } from "react";
import { ICustomItem } from "../context/context-interfaces";

const TextArea = ({
  setOnChange,
  item,
}: {
  setOnChange: (evt: any) => void;
  item: ICustomItem;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOnChange(e);
  };

  return (
    <div className="input-group">
      <label htmlFor={item.fieldId}>
        {item.fieldValue.slice(0, 150) + "..."}{" "}
      </label>{" "}
      <br />
      <textarea
        name=""
        minLength={100}
        id={item.fieldId}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default memo(TextArea);
