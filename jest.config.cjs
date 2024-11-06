module.exports = {
  // setupFilesAfterEnv: ["<rootDir>/jest.config.cjs"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|sass|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-react"] }]
  }
};
