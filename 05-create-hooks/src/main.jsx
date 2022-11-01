import React from 'react'
import ReactDOM from 'react-dom/client'
//import { CallbackHook } from './06-memos/CallbackHook'
import { TodoApp } from './08-useReducer/TodoApp'
//import { MemoHook } from './06-memos/MemoHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-use-state/CounterApp'
//import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
//import { HooksApp } from './HooksApp'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-layout-effect/Layout'
//import { Memorize } from './06-memos/Memorize'
//port "./08-useReducer/intro-reducer"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  ///<React.StrictMode>
    <TodoApp />
  //</React.StrictMode>
)
