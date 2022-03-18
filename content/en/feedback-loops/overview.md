---
title: Overview
description: ''
position: 40
category: Managing feedback loops
---
Feedback loops are the **set of tasks that an engineer does repeatedly** to deliver software.  Examples of feedback loops include everything from how long an IDE takes to do mini-tasks like code autocomplete to larger tasks like how long it takes an engineer to launch a new service in production.

How well these loops perform **creates the foundation for how effective your organization can be**.  A feedback loop taking longer or being more painful to perform has the impact of both reducing the frequency of times it’s used as well as slowing down delivery of software.  

For example if running unit tests locally on a developer laptop takes 30 minutes instead of 5 seconds, developers are less likely to write new tests and to run tests locally.  In this case, the impact of the poorly performing feedback loop is **slower coding and lower quality code** in the long term.

## Factors that matter for Feedback Loops:
- **Frequency**: Some activities are performed by developers 100s of times a day (IDE autocomplete), and others are typically performed less than once a year (onboard to a new team).
- **Latency**: How long feedback loops take can vary widely from milliseconds/seconds while others can be measured on the order of weeks
- **Usability**: How easy it is to perform the activity
- **Purpose**: Some loops exist for the purpose of improving code quality (code reviews) while others exist to enable you to write and ship code (deploying a new version of a service)

Calculating the cost of a feedback loop is not as simple as multiplying the frequency times the latency.  The cost of latency typically follows step function increases:

- **Less than 5 seconds** - Stay on the same screen and wait
- **5 seconds - 1 minute** - Do a quick Slack check and come back (return in 5 minutes)
- **1 minute - 10 minutes** - Go grab coffee (return in 15 minutes)
- **10 minutes - 1 hour** - Come back to it sometime later (return in ~ 4 hours)
- **\> 1 hour** - Check in next day

Seemingly small changes in latency can lead to cascading downstream effects to the iteration velocity for an engineer, and for the team as a whole.  On the flip side, a huge investment in a loop may not yield a positive return on investment until it materially breaks through one of those thresholds.