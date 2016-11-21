/// <reference path="jquery-1.6.4.js" />
/// <reference path="jquery.signalR-2.2.1.js" />
/// <reference path="knockout-3.4.0.js" />

function AppViewModel() {
    self = this;
    self.counter = ko.observable("0");

    self.update = function (hitCount) {
        self.counter(hitCount);
    };
}

var appViewModel = new AppViewModel();
ko.applyBindings(appViewModel);

var counterHub = null;
$(function () {
    counterHub = $.connection.hitCounterHub;
    counterHub.client.updateHits = appViewModel.update;
    $.connection.hub.start().done(function () {
        counterHub.server.recordHit();
    });
});