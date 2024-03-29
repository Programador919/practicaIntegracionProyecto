import winston from "winston";

// Establecer el entorno directamente aquí (puedes cambiar 'development' por 'production' según sea necesario)
const environment = "development";

const devLogger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

const prodLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "INFO.log" }),
    new winston.transports.File({ filename: "ERRORS.log", level: "error" }),
  ],
});

// Utilizar la variable 'environment' en lugar de process.env.ENV
const logger = environment === "production" ? prodLogger : devLogger;

export default logger;
