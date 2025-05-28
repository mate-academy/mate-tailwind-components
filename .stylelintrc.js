module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "scss/at-rule-no-unknown": [true, {
      ignoreAtRules: ["theme"]
    }],
  }
};
