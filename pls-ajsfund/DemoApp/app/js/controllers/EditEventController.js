'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {


        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert('event '  + event.name + ' has been saved!');
            }
        };

        $scope.cancelEdit = function(event){
            window.location = "/EventDetails.html";

        };

    }
);