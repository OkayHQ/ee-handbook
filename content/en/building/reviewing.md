---
title: Reviewing
description: ''
position: 32
category: Managing building activities
---
Reviewing code is a human-intensive and deeply social part of the development process. Consequently, it is also one of the most time consuming and harder to optimize - you cannot “throw more raw power” at this problem. 

In most companies, the process goes like this: 
- a developer uploads a coherent set of changes (Commit, Pull Request) to a central place.
- they ask one or more other developers to review the code for bugs and coding standards. 
- reviewers can issue comments and send the change back to the author. 
- this exchange may go back and forth, until reviewers approve the change.
- the code is then checked into the main line.

<high-level metric: review time>


## Common sources of lengthy code reviews

- **Too many reviewers / diffuse ownership**: this situation happens when there are more than 2 or 3 reviewers assigned on a pull request, potentially through automated systems like automated “code ownership” with collective assignment. As a result, nobody really feels responsible for completing the review and the author waits for too long. A key metric to monitor for this case is the time it takes to do the first action on a review, from the point of view of the author.
- **Unbalanced code review load**: a common situation is to see one or two engineers on a team doing the bulk of the code reviews for everyone. There is usually a good reason: these engineers happen to be more senior, or they are more tenured and know the codebase better. The side effect is that these reviewers become a bottleneck for the team and burn out under the load. The same problem can appear on a larger scale, with entire teams becoming bottlenecks for the rest of the organization - for example, a single DevOps team is supposed to review every infrastructure change. A key metric to monitor is the distribution of code review on a per reviewer basis, aggregate by individual or by sub-teams. This will enable you to quickly spot wild unbalances.
- **Large changes**: when changes reach a certain size in terms of modified lines, reviewers get understandably less motivated to review them. In our experience working with many companies and codebases, we have seen large changes create a lower bound on review time in a fairly predictable manner. Our recommendation is to keep a pulse on very large changes by setting a threshold, and understand why they happen. As we shared above, we would not recommend having a blanket rule or maximum size, as it will likely backfire.
- **Inherent complexity or disagreements**: this happens when a change generates a lot of back-and-forth between author and reviewers. It is not necessarily a bad thing, in the sense that it could indicate a well-functioning review process. A good rule of thumb in terms of what to measure is to imagine when a developer would openly complain (e.g. in a 1/1) that the code review is stuck. There is usually an upper bound in terms of number of comments or review loops where most of your engineers would say the change is in trouble - you should try and build a signal based on this.
- **Interruptions**: finally, code reviews can also take a long time when reviewers keep getting interrupted by meetings, interviews, slack messages, oncall, etc. Please see the relevant sections in the handbook!

## Best practices to apply when measuring the code review process

- We recommend choosing a clear point of view when building metrics: are you interested in unblocking the author, or do you want to measure the activity of reviewers ? We favor metrics built from the point of view the author - ie that are encapsulating the “wait time” of the author
- Given the variety of practices around drafting and using remote branches, we usually start the clock not at review creation time, but when the review actually gets requested. This represents the moment that the author starts waiting.
- Understand the timezones and working hours of participants (authors, reviewers) to avoid noisy metrics

## Example Metrics
*Metrics are useful for trending at the team or organization level*
|Metric|When to use|
|---|---|
|End-to-end Review Time|Understand how fast reviews get completed at the Team or Organization level|
|Time to First / Nth Action|Useful as a breakdown of Review Time (for further analysis) or to catch ownership-related issues|
|Distribution of Reviews by Reviewer|Understand whether some reviewers might be overloaded, creating a bottleneck for authors|
|Count of back-and-forth interactions|Understand whether code reviews are surfacing issues that should have been caught earlier (design problem, deeper disagreements)|

## Example Lists
*Lists are particularly useful at the team level or for first-line managers*
|List|When to use|
|---|---|
|Reviews that have received no activity so far|Keep a pulse on reviews that are in a pure waiting state|
|Stale PRs: PRs with activity but opened for more than X days|Catch reviews that may be delayed, investigate reasons why|
|Reviews approved but not merged|Ensure that reviews move to the next step of the development life cycle|
