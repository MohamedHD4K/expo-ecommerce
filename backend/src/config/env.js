import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || "localhost",
    NODE_ENV: process.env.NODE_ENV || "development",
    NODE_ENV: process.env.DB_URL || "mongodb://localhost:27017/myapp",
};
