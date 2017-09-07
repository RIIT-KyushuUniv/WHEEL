/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

import fs = require('fs');
import path = require('path');

/**
 * server config data class
 */
class ServerConfig {
    /**
     * config data
     */
    private static config;

    /**
     * get configdata
     * @return config data
     */
    public static getConfig() {
        if (this.config != null) {
            return this.config;
        }
        try {
            const serverConfig = fs.readFileSync(path.join(__dirname, './config/server.json'));
            this.config = JSON.parse(serverConfig.toString());
            return this.config;
        }
        catch (err) {
            return null;
        }
    }
}

export = ServerConfig;
