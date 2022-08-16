import { createRequestSender } from '@bigcommerce/request-sender';
import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../queryClient';
import { Todo } from '../types';

const http = createRequestSender();

type TodoReq = Omit<Todo, 'id'>;

const postTodo = async (todoReq: TodoReq) => {
  const response = await http.post('/todos', { body: todoReq });

  return response.body;
};

export const usePostTodo = () => {
  return useMutation(['postTodo'], postTodo, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['todos']);
    },
  });
};
