# React Poll App

This app was built to demonstrate the use case of React, React-Router, Socket.IO, Webpack, Yarn and Hot Reloading.

This app facilitates a polling app, where a speaker can ask any question and all of the attendees can vote for their answer. There is a separate board which keeps update itself to draw a pie chart based on the polls.

All this is happening in real time (thanks to Socket.IO and React's reactive nature).

There are currently 3 routes defined:

  1. /
  2. /board
  3. /audience

`/` route is the default route which shows a joining form and some links to join as a presenter or to display the board.

`/board` route is where all the polls are actively monitored and rendered in the pie chart.

`/audience` route is where all the attendees can see the question and pick the one.

There is one more special route called `*` route. It matches to `404 Error`.

### Steps to install dependency and run

1. Install `yarn`. You can also use `npm` as this is a standard `package.json` file project.
2. Execute `yarn`.
3. Execute `npm start`.


