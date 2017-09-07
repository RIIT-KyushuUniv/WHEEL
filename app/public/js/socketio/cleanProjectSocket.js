/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * socket io communication class for cleaning project request to server
 */
var CleanProjectSocket = (function () {
    /**
     * create new instance
     * @param socket socket io instance
     */
    function CleanProjectSocket(socket) {
        this.socket = socket;
    }
    /**
     * Adds a listener for this event that will be invoked a single time before being automatically removed
     * @param callback The function to call when we get the event
     */
    CleanProjectSocket.prototype.onEvent = function (callback) {
        this.socket.once(CleanProjectSocket.eventName, callback);
    };
    /**
     * emit to server for cleaning project
     * @param projectPath project path name
     * @param callback The function to call when we get the event
     */
    CleanProjectSocket.prototype.emit = function (projectPath, callback) {
        this.onEvent(callback);
        this.socket.emit(CleanProjectSocket.eventName, projectPath);
    };
    return CleanProjectSocket;
}());
/**
 * event name
 */
CleanProjectSocket.eventName = 'cleanProject';
//# sourceMappingURL=cleanProjectSocket.js.map
