---
title: Types of Loops
description: ''
position: 42
category: Managing feedback loops
---

## Inner versus Outer Loops
Inner loops are the all the activities an engineer does while between starting on a backlog task and publishing a PR for review. This category usually involves just 1 person and their tools (or 2+ people in the cases of pair programming).  This category of loop is important because it's when code gets written.   Outer loops are the activities and orchestration that happens between code complete and it being shipped to production and available to users.   These loops typically involve more collaboration and coordination.  Improving inner loops is typically focused on tooling while outer loops usually require a mix of process, tooling and culture.

## Feedback loops versus Tech Debt
Tech debt is one of the contributing factors that affects the latency of completing some feedback loops.  For example spaghetti code can be difficult to test so writing a new test will take a lot more time.  The amount of tech debt can also affect how hard it is to make your highest priority feedback loops faster.

## Quality
- Writing a new test (unit, integration, e2e, load test)
- Running tests
- Code reviews
- Responding to page (how easy is it to troubleshoot a service)
- Validating a change

## Delivering Code
- Autocomplete
- Finding documentation
- Building a service
- Creating a new service
- Deploying a change

## Process
- Postmortems
- Agile/Scrum
- Onboarding to a new team
- On-call