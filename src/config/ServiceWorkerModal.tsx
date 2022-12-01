import { useRegisterSW } from "virtual:pwa-register/react"

function ServiceWorkerModal() {
  useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  return null
}

export default ServiceWorkerModal
