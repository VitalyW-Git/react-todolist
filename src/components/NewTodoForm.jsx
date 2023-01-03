const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)} //  child state
      />
      {/*  child handleAction  */}
      <button onClick={handleAction}>Add TodoList</button>
    </label>
  );
};

export default NewTodoForm;
