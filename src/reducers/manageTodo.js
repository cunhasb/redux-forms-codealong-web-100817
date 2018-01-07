export default function manageTodo(
  state = {
    todos: []
  },
  action
) {
  console.log("managetodo", state.todos, action.text);
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.text] };
    default:
      return state;
  }
}
