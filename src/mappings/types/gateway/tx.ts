import {Coin} from "../common";
import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/gateway parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/gateway/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

export interface MsgStakeGateway {
  address: string; // The Bech32 address of the gateway
  stake: Coin; // The total amount of uPOKT the gateway is staking. Must be ≥ to the current amount that the gateway has staked (if any)
}

// @TODO: Once the proto file located at poktroll/gateway/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgStakeGatewayResponse {
}

export interface MsgUnstakeGateway {
  address: string; // The Bech32 address of the gateway
}

// @TODO: Once the proto file located at poktroll/gateway/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUnstakeGatewayResponse {
}
