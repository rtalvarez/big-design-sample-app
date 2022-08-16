import { Button, Dropdown, H1, Panel, Table } from '@bigcommerce/big-design';
import {
  CheckCircleIcon,
  DeleteIcon,
  ErrorIcon,
  MoreHorizIcon,
} from '@bigcommerce/big-design-icons';
import React from 'react';

import { PageLayout } from '../components';

import { useCompleteTodo } from './useCompleteTodo';
import { useDeleteTodo } from './useDeleteTodo';
import { useTodos } from './useTodos';

export const TodosPage: React.FC = () => {
  const { data } = useTodos();
  const { mutateAsync: deleteTodo } = useDeleteTodo();
  const { mutateAsync: completeTodo } = useCompleteTodo();

  return (
    <PageLayout>
      <H1>Big Design To-do list app</H1>
      <Panel action={{ text: 'Add' }} header="Things to do">
        <Table
          columns={[
            {
              header: 'Done',
              hash: 'done',
              render: ({ isDone }) =>
                isDone ? <CheckCircleIcon color="success" /> : <ErrorIcon color="danger" />,
            },
            {
              header: 'Title',
              hash: 'title',
              render: ({ title }) => title,
            },
            { header: 'Description', hash: 'desc', render: ({ description }) => description },
            {
              header: 'Actions',
              hash: 'actions',
              render: ({ id, isDone }) => (
                <Dropdown
                  items={[
                    {
                      content: 'Done',
                      onItemClick: () => {
                        void completeTodo(id);
                      },
                      hash: 'done',
                      icon: <CheckCircleIcon />,
                      disabled: isDone,
                    },
                    {
                      content: 'Delete',
                      onItemClick: () => {
                        void deleteTodo(id);
                      },
                      hash: 'delete',
                      icon: <DeleteIcon />,
                      actionType: 'destructive',
                    },
                  ]}
                  toggle={<Button iconOnly={<MoreHorizIcon />} variant="subtle" />}
                />
              ),
            },
          ]}
          items={data || []}
        />
      </Panel>
    </PageLayout>
  );
};
