import { ADD_TODO, TOGGLE_TODO } from "../constants/actions";

const initialState = {
  todoList: [],
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      const { todoList } = state;
      const newArray1 = [
        ...todoList,
        {
          text: content,
          id,
          completed: false,
        },
      ];

      return {
        ...state,
        todoList: newArray1,
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const { todoList } = state;

      const newArray2 = todoList.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      });
      return {
        ...state,
        todoList: newArray2,
      };
    }
    default:
      return state;
  }
}
