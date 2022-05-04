# Micro front ends: With Angular Framework (v13)

A scaffold of an app with 3 micro front ends.

## App shell
the app that uses micro front ends.
Each micro front end is lazy loaded only when necessary.

To improve: find a way to add to the DOM each web component on the fly with the directive *axLazyElement.

Start server with:
```bash
npm run start
```

Be sure the "cdn" is started before accessing the each micro frontend.

### Micro frontends
Each micro frontend is a web component, aggregated in a single js file.
They are exposed using http-server on port 3001 like a cdn should do.

To build all web components:
````bash
npm run build:cdn
````

Each web component can be build separatly (see package.json scripts).

Launch cdn:
````bash
npm run start:cdn
````
