/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * json file type
 */
type SwfType = 'Project' | 'Workflow' | 'Task' | 'RemoteTask' | 'Job' | 'For' | 'If' | 'Else' | 'Condition' | 'Break' | 'PStudy';

/**
 * json file type extension
 */
namespace SwfType {
    /**
     * type of project
     */
    export const PROJECT: SwfType = 'Project';
    /**
     * type of workflow
     */
    export const WORKFLOW: SwfType = 'Workflow';
    /**
     * type of json
     */
    export const TASK: SwfType = 'Task';
    /**
     * type of remote task
     */
    export const REMOTETASK: SwfType = 'RemoteTask';
    /**
     * type of job
     */
    export const JOB: SwfType = 'Job';
    /**
     * type of for
     */
    export const FOR: SwfType = 'For';
    /**
     * type of if
     */
    export const IF: SwfType = 'If';
    /**
     * type of else
     */
    export const ELSE: SwfType = 'Else';
    /**
     * type of condition
     */
    export const CONDITION: SwfType = 'Condition';
    /**
     * type of break
     */
    export const BREAK: SwfType = 'Break';
    /**
     * type of pstudy
     */
    export const PSTUDY: SwfType = 'PStudy';
}

export = SwfType;
