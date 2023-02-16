module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  plugins: ["import"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react-native/no-inline-styles": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
