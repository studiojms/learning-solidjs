import { Component, createSignal } from 'solid-js';
import { For } from 'solid-js';

import styles from './App.module.css';


const App: Component = () => {
  const [todos, setTodos] = createSignal<string[]>([])

  const addTodo = (input) => {
    if (!input.value.trim()) return;
    setTodos(val => val.concat(input.value))
    input.value = '';
  };
  
  let input: HTMLInputElement;
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h2>TO-DO List App</h2>
      </header>
      <main>
        <label htmlFor="todo">New To-Do</label>
        <input
          type="text"
          name="todo"
          id="todo"
          ref={input}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo(input);
            }
          }}
        />
        <ul>
          <For each={todos()}>
            {(item) => (
              <li>
                <input
                  type="checkbox"
                  name={item}
                  //onClick={() => toggleTodo(item.text)}
                />
                <label for={item}>{item}</label>
              </li>
            )}
          </For>
        </ul>
      </main>
    </div>
  );
};

export default App;
