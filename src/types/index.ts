type TodoState = 'PENDING' | 'DONE';

export type Todo = {
  text: string;
  id: string;
  state: TodoState;
};

export type State = { todos: Todo[] };

type AddAction = {
  type: 'ADD';
  payload: { text: string };
};

type RemoveAction = {
  type: 'REMOVE';
  payload: { id: string };
};

type ValidateAction = {
  type: 'VALIDATE';
  payload: { id: string };
};

export type Action = AddAction | RemoveAction | ValidateAction;
