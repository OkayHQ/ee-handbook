---
title: Improving Developer Experience
description: ''
position: 42
category: Managing feedback loops
---

Understanding which aspect of an engineer's life feels most painful is an important input in determining which feedback loops to investigate and address. The approach is very different when the CS team is overloaded with customer bug reports versus when the engineering team is frustrated that it can't ship code fast enough.

There are three main types of feedback loops: 

* **Quality** - all the flows that engineers use to make sure they are building code that meets the requirements of their customers
* **Delivering code** - all the flows engineers use while writing and modifying code.
* **Process** - all the checklists or meetings engineers are required to attend as part of their job responsibilities

Each category has its own set of feedback loops that can be evaluated and optimized to improve the effectiveness of the team.  Below are examples of common loops across each category.

## Quality Feedback Loops
|Loop|Definition|
|---|---|
|Writing a new test| The ability for engineers to write and run tests to make sure their code works (unit, integration, end to end, etc)|
|Code reviews| Code reviews are a mechanism for engineers to review each other's code for a variety of concerns (quality, security, design, etc)|
|Responding to page| How effectively an engineer is able to troubleshoot a service|

## Delivering Code Feedback Loops
|Loop|Definition|
|---|---|
|Common IDE/CLI commands| The list of most commonly used IDE features and CLI commands (commit, ide autocomplete, linting, hot-reloading) |
|Finding documentation| Ability for engineer to jump into code and understand what is happening well enough to start changing it|
|Building a service|How long does it take to build a service|
|Creating a new service|How long does it take an engineer to create a Hello World new service|
|Deploying a change|Once a change is *ready*, how quickly can a engineer deploy it to customers|

## Process Feedback Loops
|Loop|Definition|
|---|---|
|Postmortems| The system your team uses to make sure your learn and prevent serious incidents from happening again|
|Agile/Scrum| The regular rhythm your team uses to plan, reflect and status on the work it produces|
|Onboarding to a new team| What does a new hire or an engineer switching teams need to do to become productive|
|On-call|What process does your team follow to address unplanned critical incidents that affect the team|

## Optimizing feedback loops

Optimizing feedback loops to improve productivity typically follows its own loop:
- Catalog all your existing feedback loops with an understanding of their frequency, latency, usability, and purpose.
- Create a prioritization framework that weighs these factors in a way that is consistent with your values and culture.
- Create an action plan to prioritize.

Remember that sometimes, **the right choice can be to remove the loop altogether**.  For example, if you have a centralized approval committee that requires every engineer to present a design for every new change, evaluating and measuring whether this process loop is accomplishing its purpose and worth the ROI is important.  

Loops are important to analyze and measure because many of them are frequently overlooked.  It’s very tempting to ignore and delay indefinitely working on slow build times and continue to prioritize new features instead.  Over time **too many poor loops can lead to the feeling of death by a thousand cuts**.

Finally, it's important not to only rely on hard metrics.  No matter how thorough and thoughtful you are with collecting metrics, it's critical to capture qualitative feedback to avoid blind spots or incorrect assumptions in your framework.  This can be done through surveys, 1/1s, retrospectives and exit interviews.

## Creating a culture of optimizing feedback loops

It’s easy for management to get disconnected from the pain induced by feedback loops because by definition, the more senior a manager is, the more removed they are from having to deal with loops, and the closer they are to the pressure of delivering new code.  

**Great managers are able to create systems to stay connected** to the pain and build a culture where feedback loops are continuously surfaced, prioritized and improved.

## Example Metrics
*Metrics are useful for trending at the team or organization level*
|Metric|When to use|
|---|---|
|Deploy Time| How long does it take to Deploy a change to production|
|Tooling Latency| How long do developer laptop commands take to run for local build, test, etc|
|Time to resolve incident| How long does it take to resolve an incident|