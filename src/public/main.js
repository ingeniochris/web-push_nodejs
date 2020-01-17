const VAPIDKEYS_PUBLICKEY = 'BJlT6EmYidlZDnDS2m9HEvIpqAdbtbxvtVU15Ta9T7Q0hPTZtDbp9jBf8c2pqLuIQUna4FMsujr9fEzKkfCDlJE'

const subscription = async () => {
  // Service Worker
  console.log('Registering a Service worker')
  const register = await navigator.serviceWorker.register('/serviceworker.js', {
    scope: '/'
  })
  console.log('New Service Worker')

  // Listen Push Notifications
  console.log('Listening Push Notifications')
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPIDKEYS_PUBLICKEY)
  })

  console.log(subscription)

  // Send Notification
  const url = '/subscription'
  await window.fetch(url, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log('Subscribed!')
}

function urlBase64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
};

// Service Worker Support
if ('serviceWorker' in navigator) {
  subscription().catch(err => console.log(err))
}
