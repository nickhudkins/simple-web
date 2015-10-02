# Simple Web Project (heh.)

## How To Use

- `npm install && npm start` will run the project.
- `npm install && npm run watch` will run the project with HMR.

### Conventions
- Place all 'css-modules' within `src/assets/css-modules/styles`, this will
  allow you to reference them with `import styles from 'styles/foo'` which
  is the coolest thing ever.

### Known Issues

- The webpack configuration files are awfully duplicative.
- It does not currently render React components server-side.
