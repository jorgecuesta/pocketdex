// Service message to encapsulate unique and semantic identifiers for a service on the network
export interface Service {
  id: string; // Unique identifier for the service
  name?: string; // (Optional) Semantic human-readable name for the service
}

// ApplicationServiceConfig holds the service configuration the application stakes for
export interface ApplicationServiceConfig {
  service: Service; // The Service for which the application is configured
}

// SupplierServiceConfig holds the service configuration the supplier stakes for
export interface SupplierServiceConfig {
  service: Service; // The Service for which the supplier is configured
  endpoints: SupplierEndpoint; // List of endpoints for the service
}

// SupplierEndpoint message to hold service configuration details
export interface SupplierEndpoint {
  url: string; // URL of the endpoint
  rpc_type: RPCType; // Type of RPC exposed on the url above
  configs: [ConfigOption] // Additional configuration options for the endpoint
}

// Enum to define RPC types
export enum RPCType {
  UNKNOWN_RPC = 0, // Undefined RPC type
  GRPC = 1, // gRPC
  WEBSOCKET = 2, // WebSocket
  JSON_RPC = 3, // JSON-RPC
  REST = 4, // REST
}

// Enum to define configuration options
export enum ConfigOptions {
  UNKNOWN_CONFIG = 0, // Undefined config option
  TIMEOUT = 1, // Timeout setting
}

// Key-value wrapper for config options, as enums can't key proto maps
export interface ConfigOption {
  key: ConfigOptions; // Config option key
  value: string; // Config option value
}
