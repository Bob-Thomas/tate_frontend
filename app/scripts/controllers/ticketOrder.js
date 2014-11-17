'use strict';

angular.module('Tate.Controllers.TicketOrder', [])
  .controller('ticketOrderController', function($rootScope, $scope, $state, ticket) {

    $scope.amount = 1;
    $scope.submitting = false;
    $scope.payment = false;
    $scope.family = false;
    $scope.price = 0.0;
    $scope.familyModel = {
      lastName:"",
      email: "",
      zipCode: "",
      residence: "",
      city: ""
    };


    $scope.form = [];

    $scope.errors = [];

    $scope.$watch('form', function(){
      calculatePrice();
    }, true);

    $scope.updateInput = function(){
        $scope.family = !$scope.family;
        if($scope.family) {
        angular.forEach($scope.form, function(user, index) {
          user.lastName = $scope.familyModel.lastName;
          user.email = $scope.familyModel.email;
          user.zipCode = $scope.familyModel.zipCode;
          user.residence = $scope.familyModel.residence;
          user.city = $scope.familyModel.city;
        })
      }
      else {
        angular.forEach($scope.form, function(user, index) {
          if(index > 1) {

            user.lastName = '';
            user.email = '';
            user.zipCode = '';
            user.residence = '';
            user.city = '';
          }
        })
      }

    };

    $scope.users = function(range) {
        var user = {
          firstName : "",
          lastName : "",
          birthDate: "",
          email: "",
          zipCode: "",
          residence: "",
          city: "",

          error : {
            firstName : "",
            lastName : "",
            birthDate: "",
            email: "",
            zipCode: "",
            residence: "",
            city: ""
          }
        };
      if(range > $scope.form.length) {
        if($scope.family) {
          user.lastName = $scope.familyModel.lastName;
          user.email = $scope.familyModel.email;
          user.zipCode = $scope.familyModel.zipCode;
          user.residence = $scope.familyModel.residence;
          user.city = $scope.familyModel.city;
        }
        $scope.form.push(user);
      }
      else {
        $scope.form.splice(range, 1);
      }
    };

    $scope.submit = function() {
      var validated = false;
      var submitted  = false;
      angular.forEach($scope.form, function(user, index) {
        user.error = {
          firstName : "",
          lastName : "",
          birthDate: "",
          email: "",
          zipCode: "",
          residence: "",
          city: ""
        };
        for(var property in user) {
          if(user.hasOwnProperty(property)) {
            if(user[property] == "") {
              user.error[property] = 'Leeg veld';
              validated = true;
            }
          }
        }
      });
      if(validated) {
        return true;
      }
      $scope.submitting = true;
      ticket.fireOrder({data:$scope.form}).then(function() {
        $scope.submitting = false;
        $state.go('home.ticket.order.complete')
      })
    };


    $scope.checkForm = function() {
      var validated = false;
      angular.forEach($scope.form, function(user, index) {
        user.error = {
          firstName : "",
          lastName : "",
          birthDate: "",
          email: "",
          zipCode: "",
          residence: "",
          city: ""
        };
        for(var property in user) {
          if(user.hasOwnProperty(property)) {
            if(user[property] == "") {
              user.error[property] = 'Leeg veld';
              validated = true;
            }
          }
        }
      });
      if(validated) {
        return true;
      }
      $scope.payment = true;
      calculatePrice();
    };

    $scope.users(1);

    $scope.familyModel = $scope.form[0]



    function calculatePrice() {
      $scope.price = 0.0;
      var now = new Date();
      var year = now.getFullYear();

      angular.forEach($scope.form, function(user) {
        if(user.birthDate) {
          var userDate = new Date(user.birthDate);
          var age = year - userDate.getFullYear();

          if (age >= 12 && age <= 18) {
            $scope.price += 2.50;
          }
          else if (age > 18 && age <= 59) {
            $scope.price += 4;
          }
          else if (age >= 60) {
            $scope.price += 2.50;
          }
        }
      });
    }

  });
