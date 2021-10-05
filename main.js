const { duplicate, transform } = require('./streambox.js')
//const { transform } = require('./streambox.js')
duplicate('streambox.js')
transform(
  'main.js',
  'a',
  function(value) {
    return value.toUpperCase()
  }
)


transform(
    'main.js',
    'b',
    function(value) {
      return value.toLowerCase()
    }
  )
  