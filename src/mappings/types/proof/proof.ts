import {SessionHeader} from "../session/session";

export interface Proof {
  supplier_address: string;
  session_header: SessionHeader; // The session header of the session that this claim is for.
  closest_merkle_proof: Uint8Array; // The serialized SMST proof from the `#ClosestProof()` method.
}
