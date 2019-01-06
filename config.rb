activate :dotenv

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

set :build_dir, 'build/ethan-dowler.github.io'

require "sprockets/es6"
activate :sprockets do |s|
  s.supported_output_extensions << ".es6"
end

require "evil_icons"
helpers EvilIcons::Helpers
after_configuration do
  sprockets.append_path(EvilIcons.assets_dir)
end

activate :directory_indexes
