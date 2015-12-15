"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleNewController", [
    GrumbleNewControllerFunction
  ]);

  function GrumbleNewControllerFunction(){
  	this.create = function(){
  	  grumbles.unshift({
        title: title.value,  
        content: content.value
      });
    }
  };

})();