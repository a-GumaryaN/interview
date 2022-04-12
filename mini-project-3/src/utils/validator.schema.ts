const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    currency_1: { type: "string" },
    currency_2: { type: "string" },
};

export const getCurrencyPairValidate = v.compile(schema);