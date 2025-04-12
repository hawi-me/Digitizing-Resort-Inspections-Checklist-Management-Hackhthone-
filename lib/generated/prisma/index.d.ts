
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resort
 * 
 */
export type Resort = $Result.DefaultSelection<Prisma.$ResortPayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model Inspection
 * 
 */
export type Inspection = $Result.DefaultSelection<Prisma.$InspectionPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resort`: Exposes CRUD operations for the **Resort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resorts
    * const resorts = await prisma.resort.findMany()
    * ```
    */
  get resort(): Prisma.ResortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspection`: Exposes CRUD operations for the **Inspection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspections
    * const inspections = await prisma.inspection.findMany()
    * ```
    */
  get inspection(): Prisma.InspectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resort: 'Resort',
    Checklist: 'Checklist',
    Inspection: 'Inspection',
    Issue: 'Issue',
    Media: 'Media',
    Task: 'Task',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resort" | "checklist" | "inspection" | "issue" | "media" | "task" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resort: {
        payload: Prisma.$ResortPayload<ExtArgs>
        fields: Prisma.ResortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          findFirst: {
            args: Prisma.ResortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          findMany: {
            args: Prisma.ResortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>[]
          }
          create: {
            args: Prisma.ResortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          createMany: {
            args: Prisma.ResortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>[]
          }
          delete: {
            args: Prisma.ResortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          update: {
            args: Prisma.ResortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          deleteMany: {
            args: Prisma.ResortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>[]
          }
          upsert: {
            args: Prisma.ResortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResortPayload>
          }
          aggregate: {
            args: Prisma.ResortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResort>
          }
          groupBy: {
            args: Prisma.ResortGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResortGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResortCountArgs<ExtArgs>
            result: $Utils.Optional<ResortCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      Inspection: {
        payload: Prisma.$InspectionPayload<ExtArgs>
        fields: Prisma.InspectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          findFirst: {
            args: Prisma.InspectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          findMany: {
            args: Prisma.InspectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          create: {
            args: Prisma.InspectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          createMany: {
            args: Prisma.InspectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          delete: {
            args: Prisma.InspectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          update: {
            args: Prisma.InspectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          deleteMany: {
            args: Prisma.InspectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          upsert: {
            args: Prisma.InspectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          aggregate: {
            args: Prisma.InspectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspection>
          }
          groupBy: {
            args: Prisma.InspectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspectionCountArgs<ExtArgs>
            result: $Utils.Optional<InspectionCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resort?: ResortOmit
    checklist?: ChecklistOmit
    inspection?: InspectionOmit
    issue?: IssueOmit
    media?: MediaOmit
    task?: TaskOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    inspections: number
    issuesRaised: number
    tasks: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspections?: boolean | UserCountOutputTypeCountInspectionsArgs
    issuesRaised?: boolean | UserCountOutputTypeCountIssuesRaisedArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssuesRaisedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ResortCountOutputType
   */

  export type ResortCountOutputType = {
    checklists: number
  }

  export type ResortCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | ResortCountOutputTypeCountChecklistsArgs
  }

  // Custom InputTypes
  /**
   * ResortCountOutputType without action
   */
  export type ResortCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResortCountOutputType
     */
    select?: ResortCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResortCountOutputType without action
   */
  export type ResortCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }


  /**
   * Count Type ChecklistCountOutputType
   */

  export type ChecklistCountOutputType = {
    inspections: number
  }

  export type ChecklistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspections?: boolean | ChecklistCountOutputTypeCountInspectionsArgs
  }

  // Custom InputTypes
  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCountOutputType
     */
    select?: ChecklistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
  }


  /**
   * Count Type InspectionCountOutputType
   */

  export type InspectionCountOutputType = {
    issues: number
  }

  export type InspectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | InspectionCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes
  /**
   * InspectionCountOutputType without action
   */
  export type InspectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionCountOutputType
     */
    select?: InspectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InspectionCountOutputType without action
   */
  export type InspectionCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }


  /**
   * Count Type IssueCountOutputType
   */

  export type IssueCountOutputType = {
    media: number
    tasks: number
    comments: number
  }

  export type IssueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | IssueCountOutputTypeCountMediaArgs
    tasks?: boolean | IssueCountOutputTypeCountTasksArgs
    comments?: boolean | IssueCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueCountOutputType
     */
    select?: IssueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    role: string | null
    department: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    role: string | null
    department: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    role: number
    department: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    role?: true
    department?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    role?: true
    department?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    role?: true
    department?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    role: string
    department: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    inspections?: boolean | User$inspectionsArgs<ExtArgs>
    issuesRaised?: boolean | User$issuesRaisedArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "role" | "department" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspections?: boolean | User$inspectionsArgs<ExtArgs>
    issuesRaised?: boolean | User$issuesRaisedArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      inspections: Prisma.$InspectionPayload<ExtArgs>[]
      issuesRaised: Prisma.$IssuePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      role: string
      department: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inspections<T extends User$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issuesRaised<T extends User$issuesRaisedArgs<ExtArgs> = {}>(args?: Subset<T, User$issuesRaisedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.inspections
   */
  export type User$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    cursor?: InspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * User.issuesRaised
   */
  export type User$issuesRaisedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resort
   */

  export type AggregateResort = {
    _count: ResortCountAggregateOutputType | null
    _avg: ResortAvgAggregateOutputType | null
    _sum: ResortSumAggregateOutputType | null
    _min: ResortMinAggregateOutputType | null
    _max: ResortMaxAggregateOutputType | null
  }

  export type ResortAvgAggregateOutputType = {
    id: number | null
  }

  export type ResortSumAggregateOutputType = {
    id: number | null
  }

  export type ResortMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ResortMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ResortCountAggregateOutputType = {
    id: number
    name: number
    location: number
    description: number
    createdAt: number
    _all: number
  }


  export type ResortAvgAggregateInputType = {
    id?: true
  }

  export type ResortSumAggregateInputType = {
    id?: true
  }

  export type ResortMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    createdAt?: true
  }

  export type ResortMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    createdAt?: true
  }

  export type ResortCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ResortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resort to aggregate.
     */
    where?: ResortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resorts to fetch.
     */
    orderBy?: ResortOrderByWithRelationInput | ResortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resorts
    **/
    _count?: true | ResortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResortMaxAggregateInputType
  }

  export type GetResortAggregateType<T extends ResortAggregateArgs> = {
        [P in keyof T & keyof AggregateResort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResort[P]>
      : GetScalarType<T[P], AggregateResort[P]>
  }




  export type ResortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResortWhereInput
    orderBy?: ResortOrderByWithAggregationInput | ResortOrderByWithAggregationInput[]
    by: ResortScalarFieldEnum[] | ResortScalarFieldEnum
    having?: ResortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResortCountAggregateInputType | true
    _avg?: ResortAvgAggregateInputType
    _sum?: ResortSumAggregateInputType
    _min?: ResortMinAggregateInputType
    _max?: ResortMaxAggregateInputType
  }

  export type ResortGroupByOutputType = {
    id: number
    name: string
    location: string | null
    description: string | null
    createdAt: Date
    _count: ResortCountAggregateOutputType | null
    _avg: ResortAvgAggregateOutputType | null
    _sum: ResortSumAggregateOutputType | null
    _min: ResortMinAggregateOutputType | null
    _max: ResortMaxAggregateOutputType | null
  }

  type GetResortGroupByPayload<T extends ResortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResortGroupByOutputType[P]>
            : GetScalarType<T[P], ResortGroupByOutputType[P]>
        }
      >
    >


  export type ResortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
    checklists?: boolean | Resort$checklistsArgs<ExtArgs>
    _count?: boolean | ResortCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resort"]>

  export type ResortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resort"]>

  export type ResortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resort"]>

  export type ResortSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ResortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "description" | "createdAt", ExtArgs["result"]["resort"]>
  export type ResortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | Resort$checklistsArgs<ExtArgs>
    _count?: boolean | ResortCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resort"
    objects: {
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["resort"]>
    composites: {}
  }

  type ResortGetPayload<S extends boolean | null | undefined | ResortDefaultArgs> = $Result.GetResult<Prisma.$ResortPayload, S>

  type ResortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResortCountAggregateInputType | true
    }

  export interface ResortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resort'], meta: { name: 'Resort' } }
    /**
     * Find zero or one Resort that matches the filter.
     * @param {ResortFindUniqueArgs} args - Arguments to find a Resort
     * @example
     * // Get one Resort
     * const resort = await prisma.resort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResortFindUniqueArgs>(args: SelectSubset<T, ResortFindUniqueArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResortFindUniqueOrThrowArgs} args - Arguments to find a Resort
     * @example
     * // Get one Resort
     * const resort = await prisma.resort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResortFindUniqueOrThrowArgs>(args: SelectSubset<T, ResortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortFindFirstArgs} args - Arguments to find a Resort
     * @example
     * // Get one Resort
     * const resort = await prisma.resort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResortFindFirstArgs>(args?: SelectSubset<T, ResortFindFirstArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortFindFirstOrThrowArgs} args - Arguments to find a Resort
     * @example
     * // Get one Resort
     * const resort = await prisma.resort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResortFindFirstOrThrowArgs>(args?: SelectSubset<T, ResortFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resorts
     * const resorts = await prisma.resort.findMany()
     * 
     * // Get first 10 Resorts
     * const resorts = await prisma.resort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resortWithIdOnly = await prisma.resort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResortFindManyArgs>(args?: SelectSubset<T, ResortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resort.
     * @param {ResortCreateArgs} args - Arguments to create a Resort.
     * @example
     * // Create one Resort
     * const Resort = await prisma.resort.create({
     *   data: {
     *     // ... data to create a Resort
     *   }
     * })
     * 
     */
    create<T extends ResortCreateArgs>(args: SelectSubset<T, ResortCreateArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resorts.
     * @param {ResortCreateManyArgs} args - Arguments to create many Resorts.
     * @example
     * // Create many Resorts
     * const resort = await prisma.resort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResortCreateManyArgs>(args?: SelectSubset<T, ResortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resorts and returns the data saved in the database.
     * @param {ResortCreateManyAndReturnArgs} args - Arguments to create many Resorts.
     * @example
     * // Create many Resorts
     * const resort = await prisma.resort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resorts and only return the `id`
     * const resortWithIdOnly = await prisma.resort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResortCreateManyAndReturnArgs>(args?: SelectSubset<T, ResortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resort.
     * @param {ResortDeleteArgs} args - Arguments to delete one Resort.
     * @example
     * // Delete one Resort
     * const Resort = await prisma.resort.delete({
     *   where: {
     *     // ... filter to delete one Resort
     *   }
     * })
     * 
     */
    delete<T extends ResortDeleteArgs>(args: SelectSubset<T, ResortDeleteArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resort.
     * @param {ResortUpdateArgs} args - Arguments to update one Resort.
     * @example
     * // Update one Resort
     * const resort = await prisma.resort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResortUpdateArgs>(args: SelectSubset<T, ResortUpdateArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resorts.
     * @param {ResortDeleteManyArgs} args - Arguments to filter Resorts to delete.
     * @example
     * // Delete a few Resorts
     * const { count } = await prisma.resort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResortDeleteManyArgs>(args?: SelectSubset<T, ResortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resorts
     * const resort = await prisma.resort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResortUpdateManyArgs>(args: SelectSubset<T, ResortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resorts and returns the data updated in the database.
     * @param {ResortUpdateManyAndReturnArgs} args - Arguments to update many Resorts.
     * @example
     * // Update many Resorts
     * const resort = await prisma.resort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resorts and only return the `id`
     * const resortWithIdOnly = await prisma.resort.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResortUpdateManyAndReturnArgs>(args: SelectSubset<T, ResortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resort.
     * @param {ResortUpsertArgs} args - Arguments to update or create a Resort.
     * @example
     * // Update or create a Resort
     * const resort = await prisma.resort.upsert({
     *   create: {
     *     // ... data to create a Resort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resort we want to update
     *   }
     * })
     */
    upsert<T extends ResortUpsertArgs>(args: SelectSubset<T, ResortUpsertArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortCountArgs} args - Arguments to filter Resorts to count.
     * @example
     * // Count the number of Resorts
     * const count = await prisma.resort.count({
     *   where: {
     *     // ... the filter for the Resorts we want to count
     *   }
     * })
    **/
    count<T extends ResortCountArgs>(
      args?: Subset<T, ResortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResortAggregateArgs>(args: Subset<T, ResortAggregateArgs>): Prisma.PrismaPromise<GetResortAggregateType<T>>

    /**
     * Group by Resort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResortGroupByArgs['orderBy'] }
        : { orderBy?: ResortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resort model
   */
  readonly fields: ResortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklists<T extends Resort$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Resort$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resort model
   */
  interface ResortFieldRefs {
    readonly id: FieldRef<"Resort", 'Int'>
    readonly name: FieldRef<"Resort", 'String'>
    readonly location: FieldRef<"Resort", 'String'>
    readonly description: FieldRef<"Resort", 'String'>
    readonly createdAt: FieldRef<"Resort", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resort findUnique
   */
  export type ResortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter, which Resort to fetch.
     */
    where: ResortWhereUniqueInput
  }

  /**
   * Resort findUniqueOrThrow
   */
  export type ResortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter, which Resort to fetch.
     */
    where: ResortWhereUniqueInput
  }

  /**
   * Resort findFirst
   */
  export type ResortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter, which Resort to fetch.
     */
    where?: ResortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resorts to fetch.
     */
    orderBy?: ResortOrderByWithRelationInput | ResortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resorts.
     */
    cursor?: ResortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resorts.
     */
    distinct?: ResortScalarFieldEnum | ResortScalarFieldEnum[]
  }

  /**
   * Resort findFirstOrThrow
   */
  export type ResortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter, which Resort to fetch.
     */
    where?: ResortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resorts to fetch.
     */
    orderBy?: ResortOrderByWithRelationInput | ResortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resorts.
     */
    cursor?: ResortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resorts.
     */
    distinct?: ResortScalarFieldEnum | ResortScalarFieldEnum[]
  }

  /**
   * Resort findMany
   */
  export type ResortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter, which Resorts to fetch.
     */
    where?: ResortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resorts to fetch.
     */
    orderBy?: ResortOrderByWithRelationInput | ResortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resorts.
     */
    cursor?: ResortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resorts.
     */
    skip?: number
    distinct?: ResortScalarFieldEnum | ResortScalarFieldEnum[]
  }

  /**
   * Resort create
   */
  export type ResortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * The data needed to create a Resort.
     */
    data: XOR<ResortCreateInput, ResortUncheckedCreateInput>
  }

  /**
   * Resort createMany
   */
  export type ResortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resorts.
     */
    data: ResortCreateManyInput | ResortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resort createManyAndReturn
   */
  export type ResortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * The data used to create many Resorts.
     */
    data: ResortCreateManyInput | ResortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resort update
   */
  export type ResortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * The data needed to update a Resort.
     */
    data: XOR<ResortUpdateInput, ResortUncheckedUpdateInput>
    /**
     * Choose, which Resort to update.
     */
    where: ResortWhereUniqueInput
  }

  /**
   * Resort updateMany
   */
  export type ResortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resorts.
     */
    data: XOR<ResortUpdateManyMutationInput, ResortUncheckedUpdateManyInput>
    /**
     * Filter which Resorts to update
     */
    where?: ResortWhereInput
    /**
     * Limit how many Resorts to update.
     */
    limit?: number
  }

  /**
   * Resort updateManyAndReturn
   */
  export type ResortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * The data used to update Resorts.
     */
    data: XOR<ResortUpdateManyMutationInput, ResortUncheckedUpdateManyInput>
    /**
     * Filter which Resorts to update
     */
    where?: ResortWhereInput
    /**
     * Limit how many Resorts to update.
     */
    limit?: number
  }

  /**
   * Resort upsert
   */
  export type ResortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * The filter to search for the Resort to update in case it exists.
     */
    where: ResortWhereUniqueInput
    /**
     * In case the Resort found by the `where` argument doesn't exist, create a new Resort with this data.
     */
    create: XOR<ResortCreateInput, ResortUncheckedCreateInput>
    /**
     * In case the Resort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResortUpdateInput, ResortUncheckedUpdateInput>
  }

  /**
   * Resort delete
   */
  export type ResortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    /**
     * Filter which Resort to delete.
     */
    where: ResortWhereUniqueInput
  }

  /**
   * Resort deleteMany
   */
  export type ResortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resorts to delete
     */
    where?: ResortWhereInput
    /**
     * Limit how many Resorts to delete.
     */
    limit?: number
  }

  /**
   * Resort.checklists
   */
  export type Resort$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Resort without action
   */
  export type ResortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistAvgAggregateOutputType = {
    id: number | null
    resortId: number | null
  }

  export type ChecklistSumAggregateOutputType = {
    id: number | null
    resortId: number | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: number | null
    resortId: number | null
    category: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: number | null
    resortId: number | null
    category: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    resortId: number
    category: number
    title: number
    description: number
    createdAt: number
    _all: number
  }


  export type ChecklistAvgAggregateInputType = {
    id?: true
    resortId?: true
  }

  export type ChecklistSumAggregateInputType = {
    id?: true
    resortId?: true
  }

  export type ChecklistMinAggregateInputType = {
    id?: true
    resortId?: true
    category?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    resortId?: true
    category?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    resortId?: true
    category?: true
    title?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _avg?: ChecklistAvgAggregateInputType
    _sum?: ChecklistSumAggregateInputType
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: number
    resortId: number | null
    category: string
    title: string
    description: string | null
    createdAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resortId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    resort?: boolean | Checklist$resortArgs<ExtArgs>
    inspections?: boolean | Checklist$inspectionsArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resortId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    resort?: boolean | Checklist$resortArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resortId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    resort?: boolean | Checklist$resortArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    resortId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resortId" | "category" | "title" | "description" | "createdAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resort?: boolean | Checklist$resortArgs<ExtArgs>
    inspections?: boolean | Checklist$inspectionsArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resort?: boolean | Checklist$resortArgs<ExtArgs>
  }
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resort?: boolean | Checklist$resortArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      resort: Prisma.$ResortPayload<ExtArgs> | null
      inspections: Prisma.$InspectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resortId: number | null
      category: string
      title: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checklists and returns the data saved in the database.
     * @param {ChecklistCreateManyAndReturnArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists and returns the data updated in the database.
     * @param {ChecklistUpdateManyAndReturnArgs} args - Arguments to update many Checklists.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resort<T extends Checklist$resortArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$resortArgs<ExtArgs>>): Prisma__ResortClient<$Result.GetResult<Prisma.$ResortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inspections<T extends Checklist$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'Int'>
    readonly resortId: FieldRef<"Checklist", 'Int'>
    readonly category: FieldRef<"Checklist", 'String'>
    readonly title: FieldRef<"Checklist", 'String'>
    readonly description: FieldRef<"Checklist", 'String'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist createManyAndReturn
   */
  export type ChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist updateManyAndReturn
   */
  export type ChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist.resort
   */
  export type Checklist$resortArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resort
     */
    select?: ResortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resort
     */
    omit?: ResortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResortInclude<ExtArgs> | null
    where?: ResortWhereInput
  }

  /**
   * Checklist.inspections
   */
  export type Checklist$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    cursor?: InspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Inspection
   */

  export type AggregateInspection = {
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  export type InspectionAvgAggregateOutputType = {
    id: number | null
    checklistId: number | null
    inspectorId: number | null
  }

  export type InspectionSumAggregateOutputType = {
    id: number | null
    checklistId: number | null
    inspectorId: number | null
  }

  export type InspectionMinAggregateOutputType = {
    id: number | null
    checklistId: number | null
    inspectorId: number | null
    inspectionDate: Date | null
    notes: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InspectionMaxAggregateOutputType = {
    id: number | null
    checklistId: number | null
    inspectorId: number | null
    inspectionDate: Date | null
    notes: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InspectionCountAggregateOutputType = {
    id: number
    checklistId: number
    inspectorId: number
    inspectionDate: number
    notes: number
    status: number
    createdAt: number
    _all: number
  }


  export type InspectionAvgAggregateInputType = {
    id?: true
    checklistId?: true
    inspectorId?: true
  }

  export type InspectionSumAggregateInputType = {
    id?: true
    checklistId?: true
    inspectorId?: true
  }

  export type InspectionMinAggregateInputType = {
    id?: true
    checklistId?: true
    inspectorId?: true
    inspectionDate?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type InspectionMaxAggregateInputType = {
    id?: true
    checklistId?: true
    inspectorId?: true
    inspectionDate?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type InspectionCountAggregateInputType = {
    id?: true
    checklistId?: true
    inspectorId?: true
    inspectionDate?: true
    notes?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InspectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspection to aggregate.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inspections
    **/
    _count?: true | InspectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionMaxAggregateInputType
  }

  export type GetInspectionAggregateType<T extends InspectionAggregateArgs> = {
        [P in keyof T & keyof AggregateInspection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspection[P]>
      : GetScalarType<T[P], AggregateInspection[P]>
  }




  export type InspectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithAggregationInput | InspectionOrderByWithAggregationInput[]
    by: InspectionScalarFieldEnum[] | InspectionScalarFieldEnum
    having?: InspectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionCountAggregateInputType | true
    _avg?: InspectionAvgAggregateInputType
    _sum?: InspectionSumAggregateInputType
    _min?: InspectionMinAggregateInputType
    _max?: InspectionMaxAggregateInputType
  }

  export type InspectionGroupByOutputType = {
    id: number
    checklistId: number | null
    inspectorId: number | null
    inspectionDate: Date
    notes: string | null
    status: string
    createdAt: Date
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  type GetInspectionGroupByPayload<T extends InspectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionGroupByOutputType[P]>
        }
      >
    >


  export type InspectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    inspectorId?: boolean
    inspectionDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
    issues?: boolean | Inspection$issuesArgs<ExtArgs>
    _count?: boolean | InspectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    inspectorId?: boolean
    inspectionDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    inspectorId?: boolean
    inspectionDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectScalar = {
    id?: boolean
    checklistId?: boolean
    inspectorId?: boolean
    inspectionDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InspectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checklistId" | "inspectorId" | "inspectionDate" | "notes" | "status" | "createdAt", ExtArgs["result"]["inspection"]>
  export type InspectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
    issues?: boolean | Inspection$issuesArgs<ExtArgs>
    _count?: boolean | InspectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InspectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
  }
  export type InspectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | Inspection$checklistArgs<ExtArgs>
    inspector?: boolean | Inspection$inspectorArgs<ExtArgs>
  }

  export type $InspectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inspection"
    objects: {
      checklist: Prisma.$ChecklistPayload<ExtArgs> | null
      inspector: Prisma.$UserPayload<ExtArgs> | null
      issues: Prisma.$IssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checklistId: number | null
      inspectorId: number | null
      inspectionDate: Date
      notes: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["inspection"]>
    composites: {}
  }

  type InspectionGetPayload<S extends boolean | null | undefined | InspectionDefaultArgs> = $Result.GetResult<Prisma.$InspectionPayload, S>

  type InspectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspectionCountAggregateInputType | true
    }

  export interface InspectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inspection'], meta: { name: 'Inspection' } }
    /**
     * Find zero or one Inspection that matches the filter.
     * @param {InspectionFindUniqueArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspectionFindUniqueArgs>(args: SelectSubset<T, InspectionFindUniqueArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inspection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspectionFindUniqueOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspectionFindUniqueOrThrowArgs>(args: SelectSubset<T, InspectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindFirstArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspectionFindFirstArgs>(args?: SelectSubset<T, InspectionFindFirstArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindFirstOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspectionFindFirstOrThrowArgs>(args?: SelectSubset<T, InspectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inspections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspections
     * const inspections = await prisma.inspection.findMany()
     * 
     * // Get first 10 Inspections
     * const inspections = await prisma.inspection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionWithIdOnly = await prisma.inspection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspectionFindManyArgs>(args?: SelectSubset<T, InspectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inspection.
     * @param {InspectionCreateArgs} args - Arguments to create a Inspection.
     * @example
     * // Create one Inspection
     * const Inspection = await prisma.inspection.create({
     *   data: {
     *     // ... data to create a Inspection
     *   }
     * })
     * 
     */
    create<T extends InspectionCreateArgs>(args: SelectSubset<T, InspectionCreateArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inspections.
     * @param {InspectionCreateManyArgs} args - Arguments to create many Inspections.
     * @example
     * // Create many Inspections
     * const inspection = await prisma.inspection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspectionCreateManyArgs>(args?: SelectSubset<T, InspectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inspections and returns the data saved in the database.
     * @param {InspectionCreateManyAndReturnArgs} args - Arguments to create many Inspections.
     * @example
     * // Create many Inspections
     * const inspection = await prisma.inspection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inspections and only return the `id`
     * const inspectionWithIdOnly = await prisma.inspection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspectionCreateManyAndReturnArgs>(args?: SelectSubset<T, InspectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inspection.
     * @param {InspectionDeleteArgs} args - Arguments to delete one Inspection.
     * @example
     * // Delete one Inspection
     * const Inspection = await prisma.inspection.delete({
     *   where: {
     *     // ... filter to delete one Inspection
     *   }
     * })
     * 
     */
    delete<T extends InspectionDeleteArgs>(args: SelectSubset<T, InspectionDeleteArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inspection.
     * @param {InspectionUpdateArgs} args - Arguments to update one Inspection.
     * @example
     * // Update one Inspection
     * const inspection = await prisma.inspection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspectionUpdateArgs>(args: SelectSubset<T, InspectionUpdateArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inspections.
     * @param {InspectionDeleteManyArgs} args - Arguments to filter Inspections to delete.
     * @example
     * // Delete a few Inspections
     * const { count } = await prisma.inspection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspectionDeleteManyArgs>(args?: SelectSubset<T, InspectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspections
     * const inspection = await prisma.inspection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspectionUpdateManyArgs>(args: SelectSubset<T, InspectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspections and returns the data updated in the database.
     * @param {InspectionUpdateManyAndReturnArgs} args - Arguments to update many Inspections.
     * @example
     * // Update many Inspections
     * const inspection = await prisma.inspection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inspections and only return the `id`
     * const inspectionWithIdOnly = await prisma.inspection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspectionUpdateManyAndReturnArgs>(args: SelectSubset<T, InspectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inspection.
     * @param {InspectionUpsertArgs} args - Arguments to update or create a Inspection.
     * @example
     * // Update or create a Inspection
     * const inspection = await prisma.inspection.upsert({
     *   create: {
     *     // ... data to create a Inspection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspection we want to update
     *   }
     * })
     */
    upsert<T extends InspectionUpsertArgs>(args: SelectSubset<T, InspectionUpsertArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionCountArgs} args - Arguments to filter Inspections to count.
     * @example
     * // Count the number of Inspections
     * const count = await prisma.inspection.count({
     *   where: {
     *     // ... the filter for the Inspections we want to count
     *   }
     * })
    **/
    count<T extends InspectionCountArgs>(
      args?: Subset<T, InspectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InspectionAggregateArgs>(args: Subset<T, InspectionAggregateArgs>): Prisma.PrismaPromise<GetInspectionAggregateType<T>>

    /**
     * Group by Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InspectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspectionGroupByArgs['orderBy'] }
        : { orderBy?: InspectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InspectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inspection model
   */
  readonly fields: InspectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inspection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklist<T extends Inspection$checklistArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$checklistArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inspector<T extends Inspection$inspectorArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$inspectorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    issues<T extends Inspection$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inspection model
   */
  interface InspectionFieldRefs {
    readonly id: FieldRef<"Inspection", 'Int'>
    readonly checklistId: FieldRef<"Inspection", 'Int'>
    readonly inspectorId: FieldRef<"Inspection", 'Int'>
    readonly inspectionDate: FieldRef<"Inspection", 'DateTime'>
    readonly notes: FieldRef<"Inspection", 'String'>
    readonly status: FieldRef<"Inspection", 'String'>
    readonly createdAt: FieldRef<"Inspection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inspection findUnique
   */
  export type InspectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection findUniqueOrThrow
   */
  export type InspectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection findFirst
   */
  export type InspectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection findFirstOrThrow
   */
  export type InspectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection findMany
   */
  export type InspectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspections to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection create
   */
  export type InspectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inspection.
     */
    data?: XOR<InspectionCreateInput, InspectionUncheckedCreateInput>
  }

  /**
   * Inspection createMany
   */
  export type InspectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inspections.
     */
    data: InspectionCreateManyInput | InspectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inspection createManyAndReturn
   */
  export type InspectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * The data used to create many Inspections.
     */
    data: InspectionCreateManyInput | InspectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspection update
   */
  export type InspectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inspection.
     */
    data: XOR<InspectionUpdateInput, InspectionUncheckedUpdateInput>
    /**
     * Choose, which Inspection to update.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection updateMany
   */
  export type InspectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inspections.
     */
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyInput>
    /**
     * Filter which Inspections to update
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to update.
     */
    limit?: number
  }

  /**
   * Inspection updateManyAndReturn
   */
  export type InspectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * The data used to update Inspections.
     */
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyInput>
    /**
     * Filter which Inspections to update
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspection upsert
   */
  export type InspectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inspection to update in case it exists.
     */
    where: InspectionWhereUniqueInput
    /**
     * In case the Inspection found by the `where` argument doesn't exist, create a new Inspection with this data.
     */
    create: XOR<InspectionCreateInput, InspectionUncheckedCreateInput>
    /**
     * In case the Inspection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspectionUpdateInput, InspectionUncheckedUpdateInput>
  }

  /**
   * Inspection delete
   */
  export type InspectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter which Inspection to delete.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection deleteMany
   */
  export type InspectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspections to delete
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to delete.
     */
    limit?: number
  }

  /**
   * Inspection.checklist
   */
  export type Inspection$checklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
  }

  /**
   * Inspection.inspector
   */
  export type Inspection$inspectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Inspection.issues
   */
  export type Inspection$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Inspection without action
   */
  export type InspectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueAvgAggregateOutputType = {
    id: number | null
    inspectionId: number | null
    raisedById: number | null
  }

  export type IssueSumAggregateOutputType = {
    id: number | null
    inspectionId: number | null
    raisedById: number | null
  }

  export type IssueMinAggregateOutputType = {
    id: number | null
    inspectionId: number | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    raisedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: number | null
    inspectionId: number | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    raisedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    inspectionId: number
    title: number
    description: number
    priority: number
    status: number
    raisedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssueAvgAggregateInputType = {
    id?: true
    inspectionId?: true
    raisedById?: true
  }

  export type IssueSumAggregateInputType = {
    id?: true
    inspectionId?: true
    raisedById?: true
  }

  export type IssueMinAggregateInputType = {
    id?: true
    inspectionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    raisedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    inspectionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    raisedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    inspectionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    raisedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _avg?: IssueAvgAggregateInputType
    _sum?: IssueSumAggregateInputType
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: number
    inspectionId: number
    title: string
    description: string | null
    priority: string
    status: string
    raisedById: number | null
    createdAt: Date
    updatedAt: Date
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    raisedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
    media?: boolean | Issue$mediaArgs<ExtArgs>
    tasks?: boolean | Issue$tasksArgs<ExtArgs>
    comments?: boolean | Issue$commentsArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    raisedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    raisedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    inspectionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    raisedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inspectionId" | "title" | "description" | "priority" | "status" | "raisedById" | "createdAt" | "updatedAt", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
    media?: boolean | Issue$mediaArgs<ExtArgs>
    tasks?: boolean | Issue$tasksArgs<ExtArgs>
    comments?: boolean | Issue$commentsArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
    raisedBy?: boolean | Issue$raisedByArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      inspection: Prisma.$InspectionPayload<ExtArgs>
      raisedBy: Prisma.$UserPayload<ExtArgs> | null
      media: Prisma.$MediaPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inspectionId: number
      title: string
      description: string | null
      priority: string
      status: string
      raisedById: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inspection<T extends InspectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InspectionDefaultArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raisedBy<T extends Issue$raisedByArgs<ExtArgs> = {}>(args?: Subset<T, Issue$raisedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    media<T extends Issue$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Issue$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Issue$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Issue$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Issue$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Issue$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'Int'>
    readonly inspectionId: FieldRef<"Issue", 'Int'>
    readonly title: FieldRef<"Issue", 'String'>
    readonly description: FieldRef<"Issue", 'String'>
    readonly priority: FieldRef<"Issue", 'String'>
    readonly status: FieldRef<"Issue", 'String'>
    readonly raisedById: FieldRef<"Issue", 'Int'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue.raisedBy
   */
  export type Issue$raisedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Issue.media
   */
  export type Issue$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Issue.tasks
   */
  export type Issue$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Issue.comments
   */
  export type Issue$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    issueId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    issueId: number | null
    fileUrl: string | null
    mediaType: string | null
    uploadedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    issueId: number | null
    fileUrl: string | null
    mediaType: string | null
    uploadedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    issueId: number
    fileUrl: number
    mediaType: number
    uploadedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    issueId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    issueId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    issueId?: true
    fileUrl?: true
    mediaType?: true
    uploadedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    issueId?: true
    fileUrl?: true
    mediaType?: true
    uploadedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    issueId?: true
    fileUrl?: true
    mediaType?: true
    uploadedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    issueId: number
    fileUrl: string
    mediaType: string
    uploadedAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fileUrl?: boolean
    mediaType?: boolean
    uploadedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fileUrl?: boolean
    mediaType?: boolean
    uploadedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fileUrl?: boolean
    mediaType?: boolean
    uploadedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    issueId?: boolean
    fileUrl?: boolean
    mediaType?: boolean
    uploadedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueId" | "fileUrl" | "mediaType" | "uploadedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issueId: number
      fileUrl: string
      mediaType: string
      uploadedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly issueId: FieldRef<"Media", 'Int'>
    readonly fileUrl: FieldRef<"Media", 'String'>
    readonly mediaType: FieldRef<"Media", 'String'>
    readonly uploadedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    assignedToId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    issueId: number | null
    assignedToId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    issueId: number | null
    assignedToId: number | null
    description: string | null
    status: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    issueId: number | null
    assignedToId: number | null
    description: string | null
    status: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    issueId: number
    assignedToId: number
    description: number
    status: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    issueId?: true
    assignedToId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    issueId?: true
    assignedToId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    issueId?: true
    assignedToId?: true
    description?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    issueId?: true
    assignedToId?: true
    description?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    issueId?: true
    assignedToId?: true
    description?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    issueId: number
    assignedToId: number | null
    description: string
    status: string
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    assignedToId?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    assignedToId?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    assignedToId?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    issueId?: boolean
    assignedToId?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueId" | "assignedToId" | "description" | "status" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issueId: number
      assignedToId: number | null
      description: string
      status: string
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Task$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly issueId: FieldRef<"Task", 'Int'>
    readonly assignedToId: FieldRef<"Task", 'Int'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignedTo
   */
  export type Task$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    issueId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    issueId: number | null
    userId: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    issueId: number | null
    userId: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    issueId: number
    userId: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    issueId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    issueId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    issueId?: true
    userId?: true
    comment?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    issueId?: true
    userId?: true
    comment?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    issueId?: true
    userId?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    issueId: number
    userId: number | null
    comment: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    issueId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueId" | "userId" | "comment" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issueId: number
      userId: number | null
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Comment$userArgs<ExtArgs> = {}>(args?: Subset<T, Comment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly issueId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.user
   */
  export type Comment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    role: 'role',
    department: 'department',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResortScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ResortScalarFieldEnum = (typeof ResortScalarFieldEnum)[keyof typeof ResortScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    resortId: 'resortId',
    category: 'category',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const InspectionScalarFieldEnum: {
    id: 'id',
    checklistId: 'checklistId',
    inspectorId: 'inspectorId',
    inspectionDate: 'inspectionDate',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InspectionScalarFieldEnum = (typeof InspectionScalarFieldEnum)[keyof typeof InspectionScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    inspectionId: 'inspectionId',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    raisedById: 'raisedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    fileUrl: 'fileUrl',
    mediaType: 'mediaType',
    uploadedAt: 'uploadedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    assignedToId: 'assignedToId',
    description: 'description',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    userId: 'userId',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    inspections?: InspectionListRelationFilter
    issuesRaised?: IssueListRelationFilter
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inspections?: InspectionOrderByRelationAggregateInput
    issuesRaised?: IssueOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    inspections?: InspectionListRelationFilter
    issuesRaised?: IssueListRelationFilter
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResortWhereInput = {
    AND?: ResortWhereInput | ResortWhereInput[]
    OR?: ResortWhereInput[]
    NOT?: ResortWhereInput | ResortWhereInput[]
    id?: IntFilter<"Resort"> | number
    name?: StringFilter<"Resort"> | string
    location?: StringNullableFilter<"Resort"> | string | null
    description?: StringNullableFilter<"Resort"> | string | null
    createdAt?: DateTimeFilter<"Resort"> | Date | string
    checklists?: ChecklistListRelationFilter
  }

  export type ResortOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    checklists?: ChecklistOrderByRelationAggregateInput
  }

  export type ResortWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResortWhereInput | ResortWhereInput[]
    OR?: ResortWhereInput[]
    NOT?: ResortWhereInput | ResortWhereInput[]
    name?: StringFilter<"Resort"> | string
    location?: StringNullableFilter<"Resort"> | string | null
    description?: StringNullableFilter<"Resort"> | string | null
    createdAt?: DateTimeFilter<"Resort"> | Date | string
    checklists?: ChecklistListRelationFilter
  }, "id">

  export type ResortOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResortCountOrderByAggregateInput
    _avg?: ResortAvgOrderByAggregateInput
    _max?: ResortMaxOrderByAggregateInput
    _min?: ResortMinOrderByAggregateInput
    _sum?: ResortSumOrderByAggregateInput
  }

  export type ResortScalarWhereWithAggregatesInput = {
    AND?: ResortScalarWhereWithAggregatesInput | ResortScalarWhereWithAggregatesInput[]
    OR?: ResortScalarWhereWithAggregatesInput[]
    NOT?: ResortScalarWhereWithAggregatesInput | ResortScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resort"> | number
    name?: StringWithAggregatesFilter<"Resort"> | string
    location?: StringNullableWithAggregatesFilter<"Resort"> | string | null
    description?: StringNullableWithAggregatesFilter<"Resort"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resort"> | Date | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: IntFilter<"Checklist"> | number
    resortId?: IntNullableFilter<"Checklist"> | number | null
    category?: StringFilter<"Checklist"> | string
    title?: StringFilter<"Checklist"> | string
    description?: StringNullableFilter<"Checklist"> | string | null
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    resort?: XOR<ResortNullableScalarRelationFilter, ResortWhereInput> | null
    inspections?: InspectionListRelationFilter
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    resortId?: SortOrderInput | SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resort?: ResortOrderByWithRelationInput
    inspections?: InspectionOrderByRelationAggregateInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    resortId?: IntNullableFilter<"Checklist"> | number | null
    category?: StringFilter<"Checklist"> | string
    title?: StringFilter<"Checklist"> | string
    description?: StringNullableFilter<"Checklist"> | string | null
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    resort?: XOR<ResortNullableScalarRelationFilter, ResortWhereInput> | null
    inspections?: InspectionListRelationFilter
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    resortId?: SortOrderInput | SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _avg?: ChecklistAvgOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
    _sum?: ChecklistSumOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Checklist"> | number
    resortId?: IntNullableWithAggregatesFilter<"Checklist"> | number | null
    category?: StringWithAggregatesFilter<"Checklist"> | string
    title?: StringWithAggregatesFilter<"Checklist"> | string
    description?: StringNullableWithAggregatesFilter<"Checklist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type InspectionWhereInput = {
    AND?: InspectionWhereInput | InspectionWhereInput[]
    OR?: InspectionWhereInput[]
    NOT?: InspectionWhereInput | InspectionWhereInput[]
    id?: IntFilter<"Inspection"> | number
    checklistId?: IntNullableFilter<"Inspection"> | number | null
    inspectorId?: IntNullableFilter<"Inspection"> | number | null
    inspectionDate?: DateTimeFilter<"Inspection"> | Date | string
    notes?: StringNullableFilter<"Inspection"> | string | null
    status?: StringFilter<"Inspection"> | string
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
    checklist?: XOR<ChecklistNullableScalarRelationFilter, ChecklistWhereInput> | null
    inspector?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    issues?: IssueListRelationFilter
  }

  export type InspectionOrderByWithRelationInput = {
    id?: SortOrder
    checklistId?: SortOrderInput | SortOrder
    inspectorId?: SortOrderInput | SortOrder
    inspectionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    checklist?: ChecklistOrderByWithRelationInput
    inspector?: UserOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
  }

  export type InspectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InspectionWhereInput | InspectionWhereInput[]
    OR?: InspectionWhereInput[]
    NOT?: InspectionWhereInput | InspectionWhereInput[]
    checklistId?: IntNullableFilter<"Inspection"> | number | null
    inspectorId?: IntNullableFilter<"Inspection"> | number | null
    inspectionDate?: DateTimeFilter<"Inspection"> | Date | string
    notes?: StringNullableFilter<"Inspection"> | string | null
    status?: StringFilter<"Inspection"> | string
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
    checklist?: XOR<ChecklistNullableScalarRelationFilter, ChecklistWhereInput> | null
    inspector?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    issues?: IssueListRelationFilter
  }, "id">

  export type InspectionOrderByWithAggregationInput = {
    id?: SortOrder
    checklistId?: SortOrderInput | SortOrder
    inspectorId?: SortOrderInput | SortOrder
    inspectionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InspectionCountOrderByAggregateInput
    _avg?: InspectionAvgOrderByAggregateInput
    _max?: InspectionMaxOrderByAggregateInput
    _min?: InspectionMinOrderByAggregateInput
    _sum?: InspectionSumOrderByAggregateInput
  }

  export type InspectionScalarWhereWithAggregatesInput = {
    AND?: InspectionScalarWhereWithAggregatesInput | InspectionScalarWhereWithAggregatesInput[]
    OR?: InspectionScalarWhereWithAggregatesInput[]
    NOT?: InspectionScalarWhereWithAggregatesInput | InspectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inspection"> | number
    checklistId?: IntNullableWithAggregatesFilter<"Inspection"> | number | null
    inspectorId?: IntNullableWithAggregatesFilter<"Inspection"> | number | null
    inspectionDate?: DateTimeWithAggregatesFilter<"Inspection"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Inspection"> | string | null
    status?: StringWithAggregatesFilter<"Inspection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inspection"> | Date | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: IntFilter<"Issue"> | number
    inspectionId?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringNullableFilter<"Issue"> | string | null
    priority?: StringFilter<"Issue"> | string
    status?: StringFilter<"Issue"> | string
    raisedById?: IntNullableFilter<"Issue"> | number | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
    raisedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    media?: MediaListRelationFilter
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    raisedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inspection?: InspectionOrderByWithRelationInput
    raisedBy?: UserOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    inspectionId?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringNullableFilter<"Issue"> | string | null
    priority?: StringFilter<"Issue"> | string
    status?: StringFilter<"Issue"> | string
    raisedById?: IntNullableFilter<"Issue"> | number | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
    raisedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    media?: MediaListRelationFilter
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    raisedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _avg?: IssueAvgOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
    _sum?: IssueSumOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Issue"> | number
    inspectionId?: IntWithAggregatesFilter<"Issue"> | number
    title?: StringWithAggregatesFilter<"Issue"> | string
    description?: StringNullableWithAggregatesFilter<"Issue"> | string | null
    priority?: StringWithAggregatesFilter<"Issue"> | string
    status?: StringWithAggregatesFilter<"Issue"> | string
    raisedById?: IntNullableWithAggregatesFilter<"Issue"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    issueId?: IntFilter<"Media"> | number
    fileUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    issueId?: SortOrder
    fileUrl?: SortOrder
    mediaType?: SortOrder
    uploadedAt?: SortOrder
    issue?: IssueOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    issueId?: IntFilter<"Media"> | number
    fileUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    issueId?: SortOrder
    fileUrl?: SortOrder
    mediaType?: SortOrder
    uploadedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    issueId?: IntWithAggregatesFilter<"Media"> | number
    fileUrl?: StringWithAggregatesFilter<"Media"> | string
    mediaType?: StringWithAggregatesFilter<"Media"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    issueId?: IntFilter<"Task"> | number
    assignedToId?: IntNullableFilter<"Task"> | number | null
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issue?: IssueOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    issueId?: IntFilter<"Task"> | number
    assignedToId?: IntNullableFilter<"Task"> | number | null
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    issueId?: IntWithAggregatesFilter<"Task"> | number
    assignedToId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    description?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    issueId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrderInput | SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    issue?: IssueOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    issueId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrderInput | SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    issueId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    comment?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueCreateNestedManyWithoutRaisedByInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueUncheckedCreateNestedManyWithoutRaisedByInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUncheckedUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResortCreateInput = {
    name: string
    location?: string | null
    description?: string | null
    createdAt?: Date | string
    checklists?: ChecklistCreateNestedManyWithoutResortInput
  }

  export type ResortUncheckedCreateInput = {
    id?: number
    name: string
    location?: string | null
    description?: string | null
    createdAt?: Date | string
    checklists?: ChecklistUncheckedCreateNestedManyWithoutResortInput
  }

  export type ResortUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUpdateManyWithoutResortNestedInput
  }

  export type ResortUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ChecklistUncheckedUpdateManyWithoutResortNestedInput
  }

  export type ResortCreateManyInput = {
    id?: number
    name: string
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ResortUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResortUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
    resort?: ResortCreateNestedOneWithoutChecklistsInput
    inspections?: InspectionCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: number
    resortId?: number | null
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resort?: ResortUpdateOneWithoutChecklistsNestedInput
    inspections?: InspectionUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resortId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistCreateManyInput = {
    id?: number
    resortId?: number | null
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resortId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionCreateInput = {
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    checklist?: ChecklistCreateNestedOneWithoutInspectionsInput
    inspector?: UserCreateNestedOneWithoutInspectionsInput
    issues?: IssueCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateInput = {
    id?: number
    checklistId?: number | null
    inspectorId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUpdateInput = {
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneWithoutInspectionsNestedInput
    inspector?: UserUpdateOneWithoutInspectionsNestedInput
    issues?: IssueUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checklistId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectorId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionCreateManyInput = {
    id?: number
    checklistId?: number | null
    inspectorId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type InspectionUpdateManyMutationInput = {
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checklistId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectorId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutIssuesInput
    raisedBy?: UserCreateNestedOneWithoutIssuesRaisedInput
    media?: MediaCreateNestedManyWithoutIssueInput
    tasks?: TaskCreateNestedManyWithoutIssueInput
    comments?: CommentCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutIssueInput
    tasks?: TaskUncheckedCreateNestedManyWithoutIssueInput
    comments?: CommentUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutIssuesNestedInput
    raisedBy?: UserUpdateOneWithoutIssuesRaisedNestedInput
    media?: MediaUpdateManyWithoutIssueNestedInput
    tasks?: TaskUpdateManyWithoutIssueNestedInput
    comments?: CommentUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutIssueNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutIssueNestedInput
    comments?: CommentUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
    issue: IssueCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    issueId: number
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
  }

  export type MediaUpdateInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: number
    issueId: number
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issue: IssueCreateNestedOneWithoutTasksInput
    assignedTo?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    issueId: number
    assignedToId?: number | null
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: number
    issueId: number
    assignedToId?: number | null
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    comment: string
    createdAt?: Date | string
    issue: IssueCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    issueId: number
    userId?: number | null
    comment: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    issueId: number
    userId?: number | null
    comment: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InspectionListRelationFilter = {
    every?: InspectionWhereInput
    some?: InspectionWhereInput
    none?: InspectionWhereInput
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InspectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChecklistListRelationFilter = {
    every?: ChecklistWhereInput
    some?: ChecklistWhereInput
    none?: ChecklistWhereInput
  }

  export type ChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResortCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ResortAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResortMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ResortMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ResortSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ResortNullableScalarRelationFilter = {
    is?: ResortWhereInput | null
    isNot?: ResortWhereInput | null
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    resortId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    resortId?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    resortId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    resortId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    resortId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ChecklistNullableScalarRelationFilter = {
    is?: ChecklistWhereInput | null
    isNot?: ChecklistWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InspectionCountOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    inspectorId?: SortOrder
    inspectionDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionAvgOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    inspectorId?: SortOrder
  }

  export type InspectionMaxOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    inspectorId?: SortOrder
    inspectionDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionMinOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    inspectorId?: SortOrder
    inspectionDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionSumOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    inspectorId?: SortOrder
  }

  export type InspectionScalarRelationFilter = {
    is?: InspectionWhereInput
    isNot?: InspectionWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    raisedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueAvgOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    raisedById?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    raisedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    raisedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueSumOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    raisedById?: SortOrder
  }

  export type IssueScalarRelationFilter = {
    is?: IssueWhereInput
    isNot?: IssueWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fileUrl?: SortOrder
    mediaType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fileUrl?: SortOrder
    mediaType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fileUrl?: SortOrder
    mediaType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    assignedToId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
  }

  export type InspectionCreateNestedManyWithoutInspectorInput = {
    create?: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput> | InspectionCreateWithoutInspectorInput[] | InspectionUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutInspectorInput | InspectionCreateOrConnectWithoutInspectorInput[]
    createMany?: InspectionCreateManyInspectorInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type IssueCreateNestedManyWithoutRaisedByInput = {
    create?: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput> | IssueCreateWithoutRaisedByInput[] | IssueUncheckedCreateWithoutRaisedByInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutRaisedByInput | IssueCreateOrConnectWithoutRaisedByInput[]
    createMany?: IssueCreateManyRaisedByInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type InspectionUncheckedCreateNestedManyWithoutInspectorInput = {
    create?: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput> | InspectionCreateWithoutInspectorInput[] | InspectionUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutInspectorInput | InspectionCreateOrConnectWithoutInspectorInput[]
    createMany?: InspectionCreateManyInspectorInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutRaisedByInput = {
    create?: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput> | IssueCreateWithoutRaisedByInput[] | IssueUncheckedCreateWithoutRaisedByInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutRaisedByInput | IssueCreateOrConnectWithoutRaisedByInput[]
    createMany?: IssueCreateManyRaisedByInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InspectionUpdateManyWithoutInspectorNestedInput = {
    create?: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput> | InspectionCreateWithoutInspectorInput[] | InspectionUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutInspectorInput | InspectionCreateOrConnectWithoutInspectorInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutInspectorInput | InspectionUpsertWithWhereUniqueWithoutInspectorInput[]
    createMany?: InspectionCreateManyInspectorInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutInspectorInput | InspectionUpdateWithWhereUniqueWithoutInspectorInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutInspectorInput | InspectionUpdateManyWithWhereWithoutInspectorInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type IssueUpdateManyWithoutRaisedByNestedInput = {
    create?: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput> | IssueCreateWithoutRaisedByInput[] | IssueUncheckedCreateWithoutRaisedByInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutRaisedByInput | IssueCreateOrConnectWithoutRaisedByInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutRaisedByInput | IssueUpsertWithWhereUniqueWithoutRaisedByInput[]
    createMany?: IssueCreateManyRaisedByInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutRaisedByInput | IssueUpdateWithWhereUniqueWithoutRaisedByInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutRaisedByInput | IssueUpdateManyWithWhereWithoutRaisedByInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InspectionUncheckedUpdateManyWithoutInspectorNestedInput = {
    create?: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput> | InspectionCreateWithoutInspectorInput[] | InspectionUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutInspectorInput | InspectionCreateOrConnectWithoutInspectorInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutInspectorInput | InspectionUpsertWithWhereUniqueWithoutInspectorInput[]
    createMany?: InspectionCreateManyInspectorInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutInspectorInput | InspectionUpdateWithWhereUniqueWithoutInspectorInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutInspectorInput | InspectionUpdateManyWithWhereWithoutInspectorInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutRaisedByNestedInput = {
    create?: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput> | IssueCreateWithoutRaisedByInput[] | IssueUncheckedCreateWithoutRaisedByInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutRaisedByInput | IssueCreateOrConnectWithoutRaisedByInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutRaisedByInput | IssueUpsertWithWhereUniqueWithoutRaisedByInput[]
    createMany?: IssueCreateManyRaisedByInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutRaisedByInput | IssueUpdateWithWhereUniqueWithoutRaisedByInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutRaisedByInput | IssueUpdateManyWithWhereWithoutRaisedByInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ChecklistCreateNestedManyWithoutResortInput = {
    create?: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput> | ChecklistCreateWithoutResortInput[] | ChecklistUncheckedCreateWithoutResortInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutResortInput | ChecklistCreateOrConnectWithoutResortInput[]
    createMany?: ChecklistCreateManyResortInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutResortInput = {
    create?: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput> | ChecklistCreateWithoutResortInput[] | ChecklistUncheckedCreateWithoutResortInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutResortInput | ChecklistCreateOrConnectWithoutResortInput[]
    createMany?: ChecklistCreateManyResortInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ChecklistUpdateManyWithoutResortNestedInput = {
    create?: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput> | ChecklistCreateWithoutResortInput[] | ChecklistUncheckedCreateWithoutResortInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutResortInput | ChecklistCreateOrConnectWithoutResortInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutResortInput | ChecklistUpsertWithWhereUniqueWithoutResortInput[]
    createMany?: ChecklistCreateManyResortInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutResortInput | ChecklistUpdateWithWhereUniqueWithoutResortInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutResortInput | ChecklistUpdateManyWithWhereWithoutResortInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutResortNestedInput = {
    create?: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput> | ChecklistCreateWithoutResortInput[] | ChecklistUncheckedCreateWithoutResortInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutResortInput | ChecklistCreateOrConnectWithoutResortInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutResortInput | ChecklistUpsertWithWhereUniqueWithoutResortInput[]
    createMany?: ChecklistCreateManyResortInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutResortInput | ChecklistUpdateWithWhereUniqueWithoutResortInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutResortInput | ChecklistUpdateManyWithWhereWithoutResortInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ResortCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<ResortCreateWithoutChecklistsInput, ResortUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ResortCreateOrConnectWithoutChecklistsInput
    connect?: ResortWhereUniqueInput
  }

  export type InspectionCreateNestedManyWithoutChecklistInput = {
    create?: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput> | InspectionCreateWithoutChecklistInput[] | InspectionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutChecklistInput | InspectionCreateOrConnectWithoutChecklistInput[]
    createMany?: InspectionCreateManyChecklistInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type InspectionUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput> | InspectionCreateWithoutChecklistInput[] | InspectionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutChecklistInput | InspectionCreateOrConnectWithoutChecklistInput[]
    createMany?: InspectionCreateManyChecklistInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type ResortUpdateOneWithoutChecklistsNestedInput = {
    create?: XOR<ResortCreateWithoutChecklistsInput, ResortUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ResortCreateOrConnectWithoutChecklistsInput
    upsert?: ResortUpsertWithoutChecklistsInput
    disconnect?: ResortWhereInput | boolean
    delete?: ResortWhereInput | boolean
    connect?: ResortWhereUniqueInput
    update?: XOR<XOR<ResortUpdateToOneWithWhereWithoutChecklistsInput, ResortUpdateWithoutChecklistsInput>, ResortUncheckedUpdateWithoutChecklistsInput>
  }

  export type InspectionUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput> | InspectionCreateWithoutChecklistInput[] | InspectionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutChecklistInput | InspectionCreateOrConnectWithoutChecklistInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutChecklistInput | InspectionUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: InspectionCreateManyChecklistInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutChecklistInput | InspectionUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutChecklistInput | InspectionUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InspectionUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput> | InspectionCreateWithoutChecklistInput[] | InspectionUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutChecklistInput | InspectionCreateOrConnectWithoutChecklistInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutChecklistInput | InspectionUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: InspectionCreateManyChecklistInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutChecklistInput | InspectionUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutChecklistInput | InspectionUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type ChecklistCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<ChecklistCreateWithoutInspectionsInput, ChecklistUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutInspectionsInput
    connect?: ChecklistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<UserCreateWithoutInspectionsInput, UserUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspectionsInput
    connect?: UserWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutInspectionInput = {
    create?: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput> | IssueCreateWithoutInspectionInput[] | IssueUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutInspectionInput | IssueCreateOrConnectWithoutInspectionInput[]
    createMany?: IssueCreateManyInspectionInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutInspectionInput = {
    create?: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput> | IssueCreateWithoutInspectionInput[] | IssueUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutInspectionInput | IssueCreateOrConnectWithoutInspectionInput[]
    createMany?: IssueCreateManyInspectionInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type ChecklistUpdateOneWithoutInspectionsNestedInput = {
    create?: XOR<ChecklistCreateWithoutInspectionsInput, ChecklistUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutInspectionsInput
    upsert?: ChecklistUpsertWithoutInspectionsInput
    disconnect?: ChecklistWhereInput | boolean
    delete?: ChecklistWhereInput | boolean
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutInspectionsInput, ChecklistUpdateWithoutInspectionsInput>, ChecklistUncheckedUpdateWithoutInspectionsInput>
  }

  export type UserUpdateOneWithoutInspectionsNestedInput = {
    create?: XOR<UserCreateWithoutInspectionsInput, UserUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspectionsInput
    upsert?: UserUpsertWithoutInspectionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInspectionsInput, UserUpdateWithoutInspectionsInput>, UserUncheckedUpdateWithoutInspectionsInput>
  }

  export type IssueUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput> | IssueCreateWithoutInspectionInput[] | IssueUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutInspectionInput | IssueCreateOrConnectWithoutInspectionInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutInspectionInput | IssueUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: IssueCreateManyInspectionInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutInspectionInput | IssueUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutInspectionInput | IssueUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput> | IssueCreateWithoutInspectionInput[] | IssueUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutInspectionInput | IssueCreateOrConnectWithoutInspectionInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutInspectionInput | IssueUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: IssueCreateManyInspectionInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutInspectionInput | IssueUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutInspectionInput | IssueUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type InspectionCreateNestedOneWithoutIssuesInput = {
    create?: XOR<InspectionCreateWithoutIssuesInput, InspectionUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutIssuesInput
    connect?: InspectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIssuesRaisedInput = {
    create?: XOR<UserCreateWithoutIssuesRaisedInput, UserUncheckedCreateWithoutIssuesRaisedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuesRaisedInput
    connect?: UserWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutIssueInput = {
    create?: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput> | MediaCreateWithoutIssueInput[] | MediaUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutIssueInput | MediaCreateOrConnectWithoutIssueInput[]
    createMany?: MediaCreateManyIssueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutIssueInput = {
    create?: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput> | TaskCreateWithoutIssueInput[] | TaskUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutIssueInput | TaskCreateOrConnectWithoutIssueInput[]
    createMany?: TaskCreateManyIssueInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutIssueInput = {
    create?: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput> | CommentCreateWithoutIssueInput[] | CommentUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIssueInput | CommentCreateOrConnectWithoutIssueInput[]
    createMany?: CommentCreateManyIssueInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput> | MediaCreateWithoutIssueInput[] | MediaUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutIssueInput | MediaCreateOrConnectWithoutIssueInput[]
    createMany?: MediaCreateManyIssueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput> | TaskCreateWithoutIssueInput[] | TaskUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutIssueInput | TaskCreateOrConnectWithoutIssueInput[]
    createMany?: TaskCreateManyIssueInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput> | CommentCreateWithoutIssueInput[] | CommentUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIssueInput | CommentCreateOrConnectWithoutIssueInput[]
    createMany?: CommentCreateManyIssueInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type InspectionUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<InspectionCreateWithoutIssuesInput, InspectionUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutIssuesInput
    upsert?: InspectionUpsertWithoutIssuesInput
    connect?: InspectionWhereUniqueInput
    update?: XOR<XOR<InspectionUpdateToOneWithWhereWithoutIssuesInput, InspectionUpdateWithoutIssuesInput>, InspectionUncheckedUpdateWithoutIssuesInput>
  }

  export type UserUpdateOneWithoutIssuesRaisedNestedInput = {
    create?: XOR<UserCreateWithoutIssuesRaisedInput, UserUncheckedCreateWithoutIssuesRaisedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuesRaisedInput
    upsert?: UserUpsertWithoutIssuesRaisedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssuesRaisedInput, UserUpdateWithoutIssuesRaisedInput>, UserUncheckedUpdateWithoutIssuesRaisedInput>
  }

  export type MediaUpdateManyWithoutIssueNestedInput = {
    create?: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput> | MediaCreateWithoutIssueInput[] | MediaUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutIssueInput | MediaCreateOrConnectWithoutIssueInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutIssueInput | MediaUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: MediaCreateManyIssueInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutIssueInput | MediaUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutIssueInput | MediaUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutIssueNestedInput = {
    create?: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput> | TaskCreateWithoutIssueInput[] | TaskUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutIssueInput | TaskCreateOrConnectWithoutIssueInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutIssueInput | TaskUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: TaskCreateManyIssueInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutIssueInput | TaskUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutIssueInput | TaskUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutIssueNestedInput = {
    create?: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput> | CommentCreateWithoutIssueInput[] | CommentUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIssueInput | CommentCreateOrConnectWithoutIssueInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutIssueInput | CommentUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: CommentCreateManyIssueInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutIssueInput | CommentUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutIssueInput | CommentUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput> | MediaCreateWithoutIssueInput[] | MediaUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutIssueInput | MediaCreateOrConnectWithoutIssueInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutIssueInput | MediaUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: MediaCreateManyIssueInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutIssueInput | MediaUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutIssueInput | MediaUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput> | TaskCreateWithoutIssueInput[] | TaskUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutIssueInput | TaskCreateOrConnectWithoutIssueInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutIssueInput | TaskUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: TaskCreateManyIssueInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutIssueInput | TaskUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutIssueInput | TaskUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput> | CommentCreateWithoutIssueInput[] | CommentUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIssueInput | CommentCreateOrConnectWithoutIssueInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutIssueInput | CommentUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: CommentCreateManyIssueInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutIssueInput | CommentUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutIssueInput | CommentUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutMediaInput = {
    create?: XOR<IssueCreateWithoutMediaInput, IssueUncheckedCreateWithoutMediaInput>
    connectOrCreate?: IssueCreateOrConnectWithoutMediaInput
    connect?: IssueWhereUniqueInput
  }

  export type IssueUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<IssueCreateWithoutMediaInput, IssueUncheckedCreateWithoutMediaInput>
    connectOrCreate?: IssueCreateOrConnectWithoutMediaInput
    upsert?: IssueUpsertWithoutMediaInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutMediaInput, IssueUpdateWithoutMediaInput>, IssueUncheckedUpdateWithoutMediaInput>
  }

  export type IssueCreateNestedOneWithoutTasksInput = {
    create?: XOR<IssueCreateWithoutTasksInput, IssueUncheckedCreateWithoutTasksInput>
    connectOrCreate?: IssueCreateOrConnectWithoutTasksInput
    connect?: IssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IssueUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<IssueCreateWithoutTasksInput, IssueUncheckedCreateWithoutTasksInput>
    connectOrCreate?: IssueCreateOrConnectWithoutTasksInput
    upsert?: IssueUpsertWithoutTasksInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutTasksInput, IssueUpdateWithoutTasksInput>, IssueUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type IssueCreateNestedOneWithoutCommentsInput = {
    create?: XOR<IssueCreateWithoutCommentsInput, IssueUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutCommentsInput
    connect?: IssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type IssueUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<IssueCreateWithoutCommentsInput, IssueUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutCommentsInput
    upsert?: IssueUpsertWithoutCommentsInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutCommentsInput, IssueUpdateWithoutCommentsInput>, IssueUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InspectionCreateWithoutInspectorInput = {
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    checklist?: ChecklistCreateNestedOneWithoutInspectionsInput
    issues?: IssueCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutInspectorInput = {
    id?: number
    checklistId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutInspectorInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput>
  }

  export type InspectionCreateManyInspectorInputEnvelope = {
    data: InspectionCreateManyInspectorInput | InspectionCreateManyInspectorInput[]
    skipDuplicates?: boolean
  }

  export type IssueCreateWithoutRaisedByInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutIssuesInput
    media?: MediaCreateNestedManyWithoutIssueInput
    tasks?: TaskCreateNestedManyWithoutIssueInput
    comments?: CommentCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutRaisedByInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutIssueInput
    tasks?: TaskUncheckedCreateNestedManyWithoutIssueInput
    comments?: CommentUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutRaisedByInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput>
  }

  export type IssueCreateManyRaisedByInputEnvelope = {
    data: IssueCreateManyRaisedByInput | IssueCreateManyRaisedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedToInput = {
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issue: IssueCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    issueId: number
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    comment: string
    createdAt?: Date | string
    issue: IssueCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    issueId: number
    comment: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InspectionUpsertWithWhereUniqueWithoutInspectorInput = {
    where: InspectionWhereUniqueInput
    update: XOR<InspectionUpdateWithoutInspectorInput, InspectionUncheckedUpdateWithoutInspectorInput>
    create: XOR<InspectionCreateWithoutInspectorInput, InspectionUncheckedCreateWithoutInspectorInput>
  }

  export type InspectionUpdateWithWhereUniqueWithoutInspectorInput = {
    where: InspectionWhereUniqueInput
    data: XOR<InspectionUpdateWithoutInspectorInput, InspectionUncheckedUpdateWithoutInspectorInput>
  }

  export type InspectionUpdateManyWithWhereWithoutInspectorInput = {
    where: InspectionScalarWhereInput
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyWithoutInspectorInput>
  }

  export type InspectionScalarWhereInput = {
    AND?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
    OR?: InspectionScalarWhereInput[]
    NOT?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
    id?: IntFilter<"Inspection"> | number
    checklistId?: IntNullableFilter<"Inspection"> | number | null
    inspectorId?: IntNullableFilter<"Inspection"> | number | null
    inspectionDate?: DateTimeFilter<"Inspection"> | Date | string
    notes?: StringNullableFilter<"Inspection"> | string | null
    status?: StringFilter<"Inspection"> | string
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
  }

  export type IssueUpsertWithWhereUniqueWithoutRaisedByInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutRaisedByInput, IssueUncheckedUpdateWithoutRaisedByInput>
    create: XOR<IssueCreateWithoutRaisedByInput, IssueUncheckedCreateWithoutRaisedByInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutRaisedByInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutRaisedByInput, IssueUncheckedUpdateWithoutRaisedByInput>
  }

  export type IssueUpdateManyWithWhereWithoutRaisedByInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutRaisedByInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: IntFilter<"Issue"> | number
    inspectionId?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringNullableFilter<"Issue"> | string | null
    priority?: StringFilter<"Issue"> | string
    status?: StringFilter<"Issue"> | string
    raisedById?: IntNullableFilter<"Issue"> | number | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    issueId?: IntFilter<"Task"> | number
    assignedToId?: IntNullableFilter<"Task"> | number | null
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    issueId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ChecklistCreateWithoutResortInput = {
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutResortInput = {
    id?: number
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutResortInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput>
  }

  export type ChecklistCreateManyResortInputEnvelope = {
    data: ChecklistCreateManyResortInput | ChecklistCreateManyResortInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistUpsertWithWhereUniqueWithoutResortInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutResortInput, ChecklistUncheckedUpdateWithoutResortInput>
    create: XOR<ChecklistCreateWithoutResortInput, ChecklistUncheckedCreateWithoutResortInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutResortInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutResortInput, ChecklistUncheckedUpdateWithoutResortInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutResortInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutResortInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: IntFilter<"Checklist"> | number
    resortId?: IntNullableFilter<"Checklist"> | number | null
    category?: StringFilter<"Checklist"> | string
    title?: StringFilter<"Checklist"> | string
    description?: StringNullableFilter<"Checklist"> | string | null
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type ResortCreateWithoutChecklistsInput = {
    name: string
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ResortUncheckedCreateWithoutChecklistsInput = {
    id?: number
    name: string
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ResortCreateOrConnectWithoutChecklistsInput = {
    where: ResortWhereUniqueInput
    create: XOR<ResortCreateWithoutChecklistsInput, ResortUncheckedCreateWithoutChecklistsInput>
  }

  export type InspectionCreateWithoutChecklistInput = {
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    inspector?: UserCreateNestedOneWithoutInspectionsInput
    issues?: IssueCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutChecklistInput = {
    id?: number
    inspectorId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutChecklistInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput>
  }

  export type InspectionCreateManyChecklistInputEnvelope = {
    data: InspectionCreateManyChecklistInput | InspectionCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type ResortUpsertWithoutChecklistsInput = {
    update: XOR<ResortUpdateWithoutChecklistsInput, ResortUncheckedUpdateWithoutChecklistsInput>
    create: XOR<ResortCreateWithoutChecklistsInput, ResortUncheckedCreateWithoutChecklistsInput>
    where?: ResortWhereInput
  }

  export type ResortUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: ResortWhereInput
    data: XOR<ResortUpdateWithoutChecklistsInput, ResortUncheckedUpdateWithoutChecklistsInput>
  }

  export type ResortUpdateWithoutChecklistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResortUncheckedUpdateWithoutChecklistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionUpsertWithWhereUniqueWithoutChecklistInput = {
    where: InspectionWhereUniqueInput
    update: XOR<InspectionUpdateWithoutChecklistInput, InspectionUncheckedUpdateWithoutChecklistInput>
    create: XOR<InspectionCreateWithoutChecklistInput, InspectionUncheckedCreateWithoutChecklistInput>
  }

  export type InspectionUpdateWithWhereUniqueWithoutChecklistInput = {
    where: InspectionWhereUniqueInput
    data: XOR<InspectionUpdateWithoutChecklistInput, InspectionUncheckedUpdateWithoutChecklistInput>
  }

  export type InspectionUpdateManyWithWhereWithoutChecklistInput = {
    where: InspectionScalarWhereInput
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyWithoutChecklistInput>
  }

  export type ChecklistCreateWithoutInspectionsInput = {
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
    resort?: ResortCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutInspectionsInput = {
    id?: number
    resortId?: number | null
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutInspectionsInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutInspectionsInput, ChecklistUncheckedCreateWithoutInspectionsInput>
  }

  export type UserCreateWithoutInspectionsInput = {
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    issuesRaised?: IssueCreateNestedManyWithoutRaisedByInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInspectionsInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    issuesRaised?: IssueUncheckedCreateNestedManyWithoutRaisedByInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInspectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInspectionsInput, UserUncheckedCreateWithoutInspectionsInput>
  }

  export type IssueCreateWithoutInspectionInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    raisedBy?: UserCreateNestedOneWithoutIssuesRaisedInput
    media?: MediaCreateNestedManyWithoutIssueInput
    tasks?: TaskCreateNestedManyWithoutIssueInput
    comments?: CommentCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutInspectionInput = {
    id?: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutIssueInput
    tasks?: TaskUncheckedCreateNestedManyWithoutIssueInput
    comments?: CommentUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutInspectionInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput>
  }

  export type IssueCreateManyInspectionInputEnvelope = {
    data: IssueCreateManyInspectionInput | IssueCreateManyInspectionInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistUpsertWithoutInspectionsInput = {
    update: XOR<ChecklistUpdateWithoutInspectionsInput, ChecklistUncheckedUpdateWithoutInspectionsInput>
    create: XOR<ChecklistCreateWithoutInspectionsInput, ChecklistUncheckedCreateWithoutInspectionsInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutInspectionsInput, ChecklistUncheckedUpdateWithoutInspectionsInput>
  }

  export type ChecklistUpdateWithoutInspectionsInput = {
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resort?: ResortUpdateOneWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutInspectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    resortId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInspectionsInput = {
    update: XOR<UserUpdateWithoutInspectionsInput, UserUncheckedUpdateWithoutInspectionsInput>
    create: XOR<UserCreateWithoutInspectionsInput, UserUncheckedCreateWithoutInspectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInspectionsInput, UserUncheckedUpdateWithoutInspectionsInput>
  }

  export type UserUpdateWithoutInspectionsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuesRaised?: IssueUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInspectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuesRaised?: IssueUncheckedUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueUpsertWithWhereUniqueWithoutInspectionInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutInspectionInput, IssueUncheckedUpdateWithoutInspectionInput>
    create: XOR<IssueCreateWithoutInspectionInput, IssueUncheckedCreateWithoutInspectionInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutInspectionInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutInspectionInput, IssueUncheckedUpdateWithoutInspectionInput>
  }

  export type IssueUpdateManyWithWhereWithoutInspectionInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutInspectionInput>
  }

  export type InspectionCreateWithoutIssuesInput = {
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    checklist?: ChecklistCreateNestedOneWithoutInspectionsInput
    inspector?: UserCreateNestedOneWithoutInspectionsInput
  }

  export type InspectionUncheckedCreateWithoutIssuesInput = {
    id?: number
    checklistId?: number | null
    inspectorId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type InspectionCreateOrConnectWithoutIssuesInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutIssuesInput, InspectionUncheckedCreateWithoutIssuesInput>
  }

  export type UserCreateWithoutIssuesRaisedInput = {
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutInspectorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIssuesRaisedInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutInspectorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIssuesRaisedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssuesRaisedInput, UserUncheckedCreateWithoutIssuesRaisedInput>
  }

  export type MediaCreateWithoutIssueInput = {
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutIssueInput = {
    id?: number
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutIssueInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput>
  }

  export type MediaCreateManyIssueInputEnvelope = {
    data: MediaCreateManyIssueInput | MediaCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutIssueInput = {
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutIssueInput = {
    id?: number
    assignedToId?: number | null
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutIssueInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput>
  }

  export type TaskCreateManyIssueInputEnvelope = {
    data: TaskCreateManyIssueInput | TaskCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutIssueInput = {
    comment: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutIssueInput = {
    id?: number
    userId?: number | null
    comment: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutIssueInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput>
  }

  export type CommentCreateManyIssueInputEnvelope = {
    data: CommentCreateManyIssueInput | CommentCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type InspectionUpsertWithoutIssuesInput = {
    update: XOR<InspectionUpdateWithoutIssuesInput, InspectionUncheckedUpdateWithoutIssuesInput>
    create: XOR<InspectionCreateWithoutIssuesInput, InspectionUncheckedCreateWithoutIssuesInput>
    where?: InspectionWhereInput
  }

  export type InspectionUpdateToOneWithWhereWithoutIssuesInput = {
    where?: InspectionWhereInput
    data: XOR<InspectionUpdateWithoutIssuesInput, InspectionUncheckedUpdateWithoutIssuesInput>
  }

  export type InspectionUpdateWithoutIssuesInput = {
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneWithoutInspectionsNestedInput
    inspector?: UserUpdateOneWithoutInspectionsNestedInput
  }

  export type InspectionUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    checklistId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectorId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutIssuesRaisedInput = {
    update: XOR<UserUpdateWithoutIssuesRaisedInput, UserUncheckedUpdateWithoutIssuesRaisedInput>
    create: XOR<UserCreateWithoutIssuesRaisedInput, UserUncheckedCreateWithoutIssuesRaisedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssuesRaisedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssuesRaisedInput, UserUncheckedUpdateWithoutIssuesRaisedInput>
  }

  export type UserUpdateWithoutIssuesRaisedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutInspectorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIssuesRaisedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutInspectorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutIssueInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutIssueInput, MediaUncheckedUpdateWithoutIssueInput>
    create: XOR<MediaCreateWithoutIssueInput, MediaUncheckedCreateWithoutIssueInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutIssueInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutIssueInput, MediaUncheckedUpdateWithoutIssueInput>
  }

  export type MediaUpdateManyWithWhereWithoutIssueInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutIssueInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    issueId?: IntFilter<"Media"> | number
    fileUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutIssueInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutIssueInput, TaskUncheckedUpdateWithoutIssueInput>
    create: XOR<TaskCreateWithoutIssueInput, TaskUncheckedCreateWithoutIssueInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutIssueInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutIssueInput, TaskUncheckedUpdateWithoutIssueInput>
  }

  export type TaskUpdateManyWithWhereWithoutIssueInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutIssueInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutIssueInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutIssueInput, CommentUncheckedUpdateWithoutIssueInput>
    create: XOR<CommentCreateWithoutIssueInput, CommentUncheckedCreateWithoutIssueInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutIssueInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutIssueInput, CommentUncheckedUpdateWithoutIssueInput>
  }

  export type CommentUpdateManyWithWhereWithoutIssueInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueCreateWithoutMediaInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutIssuesInput
    raisedBy?: UserCreateNestedOneWithoutIssuesRaisedInput
    tasks?: TaskCreateNestedManyWithoutIssueInput
    comments?: CommentCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutMediaInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutIssueInput
    comments?: CommentUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutMediaInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutMediaInput, IssueUncheckedCreateWithoutMediaInput>
  }

  export type IssueUpsertWithoutMediaInput = {
    update: XOR<IssueUpdateWithoutMediaInput, IssueUncheckedUpdateWithoutMediaInput>
    create: XOR<IssueCreateWithoutMediaInput, IssueUncheckedCreateWithoutMediaInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutMediaInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutMediaInput, IssueUncheckedUpdateWithoutMediaInput>
  }

  export type IssueUpdateWithoutMediaInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutIssuesNestedInput
    raisedBy?: UserUpdateOneWithoutIssuesRaisedNestedInput
    tasks?: TaskUpdateManyWithoutIssueNestedInput
    comments?: CommentUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutIssueNestedInput
    comments?: CommentUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueCreateWithoutTasksInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutIssuesInput
    raisedBy?: UserCreateNestedOneWithoutIssuesRaisedInput
    media?: MediaCreateNestedManyWithoutIssueInput
    comments?: CommentCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutTasksInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutIssueInput
    comments?: CommentUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutTasksInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutTasksInput, IssueUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueCreateNestedManyWithoutRaisedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueUncheckedCreateNestedManyWithoutRaisedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type IssueUpsertWithoutTasksInput = {
    update: XOR<IssueUpdateWithoutTasksInput, IssueUncheckedUpdateWithoutTasksInput>
    create: XOR<IssueCreateWithoutTasksInput, IssueUncheckedCreateWithoutTasksInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutTasksInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutTasksInput, IssueUncheckedUpdateWithoutTasksInput>
  }

  export type IssueUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutIssuesNestedInput
    raisedBy?: UserUpdateOneWithoutIssuesRaisedNestedInput
    media?: MediaUpdateManyWithoutIssueNestedInput
    comments?: CommentUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutIssueNestedInput
    comments?: CommentUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUpdateManyWithoutRaisedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUncheckedUpdateManyWithoutRaisedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutIssuesInput
    raisedBy?: UserCreateNestedOneWithoutIssuesRaisedInput
    media?: MediaCreateNestedManyWithoutIssueInput
    tasks?: TaskCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutCommentsInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutIssueInput
    tasks?: TaskUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutCommentsInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutCommentsInput, IssueUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueCreateNestedManyWithoutRaisedByInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    fullName: string
    email: string
    role: string
    department?: string | null
    createdAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutInspectorInput
    issuesRaised?: IssueUncheckedCreateNestedManyWithoutRaisedByInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type IssueUpsertWithoutCommentsInput = {
    update: XOR<IssueUpdateWithoutCommentsInput, IssueUncheckedUpdateWithoutCommentsInput>
    create: XOR<IssueCreateWithoutCommentsInput, IssueUncheckedCreateWithoutCommentsInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutCommentsInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutCommentsInput, IssueUncheckedUpdateWithoutCommentsInput>
  }

  export type IssueUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutIssuesNestedInput
    raisedBy?: UserUpdateOneWithoutIssuesRaisedNestedInput
    media?: MediaUpdateManyWithoutIssueNestedInput
    tasks?: TaskUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutIssueNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutInspectorNestedInput
    issuesRaised?: IssueUncheckedUpdateManyWithoutRaisedByNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type InspectionCreateManyInspectorInput = {
    id?: number
    checklistId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type IssueCreateManyRaisedByInput = {
    id?: number
    inspectionId: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    issueId: number
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    issueId: number
    comment: string
    createdAt?: Date | string
  }

  export type InspectionUpdateWithoutInspectorInput = {
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneWithoutInspectionsNestedInput
    issues?: IssueUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutInspectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    checklistId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateManyWithoutInspectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    checklistId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUpdateWithoutRaisedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutIssuesNestedInput
    media?: MediaUpdateManyWithoutIssueNestedInput
    tasks?: TaskUpdateManyWithoutIssueNestedInput
    comments?: CommentUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutRaisedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutIssueNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutIssueNestedInput
    comments?: CommentUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutRaisedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectionId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedToInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateManyResortInput = {
    id?: number
    category: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ChecklistUpdateWithoutResortInput = {
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutResortInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateManyWithoutResortInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionCreateManyChecklistInput = {
    id?: number
    inspectorId?: number | null
    inspectionDate?: Date | string
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type InspectionUpdateWithoutChecklistInput = {
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspector?: UserUpdateOneWithoutInspectionsNestedInput
    issues?: IssueUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutChecklistInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectorId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateManyWithoutChecklistInput = {
    id?: IntFieldUpdateOperationsInput | number
    inspectorId?: NullableIntFieldUpdateOperationsInput | number | null
    inspectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyInspectionInput = {
    id?: number
    title: string
    description?: string | null
    priority?: string
    status?: string
    raisedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateWithoutInspectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raisedBy?: UserUpdateOneWithoutIssuesRaisedNestedInput
    media?: MediaUpdateManyWithoutIssueNestedInput
    tasks?: TaskUpdateManyWithoutIssueNestedInput
    comments?: CommentUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutInspectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutIssueNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutIssueNestedInput
    comments?: CommentUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutInspectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    raisedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyIssueInput = {
    id?: number
    fileUrl: string
    mediaType: string
    uploadedAt?: Date | string
  }

  export type TaskCreateManyIssueInput = {
    id?: number
    assignedToId?: number | null
    description: string
    status?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyIssueInput = {
    id?: number
    userId?: number | null
    comment: string
    createdAt?: Date | string
  }

  export type MediaUpdateWithoutIssueInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutIssueInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutIssueInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}