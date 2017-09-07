/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

"use strict";
/**
 * json file type extension
 */
var SwfType;
(function (SwfType) {
    /**
     * type of project
     */
    SwfType.PROJECT = 'Project';
    /**
     * type of workflow
     */
    SwfType.WORKFLOW = 'Workflow';
    /**
     * type of json
     */
    SwfType.TASK = 'Task';
    /**
     * type of remote task
     */
    SwfType.REMOTETASK = 'RemoteTask';
    /**
     * type of job
     */
    SwfType.JOB = 'Job';
    /**
     * type of for
     */
    SwfType.FOR = 'For';
    /**
     * type of if
     */
    SwfType.IF = 'If';
    /**
     * type of else
     */
    SwfType.ELSE = 'Else';
    /**
     * type of condition
     */
    SwfType.CONDITION = 'Condition';
    /**
     * type of break
     */
    SwfType.BREAK = 'Break';
    /**
     * type of pstudy
     */
    SwfType.PSTUDY = 'PStudy';
})(SwfType || (SwfType = {}));
module.exports = SwfType;
//# sourceMappingURL=swfType.js.map
