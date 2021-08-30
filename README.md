# Demo
This project was generated using [Nx](https://nx.dev) to create a monorepo. The demo application
named user-ui was created as part of nx which leverages the angular cli and various schematics. The 
application uses Angular 12 and Typescript. 

## Quick Start & Documentation
To get started you will need to install all the dependencies. First change directories
to 'demo' and run
```shell
npm install
```

To start the development server you can run: 
```shell
npx nx serve
```

* Note that nx is used instead of ng but you can also use 
```shell
npx ng serve
```

The application will run at http://localhost:4200

## Running unit tests
To run unit tests use:
```shell
npx nx test demo
npx nx test users-data-access
npx nx test users-page
```
or use ng
```shell
npx ng test demo
```

## Running end-to-end tests
```shell
npx nx e2e demo-e2e
```
or
```shell
npx ng e2e demo-e2e
```
