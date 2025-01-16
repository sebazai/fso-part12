import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  console.log(todos);
  return (
    <>
      {todos
        .map((todo) => {
          return (
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
