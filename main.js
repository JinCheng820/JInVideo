
require('./assert/css/main.css');
const JinVideo = require('./assert/js/plugin.js');

const JV = new JinVideo({
  dom: '.Jin-Video',
  autoplay: false,
  controls: false,
  loop: false
})

JV.init()
