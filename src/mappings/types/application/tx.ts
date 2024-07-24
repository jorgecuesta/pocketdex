import {Coin} from "../common";
import {ApplicationServiceConfig} from "../shared/service";
import {Params} from "./params";

export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/application parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/application/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

export interface MsgStakeApplication {
  address: string; // The Bech32 address of the application using cosmos' ScalarDescriptor to ensure deterministic encoding
  stake: Coin; // The total amount of uPOKT the application has staked. Must be ≥ to the current amount that the application has staked (if any)
  services: [ApplicationServiceConfig]; // The list of services this application is staked to request service for
}

// @TODO: Once the proto file located at poktroll/application/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgStakeApplicationResponse {
}

export interface MsgUnstakeApplication {
  address: string;
}

// @TODO: Once the proto file located at poktroll/application/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUnstakeApplicationResponse {
}

export interface MsgDelegateToGateway {
  app_address: string; // The Bech32 address of the application using cosmos' ScalarDescriptor to ensure deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic encoding
  gateway_address: string; // The Bech32 address of the gateway the application wants to delegate to using cosmos' ScalarDescriptor to ensure deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding
}

// @TODO: Once the proto file located at poktroll/application/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgDelegateToGatewayResponse {
}

export interface MsgUndelegateFromGateway {
  app_address: string; // The Bech32 address of the application using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding
  gateway_address: string; // The Bech32 address of the gateway the application wants to undelegate from using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding
}

// @TODO: Once the proto file located at poktroll/application/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUndelegateFromGatewayResponse {
}
