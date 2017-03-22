/// <reference path='./mithril-util.d.ts' />

/**
 * This represents a thennable.
 */
interface Thennable<T> {
  then<U>(success: SuccessCallback<T, U>): Thennable<U>;
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Thennable<U | V>;
  catch?(error: ErrorCallback<T>): Thennable<T>;
  catch?<U>(error: ErrorCallback<U>): Thennable<T | U>;
}

/**
 * This represents a Mithril deferred object.
 */
interface Deferred<T> {
  /**
   * Resolve this deferred's promise with a value.
   *
   * @param value The value to resolve the promise with.
   */
  resolve(value?: T): void;

  /**
   * Reject this deferred with an error.
   *
   * @param value The reason for rejecting the promise.
   */
  reject(reason?: any): void;

  /**
   * The backing promise.
   *
   * @see Promise
   */
  promise: Promise<T>;
}

/**
 * This represents a thennable success callback.
 */
interface SuccessCallback<T, U> {
  (value: T): U | Thennable<U>;
}

/**
 * This represents a thennable error callback.
 */
interface ErrorCallback<T> {
  (value: Error): T | Thennable<T>;
}

/**
 * This represents a thennable.
 */
interface Thennable<T> {
  then<U>(success: SuccessCallback<T, U>): Thennable<U>;
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Thennable<U | V>;
  catch?(error: ErrorCallback<T>): Thennable<T>;
  catch?<U>(error: ErrorCallback<U>): Thennable<T | U>;
}

/**
 * This represents a Mithril promise object.
 */
interface Promise<T> extends Thennable<T>, Property<T | Promise<T>> {
  /**
   * Chain this promise with a simple success callback, propogating
   * rejections.
   *
   * @param success The callback to call when the promise is resolved.
   * @return The chained promise.
   */
  then<U>(success: SuccessCallback<T, U>): Promise<U>;

  /**
   * Chain this promise with a success callback and error callback, without
   * propogating rejections.
   *
   * @param success The callback to call when the promise is resolved.
   * @param error The callback to call when the promise is rejected.
   * @return The chained promise.
   */
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Promise<U | V>;

  /**
   * Chain this promise with a single error callback, without propogating
   * rejections.
   *
   * @param error The callback to call when the promise is rejected.
   * @return The chained promise.
   */
  catch<U>(error: ErrorCallback<U>): Promise<T | U>;
}

/**
 * This represents a thennable.
 */
interface Thennable<T> {
  then<U>(success: SuccessCallback<T, U>): Thennable<U>;
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Thennable<U | V>;
  catch?(error: ErrorCallback<T>): Thennable<T>;
  catch?<U>(error: ErrorCallback<U>): Thennable<T | U>;
}

/**
 * This represents a Mithril deferred object.
 */
interface Deferred<T> {
  /**
   * Resolve this deferred's promise with a value.
   *
   * @param value The value to resolve the promise with.
   */
  resolve(value?: T): void;

  /**
   * Reject this deferred with an error.
   *
   * @param value The reason for rejecting the promise.
   */
  reject(reason?: any): void;

  /**
   * The backing promise.
   *
   * @see Promise
   */
  promise: Promise<T>;
}

/**
 * This represents a thennable success callback.
 */
interface SuccessCallback<T, U> {
  (value: T): U | Thennable<U>;
}

/**
 * This represents a thennable error callback.
 */
interface ErrorCallback<T> {
  (value: Error): T | Thennable<T>;
}

/**
 * This represents a thennable.
 */
interface Thennable<T> {
  then<U>(success: SuccessCallback<T, U>): Thennable<U>;
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Thennable<U | V>;
  catch?(error: ErrorCallback<T>): Thennable<T>;
  catch?<U>(error: ErrorCallback<U>): Thennable<T | U>;
}

/**
 * This represents a Mithril promise object.
 */
interface Promise<T> extends Thennable<T>, Property<T | Promise<T>> {
  /**
   * Chain this promise with a simple success callback, propogating
   * rejections.
   *
   * @param success The callback to call when the promise is resolved.
   * @return The chained promise.
   */
  then<U>(success: SuccessCallback<T, U>): Promise<U>;

  /**
   * Chain this promise with a success callback and error callback, without
   * propogating rejections.
   *
   * @param success The callback to call when the promise is resolved.
   * @param error The callback to call when the promise is rejected.
   * @return The chained promise.
   */
  then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Promise<U | V>;

  /**
   * Chain this promise with a single error callback, without propogating
   * rejections.
   *
   * @param error The callback to call when the promise is rejected.
   * @return The chained promise.
   */
  catch<U>(error: ErrorCallback<U>): Promise<T | U>;
}
