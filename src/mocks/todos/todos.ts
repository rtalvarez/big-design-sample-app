import { rest } from 'msw';

import { Todo } from '../../types';

const todos: Todo[] = [];

export const todoHandlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
];
