# About

This full-stack application was built using the following technologies:

- React (using hooks api)
- Typescript
- Cypress (integration tests)
- Material-UI
- NodeJs
- GRPC
- GRPC-Web
- Sequelize (ORM)
- Mysql (v8)
- Envoy Proxy
- Docker

# How to get started

1. Install Docker

2. Install Mysql

3. Create a new database

4. Create .env file

```
$ touch path/to/server/.env
```

The .env configuration file should look like this:
```
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_DIALECT=mysql
```

5. Codegen

```
$ cd /path/to/server
$ yarn autogen
```

6. Build and run envoy proxy server

```
$ cd /path/to/web
$ yarn run-envoy
```

## Commands

Start server:
```
$ cd /path/to/server
$ yarn start
```

Start web app:
```
$ cd /path/to/web
$ yarn start
```
