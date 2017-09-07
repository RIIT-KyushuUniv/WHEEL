/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * socket io communication class for delete directory from server
 */
class DeleteDirectorySocket {

    /**
     * event name
     */
    private static readonly eventName = 'onDeleteDirectory';

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
    public onEvent(callback: (() => void)): void {
        this.socket.once(DeleteDirectorySocket.eventName, callback);
    }

    /**
     * emit to server for delete directory
     * @param directorys delete directory names
     * @param callback The function to call when we get the event
     */
    public emit(directorys: string[], callback: (() => void)): void {
        this.onEvent(callback);
        this.socket.emit(DeleteDirectorySocket.eventName, directorys);
    }
}
