'use strict';
/**
 * Created by bcampbell on 7/25/14.
 */
app.controller('PostsCtrl',function($scope, Post){
    $scope.posts=Post.all;
    $scope.post={url:'http://',title:''};

    $scope.submitPost = function(){
        Post.create($scope.post).then(function(){
            $scope.post={url:'http://', title:''};
        });
    };
    $scope.deletePost = function(postId){
        Post.delete(postId);
    };
});