import { Module } from "@nestjs/common";
import { PaymentMethodModuleBase } from "./base/paymentMethod.module.base";
import { PaymentMethodService } from "./paymentMethod.service";
import { PaymentMethodController } from "./paymentMethod.controller";
import { PaymentMethodResolver } from "./paymentMethod.resolver";

@Module({
  imports: [PaymentMethodModuleBase],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService, PaymentMethodResolver],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
