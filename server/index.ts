import * as grpc from '@grpc/grpc-js'

import {model} from "./models/todos"

function main() {
    const server: grpc.Server = new grpc.Server()

    server.addService(model.service, {...model.handler})

    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
        if (error) {
            console.error(`Error: ${error}`)
        } else {
            server.start()
            console.log(`Listening at: ${port}`)
        }
    })
}

main()
