import { Box, Form, FormGroup, Input, Modal, Textarea } from '@bigcommerce/big-design';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  cancel(): void;
  save(partial: { title: string; description: string }): void;
}

export const TodoModal: React.FC<Props> = ({ isOpen, cancel, save }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    console.log('submiterooni');
    e.preventDefault();

    if (title && description) {
      save({ title, description });
      setTitle('');
      setDescription('');

      return;
    }

    if (!title) {
      setTitleError('Title is required');
    }

    if (!description) {
      setDescriptionError('Description is required');
    }
  };

  return (
    <Modal
      actions={[
        {
          text: 'Cancel',
          variant: 'subtle',
          onClick: cancel,
        },
        { text: 'Apply', type: 'submit', form: 'todoForm' },
      ]}
      closeOnClickOutside={false}
      closeOnEscKey={true}
      header="Add new todo"
      isOpen={isOpen}
      onClose={cancel}
    >
      <Box marginBottom="medium">
        <Form id="todoForm" noValidate onSubmit={onSubmit}>
          <FormGroup>
            <Input
              description="Title for the new to-do item"
              error={titleError}
              label="Title"
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError('');
              }}
              placeholder="Airport"
              required
              type="text"
              value={title}
            />
          </FormGroup>
          <FormGroup>
            <Textarea
              description="Description for the new to-do item"
              error={descriptionError}
              label="Description"
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionError('');
              }}
              placeholder="I have to go and pick up my friend from the airport"
              required
              resize
              value={description}
            />
          </FormGroup>
        </Form>
      </Box>
    </Modal>
  );
};
