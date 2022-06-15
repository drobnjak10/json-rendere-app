import { memo } from "react";
import { ICustomItem } from "../context/context-interfaces";
import Input from "../ui/Input";
import RadioInput from "../ui/RadioInput";
import TextArea from "../ui/TextArea";

const InputElement = ({
  setOnChange,
  item,
}: {
  setOnChange: (evt: any) => void;
  item: ICustomItem;
}) => {
  switch (item.fieldType) {
    case "text":
      return <Input setOnChange={setOnChange} item={item} />;
    case "number":
      return <Input setOnChange={setOnChange} item={item} />;
    case "date":
      return <Input setOnChange={setOnChange} item={item} />;
    case "email":
      return <Input setOnChange={setOnChange} item={item} />;
    case "textarea":
      return <TextArea setOnChange={setOnChange} item={item} />;
    case "radio":
      return <RadioInput setOnChange={setOnChange} item={item} />;
    default:
      return null;
  }
};

export default memo(InputElement);
