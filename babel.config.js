module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@app": "./app",
            "@components": "./components",
            "@contexts": "./contexts",
            "@hooks": "./hooks",
            "@services": "./services",
            "@store": "./store",
            "@assets": "./assets",
            "@styles": "./styles",
            "@utils": "./utils",
            "#types": "./types",
          },
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".svg",
            ".png",
            ".jpg",
            ".json",
          ],
        },
      ],
    ],
  };
};
