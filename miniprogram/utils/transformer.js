function hex2rgb(hex) {
  // long version
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) {
    return r.slice(1, 4).map(function (x) { return parseInt(x, 16); });
  }
  // short version
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    return r.slice(1, 4).map(function (x) { return 0x11 * parseInt(x, 16); });
  }
  return null;
}

module.exports = {
  hex2rgb
}