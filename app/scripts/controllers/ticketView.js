'use strict';

angular.module('Tate.Controllers.TicketView', [])
  .controller('ticketViewController', function($rootScope, $scope, ticket, loadedOrder) {
    var currentYear  = new Date().getFullYear();
    $scope.orders = [loadedOrder] || [{
      barCode: "iVBORw0KGgoAAAANSUhEUgAAAcIAAAHCAQAAAABUY/ToAAADnUlEQVR4nO2cS46jSBCGvxiQvASp D+CjwA36SKM6Ut8AjuIbwNJSon8W+SDtrp6RSmUZeyIWVZDpT5lIoch4gYmvyfzXF0Fw0kknnXTS SSedPB5pSVqAzerbtSVf5eHxybt18pDkIElagNlO0tRJmgCzc4BBARtpJEm6JZ+xWycPRbbp/9rD 8AsYBDZcLF7Baoi1R6xg0IQn7tbJVyBtBJjPkj6sRVoaMfcPXdPJ1ybb+4G5XxBsLYM2E2zGsPwI v5Gv9ZxOPp7MDpC0bGYjjYBGNgLMfTJQksI9+fU1nXwrcjYzsx5sXE+CNYVkQCOGBSgB2/N36+Sh yHiW7QUPsW4mVoDuavsYdLdlkdd6TicfR5LC9XKWTV1AU5fGgCbN7r+TJE2v9ZxOPo4kaUTWnKgq g5ROsHillCRyHXLyE8k6lHKM+1W2Q8CwQJzV0kQNcx1yskjSIaA6sgaFqC/pdmmyNmUz5DrkZJFd aYi+DxCVJkVjjaSoUtlbch1y8kYqO1QUKZ1bClGbUlaoC6QUkuuQk7Wko2nJzg5dyBPRGOWx6GK7 P+TkvcT8kNGFlvlnANY2FlmTdAEBYj6HVnPfPHO3Th6RLHaoKcF8YD+84lkWvaBiltwOOXkjVSA2 VUnF7ESryhQF96md/ExS/jkXWSvNSU50UakSurkdcvJ3UlN3teROd5JZTx3gD5dcfS0e92s+p5MP JRtpWnOz9HAx00cPUWnmvhFzbqr+vjWdfAvyxqeOmaKmcrHryF+BaszPMiezVNWMPZ9YlTRK7jpV QvKs65CTn5HdNTaiaco9aPZ3LtlLy2bxVDvIbp08CFnFZbHIOpH/lLA+lvGHvQTrdsjJWqoMEF1u Hdo7YKvgzPNDTv4nOVzMmK1FE5vp45z6hzTF4Cz9zMZvXNPJ9yG70ui6gI00ylkhgPWUb9eT+0NO 3kp5z/VHgLVH888Aw6/e9p58gya9IASlgf+1ntPJx5E5A5SlCutLVmif8H5qJ/9EVh/6mC196MPs HIjvnFkP8XWz4dJi45N36+QhySEbHuiulkzQpUW6nCRdrFTTvF7m5L3U3R17r1BpBdnb8W8JP8uc /BeykVnfKIb6sNnefpZbjL59TSffiRwuLZpWsz3et5HSHrK6P+TkneTYvhPkr1RhdAvA1gJbK7ga dIvyxLN26+SByfLdD2CLJxizpXyixZTjstkn5NfXdPJNSPNvnDvppJNOOumkk/9z8h8i3CKKU74A pwAAAABJRU5ErkJggg== ",
      information: {
        ticketId:2,
        birthDate: "2014-10-31",
        city: "Woerden",
        email: "smartcat007@hotmail.com",
        firstName: "bob",
        lastName: "thomas",
        purchaseDate: "2014-11-14",
        residence: "fg",
        zipCode: "3445AG"
      }
    }];

    console.log($scope.orders);
  });
