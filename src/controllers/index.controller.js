const indexCtrl = {
  getIndex: async (req, res) => {
    await res.render('index', {
      title: 'Web-Push'
    })
  }
}

module.exports = indexCtrl
