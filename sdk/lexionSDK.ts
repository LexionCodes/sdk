import { VerifierAgent } from "../agents/verifierAgent"

export class LexionSDK {

  verifier: VerifierAgent

  constructor() {
    this.verifier = new VerifierAgent()
  }

  verify(code: string) {
    return this.verifier.verifyAgentLogic(code)
  }

  monitor(agentId: string) {
    return this.verifier.monitorRuntime(agentId)
  }

}
