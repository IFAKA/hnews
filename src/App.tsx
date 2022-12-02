import { Suspense } from "react"
import { Navbar, Spinner } from "./components"
import { ServiceWorkerModal } from "./config"
import { Home } from "./pages"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ServiceWorkerModal />
      <Navbar />
      <Home />
    </Suspense>
  )
}

export default App
