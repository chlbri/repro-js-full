import type { FinallyConfig } from '~promises';
import type { SingleOrArrayT, TransitionsConfig } from './types';

//Remplacez tous les tests de type par "asserType"

// #region SingleOrArrayT

assertType<SingleOrArrayT>('ere');
assertType<SingleOrArrayT>([{ guards: 'ere', target: 'ere' }, 'fddfd']);

expectTypeOf([
  { guards: 'ere', target: 'ere' },
  { guards: 'eee' },
] as const).not.toMatchTypeOf<SingleOrArrayT>();

assertType<SingleOrArrayT>([
  { guards: 'ere', target: 'ere' },
  // @ts-expect-error for typing
  { guards: 'eee' },
]);

assertType<SingleOrArrayT>([
  { guards: 'ere', target: 'ere' },
  // @ts-expect-error for typing
  {},
]);

assertType<SingleOrArrayT>([
  { guards: 'ere', target: 'ere' },
  // @ts-expect-error for typing
  56,
]);

assertType<SingleOrArrayT>([
  { guards: 'ere', target: 'ere' },
  { guards: 'ere', target: 'ere' },
]);

assertType<SingleOrArrayT>([
  { guards: 'ere', target: 'ere' },
  { target: 'ere' },
]);

// #endregion

// #region Finally

assertType<FinallyConfig>(
  // @ts-expect-error for typing
  {},
);
assertType<FinallyConfig>({ actions: 'actions' });
assertType<FinallyConfig>({
  // @ts-expect-error for typing
  not: 'not',
});
assertType<FinallyConfig>(
  // @ts-expect-error for typing
  { description: 'description' },
);
assertType<FinallyConfig>({
  description: 'description',
  actions: 'action33',
});
assertType<FinallyConfig>('string');

// #endregion

// #region Transitions

assertType<TransitionsConfig>({});

// #region on
assertType<TransitionsConfig>({ on: {} });

assertType<TransitionsConfig>({
  on: {
    // @ts-expect-error for typing
    EVENT: {
      actions: [],
    },
  },
});

assertType<TransitionsConfig>({
  on: {
    EVENT: {
      actions: ['action2'],
    },
  },
});

assertType<TransitionsConfig>({
  on: {
    EVENT1: {
      // @ts-expect-error for typing
      not: 'not',
    },
    EVENT2: {
      actions: ['action1'],
    },
  },
});

assertType<TransitionsConfig>({
  on: {
    EVENT1: {
      target: '/state1',
    },
    EVENT2: {
      actions: 'action1',
      in: '/state1',
    },
    EVENT3: '/state1',
  },
});

// #endregion

// #region after
assertType<TransitionsConfig>({ after: {} });

assertType<TransitionsConfig>({
  after: {
    TIME: {
      actions: 'action4',
    },
  },
});

assertType<TransitionsConfig>({
  after: {
    TIME1: {
      // @ts-expect-error for typing
      not: 'not',
    },
    TIME2: {
      actions: ['action5'],
    },
  },
});

assertType<TransitionsConfig>({
  after: {
    TIME1: {
      target: '/state1',
    },
    TIME2: {
      actions: ['action11'],
      in: '/state1',
    },
    TIME3: '/state1',
  },
});

// #endregion

// #region always

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  always: [],
});

assertType<TransitionsConfig>({ always: 'ere' });

assertType<TransitionsConfig>({
  always: ['/state1'],
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  always: ['/state2', '/state1'],
});

assertType<TransitionsConfig>({
  always: [{ guards: 'ert' }, '/state1'],
});

// #endregion

// #region promise
assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: [],
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: {},
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: { src: 'promise1' },
});

assertType<TransitionsConfig>({
  promises: { src: 'promise1', then: 'next', catch: ['/state1'] },
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: { src: 'promise1', then: {}, catch: [{}, '/state1'] },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { guards: 'ert', target: 'next' },
    catch: [{ guards: 'ert', actions: 'action0' }, '/state1'],
  },
});

expectTypeOf({
  promise: {
    src: 'promise1',
    then: {},
    catch: [{ guards: 'ert' }, '/state1'],
    finally: [],
  },
} as const).not.toMatchTypeOf<TransitionsConfig>();
assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: {
    src: 'promise1',
    then: {},
    catch: [{ guards: 'ert' }, '/state1'],
    finally: 'actions',
  },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ in: '/ert', target: '/state2' }, '/state1'],
    finally: { actions: 'action12' },
  },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { target: '/state43' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [{ actions: 'action13' }],
  },
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [{}, 'actions'],
  },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [
      {
        // @ts-expect-error for typing
        target: 'ert',
      },
      {},
    ],
  },
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [
      {
        guards: 'ert',
      },
      {},
    ],
  },
});

assertType<TransitionsConfig>({
  // @ts-expect-error for typing
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [
      {
        guards: 'ert',
        actions: 'action1',
      },
      {},
    ],
  },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [
      {
        guards: 'ert',
        actions: 'action1',
      },
      'action20',
    ],
  },
});

assertType<TransitionsConfig>({
  promises: {
    src: 'promise1',
    then: { actions: 'action1' },
    catch: [{ guards: 'ert', actions: 'action14' }, '/state1'],
    finally: [
      {
        in: '/state4',
        actions: 'action1',
      },
      'action20',
    ],
  },
});

// #endregion

// #endregion
