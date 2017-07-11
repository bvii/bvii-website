
var fillColor = "white";
var strokeWidth = 4;
var stationRadius = 6;
var selectionColor = "green";


var MapStyle = {

};


var TrackStyle = {

};


var SegmentStyle = {
    strokeColor: "#0089cb",
    strokeWidth: strokeWidth,
    selectionColor: "green",
    fullySelected: false
};


var StationStyle = {
    strokeColor: "#0089cb",
    strokeWidth: strokeWidth/1.5,
    fillColor: fillColor,
    stationRadius: stationRadius,
    selectionColor: selectionColor,
    fullySelected: false
};


var StationMinorStyle = {
    strokeColor: SegmentStyle.strokeColor,
    strokeWidth: SegmentStyle.strokeWidth,
    selectionColor: selectionColor,
    fullySelected: false
};


function createStationStyle() {
    return Object.create(StationStyle);
}

function createStationMinorStyle() {
    return Object.create(StationMinorStyle);
}

function createSegmentStyle() {
    return Object.create(SegmentStyle);
}


module.exports = {
    createStationStyle: createStationStyle,
    createSegmentStyle: createSegmentStyle,
    createStationMinorStyle: createStationMinorStyle,
};