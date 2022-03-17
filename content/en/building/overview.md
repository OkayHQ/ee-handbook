---
title: Overview
description: ''
position: 30
category: Managing building activities
---

In the previous chapter, we looked at the fundamental input to effective engineering teams - making time for complex, uninterrupted work. The most obvious way to use this time is to build stuff! 

This chapter will therefore guide you through how to manage and measure what we call *building* - all the activities that specifically go towards producing working code in the form of features for end-users, such as planning new features, writing code and deploying it.
## The software development life cycle (SDLC)

There is a wealth of information online about the [Software Development Lifecycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle). Consequently, there is some variation in terms of the various steps of the lifecycle. We do not take an opinionated approach on this; for pragmatic reasons, we will use these high-level steps in the rest of of this chapter:

<img src="/sflc.svg" class="mx-auto" style="min-height: 2rem;"/>

<Insert analogy with factory>


### Existing frameworks: DORA Metrics

In 2016, the State of DevOps report started introducing 4 key metrics - the DORA Metrics, which were initially used to explain the difference in productivity between the hundreds of software organizations studied in the report. To this day, the DORA metrics remain the most researched metrics in this domain. The four metrics are:
- Lead Time for Changes
- Deployment Frequency
- Change Failure Rate
- Time to Restore Service
Since there is a lot of existing resources about DORA Metrics, we won't dedicate a section to them, but we will mention them in the relevant parts of the handbook. We recommend the book [Accelerate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations) for further reading.

### Existing frameworks: SPACE Framework
The [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124) is a recent addition to the DORA Metrics, which adopts a more holistic view on developer productivity. We see it as a complement to this handbook, as we share many underlying values and approaches with it.

## What not to measure and why

As we briefly mentioned in the introductory chapter, it is critical to avoid using certain metrics that, while easy to measure, will be detrimental to team morale and will do almost nothing to improve productivity. The broad characteristics of a “bad” metric are any of the following:

- It tries to measure the performance of individual engineers
- It treats code as a series of characters instead of as an abstraction
- It focuses on outputs
- It is easy to game
- It is “magical”, in the sense that it requires a lot of context to understand

Here are some examples of such metrics, from most to least obvious:

- *Number of lines of code written by a developer*: we hope that most readers will agree that this is the archetype of a bad engineering productivity metric. Fun fact: the Apollo 11 source code is roughly 40,000 lines of Assembly. 
 
- *Pull Request Throughput of a developer*: this could be considered an improvement over lines of code, in the sense that it deals with a logical unit of work as opposed to a series of characters. In practice, this metric will lead people to produce smaller, more frequent or even comment-only PRs, for the sake of meeting throughput goals. However, we do see this metric being useful at an organization level (dozens of engineers), to understand baselines of activity over time. It is, however, not very actionable.

- *Pull Request Size*: since it is accepted that big PRs slow down the code review process and introduce more risk, we have seen some companies focus on setting a maximum PR size. This almost always backfires and we have even seen developers writing utility scripts to break down PRs automatically to avoid getting caught in the filter. The core problem here is to narrowly focus on the output instead of understanding why people may need to write large PRs in the first place.
 
- *Code churn*: this metric tries to measure rework by comparing additions and deletions happening in various parts of the codebase. This is an example of a magical metric that is also based on unclear assumptions: rework can be good or bad depending on fairly complex interpretations of the context. It can lead to broken incentives, where developers would avoid tech debt - ridden parts of the codebase in order to avoid accumulating “rework”.

### A little nuance: low-pass / high-pass filter on metrics

For the sake of completeness, we want to mention that some of these metrics may become useful if you apply a mental filter that retains only the most extreme values. 

For example, if a particular team or developer hasn’t written any lines of code in the past quarter, there is very likely something going on. We would still refrain from immediately equating this to low productivity, but we would deep dive into these cases to understand the context. In that sense, these filtered metrics can be useful as “canaries in the coal mine”. That said, we doubt that most engineering leaders need metrics and dashboards to become aware of such extreme cases. 

## What to measure instead

Not suprisingly, the signals we favor display opposite features compared to the harmful metrics we describe above. The characteristics of a "good" metric are:

- **It focuses on inputs**, in the form of bottlenecks, slow-downs and other inefficiencies at every step of the SDLC. This type of metric is more specific and actionable, and usually harder to misuse or "game". It also clearly puts the focus on improving the developer experience as opposed to measuring individual performance.
- **Its definition is simple to understand**. For someone with "average context" about the situation at hand, it should be easy to intuitively understand how the metric is defined and what may cause it to move in different directions. Again, it optimizes for actionability and it reduces the potential for "interpretation battles".
- **It supports drill-downs**. The metric should be easy to aggregate at various resolutions (team, department, organization) and it should support multiple ways to filter or group (e.g. by repository, by service, etc.). This is critical in terms of making it easy to debug problems and iterate on solutions.