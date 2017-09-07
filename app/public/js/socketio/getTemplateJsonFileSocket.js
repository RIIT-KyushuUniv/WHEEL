/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * socket io communication class for template json file from server
 */
var GetTemplateJsonFileSocket = (function () {
    /**
     * create new instance
     * @param socket socket io instance
     */
    function GetTemplateJsonFileSocket(socket) {
        this.socket = socket;
    }
    /**
     * Adds a listener for this event that will be invoked a single time before being automatically removed
     * @param callback The function to call when we get the event
     */
    GetTemplateJsonFileSocket.prototype.onEvent = function (callback) {
        this.socket.once(GetTemplateJsonFileSocket.eventName, callback);
    };
    /**
     * emit to server for getting template json file
     * @param filetype json file type
     * @param callback The function to call when we get the event
     */
    GetTemplateJsonFileSocket.prototype.emit = function (filetype, callback) {
        this.onEvent(callback);
        this.socket.emit(GetTemplateJsonFileSocket.eventName, filetype);
    };
    return GetTemplateJsonFileSocket;
}());
/**
 * event name
 */
GetTemplateJsonFileSocket.eventName = 'onGetJsonFile';
//# sourceMappingURL=getTemplateJsonFileSocket.js.map
