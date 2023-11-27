import { createMachine } from 'xstate';

export const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'inicial',
  predictableActionArguments: true,
  states: {
    inicial: {
      on: {
        START: 'search',
      },
    },
    search: {
      on: {
        CONTINUE: 'passengers',
        CANCEL: 'inicial',
      },
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'inicial',
      },
    },
    tickets: {
      on: {
        FINISH: 'inicial',
      },
    },
  },
});
export default bookingMachine;
