import { analyzeRuntime } from "../runtime/runtimeMonitor";

export class VerifierAgent {

  verifyAgentLogic(code: string) {
    if (code.includes("eval(")) {
      return {
        safe: false,
        reason: "Unsafe eval detected"
      };
    }

    return {
      safe: true,
      reason: "Code verified"
    };
  }

  monitorRuntime(agentId: string) {
    return analyzeRuntime(agentId);
  }

}
