import * as React from "react";
import { Create, SimpleForm, CreateProps } from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
      </SimpleForm>
    </Create>
  );
};
