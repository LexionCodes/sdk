export function analyzeRuntime(agentId: string) {

  const runtimeReport = {
    agent: agentId,
    cpuUsage: Math.random() * 100,
    memoryUsage: Math.random() * 512,
    status: "running"
  }

  return runtimeReport
}
