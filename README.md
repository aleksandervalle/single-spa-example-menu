# single-spa example, menu

The components:

- https://github.com/aleksandervalle/single-spa-example-root-config
- https://github.com/aleksandervalle/single-spa-example-people
- https://github.com/aleksandervalle/single-spa-example-dogs
- https://github.com/aleksandervalle/single-spa-example-cats
- https://github.com/aleksandervalle/single-spa-example-menu

Take a closer look at https://github.com/aleksandervalle/single-spa-example-menu to see how navigation and active route is achieved with `react-router-dom`.

Also, notice that `menu` application is always rendering:  
https://github.com/aleksandervalle/single-spa-example-root-config/blob/main/src/microfrontend-layout.html

## Run locally

Simply clone all the repos, install package dependencies in each app, then start each app with `npm start`, and go to localhost:9000.

## Demo

![Working menu with active route](https://github.com/aleksandervalle/single-spa-example-root-config/raw/main/demo.gif "Working menu with active route")
