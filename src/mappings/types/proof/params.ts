// Params defines the parameters for the module.
import {Coin} from "../common";

export interface Params {
  // min_relay_difficulty_bits is the minimum difficulty in bits for a relay to
  // be included in a Merkle proof.
  min_relay_difficulty_bits: bigint;
  // proof_request_probability is the probability of a session requiring a proof
  // if it's cost (i.e. compute unit consumption) is below the ProofRequirementThreshold.
  proof_request_probability: number;
  // proof_requirement_threshold is the session cost (i.e. compute unit consumption)
  // threshold which asserts that a session MUST have a corresponding proof when its cost
  // is equal to or above the threshold. This is in contrast to the this requirement
  // being determined probabilistically via ProofRequestProbability.
  proof_requirement_threshold: bigint;
  // proof_missing_penalty is the number of tokens (uPOKT) which should be slashed from a supplier
  // when a proof is required (either via proof_requirement_threshold or proof_missing_penalty)
  // but is not provided.
  proof_missing_penalty: Coin;
}
