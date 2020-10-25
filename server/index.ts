import * as grpc from '@grpc/grpc-js'
import * as dotenv from 'dotenv'
import {UUIDV4, DataTypes, Dialect, Sequelize} from 'sequelize'

import {model} from "./handlers/todos"

dotenv.config()

const server: grpc.Server = new grpc.Server()

server.addService(model.service, {...model.handlers})

server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
    if (error) {
        console.error(`Error: ${error}`)
    } else {
        server.start()
        console.log(`Listening at: ${port}`)
    }
})

// Need to export sequelize due to the models accepting it :/
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: (process.env.DB_DIALECT as Dialect)
})

export const TodoModel = sequelize.define('Todo', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN
    }
})

sequelize.sync()

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })
