import { northstarPublicMission } from "../../../../packages/player-contracts/fixtures/northstar.public.mjs";
import type { PublicMission } from "../domain/publicMission";

export const mission = northstarPublicMission as PublicMission;

export const artifactIds = mission.artifacts.map((artifact) => artifact.id);
export const artifactById = new Map(
  mission.artifacts.map((artifact) => [artifact.id, artifact] as const),
);
