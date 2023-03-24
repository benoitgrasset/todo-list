type TodoState = 'PENDING' | 'DONE';

export type Todo = {
  text: string;
  id: string;
  state: TodoState;
};

type ActionType = 'ADD' | 'REMOVE' | 'VALIDATE';

export type State = { todos: Todo[] };

export type Action = {
  type: ActionType;
  payload: {
    text?: string;
    id?: string;
  };
};
