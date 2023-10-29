import logger from "loglevel";

import { envVars } from "@/utils/env-vars";

const logLevelByEnvironment = {
  development: "debug",
  production: "silent",
} as const;

const originalLog = logger.methodFactory;

logger.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalLog(methodName, logLevel, loggerName);

  return function message(...messages) {
    const timestamp = new Date().toISOString();

    rawMethod(`[${timestamp}] ${methodName?.toUpperCase()}:`, ...messages);
  };
};

const environment = envVars.NODE_ENV || "development";
logger.setLevel(logLevelByEnvironment[environment] ?? "debug");

export { logger };
