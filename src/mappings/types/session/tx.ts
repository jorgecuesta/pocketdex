
// MsgUpdateParams is the Msg/UpdateParams request type.
import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/session parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/session/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}
