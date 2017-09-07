/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

$.fn.extend({
    borderInvalid: function () {
        var that = this;
        that.css('border', 'solid 1px rgb(250, 55, 20)');
        return that;
    },
    borderValid: function () {
        var that = this;
        that.css('border', 'solid 1px #111');
        return that;
    },
    textDecorateUnderline: function () {
        var that = this;
        that.css('text-decoration', 'underline');
        return that;
    },
    textDecorateNone: function () {
        var that = this;
        that.css('text-decoration', 'none');
        return that;
    },
    id: function () {
        var that = this;
        return that.attr('id');
    },
    class: function (name) {
        var that = this;
        that.attr('class', name);
        return that;
    },
    displayBlock: function () {
        var that = this;
        that.css('display', 'block');
        return that;
    },
    displayNone: function () {
        var that = this;
        that.css('display', 'none');
        return that;
    }
});
//# sourceMappingURL=jqueryExtends.js.map
