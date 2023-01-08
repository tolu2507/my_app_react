export function reduceFunc(initial, action) {
  switch (action.type) {
    case "ADDED": {
      return [...initial, { id: action.id, todo: action.todo }];
    }
    case "DELETED": {
      return initial.filter((item) => item.id !== action.id);
    }
    case "EDIT": {
      return initial.map((item) => {
        if (item.id === action.todo.id) {
          return action.todo;
        } else {
          return item;
        }
      });
    }

    default: {
      return initial;
    }
  }
}
