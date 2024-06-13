import * as graphql from "@nestjs/graphql";
import { PaymentMethodResolverBase } from "./base/paymentMethod.resolver.base";
import { PaymentMethod } from "./base/PaymentMethod";
import { PaymentMethodService } from "./paymentMethod.service";

@graphql.Resolver(() => PaymentMethod)
export class PaymentMethodResolver extends PaymentMethodResolverBase {
  constructor(protected readonly service: PaymentMethodService) {
    super(service);
  }
}
