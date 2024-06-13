import * as graphql from "@nestjs/graphql";
import { ConnectionResolverBase } from "./base/connection.resolver.base";
import { Connection } from "./base/Connection";
import { ConnectionService } from "./connection.service";

@graphql.Resolver(() => Connection)
export class ConnectionResolver extends ConnectionResolverBase {
  constructor(protected readonly service: ConnectionService) {
    super(service);
  }
}
