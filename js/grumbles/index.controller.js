"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;
    this.delete = function(id){
    	grumbles.splice(id, 1);
    }
  }

})();