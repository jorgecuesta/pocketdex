import {Coin} from "../common";
import {SessionHeader} from "../session/session";
import {Claim} from "./claim";
import {Params} from "./params";
import {Proof} from "./proof";

// MsgUpdateParams is the Msg/UpdateParams request type to update all params at once.
export interface MsgUpdateParams {
  // authority is the address that controls the module (defaults to x/gov unless overwritten).
  authority: string;
  // params defines the x/proof parameters to update.
  // NOTE: All parameters must be supplied.
  params: Params;
}

// @TODO: Once the proto file located at poktroll/proof/tx.proto receives an update, please populate it with the appropriate information.
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
  // NOTE: based on this https://dev.poktroll.com/develop/developer_guide/adding_params?_highlight=astype#6-create-a-new-json-file-for-the-individual-parameter-update example
  // created the mapping in the following way.
  as_string?: string;
  as_int64?: bigint;
  as_bytes: Uint8Array;
  as_float: number;
  as_coin: Coin;
}

// MsgUpdateParamResponse defines the response structure for executing a
// MsgUpdateParam message after a single param update.
export interface MsgUpdateParamResponse {
  params: Params;
}

export interface MsgCreateClaim {
  supplier_address: string;
  session_header: SessionHeader;
  root_hash: Uint8Array;
}

export interface MsgCreateClaimResponse {
  claim: Claim;
}

export interface MsgSubmitProof {
  supplier_address: string;
  session_header: SessionHeader;
  proof: Uint8Array;
}

export interface MsgSubmitProofResponse {
  proof: Proof;
}
