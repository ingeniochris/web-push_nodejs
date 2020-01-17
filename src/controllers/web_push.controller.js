const webpush = require('../config/webpush.conf')
let pushSubscripton

const webpushCtrl = {
  getSuscription: async (req, res) => {
    pushSubscripton = req.body
    console.log(pushSubscripton)

    // Payload Notification
    const payload = JSON.stringify({
      title: 'Hi, Welcome www.chrisweb.me  ',
      message: 'hello World'
    })

    try {
      await webpush.sendNotification(pushSubscripton, payload)
    } catch (error) {
      console.log(error)
    }

    // Server's Response
    await res.status(201).json()
  }

}

module.exports = webpushCtrl
