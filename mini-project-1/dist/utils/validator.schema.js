"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrencyPairValidate = void 0;
const Validator = require("fastest-validator");
const v = new Validator();
const schema = {
    currency_pair: { type: "string" },
};
exports.getCurrencyPairValidate = v.compile(schema);
