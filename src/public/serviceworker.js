
var self = this
console.log('Service Worker Works')
self.addEventListener('push', evt => {
  const data = evt.data.json()
  console.log(data)
  console.log('Notification Received')
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: 'https://www.chrisweb.me/img/logo_chris.webp'
  })
})
