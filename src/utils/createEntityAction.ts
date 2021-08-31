// export type APIEndPoint<P extends any[], R> = (...p: P) => Promise<R>;

// interface Entity<P, S, F> {
//     PENDING: P;
//     SUCCESS: S;
//     FAILURE: F;
// }

// const createEntityAction = <P, S, F, PARAM extends any[], DATA>(
//     entity: Entity<P, S, F>,
//     api: APIEndPoint<DATA, PARAM>
// ) => ({
//     ACTION: {
//         PENDING: () => ({ type: entity.PENDING }),
//         SUCCESS: () => ({ type: entity.SUCCESS }),
//         FAILURE: () => ({ type: entity.FAILURE }),
//     },
//     API: api,
// });

// interface EntityAction {
//     ACTION: {}
// }