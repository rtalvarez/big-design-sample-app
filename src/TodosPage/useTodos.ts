import { createRequestSender } from '@bigcommerce/request-sender';
import { useQuery } from '@tanstack/react-query';

import { Todo } from '../types';

const http = createRequestSender();

const fetchTodos = async () => {
  const response = await http.get<Todo[]>('/todos');

  return response.body;
};

export const useTodos = () => {
  return useQuery(['todos'], fetchTodos);
};
