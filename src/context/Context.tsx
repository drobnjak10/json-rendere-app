import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import useFetch from "../hooks/useFetch";
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
  const { data } = useFetch("./data.json");

  useEffect(() => {
    dispatch({ type: DataActions.UPDATE_DATA, payload: data });
  }, [data]);

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
