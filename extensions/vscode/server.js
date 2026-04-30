try {
  module.exports = require("@azee/vue-language-server/bin/vue-language-server");
} catch {
  module.exports = require("./dist/server");
}
