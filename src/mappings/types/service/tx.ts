import {Service} from "../shared/service";
import {Params} from "./params";

// MsgUpdateParams is the Msg/UpdateParams request type.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/service parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/service/tx.proto receives an update, please populate it with the appropriate information.
// MsgUpdateParamsResponse defines the response structure for executing a
// MsgUpdateParams message.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgUpdateParamsResponse {
}

// MsgAddService defines a message for adding a new message to the network.
// Services can be added by any actor in the network making them truly
// permissionless.
export interface MsgAddService {
  address: string; // The Bech32 address of the service supplier using cosmos' ScalarDescriptor
  service: Service; // The Service for which the supplier is adding to the network
}

// @TODO: Once the proto file located at poktroll/service/tx.proto receives an update, please populate it with the appropriate information.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MsgAddServiceResponse {
}
