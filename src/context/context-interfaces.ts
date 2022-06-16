export interface IDataState {
  data: IData[] | [];
}

export interface IData {
  _id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  phone: string;
  picture: string;
  registered: string;
  about: string;
  address: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export enum DataActions {
  UPDATE_DATA = "UPDATE_DATA",
  EDIT_DATA = "EDIT_DATA",
}

export interface ICustomItem {
  [key: string]: any;
  fieldType: string | null;
  fieldId: string;
  fieldValue: string;
}
