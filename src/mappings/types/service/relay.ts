import {SessionHeader} from "../session/session";

// RelayRequestMetadata contains the metadata for a RelayRequest.
export interface RelayRequestMetadata {
  // Session header associated with the relay.
  session_header: SessionHeader;
  // The request signature is a serialized ring signature that may have been
  // by either the application itself or one of the gateways that the
  // application has delegated to. The signature is made using the ring of the
  // application in both cases.
  signature: Uint8Array;
  // The supplier address the relay is sent to. It is being used on the RelayMiner to
  // route to the correct supplier.
  supplier_address: string; // The Bech32 address of the application, using cosmos' ScalarDescriptor to ensure deterministic encoding
}

// RelayRequest holds the request details for a relay.
export interface RelayRequest {
  meta: RelayRequestMetadata;
  // payload is the serialized payload for the request.
  // The payload is passed directly to the service and as such can be any
  // format that the service supports: JSON-RPC, REST, gRPC, etc.
  payload: Uint8Array;
}

// RelayResponse contains the response details for a RelayRequest.
export interface RelayResponse {
  meta: RelayRequestMetadata;
  // payload is the serialized payload for the response.
  // The payload is passed directly from the service and as such can be any
  // format the the service responds with: JSON-RPC, REST, gRPC, etc.
  payload: Uint8Array;
}

// Relay contains both the RelayRequest (signed by the Application) and the RelayResponse (signed by the Supplier).
// The serialized tuple is inserted into the SMST leaves as values in the Claim/Proof lifecycle.
export interface Relay {
  session_header: SessionHeader;
  supplier_signature: Uint8Array;
}
