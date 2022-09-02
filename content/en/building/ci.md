---
title: CI/CD
description: ''
position: 33
category: Managing building activities
---
The last part of the development pipeline is to test and deploy working code: continuous integration and continous deployment (CI/CD).
## Continous Integration
CI is one of the most instrumented parts of the Software Development Life Cycle. Jenkins, CircleCI and Buildkite are examples of well-known CI platforms. They usually work with the following abstractions:
- a **CI job** is comprised of several automated tests that run on a dedicated CI cluster.
- CI jobs can be grouped and ordered into a **CI pipeline**.
- the CI system provides various **triggers** to start pipelines based on events (e.g. a pull request got opened).
The 3 most common concerns with CI systems are:
- are the tests **exhaustive** enough (ie avoiding false negatives)?
- are the tests **non-flaky** (ie avoiding false positives)?
- are the tests **running fast enough**?

In this handbook, we'll focus mostly on understanding flaky and slow tests.
### Hardware bottlenecks

Let's start with the obvious: CI is computationally intensive and represents a sizable budget for even mid-size organizations. There are many online resources covering CI optimization, so we'll briefly mention the most common cases.

- **Undersized CI cluster**: as teams grow and add more tests and CI jobs, the CI cluster can become an overloaded shared resource. A common sign is that the time it takes to run a single CI pipeline becomes tightly correlated with the number of CI runs. This means that the system does not scale.
- **Unstable machines**: on sufficiently large clusters, there will be misbehaving machines, which can create hardware-induced flakiness. We recommend having a process to identify and cordon off these problematic machines. 
- **Architecture issues**: this happens when the way tests, jobs and pipelines are written stops scaling. Before throwing more hardware at CI problems, it is useful to review the architecture for classic issues involving concurrency, resource comsumption, etc.

Since solving the technical challenges of CI is more tractable than, say, chasing flaky tests, there can be a temptation to focus solely on hardware solutions. It is still critical to understand the human impact of slow CI, as we'll see in the next 2 sections.

### Branch CI bottlenecks
Branch CI happens when engineers test code on a branch, usually attached to a specific pull request.

Branch CI is critical to optimize because it involves making humans wait: CI results are often the first pieces of feedback an author can get on their new pull request. As a result, we highly recommend building metrics **scoped on a per-branch or per-PR basis**, rather than job-based or pipeline-based metrics, which lack that human context. Ideally, you want to understand the **total amount of time humans are waiting on your CI system.**

Here are bottlenecks to look out for with Branch CI:

- **Branch CI taking a long time**: this is the most immediate signal you could look at, and it gives you a direct measurement of how long people are waiting for CI to complete. In our experience, if CI takes more than 5-10 min, it really becomes a background thread for engineers, which causes them to context-switch. Again, it is important to aggregate the total, wall-clock CI time of *every* job running on a PR to get an accurate sense of this wait time. 
- **PRs with a high number of CI runs**: in a typical system, you would expect CI to run once per new commit added to the PR. If these 2 numbers deviate from each other, it likely means that CI is being retried because of inherently flaky tests or because the engineer has decided to re-execute the CI job. The latter situation can also happen if engineers are using the CI system as their main testing ground. In this case, you could see many commits added to a PR, for the sole purpose of getting constant feedback on the code. This is not a bad practice per se, but it may indicate that engineers resort to this workaround because e.g. local tooling does not work well. In general, understanding why CI gets executed so frequently on a per PR basis will yield invaluable information regarding the developer experience.
- **PRs with high failure rate**: Branch CI is expected to fail more often than main CI, since the code is being iterated on. However, keeping track of the failure trends can help with spotting a pattern affecting all your engineers. On a large team, the experience of constantly hitting failures with CI can quickly demoralize engineers and cause them to lose trust in the CI system.


### Main CI bottlenecks
Main CI is the integration step of the life cycle: the main branch of the repo gets tested with all recently merged code before deployment
Contrary to Branch CI, Main CI is not related to particular pull requests or indidivuals. It will reveal emergent issues affecting the team collectively.

Here are examples of such issues:
- **Flakiness**: flakiness is the rate of false positives of the CI system. Since code has already been tested on the branch, flakiness on Main CI is a cleaner signal (barring unforeseen interactions between recently merged code). Flaky tests are particularly harmful because they are usually hard to classify between true and false positives. On a large CI pipeline, a few flaky tests can routinely fail the whole pipeline - this quickly becomes extremely costly. A typical technique is to execute every job N times and average the results, which unfortunately increases resource consumption and does not address root issues.
- **Blocked deployments**: in a typical CI/CD scenario, we see many teams focusing on *keeping the build green* because a Main CI failure implies stopping the deployment train. It can be useful to understand the total amount of time that the build was broken in a given time period. This has a direct impact on deployment frequency and your lead time to deliver features.

## Deployments

Deployment is the final part of the development life cycle: shipping features to customers. It is probably the least standardized part of the process: 
- some companies automate deployments (continuous deployment) while others decide to keep it manual
- some companies rely on their CI system to deploy while others build custom deployment scripts or use their container orchestration platform 

We recommend building a set of metrics that match your own custom system and we'll just cover 2 common signals:

- **Deployment Frequency**: this DORA metric represents how often your organization successfully ships releases to production. It gives a good high-level indication of the performance of your entire development life cycle. Most engineers also prefer working in environments where code is shipped at least once a day, so this metric impacts retention and hiring. Being an output metric, it is not readily actionable and we'd recommend focusing on long-term trends instead of micro-optimizations.
- **Lead Time (Merged to Deploy or Main CI to Deploy)**: this represents how long it takes for code to go from one step to another. You can use various definitions of lead time depending on what you are trying to optimize for: the entire CI/CD experience or the speed of deployments. In organizations with a single release train, lead time and deployment frequency are actually closely connected. A typical failure scenario is to build release roadmaps that are based on a *desired or imagined* lead time and deployment frequency, which is why it is particulary important for engineering leaders to fully understand these metics when interacting with their product, sales and other executive counterparts. 


## Example Metrics
*Metrics are useful for trending at the team or organization level*
|Metric|When to use|
|---|---|
|Wall-clock CI Time on a PR|Understand how long humans wait on the CI system|
|Failure Rate of CI per PR|Catch trends indicating a degradation of the CI system, e.g. due to overload|
|Count of CI runs per PR|Understand why CI may potentially run too many times per PR|
|Aggregate time that Main CI was blocked|Understand when and how your SDLC gets blocked because of CI|
|Deployment Frequency (DORA)|Measure how often the organization ships features to end users|
|Lead Time for Merged to Deploy (DORA-like)|Understand the performance of your entire CI/CD pipeline|
