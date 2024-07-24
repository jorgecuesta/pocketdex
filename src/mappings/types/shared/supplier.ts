import {Coin} from "../common";
import {SupplierServiceConfig} from "./service";

// Supplier is the type defining the actor in Pocket Network that provides RPC services.
export interface Supplier {
  address: string; // The Bech32 address of the supplier using cosmos' ScalarDescriptor to ensure deterministic encoding
  stake: Coin; // The total amount of uPOKT the supplier has staked
  services: SupplierServiceConfig // The service configs this supplier can support
}
