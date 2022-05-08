module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],

  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^@lerna-ws-test/(.+)": "../../packages/\\1/src",
        },
      },
    ],
  ],
};
