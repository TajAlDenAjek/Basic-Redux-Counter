import Counter from "./components/Counter"

import { Provider as Subscriber } from 'react-redux'
import store from './store/index.tsx'
function App() {
  return (
    <>
      <Subscriber store={store}>
        <Counter></Counter>
      </Subscriber>
    </>
  )
}

export default App
