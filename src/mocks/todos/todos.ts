import { rest } from 'msw';

import { Todo } from '../../types';

const todos: Todo[] = [
  {
    isDone: false,
    title: 'Shopping',
    description: 'Buy lime, lemons and onions',
  },
  {
    isDone: false,
    title: 'Cleaning',
    description: 'Clean the kitchen',
  },
];

export const todoHandlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
];
