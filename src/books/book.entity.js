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
exports.Book = void 0;
var typeorm_1 = require("typeorm");
var Book = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _author_decorators;
    var _author_initializers = [];
    var _author_extraInitializers = [];
    var _year_decorators;
    var _year_initializers = [];
    var _year_extraInitializers = [];
    var _isbn_decorators;
    var _isbn_initializers = [];
    var _isbn_extraInitializers = [];
    var _genres_decorators;
    var _genres_initializers = [];
    var _genres_extraInitializers = [];
    var _pages_decorators;
    var _pages_initializers = [];
    var _pages_extraInitializers = [];
    var _publisher_decorators;
    var _publisher_initializers = [];
    var _publisher_extraInitializers = [];
    var _language_decorators;
    var _language_initializers = [];
    var _language_extraInitializers = [];
    var Book = _classThis = /** @class */ (function () {
        function Book_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.author = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _author_initializers, void 0));
            this.year = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _year_initializers, void 0));
            this.isbn = (__runInitializers(this, _year_extraInitializers), __runInitializers(this, _isbn_initializers, void 0));
            this.genres = (__runInitializers(this, _isbn_extraInitializers), __runInitializers(this, _genres_initializers, void 0));
            this.pages = (__runInitializers(this, _genres_extraInitializers), __runInitializers(this, _pages_initializers, void 0));
            this.publisher = (__runInitializers(this, _pages_extraInitializers), __runInitializers(this, _publisher_initializers, void 0));
            this.language = (__runInitializers(this, _publisher_extraInitializers), __runInitializers(this, _language_initializers, void 0));
            __runInitializers(this, _language_extraInitializers);
        }
        return Book_1;
    }());
    __setFunctionName(_classThis, "Book");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _author_decorators = [(0, typeorm_1.Column)()];
        _year_decorators = [(0, typeorm_1.Column)({ type: 'int', nullable: true })];
        _isbn_decorators = [(0, typeorm_1.Column)({ length: 20, nullable: true })];
        _genres_decorators = [(0, typeorm_1.Column)('text', { array: true, default: [] })];
        _pages_decorators = [(0, typeorm_1.Column)({ type: 'int', nullable: true })];
        _publisher_decorators = [(0, typeorm_1.Column)({ length: 100, nullable: true })];
        _language_decorators = [(0, typeorm_1.Column)({ length: 10, nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: function (obj) { return "author" in obj; }, get: function (obj) { return obj.author; }, set: function (obj, value) { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
        __esDecorate(null, null, _year_decorators, { kind: "field", name: "year", static: false, private: false, access: { has: function (obj) { return "year" in obj; }, get: function (obj) { return obj.year; }, set: function (obj, value) { obj.year = value; } }, metadata: _metadata }, _year_initializers, _year_extraInitializers);
        __esDecorate(null, null, _isbn_decorators, { kind: "field", name: "isbn", static: false, private: false, access: { has: function (obj) { return "isbn" in obj; }, get: function (obj) { return obj.isbn; }, set: function (obj, value) { obj.isbn = value; } }, metadata: _metadata }, _isbn_initializers, _isbn_extraInitializers);
        __esDecorate(null, null, _genres_decorators, { kind: "field", name: "genres", static: false, private: false, access: { has: function (obj) { return "genres" in obj; }, get: function (obj) { return obj.genres; }, set: function (obj, value) { obj.genres = value; } }, metadata: _metadata }, _genres_initializers, _genres_extraInitializers);
        __esDecorate(null, null, _pages_decorators, { kind: "field", name: "pages", static: false, private: false, access: { has: function (obj) { return "pages" in obj; }, get: function (obj) { return obj.pages; }, set: function (obj, value) { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _pages_extraInitializers);
        __esDecorate(null, null, _publisher_decorators, { kind: "field", name: "publisher", static: false, private: false, access: { has: function (obj) { return "publisher" in obj; }, get: function (obj) { return obj.publisher; }, set: function (obj, value) { obj.publisher = value; } }, metadata: _metadata }, _publisher_initializers, _publisher_extraInitializers);
        __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: function (obj) { return "language" in obj; }, get: function (obj) { return obj.language; }, set: function (obj, value) { obj.language = value; } }, metadata: _metadata }, _language_initializers, _language_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Book = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Book = _classThis;
}();
exports.Book = Book;
