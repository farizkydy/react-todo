import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title)
    setTitle('') // Reset the title
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event)
          }}
          value={title} // Set the value of the input to the title
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm
