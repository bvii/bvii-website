require("paper");
var core = require("./core.js");
var styles = require("./styles.js");

var stationToChange = null;

function addRandomMinorStations(track, station) {
    var nStations = Math.floor((Math.random() * 5) + 1);
    for (var i = 0; i < nStations; ++i) {
        track.createStationMinor(station.position, track.segmentToStation(station).id);
    }
}

$("#homepage-title").on('click', function() {
    console.log('click');
    var selectStyle = styles.createStationStyle();
    selectStyle.stationRadius = 20;
    selectStyle.strokeColor = "red";
    stationToChange.style = selectStyle;
    stationToChange.draw();
})

function drawAll() {
    var overlayHeight = $("#overlay").height();
    var overlayWidth = $("#overlay").height();
    var pageHeight = Math.max(overlayHeight*1.2, $("body").height());
    var width = view.bounds.width;
    var height = view.bounds.height;
    view.viewSize = new Size(view.bounds.width, pageHeight);
    $("#paperCanvas").height(pageHeight);
    $("body").height(pageHeight);
    var maxOffset = height*0.2;
    console.log('width', width);
    console.log('height', height);

    var yOffset = height*0.03;
    var xOffset = width*0.05;
    var map = core.createMap();
    var track = map.createTrack();
    var station = track.createStation(new Point(xOffset, yOffset), null);
    station = track.createStation(new Point(xOffset, overlayHeight*0.5), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.2, Math.min(overlayHeight*1.5, maxOffset+overlayHeight)), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.35, Math.min(overlayHeight*1.5, maxOffset+overlayHeight)), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.5, Math.min(overlayHeight*1.25, maxOffset+overlayHeight)), null);
    addRandomMinorStations(track, station);
    stationToChange = station;
    station = track.createStation(new Point(width*.65, Math.min(overlayHeight*1.05, maxOffset+overlayHeight)), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.8, Math.min(overlayHeight*1.05, maxOffset+overlayHeight)), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.95, overlayHeight*0.8), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.95, overlayHeight*0.4), null);
    addRandomMinorStations(track, station);
    station = track.createStation(new Point(width*.95, yOffset), null);
    addRandomMinorStations(track, station);

    map.draw();
}



view.onResize = function() {
    project.clear();
    drawAll();
}