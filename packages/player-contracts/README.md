# Player contracts

Framework-independent browser contracts for the ProofMode player.

- `src/index.mjs` validates and freezes public mission/state payloads.
- `fixtures/northstar.public.mjs` is the deterministic issue #3 browser fixture.
- `test/player-contracts.test.mjs` proves the fixture is deterministic and contains no hidden truth or scoring annotations.

The web app may import this package and its public fixtures. It must never import the private mission document, truth map, scoring manifest, provider adapters, or server-only projection inputs.
