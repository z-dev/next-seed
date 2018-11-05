module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles"
        },
        cwd: "babelrc"
      }
    ],
    [
      "wrap-in-js",
      {
        extensions: ["css$", "scss$"]
      }
    ],
    ["styled-components", { ssr: true }],
    [
      "transform-define",
      {
        "process.env.CONFIG_ENV": process.env.CONFIG_ENV
      }
    ],
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "~",
        rootPathSuffix: "."
      }
    ]
  ],
  "presets": [
    "next/babel"
  ],
};
