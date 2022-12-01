import { Suspense } from "react"
import { Navbar, Spinner } from "./components"
import { ServiceWorkerModal } from "./config"
import { Provider } from "./context"
import { Home } from "./pages"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ServiceWorkerModal />
      <Provider>
        <Navbar />
        <Home />
      </Provider>
    </Suspense>
  )
}

export default App
