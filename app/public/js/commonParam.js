/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * config parameter
 */
var config = {
    extension: {
        project: '.prj.json',
        workflow: '.wf.json',
        task: '.tsk.json',
        remotetask: '.rtsk.json',
        job: '.jb.json',
        tree: '.tree.json',
        for: '.fr.json',
        if: '.if.json',
        else: '.els.json',
        condition: '.cnd.json',
        break: '.brk.json',
        pstudy: '.ps.json'
    },
    default_filename: 'define',
    submit_script: 'submit.sh',
    system_name: 'swf',
    node_color: {
        task: '#FF0000',
        remotetask: '#FF6600',
        job: '#FFCC00',
        workflow: '#0066FF',
        for: '#0000FF',
        break: '#00FFCC',
        condition: 'violet',
        if: '#00FF66',
        else: '#00FF00',
        pstudy: '#6600FF'
    },
    state_color: {
        planning: 'white',
        running: 'cyan',
        rerunning: 'orange',
        waiting: 'yellow',
        completed: '#00ff00',
        failed: 'red'
    },
    plug_color: {
        file: 'cyan',
        files: 'magenta',
        directory: 'yellow',
        flow: 'orange'
    },
    reload_project_ms: 2000
};
//# sourceMappingURL=commonParam.js.map
