// EventRedelegation is an event emitted whenever an application changes its
// delegatee gateways on chain. This is in response to both a DelegateToGateway
// and UndelegateFromGateway message.
export interface EventRedelegation {
  app_address: string; // The Bech32 address of the application, using cosmos' ScalarDescriptor to ensure deterministic encoding
  gateway_address: string; // // The Bech32 address of the gateway the application has changed their delegation of, using cosmos' ScalarDescriptor to ensure deterministic encoding
}
