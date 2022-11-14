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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = __importDefault(require("./models/products.model"));
const coments_model_1 = __importDefault(require("./models/coments.model"));
const users_model_1 = __importDefault(require("./models/users.model"));
const favProducts_1 = __importDefault(require("./models/favProducts"));
const dbInit = () => Promise.all([
    products_model_1.default.sync({ alter: true }),
    users_model_1.default.sync({ alter: true }),
    coments_model_1.default.sync({ alter: true }),
    favProducts_1.default.sync({ alter: true }),
])
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield favProducts_1.default.sync({ alter: true });
}))
    .catch(() => {
    "error BDinit";
});
exports.default = dbInit;
