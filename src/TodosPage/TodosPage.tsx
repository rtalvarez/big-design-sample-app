import { Button, Dropdown, H1, Panel, Table } from '@bigcommerce/big-design';
import {
  CheckCircleIcon,
  DeleteIcon,
  ErrorIcon,
  MoreHorizIcon,
} from '@bigcommerce/big-design-icons';
import React from 'react';

import { PageLayout } from '../components';

import { useTodos } from './useTodos';

export const TodosPage: React.FC = () => {
  const { data } = useTodos();

  return (
    <PageLayout>
      <H1>Big Design To-do list app</H1>
      <Panel header="Things to do">
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
              render: () => (
                <Dropdown
                  items={[
                    {
                      content: 'Done',
                      onItemClick: () => console.log('complete'),
                      hash: 'done',
                      icon: <CheckCircleIcon />,
                    },
                    {
                      content: 'Delete',
                      onItemClick: (item) => item,
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
