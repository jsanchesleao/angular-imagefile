'use strict';

/* Services */


angular.module('ImageFile.services', []).
  value('version', '0.1').
  factory('ImageService', [function(){
    function ImageService(data){
      var regex = /^data:(\w+\/\w+);base64,/;
      var parsed = String(data).match( regex );
      this.contentType = parsed[1];
      this.data = data.replace( regex, '' );
    }
    ImageService.prototype.toURI = function(){
      return 'data:' + this.contentType + ';base64,' + this.data;
    }
    return ImageService;
  }]);
