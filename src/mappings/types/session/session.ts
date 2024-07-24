import {Application} from "../application/application";
import {Service} from "../shared/service";
import {Supplier} from "../shared/supplier";

// SessionHeader is a lightweight header for a session that can be passed around.
// It is the minimal amount of data required to hydrate & retrieve all data relevant to the session.
export interface SessionHeader {
  application_address: string; // The Bech32 address of the application using cosmos' ScalarDescriptor to ensure deterministic encoding
  service: Service; // The service this session is for
  // NOTE: session_id can be derived from the above values using on-chain but is included in the header for convenience
  session_id: string; // A unique pseudorandom ID for this session
  session_start_block_height: bigint; // The height at which this session started
  // Note that`session_end_block_height` is a derivative of (`start` + `num_blocks_per_session`)
  // as governed by on-chain params at the time of the session start.
  // It is stored as an additional field to simplify business logic in case
  // the number of blocks_per_session changes during the session.
  session_end_block_height: bigint; // The height at which this session ended, this is the last block of the session
}

// Session is a fully hydrated session object that contains all the information for the Session
// and its participants.
export interface Session {
  header: SessionHeader; // The header of the session containing lightweight data
  session_id: string; // A unique pseudorandom ID for this session
  session_number: bigint; // The session number since genesis
  num_blocks_per_session: number; // The number of blocks per session when this session started
  application: Application; // A fully hydrated application object this session is for
  suppliers: [Supplier]; // A fully hydrated set of suppliers that are serving the application
}
