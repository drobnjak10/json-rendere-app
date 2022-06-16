import React, { useCallback, useMemo, useState } from "react";
import { useData } from "../context/Context";
import { DataActions, IData } from "../context/context-interfaces";
import InputElement from "../ui/InputElement";
import { checkFieldType } from "../utils";

const Row = ({ item }: { item: IData }) => {
  const { dispatch } = useData();
  const [obj, setObj] = useState<any>(item);

  const setOnChange = useCallback((evt: any) => {
    setObj((prevObj: any) => ({
      ...prevObj,
      [evt.target.id]: evt.target.value,
    }));
  }, []);

  let fullItems = useMemo(() => {
    return Object.entries(item).map((element) => {
      const fieldType = checkFieldType(element[1]);
      return {
        [element[0]]: element[1],
        fieldType,
        fieldId: element[0],
        fieldValue: element[1],
      };
    });
  }, [item]);

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: DataActions.EDIT_DATA, payload: obj });
    },
    [dispatch, obj]
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputs">
        {fullItems.length &&
          fullItems.map((element, index) => {
            if (element.fieldId === "_id") {
              return null;
            }
            return (
              <InputElement
                setOnChange={setOnChange}
                item={element}
                key={element.fieldId}
              />
            );
          })}
      </div>
      <button style={{ width: "100%" }} type="submit">
        Edit
      </button>
    </form>
  );
};

export default Row;
