export type ArtifactKind = "table" | "document" | "transcript" | "dashboard";

export interface PublicArtifact {
  id: string;
  title: string;
  kind: ArtifactKind;
  content: Record<string, unknown>;
}

export interface PublicChoice {
  id: string;
  label: string;
}

export interface PublicMission {
  contractVersion: "1.0.0";
  mission: {
    id: string;
    slug: string;
    version: number;
    category: string;
    mechanic: string;
    difficulty: string;
    durationSeconds: number;
    caseCode: string;
    skills: string[];
    brief: {
      objective: string;
      submissionContract: string[];
      nonGoals: string[];
    };
  };
  artifacts: PublicArtifact[];
  choices: PublicChoice[];
  ai: {
    availability: "optional";
    mode: "deterministic-mock";
    startsBlank: true;
    maxMessages: number;
    privacyNotice: string;
  };
  privacy: {
    minimumAge: 13;
    accountRequired: false;
    personalDataCollected: false;
    sharing: "private";
  };
  integrity: {
    source: "deterministic-fixture";
    comparable: false;
  };
}

export interface TableContent {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface DocumentContent {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  caption?: string;
  columns?: string[];
  rows?: string[][];
  note?: string;
}

export interface TranscriptContent {
  caption: string;
  excerpts: Array<{ marker: string; quote: string }>;
}

export interface DashboardContent {
  caption: string;
  metrics: Array<{ label: string; value: string }>;
  note: string;
}
