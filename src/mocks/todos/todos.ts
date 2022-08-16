import { rest } from 'msw';

import { Todo } from '../../types';

let todos: Todo[] = [
  {
    id: 1,
    isDone: true,
    title: 'Styled Components',
    description: 'Install styled-components@5',
  },
  {
    id: 2,
    isDone: true,
    title: 'Big Design',
    description: 'Install big-design',
  },
  {
    id: 3,
    isDone: true,
    title: 'Fonts',
    description: 'Install the Fonts tags',
  },
  {
    id: 4,
    isDone: false,
    title: 'Code',
    description: 'Finish the To-do app',
  },
  {
    id: 5,
    isDone: false,
    title: 'Testing',
    description: 'Write unit tests',
  },
];

function assertTodo(item: unknown): asserts item is Todo {
  if (
    typeof item === 'object' &&
    item !== null &&
    'title' in item &&
    'isDone' in item &&
    'description' in item
  ) {
    return;
  }

  throw new Error('Not a todo');
}

export const todoHandlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post('/todos', async (req, res, ctx) => {
    const todo = await req.json<unknown>();

    assertTodo(todo);

    const id = todos.length + 1;
    const newTodos = [...todos, { ...todo, id }];

    todos = newTodos;

    return res(ctx.json(todos));
  }),
  rest.post('/todos/:id/done', (req, res, ctx) => {
    const id = req.params.id;
    const todo = todos.find((item) => String(item.id) === id);

    if (!todo) {
      return res(ctx.status(400));
    }

    const newTodos = [
      ...todos.filter((item) => String(item.id) !== id),
      {
        ...todo,
        isDone: true,
      },
    ];

    todos = newTodos;

    return res(ctx.json(todos));
  }),
  rest.delete('/todos/:id', (req, res, ctx) => {
    const id = req.params.id;
    const newTodos = todos.filter((item) => String(item.id) !== id);

    todos = newTodos;

    return res(ctx.json(todos));
  }),
];
