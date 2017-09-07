/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

/**
 * file type
 */
type SwfFileType = 'file' | 'files' | 'directory';

/**
 * file type extension
 */
namespace SwfFileType {
    /**
     * type of file
     */
    export const FILE: SwfFileType = 'file';
    /**
     * type of files
     */
    export const FILES: SwfFileType = 'files';
    /**
     * type of directory
     */
    export const DIRECTORY: SwfFileType = 'directory';
}

export = SwfFileType;
