activate :dotenv

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# set the local build path to the root of the Github Pages repo
set :build_dir, 'build/ethan-dowler.github.io'

configure :development do
  # turn off Google Analytics while in development mode.
  config[:disable_ga] = true
end

configure :build do
  config[:disable_ga] = false
end

require "sprockets/es6"
activate :sprockets do |s|
  # transpile all .es6 files using sprockets
  s.supported_output_extensions << ".es6"
end

# enable the evil icon helpers
require "evil_icons"
helpers EvilIcons::Helpers
after_configuration do
  sprockets.append_path(EvilIcons.assets_dir)
end

# all website urls to leave off "index.html"
activate :directory_indexes
