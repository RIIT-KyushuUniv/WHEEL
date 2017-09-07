/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

"use strict";
/**
 * runnning state extension
 */
var SwfJobScheduler;
(function (SwfJobScheduler) {
    /**
     * state planning
     */
    SwfJobScheduler.TCS = 'TCS';
    /**
     * state running
     */
    SwfJobScheduler.TORQUE = 'TORQUE';
})(SwfJobScheduler || (SwfJobScheduler = {}));
module.exports = SwfJobScheduler;
//# sourceMappingURL=swfJobScheduler.js.map
