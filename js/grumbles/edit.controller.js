"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleEditController", [
    "$stateParams",
    GrumbleEditControllerFunction
  ]);

  function GrumbleEditControllerFunction($stateParams){
  	this.grumble = grumbles[$stateParams.id];
  	this.edit = function(){ 
  	  this.grumble.title = title.value;
  	  this.grumble.content = content.value;
  	};
    this.index = $stateParams.id;
    this.delete = function(index){
      grumbles.splice(index, 1);
    }
  };

})();