// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LexionGuard {

    address public owner;

    struct AgentExecution {
        address agent;
        string action;
        uint256 timestamp;
    }

    AgentExecution[] public executions;

    event AgentExecuted(address agent, string action);

    constructor() {
        owner = msg.sender;
    }

    function recordExecution(string memory action) public {
        executions.push(
            AgentExecution(msg.sender, action, block.timestamp)
        );

        emit AgentExecuted(msg.sender, action);
    }

    function getExecutions() public view returns (AgentExecution[] memory) {
        return executions;
    }
}
