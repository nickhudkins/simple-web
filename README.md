# Simple Web Project

### Now with Redux! & Docker!

## How To Use

- `npm install` will get you what you need.
- `npm run build` will build the project for `production`.
- `npm run app:start` will run the project in `production` mode.
- `npm run dev` will run the project with HMR.

If all goes well, you will get something cute like this:

![SERVER CREATED | HOST : localhost | PORT: 3000](https://s3.amazonaws.com/f.cl.ly/items/0P2R2R112h221l2a373Z/Screen%20Shot%202015-10-03%20at%201.49.15%20PM.png)


### :rocket: Advanced Features of Simple Web :rocket:

#### Deploying to Digital Ocean

**PRE-REQUISITES**
(_Do these in order_)

- A Digital Ocean Account [(Create One Here.)](https://cloud.digitalocean.com/registrations/new)
- Docker Toolbox [(Get It Here.)](https://www.docker.com/docker-toolbox)
- A Digital Ocean API Key [(Create One Here.)](https://cloud.digitalocean.com/settings/tokens/new)

##### Now you're ready to go!

FYI: Your `name` field in `package.json` will be used to name your container.

You will first need to create a docker machine (on Digital Ocean):
```
TOKEN={{ DIGITAL_OCEAN_ACCESS_TOKEN }} npm run docker-machine:create-droplet
```

If you want to run docker locally you can simply do:
```
npm run docker-machine:create-local
```

Then you can deploy to it:
```
npm run deploy:prod
```

### Conventions
- Place all 'css-modules' within `src/assets/css-modules/styles`, this will
  allow you to reference them with `import styles from 'styles/foo'` which
  is the coolest thing ever.

### Known Issues
- It no longer has Redux Devtools! (Waiting on a stable release)
