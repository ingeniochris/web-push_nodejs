const webpush = require('web-push')

const { VAPIDKEYS_PUBLICKEY, VAPIDKEYS_PRIVATEKEY } = process.env

webpush.setVapidDetails(
  'mailto:ccastillol@chrisweb.com',
  VAPIDKEYS_PUBLICKEY,
  VAPIDKEYS_PRIVATEKEY
)

module.exports = webpush
