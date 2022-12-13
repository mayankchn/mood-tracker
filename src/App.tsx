import { useDispatch } from "react-redux"
import { refreshButtonClicked, REFRESH_BUTTON_CLICKED } from "./actions"
import HappyIncrementer from "./components/HappyIncrementer"
import HappyTracker from "./components/HappyTracker"
import SadIncrementer from "./components/SadIncrementer"
import SadTracker from "./components/SadTracker"

function App() {

  const dispatch = useDispatch();
  function clearState() {
    dispatch(refreshButtonClicked())
  }

  return (
    <div className="flex flex-col gap-5 border-2 border-red-500 rounded max-w-4xl mx-auto my-10 px-10 py-5">
    <h1 className="font-bold text-4xl"><span className="text-green-500">MOOD</span> <span className="text-yellow-500">TRACKER</span></h1>
    <div className="flex flex-col gap-4">
      <HappyTracker />
      <SadTracker />
      <HappyIncrementer />
      <SadIncrementer />
      <button
        onClick={clearState}
        className="border rounded bg-red-500 text-white px-2 self-start"
        >
        Refresh
      </button>
    </div>
    </div>
  )
}

export default App
