import { setupWorker } from 'msw';

import { handlers } from './handlers';

const worker = setupWorker(...handlers);

void worker.start({
  onUnhandledRequest: 'warn',
});

worker.printHandlers();

export { worker };
