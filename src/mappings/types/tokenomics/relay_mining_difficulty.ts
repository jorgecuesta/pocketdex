

export interface RelayMiningDifficulty {
  // The service ID the the relay mining difficulty is associated with.
  service_id:string;

  // The block height at which this relay mining difficulty was computed.
  // This is needed to determine how much time has passed since the last time
  // the exponential moving average was computed.
  block_height: bigint;

  // The exponential moving average of the number of relays for this service.
  num_relays_ema: bigint;

  // The target hash determining the difficulty to mine relays for this service.
  // For example, if we use sha256 to hash the (RelayRequest,ReqlayResponse) tuple,
  // and the difficulty has 4 leading zero bits, then the target hash would be:
  // 0b0000111... (until 32 bytes are filled up).
  target_hash: Uint8Array;
}
