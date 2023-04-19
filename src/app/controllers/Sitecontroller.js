class SiteController {
  // get/new
  home(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }

  // // show(req, res) {
  // //     res.send('new dêail!!')
  // // }
}
module.exports = new SiteController();
