const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    currency_pair: { type: "string" },
};

export const getCurrencyPairValidate = v.compile(schema);