import {Coin} from "../common";
import {SupplierServiceConfig} from "../shared/service";
import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/supplier parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/supplier/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

export interface MsgStakeSupplier {
  address: string; // The Bech32 address of the supplier using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding
  stake: Coin; // The total amount of uPOKT the supplier has staked. Must be ≥ to the current amount that the supplier has staked (if any)
  services: SupplierServiceConfig; // The list of services this supplier is staked to provide service for
}

// @TODO: Once the proto file located at poktroll/supplier/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgStakeSupplierResponse {
}

export interface MsgUnstakeSupplier {
  address: string; // The Bech32 address of the supplier using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding using cosmos' ScalarDescriptor to ensure deterministic deterministic encoding
}

// @TODO: Once the proto file located at poktroll/supplier/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUnstakeSupplierResponse {
}

