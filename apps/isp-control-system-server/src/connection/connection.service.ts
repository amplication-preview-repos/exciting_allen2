import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConnectionServiceBase } from "./base/connection.service.base";

@Injectable()
export class ConnectionService extends ConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
