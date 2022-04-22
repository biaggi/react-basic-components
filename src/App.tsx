import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={5}></Counter>
      <CounterBy initialValue={5}></CounterBy>
      <CounterEffect></CounterEffect>
      <CounterHook></CounterHook>
      <CounterReducerComponent></CounterReducerComponent>
    </>
  );
}

export default App;
