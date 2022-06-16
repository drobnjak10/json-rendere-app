import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { DataActions, IAction, IDataState } from "./context-interfaces";
import { dataReducer } from "./dataReducer";

const DataContext = createContext<{
  state: IDataState;
  dispatch: Dispatch<IAction>;
} | null>(null);

const initialState: IDataState = {
  data: [],
};

export const DataProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: DataActions.UPDATE_DATA, payload: json });
      });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useData must be used within a AuthProvider. Wrap a parent component with <DataProvider> to fix this error!"
    );
  }
  return context;
};
