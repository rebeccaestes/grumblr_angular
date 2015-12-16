"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
  	this.grumbles = grumbles;
  	this.grumble = grumbles[$stateParams.id];
  	// this.index = $stateParams.id;
    this.edit = function($stateParams){
      if (title.value) {
        this.grumble.title = title.value;
        $("#title").val("");
      };
      if (content.value) { 
        this.grumble.content = content.value;
        $("#content").val("");
      }
    };
    // this.index = $stateParams.id;
  }

  

})();