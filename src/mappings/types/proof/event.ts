import {Claim} from "./claim";
import {Proof} from "./proof";


export interface EventClaimCreated {
  num_relays: bigint;
  num_compute_units: bigint;
}

export interface EventClaimUpdated {
  num_relays: bigint;
  num_compute_units: bigint;
}

export interface EventProofSubmitted {
  claim: Claim;
  proof: Proof;
  num_relays: bigint;
  num_compute_units: bigint;
}

export interface EventProofUpdated {
  claim: Claim;
  proof: Proof;
  num_relays: bigint;
  num_compute_units: bigint;
}
