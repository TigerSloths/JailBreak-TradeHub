DROP DATABASE IF EXISTS jailbreak_trading_hub;
CREATE DATABASE jailbreak_trading_hub;

\c jailbreak_trading_hub;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL UNIQUE NOT NULL PRIMARY KEY,
  profileimg TEXT,
  username TEXT UNIQUE NOT NULL,
  password TEXT,
  email TEXT UNIQUE,
  theme TEXT,
  last_online TIMESTAMP DEFAULT NOW()
);