/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ConnectionService } from "../connection.service";
import { ConnectionCreateInput } from "./ConnectionCreateInput";
import { Connection } from "./Connection";
import { ConnectionFindManyArgs } from "./ConnectionFindManyArgs";
import { ConnectionWhereUniqueInput } from "./ConnectionWhereUniqueInput";
import { ConnectionUpdateInput } from "./ConnectionUpdateInput";

export class ConnectionControllerBase {
  constructor(protected readonly service: ConnectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Connection })
  async createConnection(
    @common.Body() data: ConnectionCreateInput
  ): Promise<Connection> {
    return await this.service.createConnection({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Connection] })
  @ApiNestedQuery(ConnectionFindManyArgs)
  async connections(@common.Req() request: Request): Promise<Connection[]> {
    const args = plainToClass(ConnectionFindManyArgs, request.query);
    return this.service.connections({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Connection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async connection(
    @common.Param() params: ConnectionWhereUniqueInput
  ): Promise<Connection | null> {
    const result = await this.service.connection({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Connection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConnection(
    @common.Param() params: ConnectionWhereUniqueInput,
    @common.Body() data: ConnectionUpdateInput
  ): Promise<Connection | null> {
    try {
      return await this.service.updateConnection({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Connection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConnection(
    @common.Param() params: ConnectionWhereUniqueInput
  ): Promise<Connection | null> {
    try {
      return await this.service.deleteConnection({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
