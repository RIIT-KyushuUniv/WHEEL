/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * type of scheduler
 */
type SwfJobScheduler = 'TCS' | 'TORQUE';

/**
 * runnning state extension
 */
namespace SwfJobScheduler {
    /**
     * state planning
     */
    export const TCS: SwfJobScheduler = 'TCS';
    /**
     * state running
     */
    export const TORQUE: SwfJobScheduler = 'TORQUE';
}

export = SwfJobScheduler;
