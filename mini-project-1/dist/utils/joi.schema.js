"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrencyPairSchema = void 0;
const joi_1 = require("joi");
exports.getCurrencyPairSchema = (0, joi_1.object)({
    currency_1: (0, joi_1.string)(),
    currency_2: (0, joi_1.string)(),
});
