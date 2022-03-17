---
title: Overview
description: ''
position: 40
category: Managing feedback loops
---
Feedback loops are the set of tasks that an engineer does repeatedly to deliver software.  Examples of feedback loops include everything from how long an IDE takes to do mini-tasks like code autocomplete to larger complex tasks like how long it takes an engineer to launch a new service in production.

How well these loops perform create the foundation for how effective your organization can be.  A feedback loop taking longer or being more painful to perform has the impact of both reducing the frequency of times it’s used as well as slowing down delivery of software.  For example if running unit tests locally on a developer laptop takes 30 minutes instead of 5 seconds, developers are less likely to write new tests and to run tests locally.  In this case the impact of the poorly performing feedback loop is slower coding and lower quality code long term.

## Factors that matter for Feedback Loops:
- Frequency - Some activities are performed by developers 100s of times a day (IDE autocomplete), and others are typically performed less than once a year (onboard to a new team).
- Latency - How long feedback loops take can vary widely from milliseconds/seconds while others can be measured on the order of weeks
- Usability - How easy an activity is to use
- Purpose - Some loops exist for the purpose of improving code quality (code reviews) while others exist to enable you to write and ship code (deploying a new version of a service)

Calculating the cost of a feedback loop is not as simple as multiplying the frequency times the latency.  The cost of latency increases typically follows step function increases:

- Less than 5 seconds - Stay on the same screen and wait
- 5 seconds - 1 minute - Do a quick Slack check and come back (return in 5 minutes)
- 1 minute - 10 minutes - Go grab coffee (return in 15 minutes)
- 10 minutes - 1 hour - Come back to it sometime later (return in ~ 4 hours)
- > 1 hour - Check in next day (check in tomorrow morning)

## Optimizing feedback loops to improve productivity typically follows its own loop:
Catalog all your existing feedback loops with an understanding of it’s frequency, latency, usability, and purpose
Create a prioritization framework that weighs these factors in a way that is consistent with your values and culture
Create an action plan to prioritize
Remember that sometimes the right choice can be to remove the loop altogether.  For example if you have a centralized approval committee that forces every engineer to present a design for every new change, evaluating and measuring whether this process loop is accomplishing its purpose and worth the ROI is important.  

Loops are important to analyze and measure because many of them are frequently overlooked.  It’s very tempting to ignore and delay indefinitely working on slow build times and continue to prioritize new features instead.  Over time too many poor loops can lead to the effect of death by a thousand cuts.

## Feedback loops vs. Tech Debt

Tech debt is one of the contributing factors that affects the latency of completing some feedback loops.  For example spaghetti code can be difficult to test so writing a new test will take a lot more time.  The amount of tech debt can also affect how hard it is to make your highest priority feedback loops faster.

## Creating a culture of optimizing feedback loops

It’s easy for management to get disconnected from feedback loop pain because by definition the more senior a manager is the more removed they are from having to deal with loops and the closer they are to the pressure of delivering new code.  However, great managers are able to create systems to stay connected to the pain and build a culture where feedback loops are continuously prioritized and improved.