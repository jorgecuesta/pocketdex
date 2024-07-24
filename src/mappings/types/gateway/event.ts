// GatewayStaked defines the event emitted when a gateway has been unstaked.
export interface EventGatewayUnstaked {
  address: string; // The Bech32 address of the gateway the application has changed their delegation of, using cosmos' ScalarDescriptor to ensure deterministic encoding
}
