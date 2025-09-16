"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBooksQueryDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var iso_639_1_1 = require("iso-639-1");
var IsIso6391Constraint = function () {
    var _classDecorators = [(0, class_validator_1.ValidatorConstraint)({ name: 'IsIso6391', async: false })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IsIso6391Constraint = _classThis = /** @class */ (function () {
        function IsIso6391Constraint_1() {
        }
        IsIso6391Constraint_1.prototype.validate = function (value) {
            return typeof value === 'string' && iso_639_1_1.default.validate(value.toLowerCase());
        };
        IsIso6391Constraint_1.prototype.defaultMessage = function () {
            return 'Language must be a valid ISO 639-1 code (e.g., en, fr, hr)';
        };
        return IsIso6391Constraint_1;
    }());
    __setFunctionName(_classThis, "IsIso6391Constraint");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IsIso6391Constraint = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IsIso6391Constraint = _classThis;
}();
var GetBooksQueryDto = function () {
    var _a;
    var _q_decorators;
    var _q_initializers = [];
    var _q_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _author_decorators;
    var _author_initializers = [];
    var _author_extraInitializers = [];
    var _publisher_decorators;
    var _publisher_initializers = [];
    var _publisher_extraInitializers = [];
    var _maxPages_decorators;
    var _maxPages_initializers = [];
    var _maxPages_extraInitializers = [];
    var _genres_decorators;
    var _genres_initializers = [];
    var _genres_extraInitializers = [];
    var _genresMode_decorators;
    var _genresMode_initializers = [];
    var _genresMode_extraInitializers = [];
    var _language_decorators;
    var _language_initializers = [];
    var _language_extraInitializers = [];
    var _perPage_decorators;
    var _perPage_initializers = [];
    var _perPage_extraInitializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _page_extraInitializers = [];
    return _a = /** @class */ (function () {
            function GetBooksQueryDto() {
                this.q = __runInitializers(this, _q_initializers, void 0);
                this.title = (__runInitializers(this, _q_extraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.author = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _author_initializers, void 0));
                this.publisher = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _publisher_initializers, void 0));
                this.maxPages = (__runInitializers(this, _publisher_extraInitializers), __runInitializers(this, _maxPages_initializers, void 0));
                this.genres = (__runInitializers(this, _maxPages_extraInitializers), __runInitializers(this, _genres_initializers, void 0));
                this.genresMode = (__runInitializers(this, _genres_extraInitializers), __runInitializers(this, _genresMode_initializers, void 0));
                this.language = (__runInitializers(this, _genresMode_extraInitializers), __runInitializers(this, _language_initializers, void 0));
                this.perPage = (__runInitializers(this, _language_extraInitializers), __runInitializers(this, _perPage_initializers, 10));
                this.page = (__runInitializers(this, _perPage_extraInitializers), __runInitializers(this, _page_initializers, 1));
                __runInitializers(this, _page_extraInitializers);
            }
            return GetBooksQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _q_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(200), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return (typeof value === 'string' ? value.trim() : value);
                })];
            _title_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(200), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return (typeof value === 'string' ? value.trim() : value);
                })];
            _author_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(200), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return (typeof value === 'string' ? value.trim() : value);
                })];
            _publisher_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(200), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return (typeof value === 'string' ? value.trim() : value);
                })];
            _maxPages_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            _genres_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    if (Array.isArray(value)) {
                        return value.map(function (v) { return String(v).trim().toLowerCase(); }).filter(Boolean);
                    }
                    if (typeof value == 'string') {
                        return value
                            .split(',')
                            .map(function (v) { return v.trim().toLowerCase(); })
                            .filter(Boolean);
                    }
                    return undefined;
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsString)({ each: true })];
            _genresMode_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsIn)(['any', 'all', 'exact'])];
            _language_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.Validate)(IsIso6391Constraint), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return (typeof value == 'string' ? value.toLowerCase().trim() : value);
                })];
            _perPage_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return Number(value);
                }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100)];
            _page_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return Number(value);
                }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100)];
            __esDecorate(null, null, _q_decorators, { kind: "field", name: "q", static: false, private: false, access: { has: function (obj) { return "q" in obj; }, get: function (obj) { return obj.q; }, set: function (obj, value) { obj.q = value; } }, metadata: _metadata }, _q_initializers, _q_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: function (obj) { return "author" in obj; }, get: function (obj) { return obj.author; }, set: function (obj, value) { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
            __esDecorate(null, null, _publisher_decorators, { kind: "field", name: "publisher", static: false, private: false, access: { has: function (obj) { return "publisher" in obj; }, get: function (obj) { return obj.publisher; }, set: function (obj, value) { obj.publisher = value; } }, metadata: _metadata }, _publisher_initializers, _publisher_extraInitializers);
            __esDecorate(null, null, _maxPages_decorators, { kind: "field", name: "maxPages", static: false, private: false, access: { has: function (obj) { return "maxPages" in obj; }, get: function (obj) { return obj.maxPages; }, set: function (obj, value) { obj.maxPages = value; } }, metadata: _metadata }, _maxPages_initializers, _maxPages_extraInitializers);
            __esDecorate(null, null, _genres_decorators, { kind: "field", name: "genres", static: false, private: false, access: { has: function (obj) { return "genres" in obj; }, get: function (obj) { return obj.genres; }, set: function (obj, value) { obj.genres = value; } }, metadata: _metadata }, _genres_initializers, _genres_extraInitializers);
            __esDecorate(null, null, _genresMode_decorators, { kind: "field", name: "genresMode", static: false, private: false, access: { has: function (obj) { return "genresMode" in obj; }, get: function (obj) { return obj.genresMode; }, set: function (obj, value) { obj.genresMode = value; } }, metadata: _metadata }, _genresMode_initializers, _genresMode_extraInitializers);
            __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: function (obj) { return "language" in obj; }, get: function (obj) { return obj.language; }, set: function (obj, value) { obj.language = value; } }, metadata: _metadata }, _language_initializers, _language_extraInitializers);
            __esDecorate(null, null, _perPage_decorators, { kind: "field", name: "perPage", static: false, private: false, access: { has: function (obj) { return "perPage" in obj; }, get: function (obj) { return obj.perPage; }, set: function (obj, value) { obj.perPage = value; } }, metadata: _metadata }, _perPage_initializers, _perPage_extraInitializers);
            __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _page_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GetBooksQueryDto = GetBooksQueryDto;
