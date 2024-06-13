import { ConnectionWhereInput } from "./ConnectionWhereInput";
import { ConnectionOrderByInput } from "./ConnectionOrderByInput";

export type ConnectionFindManyArgs = {
  where?: ConnectionWhereInput;
  orderBy?: Array<ConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
