import { Module } from "@nestjs/common";
import { ConnectionModuleBase } from "./base/connection.module.base";
import { ConnectionService } from "./connection.service";
import { ConnectionController } from "./connection.controller";
import { ConnectionResolver } from "./connection.resolver";

@Module({
  imports: [ConnectionModuleBase],
  controllers: [ConnectionController],
  providers: [ConnectionService, ConnectionResolver],
  exports: [ConnectionService],
})
export class ConnectionModule {}
