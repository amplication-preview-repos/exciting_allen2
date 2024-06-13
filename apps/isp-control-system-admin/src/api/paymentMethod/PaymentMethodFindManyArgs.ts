import { PaymentMethodWhereInput } from "./PaymentMethodWhereInput";
import { PaymentMethodOrderByInput } from "./PaymentMethodOrderByInput";

export type PaymentMethodFindManyArgs = {
  where?: PaymentMethodWhereInput;
  orderBy?: Array<PaymentMethodOrderByInput>;
  skip?: number;
  take?: number;
};
