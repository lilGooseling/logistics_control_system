import {IMessage, MessageType} from "../interfaces/IApp";


export const messageHandler = (text?: string, type?: MessageType): IMessage => {
    if (text && !type) {
        return {
            message: {
                text: text || null,
                type: MessageType.ERROR
            }
        }
    }

    return {
        message: {
            text: text || null,
            type: type || null
        }
    }
}
