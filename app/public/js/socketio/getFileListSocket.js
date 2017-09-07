/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * socket io communication class for get file list
 */
var GetFileListSocket = (function () {
    /**
     * create new instance
     * @param socket socket io instance
     * @param extension extension string for file filter, or null we want to all files
     */
    function GetFileListSocket(socket, extension) {
        this.socket = socket;
        this.extension = extension;
    }
    /**
     * Adds a listener for this event that will be invoked a single time before being automatically removed
     * @param callback The function to call when we get this event
     */
    GetFileListSocket.prototype.onEvent = function (callback) {
        this.socket.once(GetFileListSocket.eventName, callback);
    };
    /**
     * emit to server for get file list
     * @param directory
     * @param callback The function to call when we get this event
     */
    GetFileListSocket.prototype.emit = function (directory, callback) {
        if (directory === void 0) { directory = null; }
        this.onEvent(callback);
        this.socket.emit('onGetFileList', directory, this.extension);
    };
    return GetFileListSocket;
}());
/**
 * event name
 */
GetFileListSocket.eventName = 'onGetFileList';
//# sourceMappingURL=getFileListSocket.js.map
