/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * file type interface
 */
interface FileType {
    /**
     * file or directory name
     */
    readonly name: string;
    /**
     * 'file' or 'directory' string
     */
    readonly type: SwfFileType;
}

/**
 * all file types interface
 */
interface FileTypeList {
    /**
     * directory name
     */
    readonly directory: string;
    /**
     * file type list
     */
    readonly files: FileType[];
}

/**
 * socket io communication class for get file list
 */
class GetFileListSocket {

    /**
     * event name
     */
    private static eventName = 'onGetFileList';

    /**
     * socketio client side instance
     */
    private socket: SocketIOClient.Socket;

    /**
     * filter name of file extension
     */
    private extension: string;

    /**
     * create new instance
     * @param socket socket io instance
     * @param extension extension string for file filter, or null we want to all files
     */
    public constructor(socket: SocketIOClient.Socket, extension?: string) {
        this.socket = socket;
        this.extension = extension;
    }

    /**
     * Adds a listener for this event that will be invoked a single time before being automatically removed
     * @param callback The function to call when we get this event
     */
    public onEvent(callback: ((fileTypes: FileTypeList) => void)): void {
        this.socket.once(GetFileListSocket.eventName, callback);
    }

    /**
     * emit to server for get file list
     * @param directory
     * @param callback The function to call when we get this event
     */
    public emit(directory: string = null, callback: ((fileTypes: FileTypeList) => void)): void {
        this.onEvent(callback);
        this.socket.emit('onGetFileList', directory, this.extension);
    }
}
