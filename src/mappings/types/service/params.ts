// Params defines the parameters for the module.
export interface Params {
  // The amount of uPOKT required adding a new service.
  // This will be deducted from the signer's account balance,
  // and transferred to the pocket network foundation.
  add_service_fee: bigint;
}
