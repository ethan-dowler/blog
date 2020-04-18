# ethan-dowler

Source code for [ethan-dowler.github.io/blog](https://ethan-dowler.github.io/blog)

## Development

To run the project at [localhost:4567](http://localhost:4567)
```
rake start
```

To build the dist files and put them into `/build`
```
rake build
```

To get a dev console
```
rake console
```

## Deployment

1. Run the build script: `rake build`
1. Switch to the `gh_pages` branch
1. Copy the files from `/build` into the root directory (you may need to delete a few files from the root directory if they are from a previous build)
1. Commit it and push it up!
