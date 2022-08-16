import { createRequestSender } from '@bigcommerce/request-sender';
import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../queryClient';
import { Todo } from '../types';

const http = createRequestSender();

const deleteTodo = async (id: number) => {
  const response = await http.delete<Todo[]>(`/todos/${id}`);

  return response.body;
};

export const useDeleteTodo = () => {
  return useMutation(['deleteTodo'], deleteTodo, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['todos']);
    },
  });
};
