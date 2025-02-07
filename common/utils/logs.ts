import logger from "loglevel";

import { env } from "./env";

const logLevelByEnvironment = {
  development: "debug",
  production: "silent",
  test: "silent",
} as const;

const originalLog = logger.methodFactory;

logger.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalLog(methodName, logLevel, loggerName);

  return function message(...messages) {
    const timestamp = new Date().toISOString();

    rawMethod(`[${timestamp}] ${methodName?.toUpperCase()}:`, ...messages);
  };
};

const environment = env.NODE_ENV || "development";
logger.setLevel(logLevelByEnvironment[environment] ?? "debug");

export { logger };
