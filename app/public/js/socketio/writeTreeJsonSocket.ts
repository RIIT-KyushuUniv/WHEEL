/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * socket io communication class for write SwfTreeJson information to server
 */
class WriteTreeJsonSocket {

    /**
     * event name
     */
    private static readonly eventName = 'writeTreeJson';

    /**
     * socketio client side instance
     */
    private readonly socket: SocketIOClient.Socket;

    /**
     * create new instance
     * @param socket socket io instance
     */
    public constructor(socket: SocketIOClient.Socket) {
        this.socket = socket;
    }

    /**
     * Adds a listener for this event that will be invoked a single time before being automatically removed
     * @param callback The function to call when we get the event
     */
    public onEvent(callback: ((isSucceed: boolean) => void)): void {
        this.socket.once(WriteTreeJsonSocket.eventName, (isSucceed: boolean) => {
            callback(isSucceed);
        });
    }

    /**
     * emit to server for write SwfTreeJson information
     * @param projectDirectory project directory name
     * @param tree write SwfTree instance
     * @param callback The function to call when we get the event
     */
    public emit(projectDirectory, tree: SwfTree, callback: ((isSucceed: boolean) => void)): void {
        this.onEvent(callback);
        this.socket.emit(WriteTreeJsonSocket.eventName, projectDirectory, tree.toSwfTreeJson());
    }
}
