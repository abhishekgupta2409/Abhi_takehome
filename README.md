Instructions:

1 - Fork or download the sandbox files. If working on a fork, always make sure to save your work so you do not lose your progress when page reloads for some reason.

2 - Implement a simple login page with routing using a service that checks the credentials submitted against a static and local whitelist of username and password. While this will not use HTTP calls, assume this will be asynchronous.

3 - Write a reusable filter component that will replace the embedded component in app.component.

4 - Wire up the filter component in app.component.

Bonus:
Create a spec file and write unit tests for the filter component.

Bonus:
Bring the filter as close to WCAG 2.0 Level A compliance as you can.

Bonus:
Improve viz.component to use different colors for each item entry. The colors need to be generated and yet need to be consistent for each unique item regardless of how many items there are (1 < item count < 100) - i.e. if Vue is #FF0000, it should always be #FF0000 no matter how many entries are there. You can ignore accessibility compliance in this solution.
