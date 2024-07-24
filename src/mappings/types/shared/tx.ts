import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the module parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/shared/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

// MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
export interface MsgUpdateParam {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  name: string;
  as_string?: string;
  as_int64?: bigint;
  as_bytes?: Uint8Array;
}

// MsgUpdateParamResponse defines the response structure for executing a
// MsgUpdateParam message after a single param update.
export interface MsgUpdateParamResponse {
  params: Params;
}
