"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var hasUrl = !!process.env.DATABASE_URL;
exports.AppDataSource = new typeorm_1.DataSource(__assign(__assign({ type: 'postgres' }, (hasUrl
    ? { url: process.env.DATABASE_URL }
    : {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nestjs',
    })), { entities: [__dirname + '/**/*.entity.{ts,js}'], migrations: [__dirname + '/migrations/*.{ts,js}'], synchronize: false, logging: false }));
