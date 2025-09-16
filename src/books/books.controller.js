"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var roles_guard_1 = require("../auth/roles.guard");
var roles_decorator_1 = require("../auth/roles.decorator");
var BooksController = function () {
    var _classDecorators = [(0, common_1.Controller)('books')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    var _seed_decorators;
    var _getAll_decorators;
    var _findOne_decorators;
    var _getBooksAfter_decorators;
    var _getTotalBooks_decorators;
    var _delete_decorators;
    var _update_decorators;
    var _simulate_decorators;
    var BooksController = _classThis = /** @class */ (function () {
        function BooksController_1(booksService, booksStatsService) {
            this.booksService = (__runInitializers(this, _instanceExtraInitializers), booksService);
            this.booksStatsService = booksStatsService;
        }
        BooksController_1.prototype.add = function (dto) {
            return this.booksService.add(dto);
        };
        BooksController_1.prototype.seed = function (dtos) {
            return this.booksService.bulkInsert(dtos);
        };
        BooksController_1.prototype.getAll = function (query) {
            return this.booksService.getAll(query);
        };
        BooksController_1.prototype.findOne = function (id) {
            return this.booksService.getOne(id);
        };
        BooksController_1.prototype.getBooksAfter = function (year) {
            var books = this.booksService.getAll();
            return { total: this.booksStatsService.getOlderBooks(year) };
        };
        BooksController_1.prototype.getTotalBooks = function () {
            var books = this.booksService.getAll();
            return { total: this.booksStatsService.getTotalBooks() };
        };
        BooksController_1.prototype.delete = function (id) {
            return this.booksService.delete(+id);
        };
        BooksController_1.prototype.update = function (id, dto) {
            return this.booksService.update(+id, dto);
        };
        BooksController_1.prototype.simulate = function () {
            return this.booksService.simulateCrash();
        };
        return BooksController_1;
    }());
    __setFunctionName(_classThis, "BooksController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _add_decorators = [(0, common_1.Post)()];
        _seed_decorators = [(0, common_1.Post)('seed')];
        _getAll_decorators = [(0, common_1.Get)()];
        _findOne_decorators = [(0, common_1.Get)(':id')];
        _getBooksAfter_decorators = [(0, common_1.Get)('stats/after/year')];
        _getTotalBooks_decorators = [(0, common_1.Get)('stats/total')];
        _delete_decorators = [(0, common_1.Delete)(':id'), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard), (0, roles_decorator_1.Roles)('admin')];
        _update_decorators = [(0, common_1.Patch)(':id')];
        _simulate_decorators = [(0, common_1.Get)('simulate-error')];
        __esDecorate(_classThis, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _seed_decorators, { kind: "method", name: "seed", static: false, private: false, access: { has: function (obj) { return "seed" in obj; }, get: function (obj) { return obj.seed; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAll_decorators, { kind: "method", name: "getAll", static: false, private: false, access: { has: function (obj) { return "getAll" in obj; }, get: function (obj) { return obj.getAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBooksAfter_decorators, { kind: "method", name: "getBooksAfter", static: false, private: false, access: { has: function (obj) { return "getBooksAfter" in obj; }, get: function (obj) { return obj.getBooksAfter; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getTotalBooks_decorators, { kind: "method", name: "getTotalBooks", static: false, private: false, access: { has: function (obj) { return "getTotalBooks" in obj; }, get: function (obj) { return obj.getTotalBooks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delete_decorators, { kind: "method", name: "delete", static: false, private: false, access: { has: function (obj) { return "delete" in obj; }, get: function (obj) { return obj.delete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _simulate_decorators, { kind: "method", name: "simulate", static: false, private: false, access: { has: function (obj) { return "simulate" in obj; }, get: function (obj) { return obj.simulate; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BooksController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BooksController = _classThis;
}();
exports.BooksController = BooksController;
