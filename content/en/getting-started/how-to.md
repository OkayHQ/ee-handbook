---
title: How to use this handbook?
description: ''
position: 4
category: Getting Started
---
## Who is this for?

We wrote this handbook for **engineering leaders - from first-line managers to CTOs**. To be more specific: while we hope every leader will find value reading it, we think it will best serve you if you are dealing with a median to high level of complexity. Here are examples of such situations:
- *Growth complexity*: A co-founder and CTO leading a team of 30 engineers, with plans to double or triple that team size in the next 12 months
- *Task complexity*: A director of engineering at a unicorn company, potentially leading a brand new “developer enablement” team and trying to measure the impact of tooling projects
- *Scale complexity*: Any manager/director/VP leading or working in an organization of hundreds of engineers.

In particular, we don’t think introducing metrics and focusing on engineering productivity is very useful for teams of 15 engineers or below (unless, of course, as part of a larger organization). In our experience, these teams and their leaders will be better off “doing things that don’t scale” instead of embarking on premature scaling initiatives.

Finally, we hope individual contributors will enjoy reading this handbook and will promote our vision of engineering effectiveness based on identifying and removing bottlenecks. We firmly believe that it will help empower developers and that it will lead to more transparent and efficient engineering teams.


## The Explore - Measure - Monitor - Act loop

If you are already familiar with Application Monitoring, Product Analytics or other intelligence tools, you can apply a similar workflow to engineering effectiveness. We suggest the following 4 steps:
- *Explore*: this phase is all about gaining visibility and establishing baselines by exploring the data. You might already have a hunch as to what to look for, based on anecdotal evidence and discussions with your team. For example, you may know that having too many meetings is a problem, so you might want to focus the data exploration on that aspect. The next few chapters will give you more specific ideas on the types of metrics to try at this stage.
- *Measure*: once you have identified a set of problems to go after, you will define metrics that represent these problems. For example, having too many meetings can be translated into “meeting hours per week per person”. It is important to choose metrics that are actionable and easy to explain. We recommend grouping metrics into dashboards, which act as the concrete representation of your goals.
- *Monitor*: this next phase is about comparing the metric to the goals that you have set on  a regular basis. For example, you might set a goal to reduce the number of meetings per person by 20% in the next quarter. This is the most critical phase, as an unmonitored metric won’t be able to create any change by itself.
- *Act*: this phase is about taking action to improve effectiveness. In the same way that debugging systems depends on many factors, this final phase is the most context-dependent. In the case of meeting load, there are a variety of techniques you can apply such as “no meetings days”, developing a more asynchronous culture, etc. You might also find that you need to go back to exploration and sub-divide the problem into more specific metrics.  

## Metrics, Lists, Alerts: when to use which

In our experience, there are 3 main categories of signals that will be useful for engineering leaders: metrics, lists and alerts. Let's explain when to use which and who might benefit more from each type.

### Metrics

Metrics are quantitative measurements of a signal, usually over a specific time period. For example, you might want to measure the average time it took to do code reviews over the past 6 months. They are useful for everyone from first-line managers to executives, and they form the building blocks of dashboards.

Use metrics for:
- high-level **trending and baselining**
- building **reports** that you will monitor over time
- doing some high-level **comparisons** across teams

To ensure that metrics are actionable, it is also important to build relevant filters, grouping and drill-downs. Metrics should only be used at the individual level to measure blockers and interruptions; if there is a way to interpret the metric as a performance indicator, we'd highly recommend choosing a coarser grouping (team, organization).

### Lists

Lists are tabular outputs of a query - like a metric but with no aggregation. For example, you might want to pull up a list of stale pull requests or a list of tickets associated with a particular team and project. They are particularly useful for first-line managers and team leads.

Use lists for:
- **real-time checks** on potential blockers (e.g. PRs that are not progressing)
- **visualizing** the various stages of a pipeline in more detail
- building quick **exports** to your spreadsheet software

### Alerts

Alerts are notifications that are triggered when metrics meet a certain condition. For example, you might want to be alerted whenever a Pull Request has been open for more than N days. They are most useful for first-line managers and their teams (e.g. you could set up a shared Slack channel to receive these alerts)

Use alerts for:
- **avoiding getting blind-sided** by slowly degrading situations (e.g. a sub-team getting a lot of pages at night)
- making **continuous improvements** based on goals (e.g. you want to complete code reviews within a max of N days)


