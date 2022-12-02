import { useEffect } from "react"
import { useRegisterSW } from "virtual:pwa-register/react"

function ServiceWorkerModal() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  useEffect(() => {
    needRefresh && updateServiceWorker(true)
  }, [needRefresh])

  return null
}

export default ServiceWorkerModal
