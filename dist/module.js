'use strict';

System.register(['./datasource', './query_ctrl', './config_ctrl', './annotation_ctrl'], function (_export, _context) {
  "use strict";

  var GenericDatasource, GenericDatasourceQueryCtrl, GenericConfigCtrl, GenericAnnotationsQueryCtrl, GenericQueryOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      GenericDatasource = _datasource.GenericDatasource;
    }, function (_query_ctrl) {
      GenericDatasourceQueryCtrl = _query_ctrl.GenericDatasourceQueryCtrl;
    }, function (_config_ctrl) {
      GenericConfigCtrl = _config_ctrl.GenericConfigCtrl;
    }, function (_annotation_ctrl) {
      GenericAnnotationsQueryCtrl = _annotation_ctrl.GenericAnnotationsQueryCtrl;
    }],
    execute: function () {
      _export('QueryOptionsCtrl', GenericQueryOptionsCtrl = function GenericQueryOptionsCtrl() {
        _classCallCheck(this, GenericQueryOptionsCtrl);
      });

      GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', GenericDatasource);

      _export('QueryCtrl', GenericDatasourceQueryCtrl);

      _export('ConfigCtrl', GenericConfigCtrl);

      _export('QueryOptionsCtrl', GenericQueryOptionsCtrl);

      _export('AnnotationsQueryCtrl', GenericAnnotationsQueryCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
