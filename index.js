module.exports = function (mw) {
  return function (req, res, next) {
    return Promise.resolve(mw(req, res, next))
      .catch(next)
  }
}