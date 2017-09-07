/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

"use strict";
var path = require("path");
/**
 * runnning state extension
 */
var SwfScriptType;
(function (SwfScriptType) {
    /**
     * state planning
     */
    SwfScriptType.BASH = 'Bash';
    /**
     * state running
     */
    SwfScriptType.LUA = 'Lua';
    /**
     * state rerunning
     */
    SwfScriptType.BATCH = 'Batch';
    /**
     * whether specified task script is bash or not
     * @param task task json
     * @return whether specified task script is bash or not
     */
    function isBash(task) {
        return (task.script.type === this.BASH || path.extname(task.script.path) === '.sh');
    }
    SwfScriptType.isBash = isBash;
    /**
     * whether specified task script is batch or not
     * @param task task json
     * @return whether specified task script is batch or not
     */
    function isBatch(task) {
        return (task.script.type === this.BATCH || path.extname(task.script.path) === '.bat');
    }
    SwfScriptType.isBatch = isBatch;
    /**
     * whether specified task script is lua or not
     * @param task task json
     * @return whether specified task script is lua or not
     */
    function isLua(task) {
        return (task.script.type === this.LUA || path.extname(task.script.path) === '.lua');
    }
    SwfScriptType.isLua = isLua;
})(SwfScriptType || (SwfScriptType = {}));
module.exports = SwfScriptType;
//# sourceMappingURL=swfScriptType.js.map
