import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type to update all params at once.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  params: Params;
}

// @TODO: Once the proto file located at poktroll/tokenomics/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

// MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
export interface MsgUpdateParam {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // The (name, as_type) tuple must match the corresponding name and type as
  // specified in the `Params`` message in `proof/params.proto.`
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
