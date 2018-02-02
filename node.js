module.exports = {
  "extends": "./es6.js",
  "env": {
    "node": true
  },
  "rules": {
    "callback-return": [0, "next"],
    "global-require": 2,
    "handle-callback-err": 2,
    "no-buffer-constructor": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,

    // turn off in node environment
    "no-return-await": 0,
    "no-undefined": 0
  }
};
