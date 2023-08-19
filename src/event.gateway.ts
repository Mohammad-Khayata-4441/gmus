import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer ,OnGatewayConnection} from "@nestjs/websockets";
import { Server } from 'socket.io'
@WebSocketGateway({ namespace: 'events', transports: ['websocket'], cors: { origin: '*' } })
export class EventGateway {
    @WebSocketServer()
    server: Server



    @SubscribeMessage('test')
    log(@MessageBody() data: any) {
        console.log(data)
    }

}