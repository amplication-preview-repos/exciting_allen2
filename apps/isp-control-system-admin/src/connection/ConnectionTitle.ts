import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "id";

export const ConnectionTitle = (record: TConnection): string => {
  return record.id?.toString() || String(record.id);
};
