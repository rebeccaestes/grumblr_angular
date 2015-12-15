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
  	this.index = $stateParams.id;
  }

  

})();