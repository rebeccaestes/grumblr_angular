"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;
    this.create = function(){
      grumbles.unshift({
        title: this.newGrumble.title
      });
    };
    this.delete = function(index){
      grumbles.splice(index, 1);
    };
  }

})();