import {Coin} from "../common";

export interface Gateway {
  address: string; // The Bech32 address of the gateway
  stake: Coin; // The total amount of uPOKT the gateway has staked
}
