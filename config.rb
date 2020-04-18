activate :dotenv

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# set the local build path to the root of the Github Pages repo
set :build_dir, 'build'

configure :development do
  config[:site_url] = "http://localhost:4567/"
  config[:disable_ga] = true
  config[:root_path] = "/"
end

configure :build do
  config[:site_url] = "https://ethan-dowler.github.io/blog/"
  config[:disable_ga] = false
  config[:root_path] = "/blog/"
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
