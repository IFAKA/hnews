import { Suspense } from "react"
import { Navbar, Spinner } from "./components"
import { Provider } from "./context"
import { Home } from "./pages"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider>
        <Navbar />
        <Home />
      </Provider>
    </Suspense>
  )
}

export default App
