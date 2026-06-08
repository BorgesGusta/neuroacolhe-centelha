
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
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Colaborador
 * 
 */
export type Colaborador = $Result.DefaultSelection<Prisma.$ColaboradorPayload>
/**
 * Model ListaEspera
 * 
 */
export type ListaEspera = $Result.DefaultSelection<Prisma.$ListaEsperaPayload>
/**
 * Model ListaRegular
 * 
 */
export type ListaRegular = $Result.DefaultSelection<Prisma.$ListaRegularPayload>
/**
 * Model Protocolo
 * 
 */
export type Protocolo = $Result.DefaultSelection<Prisma.$ProtocoloPayload>
/**
 * Model Regular
 * 
 */
export type Regular = $Result.DefaultSelection<Prisma.$RegularPayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
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
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colaborador`: Exposes CRUD operations for the **Colaborador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaboradors
    * const colaboradors = await prisma.colaborador.findMany()
    * ```
    */
  get colaborador(): Prisma.ColaboradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaEspera`: Exposes CRUD operations for the **ListaEspera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaEsperas
    * const listaEsperas = await prisma.listaEspera.findMany()
    * ```
    */
  get listaEspera(): Prisma.ListaEsperaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaRegular`: Exposes CRUD operations for the **ListaRegular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaRegulars
    * const listaRegulars = await prisma.listaRegular.findMany()
    * ```
    */
  get listaRegular(): Prisma.ListaRegularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protocolo`: Exposes CRUD operations for the **Protocolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Protocolos
    * const protocolos = await prisma.protocolo.findMany()
    * ```
    */
  get protocolo(): Prisma.ProtocoloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regular`: Exposes CRUD operations for the **Regular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regulars
    * const regulars = await prisma.regular.findMany()
    * ```
    */
  get regular(): Prisma.RegularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Paciente: 'Paciente',
    Colaborador: 'Colaborador',
    ListaEspera: 'ListaEspera',
    ListaRegular: 'ListaRegular',
    Protocolo: 'Protocolo',
    Regular: 'Regular',
    Historico: 'Historico'
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
      modelProps: "paciente" | "colaborador" | "listaEspera" | "listaRegular" | "protocolo" | "regular" | "historico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Colaborador: {
        payload: Prisma.$ColaboradorPayload<ExtArgs>
        fields: Prisma.ColaboradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColaboradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColaboradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findFirst: {
            args: Prisma.ColaboradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColaboradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findMany: {
            args: Prisma.ColaboradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          create: {
            args: Prisma.ColaboradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          createMany: {
            args: Prisma.ColaboradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ColaboradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          update: {
            args: Prisma.ColaboradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          deleteMany: {
            args: Prisma.ColaboradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColaboradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ColaboradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          aggregate: {
            args: Prisma.ColaboradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaborador>
          }
          groupBy: {
            args: Prisma.ColaboradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColaboradorCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorCountAggregateOutputType> | number
          }
        }
      }
      ListaEspera: {
        payload: Prisma.$ListaEsperaPayload<ExtArgs>
        fields: Prisma.ListaEsperaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaEsperaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaEsperaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          findFirst: {
            args: Prisma.ListaEsperaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaEsperaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          findMany: {
            args: Prisma.ListaEsperaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>[]
          }
          create: {
            args: Prisma.ListaEsperaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          createMany: {
            args: Prisma.ListaEsperaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ListaEsperaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          update: {
            args: Prisma.ListaEsperaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          deleteMany: {
            args: Prisma.ListaEsperaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaEsperaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListaEsperaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          aggregate: {
            args: Prisma.ListaEsperaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaEspera>
          }
          groupBy: {
            args: Prisma.ListaEsperaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaEsperaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaEsperaCountArgs<ExtArgs>
            result: $Utils.Optional<ListaEsperaCountAggregateOutputType> | number
          }
        }
      }
      ListaRegular: {
        payload: Prisma.$ListaRegularPayload<ExtArgs>
        fields: Prisma.ListaRegularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaRegularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaRegularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          findFirst: {
            args: Prisma.ListaRegularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaRegularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          findMany: {
            args: Prisma.ListaRegularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>[]
          }
          create: {
            args: Prisma.ListaRegularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          createMany: {
            args: Prisma.ListaRegularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ListaRegularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          update: {
            args: Prisma.ListaRegularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          deleteMany: {
            args: Prisma.ListaRegularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaRegularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListaRegularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaRegularPayload>
          }
          aggregate: {
            args: Prisma.ListaRegularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaRegular>
          }
          groupBy: {
            args: Prisma.ListaRegularGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaRegularGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaRegularCountArgs<ExtArgs>
            result: $Utils.Optional<ListaRegularCountAggregateOutputType> | number
          }
        }
      }
      Protocolo: {
        payload: Prisma.$ProtocoloPayload<ExtArgs>
        fields: Prisma.ProtocoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtocoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtocoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          findFirst: {
            args: Prisma.ProtocoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtocoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          findMany: {
            args: Prisma.ProtocoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>[]
          }
          create: {
            args: Prisma.ProtocoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          createMany: {
            args: Prisma.ProtocoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProtocoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          update: {
            args: Prisma.ProtocoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          deleteMany: {
            args: Prisma.ProtocoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtocoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProtocoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocoloPayload>
          }
          aggregate: {
            args: Prisma.ProtocoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtocolo>
          }
          groupBy: {
            args: Prisma.ProtocoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtocoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtocoloCountArgs<ExtArgs>
            result: $Utils.Optional<ProtocoloCountAggregateOutputType> | number
          }
        }
      }
      Regular: {
        payload: Prisma.$RegularPayload<ExtArgs>
        fields: Prisma.RegularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          findFirst: {
            args: Prisma.RegularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          findMany: {
            args: Prisma.RegularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>[]
          }
          create: {
            args: Prisma.RegularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          createMany: {
            args: Prisma.RegularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          update: {
            args: Prisma.RegularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          deleteMany: {
            args: Prisma.RegularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularPayload>
          }
          aggregate: {
            args: Prisma.RegularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegular>
          }
          groupBy: {
            args: Prisma.RegularGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegularGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegularCountArgs<ExtArgs>
            result: $Utils.Optional<RegularCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    paciente?: PacienteOmit
    colaborador?: ColaboradorOmit
    listaEspera?: ListaEsperaOmit
    listaRegular?: ListaRegularOmit
    protocolo?: ProtocoloOmit
    regular?: RegularOmit
    historico?: HistoricoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    ListaEspera: number
    ListaRegular: number
    Protocolo: number
    Regular: number
    Historico: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListaEspera?: boolean | PacienteCountOutputTypeCountListaEsperaArgs
    ListaRegular?: boolean | PacienteCountOutputTypeCountListaRegularArgs
    Protocolo?: boolean | PacienteCountOutputTypeCountProtocoloArgs
    Regular?: boolean | PacienteCountOutputTypeCountRegularArgs
    Historico?: boolean | PacienteCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountListaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountListaRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaRegularWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountProtocoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocoloWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Count Type ColaboradorCountOutputType
   */

  export type ColaboradorCountOutputType = {
    ListaRegular: number
    Protocolo: number
    Regular: number
    Historico: number
  }

  export type ColaboradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListaRegular?: boolean | ColaboradorCountOutputTypeCountListaRegularArgs
    Protocolo?: boolean | ColaboradorCountOutputTypeCountProtocoloArgs
    Regular?: boolean | ColaboradorCountOutputTypeCountRegularArgs
    Historico?: boolean | ColaboradorCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColaboradorCountOutputType
     */
    select?: ColaboradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountListaRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaRegularWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountProtocoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocoloWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    idPaciente: number | null
  }

  export type PacienteSumAggregateOutputType = {
    idPaciente: number | null
  }

  export type PacienteMinAggregateOutputType = {
    idPaciente: number | null
    nome: string | null
    matricula: string | null
    data_nascimento: Date | null
    telefone: string | null
    data_inscricao: Date | null
    relato: string | null
    curso: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    idPaciente: number | null
    nome: string | null
    matricula: string | null
    data_nascimento: Date | null
    telefone: string | null
    data_inscricao: Date | null
    relato: string | null
    curso: string | null
  }

  export type PacienteCountAggregateOutputType = {
    idPaciente: number
    nome: number
    matricula: number
    data_nascimento: number
    telefone: number
    data_inscricao: number
    relato: number
    curso: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    idPaciente?: true
  }

  export type PacienteSumAggregateInputType = {
    idPaciente?: true
  }

  export type PacienteMinAggregateInputType = {
    idPaciente?: true
    nome?: true
    matricula?: true
    data_nascimento?: true
    telefone?: true
    data_inscricao?: true
    relato?: true
    curso?: true
  }

  export type PacienteMaxAggregateInputType = {
    idPaciente?: true
    nome?: true
    matricula?: true
    data_nascimento?: true
    telefone?: true
    data_inscricao?: true
    relato?: true
    curso?: true
  }

  export type PacienteCountAggregateInputType = {
    idPaciente?: true
    nome?: true
    matricula?: true
    data_nascimento?: true
    telefone?: true
    data_inscricao?: true
    relato?: true
    curso?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    idPaciente: number
    nome: string
    matricula: string
    data_nascimento: Date
    telefone: string | null
    data_inscricao: Date
    relato: string | null
    curso: string | null
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaciente?: boolean
    nome?: boolean
    matricula?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    data_inscricao?: boolean
    relato?: boolean
    curso?: boolean
    ListaEspera?: boolean | Paciente$ListaEsperaArgs<ExtArgs>
    ListaRegular?: boolean | Paciente$ListaRegularArgs<ExtArgs>
    Protocolo?: boolean | Paciente$ProtocoloArgs<ExtArgs>
    Regular?: boolean | Paciente$RegularArgs<ExtArgs>
    Historico?: boolean | Paciente$HistoricoArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>



  export type PacienteSelectScalar = {
    idPaciente?: boolean
    nome?: boolean
    matricula?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    data_inscricao?: boolean
    relato?: boolean
    curso?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPaciente" | "nome" | "matricula" | "data_nascimento" | "telefone" | "data_inscricao" | "relato" | "curso", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListaEspera?: boolean | Paciente$ListaEsperaArgs<ExtArgs>
    ListaRegular?: boolean | Paciente$ListaRegularArgs<ExtArgs>
    Protocolo?: boolean | Paciente$ProtocoloArgs<ExtArgs>
    Regular?: boolean | Paciente$RegularArgs<ExtArgs>
    Historico?: boolean | Paciente$HistoricoArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      ListaEspera: Prisma.$ListaEsperaPayload<ExtArgs>[]
      ListaRegular: Prisma.$ListaRegularPayload<ExtArgs>[]
      Protocolo: Prisma.$ProtocoloPayload<ExtArgs>[]
      Regular: Prisma.$RegularPayload<ExtArgs>[]
      Historico: Prisma.$HistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPaciente: number
      nome: string
      matricula: string
      data_nascimento: Date
      telefone: string | null
      data_inscricao: Date
      relato: string | null
      curso: string | null
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `idPaciente`
     * const pacienteWithIdPacienteOnly = await prisma.paciente.findMany({ select: { idPaciente: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ListaEspera<T extends Paciente$ListaEsperaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$ListaEsperaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ListaRegular<T extends Paciente$ListaRegularArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$ListaRegularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Protocolo<T extends Paciente$ProtocoloArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$ProtocoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Regular<T extends Paciente$RegularArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$RegularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Historico<T extends Paciente$HistoricoArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$HistoricoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly idPaciente: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly matricula: FieldRef<"Paciente", 'String'>
    readonly data_nascimento: FieldRef<"Paciente", 'DateTime'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly data_inscricao: FieldRef<"Paciente", 'DateTime'>
    readonly relato: FieldRef<"Paciente", 'String'>
    readonly curso: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.ListaEspera
   */
  export type Paciente$ListaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    cursor?: ListaEsperaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * Paciente.ListaRegular
   */
  export type Paciente$ListaRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    where?: ListaRegularWhereInput
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    cursor?: ListaRegularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaRegularScalarFieldEnum | ListaRegularScalarFieldEnum[]
  }

  /**
   * Paciente.Protocolo
   */
  export type Paciente$ProtocoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    where?: ProtocoloWhereInput
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    cursor?: ProtocoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocoloScalarFieldEnum | ProtocoloScalarFieldEnum[]
  }

  /**
   * Paciente.Regular
   */
  export type Paciente$RegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    where?: RegularWhereInput
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    cursor?: RegularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * Paciente.Historico
   */
  export type Paciente$HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Colaborador
   */

  export type AggregateColaborador = {
    _count: ColaboradorCountAggregateOutputType | null
    _avg: ColaboradorAvgAggregateOutputType | null
    _sum: ColaboradorSumAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  export type ColaboradorAvgAggregateOutputType = {
    idBolsista: number | null
  }

  export type ColaboradorSumAggregateOutputType = {
    idBolsista: number | null
  }

  export type ColaboradorMinAggregateOutputType = {
    idBolsista: number | null
    nome: string | null
    matricula: string | null
    data_admissao: Date | null
    data_saida: Date | null
  }

  export type ColaboradorMaxAggregateOutputType = {
    idBolsista: number | null
    nome: string | null
    matricula: string | null
    data_admissao: Date | null
    data_saida: Date | null
  }

  export type ColaboradorCountAggregateOutputType = {
    idBolsista: number
    nome: number
    matricula: number
    data_admissao: number
    data_saida: number
    _all: number
  }


  export type ColaboradorAvgAggregateInputType = {
    idBolsista?: true
  }

  export type ColaboradorSumAggregateInputType = {
    idBolsista?: true
  }

  export type ColaboradorMinAggregateInputType = {
    idBolsista?: true
    nome?: true
    matricula?: true
    data_admissao?: true
    data_saida?: true
  }

  export type ColaboradorMaxAggregateInputType = {
    idBolsista?: true
    nome?: true
    matricula?: true
    data_admissao?: true
    data_saida?: true
  }

  export type ColaboradorCountAggregateInputType = {
    idBolsista?: true
    nome?: true
    matricula?: true
    data_admissao?: true
    data_saida?: true
    _all?: true
  }

  export type ColaboradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborador to aggregate.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colaboradors
    **/
    _count?: true | ColaboradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColaboradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColaboradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboradorMaxAggregateInputType
  }

  export type GetColaboradorAggregateType<T extends ColaboradorAggregateArgs> = {
        [P in keyof T & keyof AggregateColaborador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaborador[P]>
      : GetScalarType<T[P], AggregateColaborador[P]>
  }




  export type ColaboradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboradorWhereInput
    orderBy?: ColaboradorOrderByWithAggregationInput | ColaboradorOrderByWithAggregationInput[]
    by: ColaboradorScalarFieldEnum[] | ColaboradorScalarFieldEnum
    having?: ColaboradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboradorCountAggregateInputType | true
    _avg?: ColaboradorAvgAggregateInputType
    _sum?: ColaboradorSumAggregateInputType
    _min?: ColaboradorMinAggregateInputType
    _max?: ColaboradorMaxAggregateInputType
  }

  export type ColaboradorGroupByOutputType = {
    idBolsista: number
    nome: string
    matricula: string
    data_admissao: Date
    data_saida: Date | null
    _count: ColaboradorCountAggregateOutputType | null
    _avg: ColaboradorAvgAggregateOutputType | null
    _sum: ColaboradorSumAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  type GetColaboradorGroupByPayload<T extends ColaboradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
        }
      >
    >


  export type ColaboradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idBolsista?: boolean
    nome?: boolean
    matricula?: boolean
    data_admissao?: boolean
    data_saida?: boolean
    ListaRegular?: boolean | Colaborador$ListaRegularArgs<ExtArgs>
    Protocolo?: boolean | Colaborador$ProtocoloArgs<ExtArgs>
    Regular?: boolean | Colaborador$RegularArgs<ExtArgs>
    Historico?: boolean | Colaborador$HistoricoArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborador"]>



  export type ColaboradorSelectScalar = {
    idBolsista?: boolean
    nome?: boolean
    matricula?: boolean
    data_admissao?: boolean
    data_saida?: boolean
  }

  export type ColaboradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idBolsista" | "nome" | "matricula" | "data_admissao" | "data_saida", ExtArgs["result"]["colaborador"]>
  export type ColaboradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListaRegular?: boolean | Colaborador$ListaRegularArgs<ExtArgs>
    Protocolo?: boolean | Colaborador$ProtocoloArgs<ExtArgs>
    Regular?: boolean | Colaborador$RegularArgs<ExtArgs>
    Historico?: boolean | Colaborador$HistoricoArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ColaboradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Colaborador"
    objects: {
      ListaRegular: Prisma.$ListaRegularPayload<ExtArgs>[]
      Protocolo: Prisma.$ProtocoloPayload<ExtArgs>[]
      Regular: Prisma.$RegularPayload<ExtArgs>[]
      Historico: Prisma.$HistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idBolsista: number
      nome: string
      matricula: string
      data_admissao: Date
      data_saida: Date | null
    }, ExtArgs["result"]["colaborador"]>
    composites: {}
  }

  type ColaboradorGetPayload<S extends boolean | null | undefined | ColaboradorDefaultArgs> = $Result.GetResult<Prisma.$ColaboradorPayload, S>

  type ColaboradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColaboradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboradorCountAggregateInputType | true
    }

  export interface ColaboradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Colaborador'], meta: { name: 'Colaborador' } }
    /**
     * Find zero or one Colaborador that matches the filter.
     * @param {ColaboradorFindUniqueArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColaboradorFindUniqueArgs>(args: SelectSubset<T, ColaboradorFindUniqueArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaborador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColaboradorFindUniqueOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColaboradorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColaboradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColaboradorFindFirstArgs>(args?: SelectSubset<T, ColaboradorFindFirstArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColaboradorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColaboradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaboradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaboradors
     * const colaboradors = await prisma.colaborador.findMany()
     * 
     * // Get first 10 Colaboradors
     * const colaboradors = await prisma.colaborador.findMany({ take: 10 })
     * 
     * // Only select the `idBolsista`
     * const colaboradorWithIdBolsistaOnly = await prisma.colaborador.findMany({ select: { idBolsista: true } })
     * 
     */
    findMany<T extends ColaboradorFindManyArgs>(args?: SelectSubset<T, ColaboradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaborador.
     * @param {ColaboradorCreateArgs} args - Arguments to create a Colaborador.
     * @example
     * // Create one Colaborador
     * const Colaborador = await prisma.colaborador.create({
     *   data: {
     *     // ... data to create a Colaborador
     *   }
     * })
     * 
     */
    create<T extends ColaboradorCreateArgs>(args: SelectSubset<T, ColaboradorCreateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaboradors.
     * @param {ColaboradorCreateManyArgs} args - Arguments to create many Colaboradors.
     * @example
     * // Create many Colaboradors
     * const colaborador = await prisma.colaborador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColaboradorCreateManyArgs>(args?: SelectSubset<T, ColaboradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Colaborador.
     * @param {ColaboradorDeleteArgs} args - Arguments to delete one Colaborador.
     * @example
     * // Delete one Colaborador
     * const Colaborador = await prisma.colaborador.delete({
     *   where: {
     *     // ... filter to delete one Colaborador
     *   }
     * })
     * 
     */
    delete<T extends ColaboradorDeleteArgs>(args: SelectSubset<T, ColaboradorDeleteArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaborador.
     * @param {ColaboradorUpdateArgs} args - Arguments to update one Colaborador.
     * @example
     * // Update one Colaborador
     * const colaborador = await prisma.colaborador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColaboradorUpdateArgs>(args: SelectSubset<T, ColaboradorUpdateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaboradors.
     * @param {ColaboradorDeleteManyArgs} args - Arguments to filter Colaboradors to delete.
     * @example
     * // Delete a few Colaboradors
     * const { count } = await prisma.colaborador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColaboradorDeleteManyArgs>(args?: SelectSubset<T, ColaboradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaboradors
     * const colaborador = await prisma.colaborador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColaboradorUpdateManyArgs>(args: SelectSubset<T, ColaboradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Colaborador.
     * @param {ColaboradorUpsertArgs} args - Arguments to update or create a Colaborador.
     * @example
     * // Update or create a Colaborador
     * const colaborador = await prisma.colaborador.upsert({
     *   create: {
     *     // ... data to create a Colaborador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaborador we want to update
     *   }
     * })
     */
    upsert<T extends ColaboradorUpsertArgs>(args: SelectSubset<T, ColaboradorUpsertArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorCountArgs} args - Arguments to filter Colaboradors to count.
     * @example
     * // Count the number of Colaboradors
     * const count = await prisma.colaborador.count({
     *   where: {
     *     // ... the filter for the Colaboradors we want to count
     *   }
     * })
    **/
    count<T extends ColaboradorCountArgs>(
      args?: Subset<T, ColaboradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColaboradorAggregateArgs>(args: Subset<T, ColaboradorAggregateArgs>): Prisma.PrismaPromise<GetColaboradorAggregateType<T>>

    /**
     * Group by Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorGroupByArgs} args - Group by arguments.
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
      T extends ColaboradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColaboradorGroupByArgs['orderBy'] }
        : { orderBy?: ColaboradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColaboradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Colaborador model
   */
  readonly fields: ColaboradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Colaborador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColaboradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ListaRegular<T extends Colaborador$ListaRegularArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$ListaRegularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Protocolo<T extends Colaborador$ProtocoloArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$ProtocoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Regular<T extends Colaborador$RegularArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$RegularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Historico<T extends Colaborador$HistoricoArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$HistoricoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Colaborador model
   */
  interface ColaboradorFieldRefs {
    readonly idBolsista: FieldRef<"Colaborador", 'Int'>
    readonly nome: FieldRef<"Colaborador", 'String'>
    readonly matricula: FieldRef<"Colaborador", 'String'>
    readonly data_admissao: FieldRef<"Colaborador", 'DateTime'>
    readonly data_saida: FieldRef<"Colaborador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Colaborador findUnique
   */
  export type ColaboradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findUniqueOrThrow
   */
  export type ColaboradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findFirst
   */
  export type ColaboradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findFirstOrThrow
   */
  export type ColaboradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findMany
   */
  export type ColaboradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaboradors to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador create
   */
  export type ColaboradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Colaborador.
     */
    data: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
  }

  /**
   * Colaborador createMany
   */
  export type ColaboradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colaboradors.
     */
    data: ColaboradorCreateManyInput | ColaboradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Colaborador update
   */
  export type ColaboradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Colaborador.
     */
    data: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
    /**
     * Choose, which Colaborador to update.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador updateMany
   */
  export type ColaboradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colaboradors.
     */
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyInput>
    /**
     * Filter which Colaboradors to update
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to update.
     */
    limit?: number
  }

  /**
   * Colaborador upsert
   */
  export type ColaboradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Colaborador to update in case it exists.
     */
    where: ColaboradorWhereUniqueInput
    /**
     * In case the Colaborador found by the `where` argument doesn't exist, create a new Colaborador with this data.
     */
    create: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
    /**
     * In case the Colaborador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
  }

  /**
   * Colaborador delete
   */
  export type ColaboradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter which Colaborador to delete.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador deleteMany
   */
  export type ColaboradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaboradors to delete
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to delete.
     */
    limit?: number
  }

  /**
   * Colaborador.ListaRegular
   */
  export type Colaborador$ListaRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    where?: ListaRegularWhereInput
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    cursor?: ListaRegularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaRegularScalarFieldEnum | ListaRegularScalarFieldEnum[]
  }

  /**
   * Colaborador.Protocolo
   */
  export type Colaborador$ProtocoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    where?: ProtocoloWhereInput
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    cursor?: ProtocoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocoloScalarFieldEnum | ProtocoloScalarFieldEnum[]
  }

  /**
   * Colaborador.Regular
   */
  export type Colaborador$RegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    where?: RegularWhereInput
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    cursor?: RegularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * Colaborador.Historico
   */
  export type Colaborador$HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Colaborador without action
   */
  export type ColaboradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
  }


  /**
   * Model ListaEspera
   */

  export type AggregateListaEspera = {
    _count: ListaEsperaCountAggregateOutputType | null
    _avg: ListaEsperaAvgAggregateOutputType | null
    _sum: ListaEsperaSumAggregateOutputType | null
    _min: ListaEsperaMinAggregateOutputType | null
    _max: ListaEsperaMaxAggregateOutputType | null
  }

  export type ListaEsperaAvgAggregateOutputType = {
    idListaEspera: number | null
    idPaciente: number | null
  }

  export type ListaEsperaSumAggregateOutputType = {
    idListaEspera: number | null
    idPaciente: number | null
  }

  export type ListaEsperaMinAggregateOutputType = {
    idListaEspera: number | null
    idPaciente: number | null
  }

  export type ListaEsperaMaxAggregateOutputType = {
    idListaEspera: number | null
    idPaciente: number | null
  }

  export type ListaEsperaCountAggregateOutputType = {
    idListaEspera: number
    idPaciente: number
    _all: number
  }


  export type ListaEsperaAvgAggregateInputType = {
    idListaEspera?: true
    idPaciente?: true
  }

  export type ListaEsperaSumAggregateInputType = {
    idListaEspera?: true
    idPaciente?: true
  }

  export type ListaEsperaMinAggregateInputType = {
    idListaEspera?: true
    idPaciente?: true
  }

  export type ListaEsperaMaxAggregateInputType = {
    idListaEspera?: true
    idPaciente?: true
  }

  export type ListaEsperaCountAggregateInputType = {
    idListaEspera?: true
    idPaciente?: true
    _all?: true
  }

  export type ListaEsperaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaEspera to aggregate.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaEsperas
    **/
    _count?: true | ListaEsperaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaEsperaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaEsperaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaEsperaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaEsperaMaxAggregateInputType
  }

  export type GetListaEsperaAggregateType<T extends ListaEsperaAggregateArgs> = {
        [P in keyof T & keyof AggregateListaEspera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaEspera[P]>
      : GetScalarType<T[P], AggregateListaEspera[P]>
  }




  export type ListaEsperaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithAggregationInput | ListaEsperaOrderByWithAggregationInput[]
    by: ListaEsperaScalarFieldEnum[] | ListaEsperaScalarFieldEnum
    having?: ListaEsperaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaEsperaCountAggregateInputType | true
    _avg?: ListaEsperaAvgAggregateInputType
    _sum?: ListaEsperaSumAggregateInputType
    _min?: ListaEsperaMinAggregateInputType
    _max?: ListaEsperaMaxAggregateInputType
  }

  export type ListaEsperaGroupByOutputType = {
    idListaEspera: number
    idPaciente: number
    _count: ListaEsperaCountAggregateOutputType | null
    _avg: ListaEsperaAvgAggregateOutputType | null
    _sum: ListaEsperaSumAggregateOutputType | null
    _min: ListaEsperaMinAggregateOutputType | null
    _max: ListaEsperaMaxAggregateOutputType | null
  }

  type GetListaEsperaGroupByPayload<T extends ListaEsperaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaEsperaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaEsperaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaEsperaGroupByOutputType[P]>
            : GetScalarType<T[P], ListaEsperaGroupByOutputType[P]>
        }
      >
    >


  export type ListaEsperaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaEspera?: boolean
    idPaciente?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaEspera"]>



  export type ListaEsperaSelectScalar = {
    idListaEspera?: boolean
    idPaciente?: boolean
  }

  export type ListaEsperaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idListaEspera" | "idPaciente", ExtArgs["result"]["listaEspera"]>
  export type ListaEsperaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $ListaEsperaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaEspera"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idListaEspera: number
      idPaciente: number
    }, ExtArgs["result"]["listaEspera"]>
    composites: {}
  }

  type ListaEsperaGetPayload<S extends boolean | null | undefined | ListaEsperaDefaultArgs> = $Result.GetResult<Prisma.$ListaEsperaPayload, S>

  type ListaEsperaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaEsperaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaEsperaCountAggregateInputType | true
    }

  export interface ListaEsperaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaEspera'], meta: { name: 'ListaEspera' } }
    /**
     * Find zero or one ListaEspera that matches the filter.
     * @param {ListaEsperaFindUniqueArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaEsperaFindUniqueArgs>(args: SelectSubset<T, ListaEsperaFindUniqueArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaEspera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaEsperaFindUniqueOrThrowArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaEsperaFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaEsperaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaEspera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindFirstArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaEsperaFindFirstArgs>(args?: SelectSubset<T, ListaEsperaFindFirstArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaEspera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindFirstOrThrowArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaEsperaFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaEsperaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaEsperas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaEsperas
     * const listaEsperas = await prisma.listaEspera.findMany()
     * 
     * // Get first 10 ListaEsperas
     * const listaEsperas = await prisma.listaEspera.findMany({ take: 10 })
     * 
     * // Only select the `idListaEspera`
     * const listaEsperaWithIdListaEsperaOnly = await prisma.listaEspera.findMany({ select: { idListaEspera: true } })
     * 
     */
    findMany<T extends ListaEsperaFindManyArgs>(args?: SelectSubset<T, ListaEsperaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaEspera.
     * @param {ListaEsperaCreateArgs} args - Arguments to create a ListaEspera.
     * @example
     * // Create one ListaEspera
     * const ListaEspera = await prisma.listaEspera.create({
     *   data: {
     *     // ... data to create a ListaEspera
     *   }
     * })
     * 
     */
    create<T extends ListaEsperaCreateArgs>(args: SelectSubset<T, ListaEsperaCreateArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaEsperas.
     * @param {ListaEsperaCreateManyArgs} args - Arguments to create many ListaEsperas.
     * @example
     * // Create many ListaEsperas
     * const listaEspera = await prisma.listaEspera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaEsperaCreateManyArgs>(args?: SelectSubset<T, ListaEsperaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListaEspera.
     * @param {ListaEsperaDeleteArgs} args - Arguments to delete one ListaEspera.
     * @example
     * // Delete one ListaEspera
     * const ListaEspera = await prisma.listaEspera.delete({
     *   where: {
     *     // ... filter to delete one ListaEspera
     *   }
     * })
     * 
     */
    delete<T extends ListaEsperaDeleteArgs>(args: SelectSubset<T, ListaEsperaDeleteArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaEspera.
     * @param {ListaEsperaUpdateArgs} args - Arguments to update one ListaEspera.
     * @example
     * // Update one ListaEspera
     * const listaEspera = await prisma.listaEspera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaEsperaUpdateArgs>(args: SelectSubset<T, ListaEsperaUpdateArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaEsperas.
     * @param {ListaEsperaDeleteManyArgs} args - Arguments to filter ListaEsperas to delete.
     * @example
     * // Delete a few ListaEsperas
     * const { count } = await prisma.listaEspera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaEsperaDeleteManyArgs>(args?: SelectSubset<T, ListaEsperaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaEsperas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaEsperas
     * const listaEspera = await prisma.listaEspera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaEsperaUpdateManyArgs>(args: SelectSubset<T, ListaEsperaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListaEspera.
     * @param {ListaEsperaUpsertArgs} args - Arguments to update or create a ListaEspera.
     * @example
     * // Update or create a ListaEspera
     * const listaEspera = await prisma.listaEspera.upsert({
     *   create: {
     *     // ... data to create a ListaEspera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaEspera we want to update
     *   }
     * })
     */
    upsert<T extends ListaEsperaUpsertArgs>(args: SelectSubset<T, ListaEsperaUpsertArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaEsperas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaCountArgs} args - Arguments to filter ListaEsperas to count.
     * @example
     * // Count the number of ListaEsperas
     * const count = await prisma.listaEspera.count({
     *   where: {
     *     // ... the filter for the ListaEsperas we want to count
     *   }
     * })
    **/
    count<T extends ListaEsperaCountArgs>(
      args?: Subset<T, ListaEsperaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaEsperaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaEspera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListaEsperaAggregateArgs>(args: Subset<T, ListaEsperaAggregateArgs>): Prisma.PrismaPromise<GetListaEsperaAggregateType<T>>

    /**
     * Group by ListaEspera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaGroupByArgs} args - Group by arguments.
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
      T extends ListaEsperaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaEsperaGroupByArgs['orderBy'] }
        : { orderBy?: ListaEsperaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListaEsperaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaEsperaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaEspera model
   */
  readonly fields: ListaEsperaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaEspera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaEsperaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListaEspera model
   */
  interface ListaEsperaFieldRefs {
    readonly idListaEspera: FieldRef<"ListaEspera", 'Int'>
    readonly idPaciente: FieldRef<"ListaEspera", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListaEspera findUnique
   */
  export type ListaEsperaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera findUniqueOrThrow
   */
  export type ListaEsperaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera findFirst
   */
  export type ListaEsperaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaEsperas.
     */
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera findFirstOrThrow
   */
  export type ListaEsperaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaEsperas.
     */
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera findMany
   */
  export type ListaEsperaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEsperas to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera create
   */
  export type ListaEsperaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaEspera.
     */
    data: XOR<ListaEsperaCreateInput, ListaEsperaUncheckedCreateInput>
  }

  /**
   * ListaEspera createMany
   */
  export type ListaEsperaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaEsperas.
     */
    data: ListaEsperaCreateManyInput | ListaEsperaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaEspera update
   */
  export type ListaEsperaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaEspera.
     */
    data: XOR<ListaEsperaUpdateInput, ListaEsperaUncheckedUpdateInput>
    /**
     * Choose, which ListaEspera to update.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera updateMany
   */
  export type ListaEsperaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaEsperas.
     */
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyInput>
    /**
     * Filter which ListaEsperas to update
     */
    where?: ListaEsperaWhereInput
    /**
     * Limit how many ListaEsperas to update.
     */
    limit?: number
  }

  /**
   * ListaEspera upsert
   */
  export type ListaEsperaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaEspera to update in case it exists.
     */
    where: ListaEsperaWhereUniqueInput
    /**
     * In case the ListaEspera found by the `where` argument doesn't exist, create a new ListaEspera with this data.
     */
    create: XOR<ListaEsperaCreateInput, ListaEsperaUncheckedCreateInput>
    /**
     * In case the ListaEspera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaEsperaUpdateInput, ListaEsperaUncheckedUpdateInput>
  }

  /**
   * ListaEspera delete
   */
  export type ListaEsperaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter which ListaEspera to delete.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera deleteMany
   */
  export type ListaEsperaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaEsperas to delete
     */
    where?: ListaEsperaWhereInput
    /**
     * Limit how many ListaEsperas to delete.
     */
    limit?: number
  }

  /**
   * ListaEspera without action
   */
  export type ListaEsperaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
  }


  /**
   * Model ListaRegular
   */

  export type AggregateListaRegular = {
    _count: ListaRegularCountAggregateOutputType | null
    _avg: ListaRegularAvgAggregateOutputType | null
    _sum: ListaRegularSumAggregateOutputType | null
    _min: ListaRegularMinAggregateOutputType | null
    _max: ListaRegularMaxAggregateOutputType | null
  }

  export type ListaRegularAvgAggregateOutputType = {
    idListaRegular: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ListaRegularSumAggregateOutputType = {
    idListaRegular: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ListaRegularMinAggregateOutputType = {
    idListaRegular: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ListaRegularMaxAggregateOutputType = {
    idListaRegular: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ListaRegularCountAggregateOutputType = {
    idListaRegular: number
    idPaciente: number
    idBolsista: number
    _all: number
  }


  export type ListaRegularAvgAggregateInputType = {
    idListaRegular?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ListaRegularSumAggregateInputType = {
    idListaRegular?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ListaRegularMinAggregateInputType = {
    idListaRegular?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ListaRegularMaxAggregateInputType = {
    idListaRegular?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ListaRegularCountAggregateInputType = {
    idListaRegular?: true
    idPaciente?: true
    idBolsista?: true
    _all?: true
  }

  export type ListaRegularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaRegular to aggregate.
     */
    where?: ListaRegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaRegulars to fetch.
     */
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaRegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaRegulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaRegulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaRegulars
    **/
    _count?: true | ListaRegularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaRegularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaRegularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaRegularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaRegularMaxAggregateInputType
  }

  export type GetListaRegularAggregateType<T extends ListaRegularAggregateArgs> = {
        [P in keyof T & keyof AggregateListaRegular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaRegular[P]>
      : GetScalarType<T[P], AggregateListaRegular[P]>
  }




  export type ListaRegularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaRegularWhereInput
    orderBy?: ListaRegularOrderByWithAggregationInput | ListaRegularOrderByWithAggregationInput[]
    by: ListaRegularScalarFieldEnum[] | ListaRegularScalarFieldEnum
    having?: ListaRegularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaRegularCountAggregateInputType | true
    _avg?: ListaRegularAvgAggregateInputType
    _sum?: ListaRegularSumAggregateInputType
    _min?: ListaRegularMinAggregateInputType
    _max?: ListaRegularMaxAggregateInputType
  }

  export type ListaRegularGroupByOutputType = {
    idListaRegular: number
    idPaciente: number
    idBolsista: number
    _count: ListaRegularCountAggregateOutputType | null
    _avg: ListaRegularAvgAggregateOutputType | null
    _sum: ListaRegularSumAggregateOutputType | null
    _min: ListaRegularMinAggregateOutputType | null
    _max: ListaRegularMaxAggregateOutputType | null
  }

  type GetListaRegularGroupByPayload<T extends ListaRegularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaRegularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaRegularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaRegularGroupByOutputType[P]>
            : GetScalarType<T[P], ListaRegularGroupByOutputType[P]>
        }
      >
    >


  export type ListaRegularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaRegular?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaRegular"]>



  export type ListaRegularSelectScalar = {
    idListaRegular?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
  }

  export type ListaRegularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idListaRegular" | "idPaciente" | "idBolsista", ExtArgs["result"]["listaRegular"]>
  export type ListaRegularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $ListaRegularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaRegular"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idListaRegular: number
      idPaciente: number
      idBolsista: number
    }, ExtArgs["result"]["listaRegular"]>
    composites: {}
  }

  type ListaRegularGetPayload<S extends boolean | null | undefined | ListaRegularDefaultArgs> = $Result.GetResult<Prisma.$ListaRegularPayload, S>

  type ListaRegularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaRegularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaRegularCountAggregateInputType | true
    }

  export interface ListaRegularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaRegular'], meta: { name: 'ListaRegular' } }
    /**
     * Find zero or one ListaRegular that matches the filter.
     * @param {ListaRegularFindUniqueArgs} args - Arguments to find a ListaRegular
     * @example
     * // Get one ListaRegular
     * const listaRegular = await prisma.listaRegular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaRegularFindUniqueArgs>(args: SelectSubset<T, ListaRegularFindUniqueArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaRegular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaRegularFindUniqueOrThrowArgs} args - Arguments to find a ListaRegular
     * @example
     * // Get one ListaRegular
     * const listaRegular = await prisma.listaRegular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaRegularFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaRegularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaRegular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularFindFirstArgs} args - Arguments to find a ListaRegular
     * @example
     * // Get one ListaRegular
     * const listaRegular = await prisma.listaRegular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaRegularFindFirstArgs>(args?: SelectSubset<T, ListaRegularFindFirstArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaRegular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularFindFirstOrThrowArgs} args - Arguments to find a ListaRegular
     * @example
     * // Get one ListaRegular
     * const listaRegular = await prisma.listaRegular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaRegularFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaRegularFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaRegulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaRegulars
     * const listaRegulars = await prisma.listaRegular.findMany()
     * 
     * // Get first 10 ListaRegulars
     * const listaRegulars = await prisma.listaRegular.findMany({ take: 10 })
     * 
     * // Only select the `idListaRegular`
     * const listaRegularWithIdListaRegularOnly = await prisma.listaRegular.findMany({ select: { idListaRegular: true } })
     * 
     */
    findMany<T extends ListaRegularFindManyArgs>(args?: SelectSubset<T, ListaRegularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaRegular.
     * @param {ListaRegularCreateArgs} args - Arguments to create a ListaRegular.
     * @example
     * // Create one ListaRegular
     * const ListaRegular = await prisma.listaRegular.create({
     *   data: {
     *     // ... data to create a ListaRegular
     *   }
     * })
     * 
     */
    create<T extends ListaRegularCreateArgs>(args: SelectSubset<T, ListaRegularCreateArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaRegulars.
     * @param {ListaRegularCreateManyArgs} args - Arguments to create many ListaRegulars.
     * @example
     * // Create many ListaRegulars
     * const listaRegular = await prisma.listaRegular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaRegularCreateManyArgs>(args?: SelectSubset<T, ListaRegularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListaRegular.
     * @param {ListaRegularDeleteArgs} args - Arguments to delete one ListaRegular.
     * @example
     * // Delete one ListaRegular
     * const ListaRegular = await prisma.listaRegular.delete({
     *   where: {
     *     // ... filter to delete one ListaRegular
     *   }
     * })
     * 
     */
    delete<T extends ListaRegularDeleteArgs>(args: SelectSubset<T, ListaRegularDeleteArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaRegular.
     * @param {ListaRegularUpdateArgs} args - Arguments to update one ListaRegular.
     * @example
     * // Update one ListaRegular
     * const listaRegular = await prisma.listaRegular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaRegularUpdateArgs>(args: SelectSubset<T, ListaRegularUpdateArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaRegulars.
     * @param {ListaRegularDeleteManyArgs} args - Arguments to filter ListaRegulars to delete.
     * @example
     * // Delete a few ListaRegulars
     * const { count } = await prisma.listaRegular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaRegularDeleteManyArgs>(args?: SelectSubset<T, ListaRegularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaRegulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaRegulars
     * const listaRegular = await prisma.listaRegular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaRegularUpdateManyArgs>(args: SelectSubset<T, ListaRegularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListaRegular.
     * @param {ListaRegularUpsertArgs} args - Arguments to update or create a ListaRegular.
     * @example
     * // Update or create a ListaRegular
     * const listaRegular = await prisma.listaRegular.upsert({
     *   create: {
     *     // ... data to create a ListaRegular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaRegular we want to update
     *   }
     * })
     */
    upsert<T extends ListaRegularUpsertArgs>(args: SelectSubset<T, ListaRegularUpsertArgs<ExtArgs>>): Prisma__ListaRegularClient<$Result.GetResult<Prisma.$ListaRegularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaRegulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularCountArgs} args - Arguments to filter ListaRegulars to count.
     * @example
     * // Count the number of ListaRegulars
     * const count = await prisma.listaRegular.count({
     *   where: {
     *     // ... the filter for the ListaRegulars we want to count
     *   }
     * })
    **/
    count<T extends ListaRegularCountArgs>(
      args?: Subset<T, ListaRegularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaRegularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaRegular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListaRegularAggregateArgs>(args: Subset<T, ListaRegularAggregateArgs>): Prisma.PrismaPromise<GetListaRegularAggregateType<T>>

    /**
     * Group by ListaRegular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaRegularGroupByArgs} args - Group by arguments.
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
      T extends ListaRegularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaRegularGroupByArgs['orderBy'] }
        : { orderBy?: ListaRegularGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListaRegularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaRegularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaRegular model
   */
  readonly fields: ListaRegularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaRegular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaRegularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListaRegular model
   */
  interface ListaRegularFieldRefs {
    readonly idListaRegular: FieldRef<"ListaRegular", 'Int'>
    readonly idPaciente: FieldRef<"ListaRegular", 'Int'>
    readonly idBolsista: FieldRef<"ListaRegular", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListaRegular findUnique
   */
  export type ListaRegularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter, which ListaRegular to fetch.
     */
    where: ListaRegularWhereUniqueInput
  }

  /**
   * ListaRegular findUniqueOrThrow
   */
  export type ListaRegularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter, which ListaRegular to fetch.
     */
    where: ListaRegularWhereUniqueInput
  }

  /**
   * ListaRegular findFirst
   */
  export type ListaRegularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter, which ListaRegular to fetch.
     */
    where?: ListaRegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaRegulars to fetch.
     */
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaRegulars.
     */
    cursor?: ListaRegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaRegulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaRegulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaRegulars.
     */
    distinct?: ListaRegularScalarFieldEnum | ListaRegularScalarFieldEnum[]
  }

  /**
   * ListaRegular findFirstOrThrow
   */
  export type ListaRegularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter, which ListaRegular to fetch.
     */
    where?: ListaRegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaRegulars to fetch.
     */
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaRegulars.
     */
    cursor?: ListaRegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaRegulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaRegulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaRegulars.
     */
    distinct?: ListaRegularScalarFieldEnum | ListaRegularScalarFieldEnum[]
  }

  /**
   * ListaRegular findMany
   */
  export type ListaRegularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter, which ListaRegulars to fetch.
     */
    where?: ListaRegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaRegulars to fetch.
     */
    orderBy?: ListaRegularOrderByWithRelationInput | ListaRegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaRegulars.
     */
    cursor?: ListaRegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaRegulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaRegulars.
     */
    skip?: number
    distinct?: ListaRegularScalarFieldEnum | ListaRegularScalarFieldEnum[]
  }

  /**
   * ListaRegular create
   */
  export type ListaRegularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaRegular.
     */
    data: XOR<ListaRegularCreateInput, ListaRegularUncheckedCreateInput>
  }

  /**
   * ListaRegular createMany
   */
  export type ListaRegularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaRegulars.
     */
    data: ListaRegularCreateManyInput | ListaRegularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaRegular update
   */
  export type ListaRegularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaRegular.
     */
    data: XOR<ListaRegularUpdateInput, ListaRegularUncheckedUpdateInput>
    /**
     * Choose, which ListaRegular to update.
     */
    where: ListaRegularWhereUniqueInput
  }

  /**
   * ListaRegular updateMany
   */
  export type ListaRegularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaRegulars.
     */
    data: XOR<ListaRegularUpdateManyMutationInput, ListaRegularUncheckedUpdateManyInput>
    /**
     * Filter which ListaRegulars to update
     */
    where?: ListaRegularWhereInput
    /**
     * Limit how many ListaRegulars to update.
     */
    limit?: number
  }

  /**
   * ListaRegular upsert
   */
  export type ListaRegularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaRegular to update in case it exists.
     */
    where: ListaRegularWhereUniqueInput
    /**
     * In case the ListaRegular found by the `where` argument doesn't exist, create a new ListaRegular with this data.
     */
    create: XOR<ListaRegularCreateInput, ListaRegularUncheckedCreateInput>
    /**
     * In case the ListaRegular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaRegularUpdateInput, ListaRegularUncheckedUpdateInput>
  }

  /**
   * ListaRegular delete
   */
  export type ListaRegularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
    /**
     * Filter which ListaRegular to delete.
     */
    where: ListaRegularWhereUniqueInput
  }

  /**
   * ListaRegular deleteMany
   */
  export type ListaRegularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaRegulars to delete
     */
    where?: ListaRegularWhereInput
    /**
     * Limit how many ListaRegulars to delete.
     */
    limit?: number
  }

  /**
   * ListaRegular without action
   */
  export type ListaRegularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaRegular
     */
    select?: ListaRegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaRegular
     */
    omit?: ListaRegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaRegularInclude<ExtArgs> | null
  }


  /**
   * Model Protocolo
   */

  export type AggregateProtocolo = {
    _count: ProtocoloCountAggregateOutputType | null
    _avg: ProtocoloAvgAggregateOutputType | null
    _sum: ProtocoloSumAggregateOutputType | null
    _min: ProtocoloMinAggregateOutputType | null
    _max: ProtocoloMaxAggregateOutputType | null
  }

  export type ProtocoloAvgAggregateOutputType = {
    idProtocolo: number | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ProtocoloSumAggregateOutputType = {
    idProtocolo: number | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ProtocoloMinAggregateOutputType = {
    idProtocolo: number | null
    data_inicio_atendimento: Date | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ProtocoloMaxAggregateOutputType = {
    idProtocolo: number | null
    data_inicio_atendimento: Date | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type ProtocoloCountAggregateOutputType = {
    idProtocolo: number
    data_inicio_atendimento: number
    qtde_sessoes: number
    idPaciente: number
    idBolsista: number
    _all: number
  }


  export type ProtocoloAvgAggregateInputType = {
    idProtocolo?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ProtocoloSumAggregateInputType = {
    idProtocolo?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ProtocoloMinAggregateInputType = {
    idProtocolo?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ProtocoloMaxAggregateInputType = {
    idProtocolo?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type ProtocoloCountAggregateInputType = {
    idProtocolo?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
    _all?: true
  }

  export type ProtocoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protocolo to aggregate.
     */
    where?: ProtocoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocolos to fetch.
     */
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtocoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Protocolos
    **/
    _count?: true | ProtocoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtocoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtocoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtocoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtocoloMaxAggregateInputType
  }

  export type GetProtocoloAggregateType<T extends ProtocoloAggregateArgs> = {
        [P in keyof T & keyof AggregateProtocolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtocolo[P]>
      : GetScalarType<T[P], AggregateProtocolo[P]>
  }




  export type ProtocoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocoloWhereInput
    orderBy?: ProtocoloOrderByWithAggregationInput | ProtocoloOrderByWithAggregationInput[]
    by: ProtocoloScalarFieldEnum[] | ProtocoloScalarFieldEnum
    having?: ProtocoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtocoloCountAggregateInputType | true
    _avg?: ProtocoloAvgAggregateInputType
    _sum?: ProtocoloSumAggregateInputType
    _min?: ProtocoloMinAggregateInputType
    _max?: ProtocoloMaxAggregateInputType
  }

  export type ProtocoloGroupByOutputType = {
    idProtocolo: number
    data_inicio_atendimento: Date
    qtde_sessoes: number
    idPaciente: number
    idBolsista: number
    _count: ProtocoloCountAggregateOutputType | null
    _avg: ProtocoloAvgAggregateOutputType | null
    _sum: ProtocoloSumAggregateOutputType | null
    _min: ProtocoloMinAggregateOutputType | null
    _max: ProtocoloMaxAggregateOutputType | null
  }

  type GetProtocoloGroupByPayload<T extends ProtocoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtocoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtocoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtocoloGroupByOutputType[P]>
            : GetScalarType<T[P], ProtocoloGroupByOutputType[P]>
        }
      >
    >


  export type ProtocoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProtocolo?: boolean
    data_inicio_atendimento?: boolean
    qtde_sessoes?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolo"]>



  export type ProtocoloSelectScalar = {
    idProtocolo?: boolean
    data_inicio_atendimento?: boolean
    qtde_sessoes?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
  }

  export type ProtocoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProtocolo" | "data_inicio_atendimento" | "qtde_sessoes" | "idPaciente" | "idBolsista", ExtArgs["result"]["protocolo"]>
  export type ProtocoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $ProtocoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Protocolo"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idProtocolo: number
      data_inicio_atendimento: Date
      qtde_sessoes: number
      idPaciente: number
      idBolsista: number
    }, ExtArgs["result"]["protocolo"]>
    composites: {}
  }

  type ProtocoloGetPayload<S extends boolean | null | undefined | ProtocoloDefaultArgs> = $Result.GetResult<Prisma.$ProtocoloPayload, S>

  type ProtocoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtocoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtocoloCountAggregateInputType | true
    }

  export interface ProtocoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Protocolo'], meta: { name: 'Protocolo' } }
    /**
     * Find zero or one Protocolo that matches the filter.
     * @param {ProtocoloFindUniqueArgs} args - Arguments to find a Protocolo
     * @example
     * // Get one Protocolo
     * const protocolo = await prisma.protocolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtocoloFindUniqueArgs>(args: SelectSubset<T, ProtocoloFindUniqueArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Protocolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtocoloFindUniqueOrThrowArgs} args - Arguments to find a Protocolo
     * @example
     * // Get one Protocolo
     * const protocolo = await prisma.protocolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtocoloFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtocoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protocolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloFindFirstArgs} args - Arguments to find a Protocolo
     * @example
     * // Get one Protocolo
     * const protocolo = await prisma.protocolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtocoloFindFirstArgs>(args?: SelectSubset<T, ProtocoloFindFirstArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protocolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloFindFirstOrThrowArgs} args - Arguments to find a Protocolo
     * @example
     * // Get one Protocolo
     * const protocolo = await prisma.protocolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtocoloFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtocoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Protocolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Protocolos
     * const protocolos = await prisma.protocolo.findMany()
     * 
     * // Get first 10 Protocolos
     * const protocolos = await prisma.protocolo.findMany({ take: 10 })
     * 
     * // Only select the `idProtocolo`
     * const protocoloWithIdProtocoloOnly = await prisma.protocolo.findMany({ select: { idProtocolo: true } })
     * 
     */
    findMany<T extends ProtocoloFindManyArgs>(args?: SelectSubset<T, ProtocoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Protocolo.
     * @param {ProtocoloCreateArgs} args - Arguments to create a Protocolo.
     * @example
     * // Create one Protocolo
     * const Protocolo = await prisma.protocolo.create({
     *   data: {
     *     // ... data to create a Protocolo
     *   }
     * })
     * 
     */
    create<T extends ProtocoloCreateArgs>(args: SelectSubset<T, ProtocoloCreateArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Protocolos.
     * @param {ProtocoloCreateManyArgs} args - Arguments to create many Protocolos.
     * @example
     * // Create many Protocolos
     * const protocolo = await prisma.protocolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtocoloCreateManyArgs>(args?: SelectSubset<T, ProtocoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Protocolo.
     * @param {ProtocoloDeleteArgs} args - Arguments to delete one Protocolo.
     * @example
     * // Delete one Protocolo
     * const Protocolo = await prisma.protocolo.delete({
     *   where: {
     *     // ... filter to delete one Protocolo
     *   }
     * })
     * 
     */
    delete<T extends ProtocoloDeleteArgs>(args: SelectSubset<T, ProtocoloDeleteArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Protocolo.
     * @param {ProtocoloUpdateArgs} args - Arguments to update one Protocolo.
     * @example
     * // Update one Protocolo
     * const protocolo = await prisma.protocolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtocoloUpdateArgs>(args: SelectSubset<T, ProtocoloUpdateArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Protocolos.
     * @param {ProtocoloDeleteManyArgs} args - Arguments to filter Protocolos to delete.
     * @example
     * // Delete a few Protocolos
     * const { count } = await prisma.protocolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtocoloDeleteManyArgs>(args?: SelectSubset<T, ProtocoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protocolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Protocolos
     * const protocolo = await prisma.protocolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtocoloUpdateManyArgs>(args: SelectSubset<T, ProtocoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Protocolo.
     * @param {ProtocoloUpsertArgs} args - Arguments to update or create a Protocolo.
     * @example
     * // Update or create a Protocolo
     * const protocolo = await prisma.protocolo.upsert({
     *   create: {
     *     // ... data to create a Protocolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Protocolo we want to update
     *   }
     * })
     */
    upsert<T extends ProtocoloUpsertArgs>(args: SelectSubset<T, ProtocoloUpsertArgs<ExtArgs>>): Prisma__ProtocoloClient<$Result.GetResult<Prisma.$ProtocoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Protocolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloCountArgs} args - Arguments to filter Protocolos to count.
     * @example
     * // Count the number of Protocolos
     * const count = await prisma.protocolo.count({
     *   where: {
     *     // ... the filter for the Protocolos we want to count
     *   }
     * })
    **/
    count<T extends ProtocoloCountArgs>(
      args?: Subset<T, ProtocoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtocoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Protocolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtocoloAggregateArgs>(args: Subset<T, ProtocoloAggregateArgs>): Prisma.PrismaPromise<GetProtocoloAggregateType<T>>

    /**
     * Group by Protocolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocoloGroupByArgs} args - Group by arguments.
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
      T extends ProtocoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtocoloGroupByArgs['orderBy'] }
        : { orderBy?: ProtocoloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtocoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtocoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Protocolo model
   */
  readonly fields: ProtocoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Protocolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtocoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Protocolo model
   */
  interface ProtocoloFieldRefs {
    readonly idProtocolo: FieldRef<"Protocolo", 'Int'>
    readonly data_inicio_atendimento: FieldRef<"Protocolo", 'DateTime'>
    readonly qtde_sessoes: FieldRef<"Protocolo", 'Int'>
    readonly idPaciente: FieldRef<"Protocolo", 'Int'>
    readonly idBolsista: FieldRef<"Protocolo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Protocolo findUnique
   */
  export type ProtocoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter, which Protocolo to fetch.
     */
    where: ProtocoloWhereUniqueInput
  }

  /**
   * Protocolo findUniqueOrThrow
   */
  export type ProtocoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter, which Protocolo to fetch.
     */
    where: ProtocoloWhereUniqueInput
  }

  /**
   * Protocolo findFirst
   */
  export type ProtocoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter, which Protocolo to fetch.
     */
    where?: ProtocoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocolos to fetch.
     */
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protocolos.
     */
    cursor?: ProtocoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protocolos.
     */
    distinct?: ProtocoloScalarFieldEnum | ProtocoloScalarFieldEnum[]
  }

  /**
   * Protocolo findFirstOrThrow
   */
  export type ProtocoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter, which Protocolo to fetch.
     */
    where?: ProtocoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocolos to fetch.
     */
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protocolos.
     */
    cursor?: ProtocoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protocolos.
     */
    distinct?: ProtocoloScalarFieldEnum | ProtocoloScalarFieldEnum[]
  }

  /**
   * Protocolo findMany
   */
  export type ProtocoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter, which Protocolos to fetch.
     */
    where?: ProtocoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocolos to fetch.
     */
    orderBy?: ProtocoloOrderByWithRelationInput | ProtocoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Protocolos.
     */
    cursor?: ProtocoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocolos.
     */
    skip?: number
    distinct?: ProtocoloScalarFieldEnum | ProtocoloScalarFieldEnum[]
  }

  /**
   * Protocolo create
   */
  export type ProtocoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * The data needed to create a Protocolo.
     */
    data: XOR<ProtocoloCreateInput, ProtocoloUncheckedCreateInput>
  }

  /**
   * Protocolo createMany
   */
  export type ProtocoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Protocolos.
     */
    data: ProtocoloCreateManyInput | ProtocoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Protocolo update
   */
  export type ProtocoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * The data needed to update a Protocolo.
     */
    data: XOR<ProtocoloUpdateInput, ProtocoloUncheckedUpdateInput>
    /**
     * Choose, which Protocolo to update.
     */
    where: ProtocoloWhereUniqueInput
  }

  /**
   * Protocolo updateMany
   */
  export type ProtocoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Protocolos.
     */
    data: XOR<ProtocoloUpdateManyMutationInput, ProtocoloUncheckedUpdateManyInput>
    /**
     * Filter which Protocolos to update
     */
    where?: ProtocoloWhereInput
    /**
     * Limit how many Protocolos to update.
     */
    limit?: number
  }

  /**
   * Protocolo upsert
   */
  export type ProtocoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * The filter to search for the Protocolo to update in case it exists.
     */
    where: ProtocoloWhereUniqueInput
    /**
     * In case the Protocolo found by the `where` argument doesn't exist, create a new Protocolo with this data.
     */
    create: XOR<ProtocoloCreateInput, ProtocoloUncheckedCreateInput>
    /**
     * In case the Protocolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtocoloUpdateInput, ProtocoloUncheckedUpdateInput>
  }

  /**
   * Protocolo delete
   */
  export type ProtocoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
    /**
     * Filter which Protocolo to delete.
     */
    where: ProtocoloWhereUniqueInput
  }

  /**
   * Protocolo deleteMany
   */
  export type ProtocoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protocolos to delete
     */
    where?: ProtocoloWhereInput
    /**
     * Limit how many Protocolos to delete.
     */
    limit?: number
  }

  /**
   * Protocolo without action
   */
  export type ProtocoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocolo
     */
    select?: ProtocoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocolo
     */
    omit?: ProtocoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocoloInclude<ExtArgs> | null
  }


  /**
   * Model Regular
   */

  export type AggregateRegular = {
    _count: RegularCountAggregateOutputType | null
    _avg: RegularAvgAggregateOutputType | null
    _sum: RegularSumAggregateOutputType | null
    _min: RegularMinAggregateOutputType | null
    _max: RegularMaxAggregateOutputType | null
  }

  export type RegularAvgAggregateOutputType = {
    idRegular: number | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type RegularSumAggregateOutputType = {
    idRegular: number | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type RegularMinAggregateOutputType = {
    idRegular: number | null
    data_inicio_atendimento: Date | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type RegularMaxAggregateOutputType = {
    idRegular: number | null
    data_inicio_atendimento: Date | null
    qtde_sessoes: number | null
    idPaciente: number | null
    idBolsista: number | null
  }

  export type RegularCountAggregateOutputType = {
    idRegular: number
    data_inicio_atendimento: number
    qtde_sessoes: number
    idPaciente: number
    idBolsista: number
    _all: number
  }


  export type RegularAvgAggregateInputType = {
    idRegular?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type RegularSumAggregateInputType = {
    idRegular?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type RegularMinAggregateInputType = {
    idRegular?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type RegularMaxAggregateInputType = {
    idRegular?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
  }

  export type RegularCountAggregateInputType = {
    idRegular?: true
    data_inicio_atendimento?: true
    qtde_sessoes?: true
    idPaciente?: true
    idBolsista?: true
    _all?: true
  }

  export type RegularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regular to aggregate.
     */
    where?: RegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulars to fetch.
     */
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regulars
    **/
    _count?: true | RegularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegularMaxAggregateInputType
  }

  export type GetRegularAggregateType<T extends RegularAggregateArgs> = {
        [P in keyof T & keyof AggregateRegular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegular[P]>
      : GetScalarType<T[P], AggregateRegular[P]>
  }




  export type RegularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularWhereInput
    orderBy?: RegularOrderByWithAggregationInput | RegularOrderByWithAggregationInput[]
    by: RegularScalarFieldEnum[] | RegularScalarFieldEnum
    having?: RegularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegularCountAggregateInputType | true
    _avg?: RegularAvgAggregateInputType
    _sum?: RegularSumAggregateInputType
    _min?: RegularMinAggregateInputType
    _max?: RegularMaxAggregateInputType
  }

  export type RegularGroupByOutputType = {
    idRegular: number
    data_inicio_atendimento: Date
    qtde_sessoes: number
    idPaciente: number
    idBolsista: number
    _count: RegularCountAggregateOutputType | null
    _avg: RegularAvgAggregateOutputType | null
    _sum: RegularSumAggregateOutputType | null
    _min: RegularMinAggregateOutputType | null
    _max: RegularMaxAggregateOutputType | null
  }

  type GetRegularGroupByPayload<T extends RegularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegularGroupByOutputType[P]>
            : GetScalarType<T[P], RegularGroupByOutputType[P]>
        }
      >
    >


  export type RegularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRegular?: boolean
    data_inicio_atendimento?: boolean
    qtde_sessoes?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regular"]>



  export type RegularSelectScalar = {
    idRegular?: boolean
    data_inicio_atendimento?: boolean
    qtde_sessoes?: boolean
    idPaciente?: boolean
    idBolsista?: boolean
  }

  export type RegularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idRegular" | "data_inicio_atendimento" | "qtde_sessoes" | "idPaciente" | "idBolsista", ExtArgs["result"]["regular"]>
  export type RegularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $RegularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regular"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idRegular: number
      data_inicio_atendimento: Date
      qtde_sessoes: number
      idPaciente: number
      idBolsista: number
    }, ExtArgs["result"]["regular"]>
    composites: {}
  }

  type RegularGetPayload<S extends boolean | null | undefined | RegularDefaultArgs> = $Result.GetResult<Prisma.$RegularPayload, S>

  type RegularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegularCountAggregateInputType | true
    }

  export interface RegularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regular'], meta: { name: 'Regular' } }
    /**
     * Find zero or one Regular that matches the filter.
     * @param {RegularFindUniqueArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegularFindUniqueArgs>(args: SelectSubset<T, RegularFindUniqueArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegularFindUniqueOrThrowArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegularFindUniqueOrThrowArgs>(args: SelectSubset<T, RegularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularFindFirstArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegularFindFirstArgs>(args?: SelectSubset<T, RegularFindFirstArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularFindFirstOrThrowArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegularFindFirstOrThrowArgs>(args?: SelectSubset<T, RegularFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regulars
     * const regulars = await prisma.regular.findMany()
     * 
     * // Get first 10 Regulars
     * const regulars = await prisma.regular.findMany({ take: 10 })
     * 
     * // Only select the `idRegular`
     * const regularWithIdRegularOnly = await prisma.regular.findMany({ select: { idRegular: true } })
     * 
     */
    findMany<T extends RegularFindManyArgs>(args?: SelectSubset<T, RegularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regular.
     * @param {RegularCreateArgs} args - Arguments to create a Regular.
     * @example
     * // Create one Regular
     * const Regular = await prisma.regular.create({
     *   data: {
     *     // ... data to create a Regular
     *   }
     * })
     * 
     */
    create<T extends RegularCreateArgs>(args: SelectSubset<T, RegularCreateArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regulars.
     * @param {RegularCreateManyArgs} args - Arguments to create many Regulars.
     * @example
     * // Create many Regulars
     * const regular = await prisma.regular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegularCreateManyArgs>(args?: SelectSubset<T, RegularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regular.
     * @param {RegularDeleteArgs} args - Arguments to delete one Regular.
     * @example
     * // Delete one Regular
     * const Regular = await prisma.regular.delete({
     *   where: {
     *     // ... filter to delete one Regular
     *   }
     * })
     * 
     */
    delete<T extends RegularDeleteArgs>(args: SelectSubset<T, RegularDeleteArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regular.
     * @param {RegularUpdateArgs} args - Arguments to update one Regular.
     * @example
     * // Update one Regular
     * const regular = await prisma.regular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegularUpdateArgs>(args: SelectSubset<T, RegularUpdateArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regulars.
     * @param {RegularDeleteManyArgs} args - Arguments to filter Regulars to delete.
     * @example
     * // Delete a few Regulars
     * const { count } = await prisma.regular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegularDeleteManyArgs>(args?: SelectSubset<T, RegularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regulars
     * const regular = await prisma.regular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegularUpdateManyArgs>(args: SelectSubset<T, RegularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regular.
     * @param {RegularUpsertArgs} args - Arguments to update or create a Regular.
     * @example
     * // Update or create a Regular
     * const regular = await prisma.regular.upsert({
     *   create: {
     *     // ... data to create a Regular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regular we want to update
     *   }
     * })
     */
    upsert<T extends RegularUpsertArgs>(args: SelectSubset<T, RegularUpsertArgs<ExtArgs>>): Prisma__RegularClient<$Result.GetResult<Prisma.$RegularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularCountArgs} args - Arguments to filter Regulars to count.
     * @example
     * // Count the number of Regulars
     * const count = await prisma.regular.count({
     *   where: {
     *     // ... the filter for the Regulars we want to count
     *   }
     * })
    **/
    count<T extends RegularCountArgs>(
      args?: Subset<T, RegularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegularAggregateArgs>(args: Subset<T, RegularAggregateArgs>): Prisma.PrismaPromise<GetRegularAggregateType<T>>

    /**
     * Group by Regular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularGroupByArgs} args - Group by arguments.
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
      T extends RegularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegularGroupByArgs['orderBy'] }
        : { orderBy?: RegularGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regular model
   */
  readonly fields: RegularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Regular model
   */
  interface RegularFieldRefs {
    readonly idRegular: FieldRef<"Regular", 'Int'>
    readonly data_inicio_atendimento: FieldRef<"Regular", 'DateTime'>
    readonly qtde_sessoes: FieldRef<"Regular", 'Int'>
    readonly idPaciente: FieldRef<"Regular", 'Int'>
    readonly idBolsista: FieldRef<"Regular", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Regular findUnique
   */
  export type RegularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter, which Regular to fetch.
     */
    where: RegularWhereUniqueInput
  }

  /**
   * Regular findUniqueOrThrow
   */
  export type RegularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter, which Regular to fetch.
     */
    where: RegularWhereUniqueInput
  }

  /**
   * Regular findFirst
   */
  export type RegularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter, which Regular to fetch.
     */
    where?: RegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulars to fetch.
     */
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulars.
     */
    cursor?: RegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulars.
     */
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * Regular findFirstOrThrow
   */
  export type RegularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter, which Regular to fetch.
     */
    where?: RegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulars to fetch.
     */
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulars.
     */
    cursor?: RegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulars.
     */
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * Regular findMany
   */
  export type RegularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter, which Regulars to fetch.
     */
    where?: RegularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulars to fetch.
     */
    orderBy?: RegularOrderByWithRelationInput | RegularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regulars.
     */
    cursor?: RegularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulars.
     */
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * Regular create
   */
  export type RegularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * The data needed to create a Regular.
     */
    data: XOR<RegularCreateInput, RegularUncheckedCreateInput>
  }

  /**
   * Regular createMany
   */
  export type RegularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regulars.
     */
    data: RegularCreateManyInput | RegularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regular update
   */
  export type RegularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * The data needed to update a Regular.
     */
    data: XOR<RegularUpdateInput, RegularUncheckedUpdateInput>
    /**
     * Choose, which Regular to update.
     */
    where: RegularWhereUniqueInput
  }

  /**
   * Regular updateMany
   */
  export type RegularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regulars.
     */
    data: XOR<RegularUpdateManyMutationInput, RegularUncheckedUpdateManyInput>
    /**
     * Filter which Regulars to update
     */
    where?: RegularWhereInput
    /**
     * Limit how many Regulars to update.
     */
    limit?: number
  }

  /**
   * Regular upsert
   */
  export type RegularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * The filter to search for the Regular to update in case it exists.
     */
    where: RegularWhereUniqueInput
    /**
     * In case the Regular found by the `where` argument doesn't exist, create a new Regular with this data.
     */
    create: XOR<RegularCreateInput, RegularUncheckedCreateInput>
    /**
     * In case the Regular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegularUpdateInput, RegularUncheckedUpdateInput>
  }

  /**
   * Regular delete
   */
  export type RegularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
    /**
     * Filter which Regular to delete.
     */
    where: RegularWhereUniqueInput
  }

  /**
   * Regular deleteMany
   */
  export type RegularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regulars to delete
     */
    where?: RegularWhereInput
    /**
     * Limit how many Regulars to delete.
     */
    limit?: number
  }

  /**
   * Regular without action
   */
  export type RegularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regular
     */
    select?: RegularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regular
     */
    omit?: RegularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    idHistorico: number | null
    idPaciente: number | null
    id_ultimo_bolsista: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    idHistorico: number | null
    idPaciente: number | null
    id_ultimo_bolsista: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    idHistorico: number | null
    data_desligamento: Date | null
    idPaciente: number | null
    id_ultimo_bolsista: number | null
  }

  export type HistoricoMaxAggregateOutputType = {
    idHistorico: number | null
    data_desligamento: Date | null
    idPaciente: number | null
    id_ultimo_bolsista: number | null
  }

  export type HistoricoCountAggregateOutputType = {
    idHistorico: number
    data_desligamento: number
    idPaciente: number
    id_ultimo_bolsista: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    idHistorico?: true
    idPaciente?: true
    id_ultimo_bolsista?: true
  }

  export type HistoricoSumAggregateInputType = {
    idHistorico?: true
    idPaciente?: true
    id_ultimo_bolsista?: true
  }

  export type HistoricoMinAggregateInputType = {
    idHistorico?: true
    data_desligamento?: true
    idPaciente?: true
    id_ultimo_bolsista?: true
  }

  export type HistoricoMaxAggregateInputType = {
    idHistorico?: true
    data_desligamento?: true
    idPaciente?: true
    id_ultimo_bolsista?: true
  }

  export type HistoricoCountAggregateInputType = {
    idHistorico?: true
    data_desligamento?: true
    idPaciente?: true
    id_ultimo_bolsista?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    idHistorico: number
    data_desligamento: Date | null
    idPaciente: number
    id_ultimo_bolsista: number
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idHistorico?: boolean
    data_desligamento?: boolean
    idPaciente?: boolean
    id_ultimo_bolsista?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>



  export type HistoricoSelectScalar = {
    idHistorico?: boolean
    data_desligamento?: boolean
    idPaciente?: boolean
    id_ultimo_bolsista?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idHistorico" | "data_desligamento" | "idPaciente" | "id_ultimo_bolsista", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idHistorico: number
      data_desligamento: Date | null
      idPaciente: number
      id_ultimo_bolsista: number
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `idHistorico`
     * const historicoWithIdHistoricoOnly = await prisma.historico.findMany({ select: { idHistorico: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historico model
   */
  interface HistoricoFieldRefs {
    readonly idHistorico: FieldRef<"Historico", 'Int'>
    readonly data_desligamento: FieldRef<"Historico", 'DateTime'>
    readonly idPaciente: FieldRef<"Historico", 'Int'>
    readonly id_ultimo_bolsista: FieldRef<"Historico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to delete.
     */
    limit?: number
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
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


  export const PacienteScalarFieldEnum: {
    idPaciente: 'idPaciente',
    nome: 'nome',
    matricula: 'matricula',
    data_nascimento: 'data_nascimento',
    telefone: 'telefone',
    data_inscricao: 'data_inscricao',
    relato: 'relato',
    curso: 'curso'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ColaboradorScalarFieldEnum: {
    idBolsista: 'idBolsista',
    nome: 'nome',
    matricula: 'matricula',
    data_admissao: 'data_admissao',
    data_saida: 'data_saida'
  };

  export type ColaboradorScalarFieldEnum = (typeof ColaboradorScalarFieldEnum)[keyof typeof ColaboradorScalarFieldEnum]


  export const ListaEsperaScalarFieldEnum: {
    idListaEspera: 'idListaEspera',
    idPaciente: 'idPaciente'
  };

  export type ListaEsperaScalarFieldEnum = (typeof ListaEsperaScalarFieldEnum)[keyof typeof ListaEsperaScalarFieldEnum]


  export const ListaRegularScalarFieldEnum: {
    idListaRegular: 'idListaRegular',
    idPaciente: 'idPaciente',
    idBolsista: 'idBolsista'
  };

  export type ListaRegularScalarFieldEnum = (typeof ListaRegularScalarFieldEnum)[keyof typeof ListaRegularScalarFieldEnum]


  export const ProtocoloScalarFieldEnum: {
    idProtocolo: 'idProtocolo',
    data_inicio_atendimento: 'data_inicio_atendimento',
    qtde_sessoes: 'qtde_sessoes',
    idPaciente: 'idPaciente',
    idBolsista: 'idBolsista'
  };

  export type ProtocoloScalarFieldEnum = (typeof ProtocoloScalarFieldEnum)[keyof typeof ProtocoloScalarFieldEnum]


  export const RegularScalarFieldEnum: {
    idRegular: 'idRegular',
    data_inicio_atendimento: 'data_inicio_atendimento',
    qtde_sessoes: 'qtde_sessoes',
    idPaciente: 'idPaciente',
    idBolsista: 'idBolsista'
  };

  export type RegularScalarFieldEnum = (typeof RegularScalarFieldEnum)[keyof typeof RegularScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    idHistorico: 'idHistorico',
    data_desligamento: 'data_desligamento',
    idPaciente: 'idPaciente',
    id_ultimo_bolsista: 'id_ultimo_bolsista'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PacienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    matricula: 'matricula',
    telefone: 'telefone',
    relato: 'relato',
    curso: 'curso'
  };

  export type PacienteOrderByRelevanceFieldEnum = (typeof PacienteOrderByRelevanceFieldEnum)[keyof typeof PacienteOrderByRelevanceFieldEnum]


  export const ColaboradorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    matricula: 'matricula'
  };

  export type ColaboradorOrderByRelevanceFieldEnum = (typeof ColaboradorOrderByRelevanceFieldEnum)[keyof typeof ColaboradorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    idPaciente?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    matricula?: StringFilter<"Paciente"> | string
    data_nascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    data_inscricao?: DateTimeFilter<"Paciente"> | Date | string
    relato?: StringNullableFilter<"Paciente"> | string | null
    curso?: StringNullableFilter<"Paciente"> | string | null
    ListaEspera?: ListaEsperaListRelationFilter
    ListaRegular?: ListaRegularListRelationFilter
    Protocolo?: ProtocoloListRelationFilter
    Regular?: RegularListRelationFilter
    Historico?: HistoricoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    idPaciente?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    data_inscricao?: SortOrder
    relato?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    ListaEspera?: ListaEsperaOrderByRelationAggregateInput
    ListaRegular?: ListaRegularOrderByRelationAggregateInput
    Protocolo?: ProtocoloOrderByRelationAggregateInput
    Regular?: RegularOrderByRelationAggregateInput
    Historico?: HistoricoOrderByRelationAggregateInput
    _relevance?: PacienteOrderByRelevanceInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    idPaciente?: number
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    matricula?: StringFilter<"Paciente"> | string
    data_nascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    data_inscricao?: DateTimeFilter<"Paciente"> | Date | string
    relato?: StringNullableFilter<"Paciente"> | string | null
    curso?: StringNullableFilter<"Paciente"> | string | null
    ListaEspera?: ListaEsperaListRelationFilter
    ListaRegular?: ListaRegularListRelationFilter
    Protocolo?: ProtocoloListRelationFilter
    Regular?: RegularListRelationFilter
    Historico?: HistoricoListRelationFilter
  }, "idPaciente">

  export type PacienteOrderByWithAggregationInput = {
    idPaciente?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    data_inscricao?: SortOrder
    relato?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    idPaciente?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    matricula?: StringWithAggregatesFilter<"Paciente"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    telefone?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    data_inscricao?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    relato?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    curso?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
  }

  export type ColaboradorWhereInput = {
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    idBolsista?: IntFilter<"Colaborador"> | number
    nome?: StringFilter<"Colaborador"> | string
    matricula?: StringFilter<"Colaborador"> | string
    data_admissao?: DateTimeFilter<"Colaborador"> | Date | string
    data_saida?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    ListaRegular?: ListaRegularListRelationFilter
    Protocolo?: ProtocoloListRelationFilter
    Regular?: RegularListRelationFilter
    Historico?: HistoricoListRelationFilter
  }

  export type ColaboradorOrderByWithRelationInput = {
    idBolsista?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_admissao?: SortOrder
    data_saida?: SortOrderInput | SortOrder
    ListaRegular?: ListaRegularOrderByRelationAggregateInput
    Protocolo?: ProtocoloOrderByRelationAggregateInput
    Regular?: RegularOrderByRelationAggregateInput
    Historico?: HistoricoOrderByRelationAggregateInput
    _relevance?: ColaboradorOrderByRelevanceInput
  }

  export type ColaboradorWhereUniqueInput = Prisma.AtLeast<{
    idBolsista?: number
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    nome?: StringFilter<"Colaborador"> | string
    matricula?: StringFilter<"Colaborador"> | string
    data_admissao?: DateTimeFilter<"Colaborador"> | Date | string
    data_saida?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    ListaRegular?: ListaRegularListRelationFilter
    Protocolo?: ProtocoloListRelationFilter
    Regular?: RegularListRelationFilter
    Historico?: HistoricoListRelationFilter
  }, "idBolsista">

  export type ColaboradorOrderByWithAggregationInput = {
    idBolsista?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_admissao?: SortOrder
    data_saida?: SortOrderInput | SortOrder
    _count?: ColaboradorCountOrderByAggregateInput
    _avg?: ColaboradorAvgOrderByAggregateInput
    _max?: ColaboradorMaxOrderByAggregateInput
    _min?: ColaboradorMinOrderByAggregateInput
    _sum?: ColaboradorSumOrderByAggregateInput
  }

  export type ColaboradorScalarWhereWithAggregatesInput = {
    AND?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    OR?: ColaboradorScalarWhereWithAggregatesInput[]
    NOT?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    idBolsista?: IntWithAggregatesFilter<"Colaborador"> | number
    nome?: StringWithAggregatesFilter<"Colaborador"> | string
    matricula?: StringWithAggregatesFilter<"Colaborador"> | string
    data_admissao?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
    data_saida?: DateTimeNullableWithAggregatesFilter<"Colaborador"> | Date | string | null
  }

  export type ListaEsperaWhereInput = {
    AND?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    OR?: ListaEsperaWhereInput[]
    NOT?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    idListaEspera?: IntFilter<"ListaEspera"> | number
    idPaciente?: IntFilter<"ListaEspera"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type ListaEsperaOrderByWithRelationInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type ListaEsperaWhereUniqueInput = Prisma.AtLeast<{
    idListaEspera?: number
    AND?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    OR?: ListaEsperaWhereInput[]
    NOT?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    idPaciente?: IntFilter<"ListaEspera"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "idListaEspera">

  export type ListaEsperaOrderByWithAggregationInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
    _count?: ListaEsperaCountOrderByAggregateInput
    _avg?: ListaEsperaAvgOrderByAggregateInput
    _max?: ListaEsperaMaxOrderByAggregateInput
    _min?: ListaEsperaMinOrderByAggregateInput
    _sum?: ListaEsperaSumOrderByAggregateInput
  }

  export type ListaEsperaScalarWhereWithAggregatesInput = {
    AND?: ListaEsperaScalarWhereWithAggregatesInput | ListaEsperaScalarWhereWithAggregatesInput[]
    OR?: ListaEsperaScalarWhereWithAggregatesInput[]
    NOT?: ListaEsperaScalarWhereWithAggregatesInput | ListaEsperaScalarWhereWithAggregatesInput[]
    idListaEspera?: IntWithAggregatesFilter<"ListaEspera"> | number
    idPaciente?: IntWithAggregatesFilter<"ListaEspera"> | number
  }

  export type ListaRegularWhereInput = {
    AND?: ListaRegularWhereInput | ListaRegularWhereInput[]
    OR?: ListaRegularWhereInput[]
    NOT?: ListaRegularWhereInput | ListaRegularWhereInput[]
    idListaRegular?: IntFilter<"ListaRegular"> | number
    idPaciente?: IntFilter<"ListaRegular"> | number
    idBolsista?: IntFilter<"ListaRegular"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type ListaRegularOrderByWithRelationInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type ListaRegularWhereUniqueInput = Prisma.AtLeast<{
    idListaRegular?: number
    AND?: ListaRegularWhereInput | ListaRegularWhereInput[]
    OR?: ListaRegularWhereInput[]
    NOT?: ListaRegularWhereInput | ListaRegularWhereInput[]
    idPaciente?: IntFilter<"ListaRegular"> | number
    idBolsista?: IntFilter<"ListaRegular"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "idListaRegular">

  export type ListaRegularOrderByWithAggregationInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    _count?: ListaRegularCountOrderByAggregateInput
    _avg?: ListaRegularAvgOrderByAggregateInput
    _max?: ListaRegularMaxOrderByAggregateInput
    _min?: ListaRegularMinOrderByAggregateInput
    _sum?: ListaRegularSumOrderByAggregateInput
  }

  export type ListaRegularScalarWhereWithAggregatesInput = {
    AND?: ListaRegularScalarWhereWithAggregatesInput | ListaRegularScalarWhereWithAggregatesInput[]
    OR?: ListaRegularScalarWhereWithAggregatesInput[]
    NOT?: ListaRegularScalarWhereWithAggregatesInput | ListaRegularScalarWhereWithAggregatesInput[]
    idListaRegular?: IntWithAggregatesFilter<"ListaRegular"> | number
    idPaciente?: IntWithAggregatesFilter<"ListaRegular"> | number
    idBolsista?: IntWithAggregatesFilter<"ListaRegular"> | number
  }

  export type ProtocoloWhereInput = {
    AND?: ProtocoloWhereInput | ProtocoloWhereInput[]
    OR?: ProtocoloWhereInput[]
    NOT?: ProtocoloWhereInput | ProtocoloWhereInput[]
    idProtocolo?: IntFilter<"Protocolo"> | number
    data_inicio_atendimento?: DateTimeFilter<"Protocolo"> | Date | string
    qtde_sessoes?: IntFilter<"Protocolo"> | number
    idPaciente?: IntFilter<"Protocolo"> | number
    idBolsista?: IntFilter<"Protocolo"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type ProtocoloOrderByWithRelationInput = {
    idProtocolo?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type ProtocoloWhereUniqueInput = Prisma.AtLeast<{
    idProtocolo?: number
    AND?: ProtocoloWhereInput | ProtocoloWhereInput[]
    OR?: ProtocoloWhereInput[]
    NOT?: ProtocoloWhereInput | ProtocoloWhereInput[]
    data_inicio_atendimento?: DateTimeFilter<"Protocolo"> | Date | string
    qtde_sessoes?: IntFilter<"Protocolo"> | number
    idPaciente?: IntFilter<"Protocolo"> | number
    idBolsista?: IntFilter<"Protocolo"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "idProtocolo">

  export type ProtocoloOrderByWithAggregationInput = {
    idProtocolo?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    _count?: ProtocoloCountOrderByAggregateInput
    _avg?: ProtocoloAvgOrderByAggregateInput
    _max?: ProtocoloMaxOrderByAggregateInput
    _min?: ProtocoloMinOrderByAggregateInput
    _sum?: ProtocoloSumOrderByAggregateInput
  }

  export type ProtocoloScalarWhereWithAggregatesInput = {
    AND?: ProtocoloScalarWhereWithAggregatesInput | ProtocoloScalarWhereWithAggregatesInput[]
    OR?: ProtocoloScalarWhereWithAggregatesInput[]
    NOT?: ProtocoloScalarWhereWithAggregatesInput | ProtocoloScalarWhereWithAggregatesInput[]
    idProtocolo?: IntWithAggregatesFilter<"Protocolo"> | number
    data_inicio_atendimento?: DateTimeWithAggregatesFilter<"Protocolo"> | Date | string
    qtde_sessoes?: IntWithAggregatesFilter<"Protocolo"> | number
    idPaciente?: IntWithAggregatesFilter<"Protocolo"> | number
    idBolsista?: IntWithAggregatesFilter<"Protocolo"> | number
  }

  export type RegularWhereInput = {
    AND?: RegularWhereInput | RegularWhereInput[]
    OR?: RegularWhereInput[]
    NOT?: RegularWhereInput | RegularWhereInput[]
    idRegular?: IntFilter<"Regular"> | number
    data_inicio_atendimento?: DateTimeFilter<"Regular"> | Date | string
    qtde_sessoes?: IntFilter<"Regular"> | number
    idPaciente?: IntFilter<"Regular"> | number
    idBolsista?: IntFilter<"Regular"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type RegularOrderByWithRelationInput = {
    idRegular?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type RegularWhereUniqueInput = Prisma.AtLeast<{
    idRegular?: number
    AND?: RegularWhereInput | RegularWhereInput[]
    OR?: RegularWhereInput[]
    NOT?: RegularWhereInput | RegularWhereInput[]
    data_inicio_atendimento?: DateTimeFilter<"Regular"> | Date | string
    qtde_sessoes?: IntFilter<"Regular"> | number
    idPaciente?: IntFilter<"Regular"> | number
    idBolsista?: IntFilter<"Regular"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "idRegular">

  export type RegularOrderByWithAggregationInput = {
    idRegular?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
    _count?: RegularCountOrderByAggregateInput
    _avg?: RegularAvgOrderByAggregateInput
    _max?: RegularMaxOrderByAggregateInput
    _min?: RegularMinOrderByAggregateInput
    _sum?: RegularSumOrderByAggregateInput
  }

  export type RegularScalarWhereWithAggregatesInput = {
    AND?: RegularScalarWhereWithAggregatesInput | RegularScalarWhereWithAggregatesInput[]
    OR?: RegularScalarWhereWithAggregatesInput[]
    NOT?: RegularScalarWhereWithAggregatesInput | RegularScalarWhereWithAggregatesInput[]
    idRegular?: IntWithAggregatesFilter<"Regular"> | number
    data_inicio_atendimento?: DateTimeWithAggregatesFilter<"Regular"> | Date | string
    qtde_sessoes?: IntWithAggregatesFilter<"Regular"> | number
    idPaciente?: IntWithAggregatesFilter<"Regular"> | number
    idBolsista?: IntWithAggregatesFilter<"Regular"> | number
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    idHistorico?: IntFilter<"Historico"> | number
    data_desligamento?: DateTimeNullableFilter<"Historico"> | Date | string | null
    idPaciente?: IntFilter<"Historico"> | number
    id_ultimo_bolsista?: IntFilter<"Historico"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    idHistorico?: SortOrder
    data_desligamento?: SortOrderInput | SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    idHistorico?: number
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    data_desligamento?: DateTimeNullableFilter<"Historico"> | Date | string | null
    idPaciente?: IntFilter<"Historico"> | number
    id_ultimo_bolsista?: IntFilter<"Historico"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "idHistorico">

  export type HistoricoOrderByWithAggregationInput = {
    idHistorico?: SortOrder
    data_desligamento?: SortOrderInput | SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _avg?: HistoricoAvgOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
    _sum?: HistoricoSumOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    idHistorico?: IntWithAggregatesFilter<"Historico"> | number
    data_desligamento?: DateTimeNullableWithAggregatesFilter<"Historico"> | Date | string | null
    idPaciente?: IntWithAggregatesFilter<"Historico"> | number
    id_ultimo_bolsista?: IntWithAggregatesFilter<"Historico"> | number
  }

  export type PacienteCreateInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloCreateNestedManyWithoutPacienteInput
    Regular?: RegularCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutPacienteInput
    Regular?: RegularUncheckedCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUncheckedUpdateManyInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ColaboradorCreateInput = {
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloCreateNestedManyWithoutColaboradorInput
    Regular?: RegularCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutColaboradorInput
    Regular?: RegularUncheckedCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorCreateManyInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
  }

  export type ColaboradorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ColaboradorUncheckedUpdateManyInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ListaEsperaCreateInput = {
    paciente: PacienteCreateNestedOneWithoutListaEsperaInput
  }

  export type ListaEsperaUncheckedCreateInput = {
    idListaEspera?: number
    idPaciente: number
  }

  export type ListaEsperaUpdateInput = {
    paciente?: PacienteUpdateOneRequiredWithoutListaEsperaNestedInput
  }

  export type ListaEsperaUncheckedUpdateInput = {
    idListaEspera?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaCreateManyInput = {
    idListaEspera?: number
    idPaciente: number
  }

  export type ListaEsperaUpdateManyMutationInput = {

  }

  export type ListaEsperaUncheckedUpdateManyInput = {
    idListaEspera?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularCreateInput = {
    paciente: PacienteCreateNestedOneWithoutListaRegularInput
    colaborador: ColaboradorCreateNestedOneWithoutListaRegularInput
  }

  export type ListaRegularUncheckedCreateInput = {
    idListaRegular?: number
    idPaciente: number
    idBolsista: number
  }

  export type ListaRegularUpdateInput = {
    paciente?: PacienteUpdateOneRequiredWithoutListaRegularNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutListaRegularNestedInput
  }

  export type ListaRegularUncheckedUpdateInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularCreateManyInput = {
    idListaRegular?: number
    idPaciente: number
    idBolsista: number
  }

  export type ListaRegularUpdateManyMutationInput = {

  }

  export type ListaRegularUncheckedUpdateManyInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloCreateInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    paciente: PacienteCreateNestedOneWithoutProtocoloInput
    colaborador: ColaboradorCreateNestedOneWithoutProtocoloInput
  }

  export type ProtocoloUncheckedCreateInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
    idBolsista: number
  }

  export type ProtocoloUpdateInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    paciente?: PacienteUpdateOneRequiredWithoutProtocoloNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutProtocoloNestedInput
  }

  export type ProtocoloUncheckedUpdateInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloCreateManyInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
    idBolsista: number
  }

  export type ProtocoloUpdateManyMutationInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloUncheckedUpdateManyInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type RegularCreateInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    paciente: PacienteCreateNestedOneWithoutRegularInput
    colaborador: ColaboradorCreateNestedOneWithoutRegularInput
  }

  export type RegularUncheckedCreateInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
    idBolsista: number
  }

  export type RegularUpdateInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    paciente?: PacienteUpdateOneRequiredWithoutRegularNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutRegularNestedInput
  }

  export type RegularUncheckedUpdateInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type RegularCreateManyInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
    idBolsista: number
  }

  export type RegularUpdateManyMutationInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
  }

  export type RegularUncheckedUpdateManyInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateInput = {
    data_desligamento?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutHistoricoInput
    colaborador: ColaboradorCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    idPaciente: number
    id_ultimo_bolsista: number
  }

  export type HistoricoUpdateInput = {
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutHistoricoNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPaciente?: IntFieldUpdateOperationsInput | number
    id_ultimo_bolsista?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateManyInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    idPaciente: number
    id_ultimo_bolsista: number
  }

  export type HistoricoUpdateManyMutationInput = {
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPaciente?: IntFieldUpdateOperationsInput | number
    id_ultimo_bolsista?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ListaEsperaListRelationFilter = {
    every?: ListaEsperaWhereInput
    some?: ListaEsperaWhereInput
    none?: ListaEsperaWhereInput
  }

  export type ListaRegularListRelationFilter = {
    every?: ListaRegularWhereInput
    some?: ListaRegularWhereInput
    none?: ListaRegularWhereInput
  }

  export type ProtocoloListRelationFilter = {
    every?: ProtocoloWhereInput
    some?: ProtocoloWhereInput
    none?: ProtocoloWhereInput
  }

  export type RegularListRelationFilter = {
    every?: RegularWhereInput
    some?: RegularWhereInput
    none?: RegularWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListaEsperaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListaRegularOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocoloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegularOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelevanceInput = {
    fields: PacienteOrderByRelevanceFieldEnum | PacienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PacienteCountOrderByAggregateInput = {
    idPaciente?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    data_inscricao?: SortOrder
    relato?: SortOrder
    curso?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    idPaciente?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    idPaciente?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    data_inscricao?: SortOrder
    relato?: SortOrder
    curso?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    idPaciente?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    data_inscricao?: SortOrder
    relato?: SortOrder
    curso?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    idPaciente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ColaboradorOrderByRelevanceInput = {
    fields: ColaboradorOrderByRelevanceFieldEnum | ColaboradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ColaboradorCountOrderByAggregateInput = {
    idBolsista?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_admissao?: SortOrder
    data_saida?: SortOrder
  }

  export type ColaboradorAvgOrderByAggregateInput = {
    idBolsista?: SortOrder
  }

  export type ColaboradorMaxOrderByAggregateInput = {
    idBolsista?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_admissao?: SortOrder
    data_saida?: SortOrder
  }

  export type ColaboradorMinOrderByAggregateInput = {
    idBolsista?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    data_admissao?: SortOrder
    data_saida?: SortOrder
  }

  export type ColaboradorSumOrderByAggregateInput = {
    idBolsista?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type ListaEsperaCountOrderByAggregateInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
  }

  export type ListaEsperaAvgOrderByAggregateInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
  }

  export type ListaEsperaMaxOrderByAggregateInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
  }

  export type ListaEsperaMinOrderByAggregateInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
  }

  export type ListaEsperaSumOrderByAggregateInput = {
    idListaEspera?: SortOrder
    idPaciente?: SortOrder
  }

  export type ColaboradorScalarRelationFilter = {
    is?: ColaboradorWhereInput
    isNot?: ColaboradorWhereInput
  }

  export type ListaRegularCountOrderByAggregateInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ListaRegularAvgOrderByAggregateInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ListaRegularMaxOrderByAggregateInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ListaRegularMinOrderByAggregateInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ListaRegularSumOrderByAggregateInput = {
    idListaRegular?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ProtocoloCountOrderByAggregateInput = {
    idProtocolo?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ProtocoloAvgOrderByAggregateInput = {
    idProtocolo?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ProtocoloMaxOrderByAggregateInput = {
    idProtocolo?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ProtocoloMinOrderByAggregateInput = {
    idProtocolo?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type ProtocoloSumOrderByAggregateInput = {
    idProtocolo?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type RegularCountOrderByAggregateInput = {
    idRegular?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type RegularAvgOrderByAggregateInput = {
    idRegular?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type RegularMaxOrderByAggregateInput = {
    idRegular?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type RegularMinOrderByAggregateInput = {
    idRegular?: SortOrder
    data_inicio_atendimento?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type RegularSumOrderByAggregateInput = {
    idRegular?: SortOrder
    qtde_sessoes?: SortOrder
    idPaciente?: SortOrder
    idBolsista?: SortOrder
  }

  export type HistoricoCountOrderByAggregateInput = {
    idHistorico?: SortOrder
    data_desligamento?: SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    idHistorico?: SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    idHistorico?: SortOrder
    data_desligamento?: SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    idHistorico?: SortOrder
    data_desligamento?: SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    idHistorico?: SortOrder
    idPaciente?: SortOrder
    id_ultimo_bolsista?: SortOrder
  }

  export type ListaEsperaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput> | ListaEsperaCreateWithoutPacienteInput[] | ListaEsperaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutPacienteInput | ListaEsperaCreateOrConnectWithoutPacienteInput[]
    createMany?: ListaEsperaCreateManyPacienteInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type ListaRegularCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput> | ListaRegularCreateWithoutPacienteInput[] | ListaRegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutPacienteInput | ListaRegularCreateOrConnectWithoutPacienteInput[]
    createMany?: ListaRegularCreateManyPacienteInputEnvelope
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
  }

  export type ProtocoloCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput> | ProtocoloCreateWithoutPacienteInput[] | ProtocoloUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutPacienteInput | ProtocoloCreateOrConnectWithoutPacienteInput[]
    createMany?: ProtocoloCreateManyPacienteInputEnvelope
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
  }

  export type RegularCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput> | RegularCreateWithoutPacienteInput[] | RegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutPacienteInput | RegularCreateOrConnectWithoutPacienteInput[]
    createMany?: RegularCreateManyPacienteInputEnvelope
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput> | HistoricoCreateWithoutPacienteInput[] | HistoricoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPacienteInput | HistoricoCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoricoCreateManyPacienteInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput> | ListaEsperaCreateWithoutPacienteInput[] | ListaEsperaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutPacienteInput | ListaEsperaCreateOrConnectWithoutPacienteInput[]
    createMany?: ListaEsperaCreateManyPacienteInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type ListaRegularUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput> | ListaRegularCreateWithoutPacienteInput[] | ListaRegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutPacienteInput | ListaRegularCreateOrConnectWithoutPacienteInput[]
    createMany?: ListaRegularCreateManyPacienteInputEnvelope
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
  }

  export type ProtocoloUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput> | ProtocoloCreateWithoutPacienteInput[] | ProtocoloUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutPacienteInput | ProtocoloCreateOrConnectWithoutPacienteInput[]
    createMany?: ProtocoloCreateManyPacienteInputEnvelope
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
  }

  export type RegularUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput> | RegularCreateWithoutPacienteInput[] | RegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutPacienteInput | RegularCreateOrConnectWithoutPacienteInput[]
    createMany?: RegularCreateManyPacienteInputEnvelope
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput> | HistoricoCreateWithoutPacienteInput[] | HistoricoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPacienteInput | HistoricoCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoricoCreateManyPacienteInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ListaEsperaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput> | ListaEsperaCreateWithoutPacienteInput[] | ListaEsperaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutPacienteInput | ListaEsperaCreateOrConnectWithoutPacienteInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutPacienteInput | ListaEsperaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ListaEsperaCreateManyPacienteInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutPacienteInput | ListaEsperaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutPacienteInput | ListaEsperaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type ListaRegularUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput> | ListaRegularCreateWithoutPacienteInput[] | ListaRegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutPacienteInput | ListaRegularCreateOrConnectWithoutPacienteInput[]
    upsert?: ListaRegularUpsertWithWhereUniqueWithoutPacienteInput | ListaRegularUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ListaRegularCreateManyPacienteInputEnvelope
    set?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    disconnect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    delete?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    update?: ListaRegularUpdateWithWhereUniqueWithoutPacienteInput | ListaRegularUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ListaRegularUpdateManyWithWhereWithoutPacienteInput | ListaRegularUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
  }

  export type ProtocoloUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput> | ProtocoloCreateWithoutPacienteInput[] | ProtocoloUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutPacienteInput | ProtocoloCreateOrConnectWithoutPacienteInput[]
    upsert?: ProtocoloUpsertWithWhereUniqueWithoutPacienteInput | ProtocoloUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ProtocoloCreateManyPacienteInputEnvelope
    set?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    disconnect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    delete?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    update?: ProtocoloUpdateWithWhereUniqueWithoutPacienteInput | ProtocoloUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ProtocoloUpdateManyWithWhereWithoutPacienteInput | ProtocoloUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
  }

  export type RegularUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput> | RegularCreateWithoutPacienteInput[] | RegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutPacienteInput | RegularCreateOrConnectWithoutPacienteInput[]
    upsert?: RegularUpsertWithWhereUniqueWithoutPacienteInput | RegularUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RegularCreateManyPacienteInputEnvelope
    set?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    disconnect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    delete?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    update?: RegularUpdateWithWhereUniqueWithoutPacienteInput | RegularUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RegularUpdateManyWithWhereWithoutPacienteInput | RegularUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RegularScalarWhereInput | RegularScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput> | HistoricoCreateWithoutPacienteInput[] | HistoricoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPacienteInput | HistoricoCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPacienteInput | HistoricoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoricoCreateManyPacienteInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPacienteInput | HistoricoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPacienteInput | HistoricoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput> | ListaEsperaCreateWithoutPacienteInput[] | ListaEsperaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutPacienteInput | ListaEsperaCreateOrConnectWithoutPacienteInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutPacienteInput | ListaEsperaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ListaEsperaCreateManyPacienteInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutPacienteInput | ListaEsperaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutPacienteInput | ListaEsperaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput> | ListaRegularCreateWithoutPacienteInput[] | ListaRegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutPacienteInput | ListaRegularCreateOrConnectWithoutPacienteInput[]
    upsert?: ListaRegularUpsertWithWhereUniqueWithoutPacienteInput | ListaRegularUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ListaRegularCreateManyPacienteInputEnvelope
    set?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    disconnect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    delete?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    update?: ListaRegularUpdateWithWhereUniqueWithoutPacienteInput | ListaRegularUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ListaRegularUpdateManyWithWhereWithoutPacienteInput | ListaRegularUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
  }

  export type ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput> | ProtocoloCreateWithoutPacienteInput[] | ProtocoloUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutPacienteInput | ProtocoloCreateOrConnectWithoutPacienteInput[]
    upsert?: ProtocoloUpsertWithWhereUniqueWithoutPacienteInput | ProtocoloUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ProtocoloCreateManyPacienteInputEnvelope
    set?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    disconnect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    delete?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    update?: ProtocoloUpdateWithWhereUniqueWithoutPacienteInput | ProtocoloUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ProtocoloUpdateManyWithWhereWithoutPacienteInput | ProtocoloUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
  }

  export type RegularUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput> | RegularCreateWithoutPacienteInput[] | RegularUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutPacienteInput | RegularCreateOrConnectWithoutPacienteInput[]
    upsert?: RegularUpsertWithWhereUniqueWithoutPacienteInput | RegularUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RegularCreateManyPacienteInputEnvelope
    set?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    disconnect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    delete?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    update?: RegularUpdateWithWhereUniqueWithoutPacienteInput | RegularUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RegularUpdateManyWithWhereWithoutPacienteInput | RegularUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RegularScalarWhereInput | RegularScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput> | HistoricoCreateWithoutPacienteInput[] | HistoricoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPacienteInput | HistoricoCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPacienteInput | HistoricoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoricoCreateManyPacienteInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPacienteInput | HistoricoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPacienteInput | HistoricoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type ListaRegularCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput> | ListaRegularCreateWithoutColaboradorInput[] | ListaRegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutColaboradorInput | ListaRegularCreateOrConnectWithoutColaboradorInput[]
    createMany?: ListaRegularCreateManyColaboradorInputEnvelope
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
  }

  export type ProtocoloCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput> | ProtocoloCreateWithoutColaboradorInput[] | ProtocoloUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutColaboradorInput | ProtocoloCreateOrConnectWithoutColaboradorInput[]
    createMany?: ProtocoloCreateManyColaboradorInputEnvelope
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
  }

  export type RegularCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput> | RegularCreateWithoutColaboradorInput[] | RegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutColaboradorInput | RegularCreateOrConnectWithoutColaboradorInput[]
    createMany?: RegularCreateManyColaboradorInputEnvelope
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput> | HistoricoCreateWithoutColaboradorInput[] | HistoricoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutColaboradorInput | HistoricoCreateOrConnectWithoutColaboradorInput[]
    createMany?: HistoricoCreateManyColaboradorInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type ListaRegularUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput> | ListaRegularCreateWithoutColaboradorInput[] | ListaRegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutColaboradorInput | ListaRegularCreateOrConnectWithoutColaboradorInput[]
    createMany?: ListaRegularCreateManyColaboradorInputEnvelope
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
  }

  export type ProtocoloUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput> | ProtocoloCreateWithoutColaboradorInput[] | ProtocoloUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutColaboradorInput | ProtocoloCreateOrConnectWithoutColaboradorInput[]
    createMany?: ProtocoloCreateManyColaboradorInputEnvelope
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
  }

  export type RegularUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput> | RegularCreateWithoutColaboradorInput[] | RegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutColaboradorInput | RegularCreateOrConnectWithoutColaboradorInput[]
    createMany?: RegularCreateManyColaboradorInputEnvelope
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput> | HistoricoCreateWithoutColaboradorInput[] | HistoricoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutColaboradorInput | HistoricoCreateOrConnectWithoutColaboradorInput[]
    createMany?: HistoricoCreateManyColaboradorInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ListaRegularUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput> | ListaRegularCreateWithoutColaboradorInput[] | ListaRegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutColaboradorInput | ListaRegularCreateOrConnectWithoutColaboradorInput[]
    upsert?: ListaRegularUpsertWithWhereUniqueWithoutColaboradorInput | ListaRegularUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ListaRegularCreateManyColaboradorInputEnvelope
    set?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    disconnect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    delete?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    update?: ListaRegularUpdateWithWhereUniqueWithoutColaboradorInput | ListaRegularUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ListaRegularUpdateManyWithWhereWithoutColaboradorInput | ListaRegularUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
  }

  export type ProtocoloUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput> | ProtocoloCreateWithoutColaboradorInput[] | ProtocoloUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutColaboradorInput | ProtocoloCreateOrConnectWithoutColaboradorInput[]
    upsert?: ProtocoloUpsertWithWhereUniqueWithoutColaboradorInput | ProtocoloUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ProtocoloCreateManyColaboradorInputEnvelope
    set?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    disconnect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    delete?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    update?: ProtocoloUpdateWithWhereUniqueWithoutColaboradorInput | ProtocoloUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ProtocoloUpdateManyWithWhereWithoutColaboradorInput | ProtocoloUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
  }

  export type RegularUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput> | RegularCreateWithoutColaboradorInput[] | RegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutColaboradorInput | RegularCreateOrConnectWithoutColaboradorInput[]
    upsert?: RegularUpsertWithWhereUniqueWithoutColaboradorInput | RegularUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: RegularCreateManyColaboradorInputEnvelope
    set?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    disconnect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    delete?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    update?: RegularUpdateWithWhereUniqueWithoutColaboradorInput | RegularUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: RegularUpdateManyWithWhereWithoutColaboradorInput | RegularUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: RegularScalarWhereInput | RegularScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput> | HistoricoCreateWithoutColaboradorInput[] | HistoricoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutColaboradorInput | HistoricoCreateOrConnectWithoutColaboradorInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutColaboradorInput | HistoricoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: HistoricoCreateManyColaboradorInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutColaboradorInput | HistoricoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutColaboradorInput | HistoricoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type ListaRegularUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput> | ListaRegularCreateWithoutColaboradorInput[] | ListaRegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ListaRegularCreateOrConnectWithoutColaboradorInput | ListaRegularCreateOrConnectWithoutColaboradorInput[]
    upsert?: ListaRegularUpsertWithWhereUniqueWithoutColaboradorInput | ListaRegularUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ListaRegularCreateManyColaboradorInputEnvelope
    set?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    disconnect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    delete?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    connect?: ListaRegularWhereUniqueInput | ListaRegularWhereUniqueInput[]
    update?: ListaRegularUpdateWithWhereUniqueWithoutColaboradorInput | ListaRegularUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ListaRegularUpdateManyWithWhereWithoutColaboradorInput | ListaRegularUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
  }

  export type ProtocoloUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput> | ProtocoloCreateWithoutColaboradorInput[] | ProtocoloUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProtocoloCreateOrConnectWithoutColaboradorInput | ProtocoloCreateOrConnectWithoutColaboradorInput[]
    upsert?: ProtocoloUpsertWithWhereUniqueWithoutColaboradorInput | ProtocoloUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ProtocoloCreateManyColaboradorInputEnvelope
    set?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    disconnect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    delete?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    connect?: ProtocoloWhereUniqueInput | ProtocoloWhereUniqueInput[]
    update?: ProtocoloUpdateWithWhereUniqueWithoutColaboradorInput | ProtocoloUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ProtocoloUpdateManyWithWhereWithoutColaboradorInput | ProtocoloUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
  }

  export type RegularUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput> | RegularCreateWithoutColaboradorInput[] | RegularUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: RegularCreateOrConnectWithoutColaboradorInput | RegularCreateOrConnectWithoutColaboradorInput[]
    upsert?: RegularUpsertWithWhereUniqueWithoutColaboradorInput | RegularUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: RegularCreateManyColaboradorInputEnvelope
    set?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    disconnect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    delete?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    connect?: RegularWhereUniqueInput | RegularWhereUniqueInput[]
    update?: RegularUpdateWithWhereUniqueWithoutColaboradorInput | RegularUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: RegularUpdateManyWithWhereWithoutColaboradorInput | RegularUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: RegularScalarWhereInput | RegularScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput> | HistoricoCreateWithoutColaboradorInput[] | HistoricoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutColaboradorInput | HistoricoCreateOrConnectWithoutColaboradorInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutColaboradorInput | HistoricoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: HistoricoCreateManyColaboradorInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutColaboradorInput | HistoricoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutColaboradorInput | HistoricoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutListaEsperaInput = {
    create?: XOR<PacienteCreateWithoutListaEsperaInput, PacienteUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutListaEsperaInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutListaEsperaNestedInput = {
    create?: XOR<PacienteCreateWithoutListaEsperaInput, PacienteUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutListaEsperaInput
    upsert?: PacienteUpsertWithoutListaEsperaInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutListaEsperaInput, PacienteUpdateWithoutListaEsperaInput>, PacienteUncheckedUpdateWithoutListaEsperaInput>
  }

  export type PacienteCreateNestedOneWithoutListaRegularInput = {
    create?: XOR<PacienteCreateWithoutListaRegularInput, PacienteUncheckedCreateWithoutListaRegularInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutListaRegularInput
    connect?: PacienteWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutListaRegularInput = {
    create?: XOR<ColaboradorCreateWithoutListaRegularInput, ColaboradorUncheckedCreateWithoutListaRegularInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutListaRegularInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutListaRegularNestedInput = {
    create?: XOR<PacienteCreateWithoutListaRegularInput, PacienteUncheckedCreateWithoutListaRegularInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutListaRegularInput
    upsert?: PacienteUpsertWithoutListaRegularInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutListaRegularInput, PacienteUpdateWithoutListaRegularInput>, PacienteUncheckedUpdateWithoutListaRegularInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutListaRegularNestedInput = {
    create?: XOR<ColaboradorCreateWithoutListaRegularInput, ColaboradorUncheckedCreateWithoutListaRegularInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutListaRegularInput
    upsert?: ColaboradorUpsertWithoutListaRegularInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutListaRegularInput, ColaboradorUpdateWithoutListaRegularInput>, ColaboradorUncheckedUpdateWithoutListaRegularInput>
  }

  export type PacienteCreateNestedOneWithoutProtocoloInput = {
    create?: XOR<PacienteCreateWithoutProtocoloInput, PacienteUncheckedCreateWithoutProtocoloInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutProtocoloInput
    connect?: PacienteWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutProtocoloInput = {
    create?: XOR<ColaboradorCreateWithoutProtocoloInput, ColaboradorUncheckedCreateWithoutProtocoloInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutProtocoloInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutProtocoloNestedInput = {
    create?: XOR<PacienteCreateWithoutProtocoloInput, PacienteUncheckedCreateWithoutProtocoloInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutProtocoloInput
    upsert?: PacienteUpsertWithoutProtocoloInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutProtocoloInput, PacienteUpdateWithoutProtocoloInput>, PacienteUncheckedUpdateWithoutProtocoloInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutProtocoloNestedInput = {
    create?: XOR<ColaboradorCreateWithoutProtocoloInput, ColaboradorUncheckedCreateWithoutProtocoloInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutProtocoloInput
    upsert?: ColaboradorUpsertWithoutProtocoloInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutProtocoloInput, ColaboradorUpdateWithoutProtocoloInput>, ColaboradorUncheckedUpdateWithoutProtocoloInput>
  }

  export type PacienteCreateNestedOneWithoutRegularInput = {
    create?: XOR<PacienteCreateWithoutRegularInput, PacienteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRegularInput
    connect?: PacienteWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutRegularInput = {
    create?: XOR<ColaboradorCreateWithoutRegularInput, ColaboradorUncheckedCreateWithoutRegularInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutRegularInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutRegularNestedInput = {
    create?: XOR<PacienteCreateWithoutRegularInput, PacienteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRegularInput
    upsert?: PacienteUpsertWithoutRegularInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutRegularInput, PacienteUpdateWithoutRegularInput>, PacienteUncheckedUpdateWithoutRegularInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutRegularNestedInput = {
    create?: XOR<ColaboradorCreateWithoutRegularInput, ColaboradorUncheckedCreateWithoutRegularInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutRegularInput
    upsert?: ColaboradorUpsertWithoutRegularInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutRegularInput, ColaboradorUpdateWithoutRegularInput>, ColaboradorUncheckedUpdateWithoutRegularInput>
  }

  export type PacienteCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<PacienteCreateWithoutHistoricoInput, PacienteUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoricoInput
    connect?: PacienteWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<ColaboradorCreateWithoutHistoricoInput, ColaboradorUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutHistoricoInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<PacienteCreateWithoutHistoricoInput, PacienteUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoricoInput
    upsert?: PacienteUpsertWithoutHistoricoInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutHistoricoInput, PacienteUpdateWithoutHistoricoInput>, PacienteUncheckedUpdateWithoutHistoricoInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<ColaboradorCreateWithoutHistoricoInput, ColaboradorUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutHistoricoInput
    upsert?: ColaboradorUpsertWithoutHistoricoInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutHistoricoInput, ColaboradorUpdateWithoutHistoricoInput>, ColaboradorUncheckedUpdateWithoutHistoricoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ListaEsperaCreateWithoutPacienteInput = {

  }

  export type ListaEsperaUncheckedCreateWithoutPacienteInput = {
    idListaEspera?: number
  }

  export type ListaEsperaCreateOrConnectWithoutPacienteInput = {
    where: ListaEsperaWhereUniqueInput
    create: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput>
  }

  export type ListaEsperaCreateManyPacienteInputEnvelope = {
    data: ListaEsperaCreateManyPacienteInput | ListaEsperaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ListaRegularCreateWithoutPacienteInput = {
    colaborador: ColaboradorCreateNestedOneWithoutListaRegularInput
  }

  export type ListaRegularUncheckedCreateWithoutPacienteInput = {
    idListaRegular?: number
    idBolsista: number
  }

  export type ListaRegularCreateOrConnectWithoutPacienteInput = {
    where: ListaRegularWhereUniqueInput
    create: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput>
  }

  export type ListaRegularCreateManyPacienteInputEnvelope = {
    data: ListaRegularCreateManyPacienteInput | ListaRegularCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ProtocoloCreateWithoutPacienteInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    colaborador: ColaboradorCreateNestedOneWithoutProtocoloInput
  }

  export type ProtocoloUncheckedCreateWithoutPacienteInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idBolsista: number
  }

  export type ProtocoloCreateOrConnectWithoutPacienteInput = {
    where: ProtocoloWhereUniqueInput
    create: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput>
  }

  export type ProtocoloCreateManyPacienteInputEnvelope = {
    data: ProtocoloCreateManyPacienteInput | ProtocoloCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type RegularCreateWithoutPacienteInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    colaborador: ColaboradorCreateNestedOneWithoutRegularInput
  }

  export type RegularUncheckedCreateWithoutPacienteInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idBolsista: number
  }

  export type RegularCreateOrConnectWithoutPacienteInput = {
    where: RegularWhereUniqueInput
    create: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput>
  }

  export type RegularCreateManyPacienteInputEnvelope = {
    data: RegularCreateManyPacienteInput | RegularCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutPacienteInput = {
    data_desligamento?: Date | string | null
    colaborador: ColaboradorCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutPacienteInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    id_ultimo_bolsista: number
  }

  export type HistoricoCreateOrConnectWithoutPacienteInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput>
  }

  export type HistoricoCreateManyPacienteInputEnvelope = {
    data: HistoricoCreateManyPacienteInput | HistoricoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ListaEsperaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ListaEsperaWhereUniqueInput
    update: XOR<ListaEsperaUpdateWithoutPacienteInput, ListaEsperaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ListaEsperaCreateWithoutPacienteInput, ListaEsperaUncheckedCreateWithoutPacienteInput>
  }

  export type ListaEsperaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ListaEsperaWhereUniqueInput
    data: XOR<ListaEsperaUpdateWithoutPacienteInput, ListaEsperaUncheckedUpdateWithoutPacienteInput>
  }

  export type ListaEsperaUpdateManyWithWhereWithoutPacienteInput = {
    where: ListaEsperaScalarWhereInput
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ListaEsperaScalarWhereInput = {
    AND?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
    OR?: ListaEsperaScalarWhereInput[]
    NOT?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
    idListaEspera?: IntFilter<"ListaEspera"> | number
    idPaciente?: IntFilter<"ListaEspera"> | number
  }

  export type ListaRegularUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ListaRegularWhereUniqueInput
    update: XOR<ListaRegularUpdateWithoutPacienteInput, ListaRegularUncheckedUpdateWithoutPacienteInput>
    create: XOR<ListaRegularCreateWithoutPacienteInput, ListaRegularUncheckedCreateWithoutPacienteInput>
  }

  export type ListaRegularUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ListaRegularWhereUniqueInput
    data: XOR<ListaRegularUpdateWithoutPacienteInput, ListaRegularUncheckedUpdateWithoutPacienteInput>
  }

  export type ListaRegularUpdateManyWithWhereWithoutPacienteInput = {
    where: ListaRegularScalarWhereInput
    data: XOR<ListaRegularUpdateManyMutationInput, ListaRegularUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ListaRegularScalarWhereInput = {
    AND?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
    OR?: ListaRegularScalarWhereInput[]
    NOT?: ListaRegularScalarWhereInput | ListaRegularScalarWhereInput[]
    idListaRegular?: IntFilter<"ListaRegular"> | number
    idPaciente?: IntFilter<"ListaRegular"> | number
    idBolsista?: IntFilter<"ListaRegular"> | number
  }

  export type ProtocoloUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ProtocoloWhereUniqueInput
    update: XOR<ProtocoloUpdateWithoutPacienteInput, ProtocoloUncheckedUpdateWithoutPacienteInput>
    create: XOR<ProtocoloCreateWithoutPacienteInput, ProtocoloUncheckedCreateWithoutPacienteInput>
  }

  export type ProtocoloUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ProtocoloWhereUniqueInput
    data: XOR<ProtocoloUpdateWithoutPacienteInput, ProtocoloUncheckedUpdateWithoutPacienteInput>
  }

  export type ProtocoloUpdateManyWithWhereWithoutPacienteInput = {
    where: ProtocoloScalarWhereInput
    data: XOR<ProtocoloUpdateManyMutationInput, ProtocoloUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ProtocoloScalarWhereInput = {
    AND?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
    OR?: ProtocoloScalarWhereInput[]
    NOT?: ProtocoloScalarWhereInput | ProtocoloScalarWhereInput[]
    idProtocolo?: IntFilter<"Protocolo"> | number
    data_inicio_atendimento?: DateTimeFilter<"Protocolo"> | Date | string
    qtde_sessoes?: IntFilter<"Protocolo"> | number
    idPaciente?: IntFilter<"Protocolo"> | number
    idBolsista?: IntFilter<"Protocolo"> | number
  }

  export type RegularUpsertWithWhereUniqueWithoutPacienteInput = {
    where: RegularWhereUniqueInput
    update: XOR<RegularUpdateWithoutPacienteInput, RegularUncheckedUpdateWithoutPacienteInput>
    create: XOR<RegularCreateWithoutPacienteInput, RegularUncheckedCreateWithoutPacienteInput>
  }

  export type RegularUpdateWithWhereUniqueWithoutPacienteInput = {
    where: RegularWhereUniqueInput
    data: XOR<RegularUpdateWithoutPacienteInput, RegularUncheckedUpdateWithoutPacienteInput>
  }

  export type RegularUpdateManyWithWhereWithoutPacienteInput = {
    where: RegularScalarWhereInput
    data: XOR<RegularUpdateManyMutationInput, RegularUncheckedUpdateManyWithoutPacienteInput>
  }

  export type RegularScalarWhereInput = {
    AND?: RegularScalarWhereInput | RegularScalarWhereInput[]
    OR?: RegularScalarWhereInput[]
    NOT?: RegularScalarWhereInput | RegularScalarWhereInput[]
    idRegular?: IntFilter<"Regular"> | number
    data_inicio_atendimento?: DateTimeFilter<"Regular"> | Date | string
    qtde_sessoes?: IntFilter<"Regular"> | number
    idPaciente?: IntFilter<"Regular"> | number
    idBolsista?: IntFilter<"Regular"> | number
  }

  export type HistoricoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutPacienteInput, HistoricoUncheckedUpdateWithoutPacienteInput>
    create: XOR<HistoricoCreateWithoutPacienteInput, HistoricoUncheckedCreateWithoutPacienteInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutPacienteInput, HistoricoUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutPacienteInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    idHistorico?: IntFilter<"Historico"> | number
    data_desligamento?: DateTimeNullableFilter<"Historico"> | Date | string | null
    idPaciente?: IntFilter<"Historico"> | number
    id_ultimo_bolsista?: IntFilter<"Historico"> | number
  }

  export type ListaRegularCreateWithoutColaboradorInput = {
    paciente: PacienteCreateNestedOneWithoutListaRegularInput
  }

  export type ListaRegularUncheckedCreateWithoutColaboradorInput = {
    idListaRegular?: number
    idPaciente: number
  }

  export type ListaRegularCreateOrConnectWithoutColaboradorInput = {
    where: ListaRegularWhereUniqueInput
    create: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput>
  }

  export type ListaRegularCreateManyColaboradorInputEnvelope = {
    data: ListaRegularCreateManyColaboradorInput | ListaRegularCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type ProtocoloCreateWithoutColaboradorInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    paciente: PacienteCreateNestedOneWithoutProtocoloInput
  }

  export type ProtocoloUncheckedCreateWithoutColaboradorInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
  }

  export type ProtocoloCreateOrConnectWithoutColaboradorInput = {
    where: ProtocoloWhereUniqueInput
    create: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput>
  }

  export type ProtocoloCreateManyColaboradorInputEnvelope = {
    data: ProtocoloCreateManyColaboradorInput | ProtocoloCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type RegularCreateWithoutColaboradorInput = {
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    paciente: PacienteCreateNestedOneWithoutRegularInput
  }

  export type RegularUncheckedCreateWithoutColaboradorInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
  }

  export type RegularCreateOrConnectWithoutColaboradorInput = {
    where: RegularWhereUniqueInput
    create: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput>
  }

  export type RegularCreateManyColaboradorInputEnvelope = {
    data: RegularCreateManyColaboradorInput | RegularCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutColaboradorInput = {
    data_desligamento?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutColaboradorInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    idPaciente: number
  }

  export type HistoricoCreateOrConnectWithoutColaboradorInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput>
  }

  export type HistoricoCreateManyColaboradorInputEnvelope = {
    data: HistoricoCreateManyColaboradorInput | HistoricoCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type ListaRegularUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: ListaRegularWhereUniqueInput
    update: XOR<ListaRegularUpdateWithoutColaboradorInput, ListaRegularUncheckedUpdateWithoutColaboradorInput>
    create: XOR<ListaRegularCreateWithoutColaboradorInput, ListaRegularUncheckedCreateWithoutColaboradorInput>
  }

  export type ListaRegularUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: ListaRegularWhereUniqueInput
    data: XOR<ListaRegularUpdateWithoutColaboradorInput, ListaRegularUncheckedUpdateWithoutColaboradorInput>
  }

  export type ListaRegularUpdateManyWithWhereWithoutColaboradorInput = {
    where: ListaRegularScalarWhereInput
    data: XOR<ListaRegularUpdateManyMutationInput, ListaRegularUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type ProtocoloUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: ProtocoloWhereUniqueInput
    update: XOR<ProtocoloUpdateWithoutColaboradorInput, ProtocoloUncheckedUpdateWithoutColaboradorInput>
    create: XOR<ProtocoloCreateWithoutColaboradorInput, ProtocoloUncheckedCreateWithoutColaboradorInput>
  }

  export type ProtocoloUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: ProtocoloWhereUniqueInput
    data: XOR<ProtocoloUpdateWithoutColaboradorInput, ProtocoloUncheckedUpdateWithoutColaboradorInput>
  }

  export type ProtocoloUpdateManyWithWhereWithoutColaboradorInput = {
    where: ProtocoloScalarWhereInput
    data: XOR<ProtocoloUpdateManyMutationInput, ProtocoloUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type RegularUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: RegularWhereUniqueInput
    update: XOR<RegularUpdateWithoutColaboradorInput, RegularUncheckedUpdateWithoutColaboradorInput>
    create: XOR<RegularCreateWithoutColaboradorInput, RegularUncheckedCreateWithoutColaboradorInput>
  }

  export type RegularUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: RegularWhereUniqueInput
    data: XOR<RegularUpdateWithoutColaboradorInput, RegularUncheckedUpdateWithoutColaboradorInput>
  }

  export type RegularUpdateManyWithWhereWithoutColaboradorInput = {
    where: RegularScalarWhereInput
    data: XOR<RegularUpdateManyMutationInput, RegularUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type HistoricoUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutColaboradorInput, HistoricoUncheckedUpdateWithoutColaboradorInput>
    create: XOR<HistoricoCreateWithoutColaboradorInput, HistoricoUncheckedCreateWithoutColaboradorInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutColaboradorInput, HistoricoUncheckedUpdateWithoutColaboradorInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutColaboradorInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type PacienteCreateWithoutListaEsperaInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaRegular?: ListaRegularCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloCreateNestedManyWithoutPacienteInput
    Regular?: RegularCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutListaEsperaInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutPacienteInput
    Regular?: RegularUncheckedCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutListaEsperaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutListaEsperaInput, PacienteUncheckedCreateWithoutListaEsperaInput>
  }

  export type PacienteUpsertWithoutListaEsperaInput = {
    update: XOR<PacienteUpdateWithoutListaEsperaInput, PacienteUncheckedUpdateWithoutListaEsperaInput>
    create: XOR<PacienteCreateWithoutListaEsperaInput, PacienteUncheckedCreateWithoutListaEsperaInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutListaEsperaInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutListaEsperaInput, PacienteUncheckedUpdateWithoutListaEsperaInput>
  }

  export type PacienteUpdateWithoutListaEsperaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaRegular?: ListaRegularUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutListaEsperaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateWithoutListaRegularInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloCreateNestedManyWithoutPacienteInput
    Regular?: RegularCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutListaRegularInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutPacienteInput
    Regular?: RegularUncheckedCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutListaRegularInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutListaRegularInput, PacienteUncheckedCreateWithoutListaRegularInput>
  }

  export type ColaboradorCreateWithoutListaRegularInput = {
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    Protocolo?: ProtocoloCreateNestedManyWithoutColaboradorInput
    Regular?: RegularCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutListaRegularInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutColaboradorInput
    Regular?: RegularUncheckedCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutListaRegularInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutListaRegularInput, ColaboradorUncheckedCreateWithoutListaRegularInput>
  }

  export type PacienteUpsertWithoutListaRegularInput = {
    update: XOR<PacienteUpdateWithoutListaRegularInput, PacienteUncheckedUpdateWithoutListaRegularInput>
    create: XOR<PacienteCreateWithoutListaRegularInput, PacienteUncheckedCreateWithoutListaRegularInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutListaRegularInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutListaRegularInput, PacienteUncheckedUpdateWithoutListaRegularInput>
  }

  export type PacienteUpdateWithoutListaRegularInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutListaRegularInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ColaboradorUpsertWithoutListaRegularInput = {
    update: XOR<ColaboradorUpdateWithoutListaRegularInput, ColaboradorUncheckedUpdateWithoutListaRegularInput>
    create: XOR<ColaboradorCreateWithoutListaRegularInput, ColaboradorUncheckedCreateWithoutListaRegularInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutListaRegularInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutListaRegularInput, ColaboradorUncheckedUpdateWithoutListaRegularInput>
  }

  export type ColaboradorUpdateWithoutListaRegularInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Protocolo?: ProtocoloUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutListaRegularInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PacienteCreateWithoutProtocoloInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularCreateNestedManyWithoutPacienteInput
    Regular?: RegularCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutProtocoloInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutPacienteInput
    Regular?: RegularUncheckedCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutProtocoloInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutProtocoloInput, PacienteUncheckedCreateWithoutProtocoloInput>
  }

  export type ColaboradorCreateWithoutProtocoloInput = {
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularCreateNestedManyWithoutColaboradorInput
    Regular?: RegularCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutProtocoloInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutColaboradorInput
    Regular?: RegularUncheckedCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutProtocoloInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutProtocoloInput, ColaboradorUncheckedCreateWithoutProtocoloInput>
  }

  export type PacienteUpsertWithoutProtocoloInput = {
    update: XOR<PacienteUpdateWithoutProtocoloInput, PacienteUncheckedUpdateWithoutProtocoloInput>
    create: XOR<PacienteCreateWithoutProtocoloInput, PacienteUncheckedCreateWithoutProtocoloInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutProtocoloInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutProtocoloInput, PacienteUncheckedUpdateWithoutProtocoloInput>
  }

  export type PacienteUpdateWithoutProtocoloInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutProtocoloInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ColaboradorUpsertWithoutProtocoloInput = {
    update: XOR<ColaboradorUpdateWithoutProtocoloInput, ColaboradorUncheckedUpdateWithoutProtocoloInput>
    create: XOR<ColaboradorCreateWithoutProtocoloInput, ColaboradorUncheckedCreateWithoutProtocoloInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutProtocoloInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutProtocoloInput, ColaboradorUncheckedUpdateWithoutProtocoloInput>
  }

  export type ColaboradorUpdateWithoutProtocoloInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutProtocoloInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PacienteCreateWithoutRegularInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutRegularInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutPacienteInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutRegularInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutRegularInput, PacienteUncheckedCreateWithoutRegularInput>
  }

  export type ColaboradorCreateWithoutRegularInput = {
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutRegularInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutColaboradorInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutRegularInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutRegularInput, ColaboradorUncheckedCreateWithoutRegularInput>
  }

  export type PacienteUpsertWithoutRegularInput = {
    update: XOR<PacienteUpdateWithoutRegularInput, PacienteUncheckedUpdateWithoutRegularInput>
    create: XOR<PacienteCreateWithoutRegularInput, PacienteUncheckedCreateWithoutRegularInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutRegularInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutRegularInput, PacienteUncheckedUpdateWithoutRegularInput>
  }

  export type PacienteUpdateWithoutRegularInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutRegularInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ColaboradorUpsertWithoutRegularInput = {
    update: XOR<ColaboradorUpdateWithoutRegularInput, ColaboradorUncheckedUpdateWithoutRegularInput>
    create: XOR<ColaboradorCreateWithoutRegularInput, ColaboradorUncheckedCreateWithoutRegularInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutRegularInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutRegularInput, ColaboradorUncheckedUpdateWithoutRegularInput>
  }

  export type ColaboradorUpdateWithoutRegularInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutRegularInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutColaboradorNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PacienteCreateWithoutHistoricoInput = {
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloCreateNestedManyWithoutPacienteInput
    Regular?: RegularCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutHistoricoInput = {
    idPaciente?: number
    nome: string
    matricula: string
    data_nascimento: Date | string
    telefone?: string | null
    data_inscricao: Date | string
    relato?: string | null
    curso?: string | null
    ListaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutPacienteInput
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutPacienteInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutPacienteInput
    Regular?: RegularUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutHistoricoInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutHistoricoInput, PacienteUncheckedCreateWithoutHistoricoInput>
  }

  export type ColaboradorCreateWithoutHistoricoInput = {
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloCreateNestedManyWithoutColaboradorInput
    Regular?: RegularCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutHistoricoInput = {
    idBolsista?: number
    nome: string
    matricula: string
    data_admissao: Date | string
    data_saida?: Date | string | null
    ListaRegular?: ListaRegularUncheckedCreateNestedManyWithoutColaboradorInput
    Protocolo?: ProtocoloUncheckedCreateNestedManyWithoutColaboradorInput
    Regular?: RegularUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutHistoricoInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutHistoricoInput, ColaboradorUncheckedCreateWithoutHistoricoInput>
  }

  export type PacienteUpsertWithoutHistoricoInput = {
    update: XOR<PacienteUpdateWithoutHistoricoInput, PacienteUncheckedUpdateWithoutHistoricoInput>
    create: XOR<PacienteCreateWithoutHistoricoInput, PacienteUncheckedCreateWithoutHistoricoInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutHistoricoInput, PacienteUncheckedUpdateWithoutHistoricoInput>
  }

  export type PacienteUpdateWithoutHistoricoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutHistoricoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    relato?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    ListaEspera?: ListaEsperaUncheckedUpdateManyWithoutPacienteNestedInput
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutPacienteNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutPacienteNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ColaboradorUpsertWithoutHistoricoInput = {
    update: XOR<ColaboradorUpdateWithoutHistoricoInput, ColaboradorUncheckedUpdateWithoutHistoricoInput>
    create: XOR<ColaboradorCreateWithoutHistoricoInput, ColaboradorUncheckedCreateWithoutHistoricoInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutHistoricoInput, ColaboradorUncheckedUpdateWithoutHistoricoInput>
  }

  export type ColaboradorUpdateWithoutHistoricoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutHistoricoInput = {
    idBolsista?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    data_admissao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ListaRegular?: ListaRegularUncheckedUpdateManyWithoutColaboradorNestedInput
    Protocolo?: ProtocoloUncheckedUpdateManyWithoutColaboradorNestedInput
    Regular?: RegularUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ListaEsperaCreateManyPacienteInput = {
    idListaEspera?: number
  }

  export type ListaRegularCreateManyPacienteInput = {
    idListaRegular?: number
    idBolsista: number
  }

  export type ProtocoloCreateManyPacienteInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idBolsista: number
  }

  export type RegularCreateManyPacienteInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idBolsista: number
  }

  export type HistoricoCreateManyPacienteInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    id_ultimo_bolsista: number
  }

  export type ListaEsperaUpdateWithoutPacienteInput = {

  }

  export type ListaEsperaUncheckedUpdateWithoutPacienteInput = {
    idListaEspera?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaUncheckedUpdateManyWithoutPacienteInput = {
    idListaEspera?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularUpdateWithoutPacienteInput = {
    colaborador?: ColaboradorUpdateOneRequiredWithoutListaRegularNestedInput
  }

  export type ListaRegularUncheckedUpdateWithoutPacienteInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularUncheckedUpdateManyWithoutPacienteInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloUpdateWithoutPacienteInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    colaborador?: ColaboradorUpdateOneRequiredWithoutProtocoloNestedInput
  }

  export type ProtocoloUncheckedUpdateWithoutPacienteInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloUncheckedUpdateManyWithoutPacienteInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type RegularUpdateWithoutPacienteInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    colaborador?: ColaboradorUpdateOneRequiredWithoutRegularNestedInput
  }

  export type RegularUncheckedUpdateWithoutPacienteInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type RegularUncheckedUpdateManyWithoutPacienteInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idBolsista?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoUpdateWithoutPacienteInput = {
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    colaborador?: ColaboradorUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutPacienteInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ultimo_bolsista?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoUncheckedUpdateManyWithoutPacienteInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ultimo_bolsista?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularCreateManyColaboradorInput = {
    idListaRegular?: number
    idPaciente: number
  }

  export type ProtocoloCreateManyColaboradorInput = {
    idProtocolo?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
  }

  export type RegularCreateManyColaboradorInput = {
    idRegular?: number
    data_inicio_atendimento: Date | string
    qtde_sessoes?: number
    idPaciente: number
  }

  export type HistoricoCreateManyColaboradorInput = {
    idHistorico?: number
    data_desligamento?: Date | string | null
    idPaciente: number
  }

  export type ListaRegularUpdateWithoutColaboradorInput = {
    paciente?: PacienteUpdateOneRequiredWithoutListaRegularNestedInput
  }

  export type ListaRegularUncheckedUpdateWithoutColaboradorInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type ListaRegularUncheckedUpdateManyWithoutColaboradorInput = {
    idListaRegular?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloUpdateWithoutColaboradorInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    paciente?: PacienteUpdateOneRequiredWithoutProtocoloNestedInput
  }

  export type ProtocoloUncheckedUpdateWithoutColaboradorInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocoloUncheckedUpdateManyWithoutColaboradorInput = {
    idProtocolo?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type RegularUpdateWithoutColaboradorInput = {
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    paciente?: PacienteUpdateOneRequiredWithoutRegularNestedInput
  }

  export type RegularUncheckedUpdateWithoutColaboradorInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type RegularUncheckedUpdateManyWithoutColaboradorInput = {
    idRegular?: IntFieldUpdateOperationsInput | number
    data_inicio_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    qtde_sessoes?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoUpdateWithoutColaboradorInput = {
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutColaboradorInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPaciente?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoUncheckedUpdateManyWithoutColaboradorInput = {
    idHistorico?: IntFieldUpdateOperationsInput | number
    data_desligamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPaciente?: IntFieldUpdateOperationsInput | number
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