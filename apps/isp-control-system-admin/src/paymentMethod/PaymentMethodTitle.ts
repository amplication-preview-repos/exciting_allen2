import { PaymentMethod as TPaymentMethod } from "../api/paymentMethod/PaymentMethod";

export const PAYMENTMETHOD_TITLE_FIELD = "id";

export const PaymentMethodTitle = (record: TPaymentMethod): string => {
  return record.id?.toString() || String(record.id);
};
