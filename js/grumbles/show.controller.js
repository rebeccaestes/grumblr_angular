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
      if (authorName.value) { 
        this.grumble.authorName = authorName.value;
        $("#authorName").val("");
      };
      if (content.value) { 
        this.grumble.content = content.value;
        $("#content").val("");
      };
      if (photoUrl.value) { 
        this.grumble.photoUrl = photoUrl.value;
        $("#photoUrl").val("");
      }
    };
    // this.index = $stateParams.id;
  }

  

})();