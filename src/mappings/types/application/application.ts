// Application defines the type used to store an on-chain definition and state for an application
import {ApplicationServiceConfig} from "../shared/service";

export interface Application {
  address: string; // The Bech32 address of the application using cosmos' ScalarDescriptor to ensure deterministic encoding
  service_config: [ApplicationServiceConfig] // The list of services this appliccation is configured to request service for
  delegatee_gateway_addresses: [string] // The Bech32 encoded addresses for all delegatee Gateways, in a non-nullable slice
  // A map from sessionEndHeights to a list of Gateways.
  // The key is the height of the last block of the session during which the
  // respective undelegation was committed.
  // The value is a list of gateways being undelegated from.
  pending_undelegations: Map<bigint, UndelegatingGatewayList>
}

// UndelegatingGatewayList is used as the Value of `pending_undelegations`.
// It is required to store a repeated list of strings as a map value.
export interface UndelegatingGatewayList {
  gateway_addresses: string;
}
