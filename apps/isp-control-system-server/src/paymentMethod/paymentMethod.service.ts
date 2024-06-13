import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentMethodServiceBase } from "./base/paymentMethod.service.base";

@Injectable()
export class PaymentMethodService extends PaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
