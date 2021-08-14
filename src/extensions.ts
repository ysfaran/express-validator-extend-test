import { extend } from "express-validator";

type TokenValidatorOptions = {
  length?: number;
};

extend.validators({
  isToken(value: string, meta, { length = 42 }: TokenValidatorOptions = {}) {
    if (typeof value !== "string") {
      throw Error("value must be a string");
    }

    if (!value.startsWith("0x")) {
      throw Error("value  must start with '0x'");
    }

    if (value.length !== length) {
      throw Error(`value must be ${length} characters long`);
    }

    return true;
  },
});
