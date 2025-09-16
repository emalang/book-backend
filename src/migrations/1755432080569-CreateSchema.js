"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedBooks1755432080569 = void 0;
var fs = require("fs");
var path = require("path");
var SeedBooks1755432080569 = /** @class */ (function () {
    function SeedBooks1755432080569() {
    }
    SeedBooks1755432080569.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath, rawText, parsed, books, count;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filePath = path.resolve(process.cwd(), "src/seeds/books.json");
                        rawText = fs.readFileSync(filePath, "utf8");
                        parsed = JSON.parse(rawText);
                        books = Array.isArray(parsed) ? parsed : (_a = parsed === null || parsed === void 0 ? void 0 : parsed.default) !== null && _a !== void 0 ? _a : [];
                        if (!Array.isArray(books) || books.length === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .select("COUNT(*)", "count")
                                .from("book", "b")
                                .getRawOne()];
                    case 1:
                        count = (_b.sent()).count;
                        if (parseInt(count, 10) > 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .insert()
                                .into("book")
                                .values(books.map(function (b) {
                                var _a, _b, _c, _d, _e, _f;
                                return ({
                                    title: b.title,
                                    author: b.author,
                                    publisher: (_a = b.publisher) !== null && _a !== void 0 ? _a : null,
                                    pages: (_b = b.pages) !== null && _b !== void 0 ? _b : null,
                                    year: (_c = b.year) !== null && _c !== void 0 ? _c : null,
                                    language: (_d = b.language) !== null && _d !== void 0 ? _d : null,
                                    isbn: (_e = b.isbn) !== null && _e !== void 0 ? _e : null,
                                    genres: (_f = b.genres) !== null && _f !== void 0 ? _f : [],
                                });
                            }))
                                .execute()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SeedBooks1755432080569.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.manager.clear("book")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SeedBooks1755432080569;
}());
exports.SeedBooks1755432080569 = SeedBooks1755432080569;
