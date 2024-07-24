import {SessionHeader} from "../session/session";

// Claim is the serialized object stored on-chain for claims pending to be proven
export interface Claim {
  supplier_address: string; // the address of the supplier that submitted this claim
  session_header: SessionHeader; // The session header of the session that this claim is for.
  root_hash: Uint8Array; // Root hash returned from smt.SMST#Root().
}
