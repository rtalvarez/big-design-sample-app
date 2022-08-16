import { createRequestSender } from '@bigcommerce/request-sender';
import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../queryClient';

const http = createRequestSender();

const completeTodo = async (id: number) => {
  const response = await http.post(`/todos/${id}/done`);

  return response.body;
};

export const useCompleteTodo = () => {
  return useMutation(['completeTodo'], completeTodo, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['todos']);
    },
  });
};
