import { useReducer } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className=" bg-emerald-600 py-3">
        <Header />
      </header>
      <section className="bg-emerald-400 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form
            state={state}
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList state={state} dispatch={dispatch} />
      </section>
    </>
  )
}

export default App
