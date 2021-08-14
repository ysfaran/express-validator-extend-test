import "express-validator";

declare module "express-validator" {
  interface ValidationChain {
    isToken: (options?: { length?: number }) => ValidationChain;
  }
}
