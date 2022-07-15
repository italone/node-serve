/**
 * @param {string} path
 * @returns {Boolean}
 */
function relust_data(code=200,data,msg='成功') {
  let relust = {
    code: code,
    data,
    msg,
  }
  return relust
}

module.exports = relust_data;