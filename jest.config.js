module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  testURL: "http://localhost/",
  collectCoverage: true,
  // FIXME 在 circleci 环境执行测试, 会抛出 ENOMEM 错误
  // collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  collectCoverageFrom: ["src/app/doc/api/01-global-config/06-ignored-elements/C0106.tsx", "!**/node_modules/**"],
  coverageReporters: ["lcovonly", "text-summary"]
};
