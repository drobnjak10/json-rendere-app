import { DataActions, IAction, IDataState } from "./context-interfaces";

export const dataReducer = (state: IDataState, action: IAction) => {
  switch (action.type) {
    case DataActions.UPDATE_DATA:
      return {
        data: action.payload,
      };
    case DataActions.EDIT_DATA:
      const item = action.payload;

      let data = state.data.map((obj) => {
        if (obj._id === item._id) {
          obj = Object.assign({}, item);
          return obj;
        }
        return obj;
      });

      return {
        data,
        loading: false,
      };
    default:
      return state;
  }
};
