import { describe, expect, it } from "vitest";
import { answerMockAi } from "../src/domain/mockAi";

describe("deterministic mock AI", () => {
  it("starts with a plausible but explicitly checkable pricing hypothesis", () => {
    const answer = answerMockAi("What is the primary cause?", 0);
    expect(answer.body).toContain("22% pricing impact");
    expect(answer.body).toContain("compare it with the pricing memo");
    expect(answer.citedArtifactIds).toEqual(["dashboard"]);
  });

  it("recovers when the learner asks for verification", () => {
    const answer = answerMockAi("Check the 22% claim against the memo", 1);
    expect(answer.body).toContain("4.3%");
    expect(answer.body).toContain("too strong");
    expect(answer.citedArtifactIds).toEqual(["pricing-memo", "dashboard"]);
  });

  it("returns identical output for identical inputs", () => {
    expect(answerMockAi("implementation evidence", 1)).toEqual(
      answerMockAi("implementation evidence", 1),
    );
  });
});
