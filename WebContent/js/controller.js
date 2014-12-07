
'use strict';


var twittCtrl = angular.module('twitter.controller',['ui.bootstrap']);

twittCtrl.controller("homeController",function($scope,tweetData,$modal){
	
  //Assigning list of posts
	//console.log(tweetData.dataset);
  $scope.dataset= tweetData.dataset;

  //doing for comment window hide and show
	
  $scope.showComm = [];
  
  $scope.commentWindow = function(index){
	 
	  
	  $scope.showComm[index] =  !$scope.showComm[index];
	  
  };
 

  
  //it is ragrding tick change
  
  $scope.tick = []; 
  $scope.ticks = []; 

  //initialization of the tick values from service
  $scope.InitimgChange = function(index,tweet){

      
      if(tweet.liked == 1 ){
    	  
    	  $scope.ticks[index] = !$scope.ticks[index];
      }
      
      if($scope.ticks[index] == true){
    	  
          $scope.tick[index] = "img/green_tick_trans.png";
      }else{
    	  //alert("tweet number : "+index+" liked : "+tweet.liked+"scope :"+$scope.tick[index]);
          $scope.tick[index] = "img/tick_grey1.jpg";
      }
  };
  
  //if you are clicking on the ticks
  $scope.INClike = function(index,tweet){
	  
	  if($scope.ticks[index]== true){
		  $scope.ticks[index] = false;
		  $scope.tick[index] = "img/tick_grey1.jpg";
		  //decrement like count by one
		  $scope.dataset[index].likes = $scope.dataset[index].likes-1;
	  }else{
		  $scope.ticks[index] = true;
		  $scope.tick[index] = "img/green_tick_trans.png";
		  //increment like count by one
		  $scope.dataset[index].likes = $scope.dataset[index].likes+1;
	  }
  };

  
  //adding new comment in the dataset
  $scope.newComment=[];
  
  $scope.addComment = function(index){
	  
	  //alert($scope.newComment[index]);
	  $scope.dataset[index].comments.push($scope.newComment[index]);
	  //make the webservice with post here 
	  $scope.newComment[index] = "";
	 // alert(JSON.stringify( $scope.dataset, null, 4));
  }
  
  //here the modals go

  $scope.name = 'sebin';
      
  $scope.showModal = function(tweet) {
        
  $scope.opts = {
      backdrop: true,
      backdropClick: true,
      dialogFade: true,
      keyboard: true,
      templateUrl : 'partials/modalContent.html',
      controller : ModalInstanceCtrl, //this is a global controller
      resolve: {
          data : function(){
           return tweet;
            }
            } // empty storage
        };
          
        
        /*$scope.opts.resolve.item = function() {
            return angular.copy({name:$scope.name}); // pass name to Dialog
        }*/
        
          var modalInstance = $modal.open($scope.opts);
          
          modalInstance.result.then(function(){
            //on ok button press 
          },function(){
            //on cancel button press
            console.log("Modal Closed");
          });
      }; 

});

twittCtrl.controller("profileController",function($scope,tweetData){
	
	
	$scope.profileData = tweetData.userprofile[0];
	
});

twittCtrl.controller("postController",function($scope){
	
	
});

//this is a global controller which deals with modal
var ModalInstanceCtrl = function($scope, $modalInstance, $modal, data) {
    
     $scope.data = data;

    
      $scope.ok = function () {
        $modalInstance.close();
      };
      
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
};

