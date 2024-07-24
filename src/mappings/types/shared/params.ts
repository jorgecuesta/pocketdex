// Params defines the parameters for the module.
export interface Params {
  // num_blocks_per_session is the number of blocks between the session start & end heights.
  num_blocks_per_session: bigint;
  // grace_period_end_offset_blocks is the number of blocks after the session end height,
  // at which the grace period ends.
  // Suppliers will get paid for relays serviced during the grace period but will need to recreate a claim if
  // a previous one was already submitted.
  grace_period_end_offset_blocks: bigint;
  // claim_window_open_offset_blocks is the number of blocks after the session grace
  // period height, at which the claim window opens.
  claim_window_open_offset_blocks: bigint;
  // claim_window_close_offset_blocks is the number of blocks after the claim window
  // open height, at which the claim window closes.
  claim_window_close_offset_blocks: bigint;
  // proof_window_open_offset_blocks is the number of blocks after the claim window
  // close height, at which the proof window opens.
  proof_window_open_offset_blocks: bigint;
  // proof_window_close_offset_blocks is the number of blocks after the proof window
  // open height, at which the proof window closes.
  proof_window_close_offset_blocks: bigint;
}
