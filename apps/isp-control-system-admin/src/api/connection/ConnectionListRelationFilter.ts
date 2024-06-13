import { ConnectionWhereInput } from "./ConnectionWhereInput";

export type ConnectionListRelationFilter = {
  every?: ConnectionWhereInput;
  some?: ConnectionWhereInput;
  none?: ConnectionWhereInput;
};
