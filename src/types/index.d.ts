/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
