# Simple Web Project

### Now with Redux!

## How To Use

- `npm install` will get you what you need.
- `npm run build` will build the project for `production`.
- `npm run start` will run the project in `production` mode.
- `npm run dev` will run the project with HMR.
- `npm run debug:redux` will run the project with HMR. and :gasp: `redux-devtools`

If all goes well, you will get something cute like this:

![SERVER CREATED | HOST : localhost | PORT: 3000](https://s3.amazonaws.com/f.cl.ly/items/0P2R2R112h221l2a373Z/Screen%20Shot%202015-10-03%20at%201.49.15%20PM.png)

### Conventions
- Place all 'css-modules' within `src/assets/css-modules/styles`, this will
  allow you to reference them with `import styles from 'styles/foo'` which
  is the coolest thing ever.

### Known Issues
- It does not currently render React components server-side.
