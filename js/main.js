// // @import "../../../../node_modules/@material/switch/mdc-switch";

// import {MDCSwitch} from "../../../../node_modules/@material/switch";
// const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));


// const button = document.querySelector('.foo-button');
// mdc.ripple.MDCRipple.attachTo(button);

// const switchwidget = $(".foo-switch");
// mdc.ripple.MDCRipple.attachTo(switchwidget);


var map;
var mapCenter;

var mapMarkers = [
  [40.736060, -74.171489],
  [40.75, -74.15],
  [40.75, -74.16],
  [40.75, -74.17],
  [40.75, -74.18]
];

var account = {
  name: "Arden Hill Hospital",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10101",
  country: "US",
  type: "Hospital",
  lat: 40.736060,
  lng: -74.171489
}

var acct0 = account;
var acct1 = account;
var acct2 = account;
var acct3 = account;
var acct4 = account;

var fakeData = [acct0, acct1, acct2, acct3, acct4];

// Initialize and add the map
function initMap() {
  // The location of Newark
  mapCenter = {lat: 40.736060, lng: -74.171489};
  // The map, centered at Newark
  map = new google.maps.Map(

    document.getElementById('map'), {
        zoom: 12, 
        center: mapCenter,
        // zoomControl: true,
        // mapTypeControl: true,
        // scaleControl: true,
        // streetViewControl: false,
        // rotateControl: false,
        // fullscreenControl: false,
        disableDefaultUI: true
  });

  var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#4E90D9",
        fillOpacity: 1,
        strokeWeight: 1
  }

  var i;
  for (i=0; i<mapMarkers.length; i++) {
    new google.maps.Marker({
      position: {
        lat: mapMarkers[i][0], 
        lng: mapMarkers[i][1]
      },
      map: map,
      label: {
        text: "" + i,
        color: "white",
        font: "Roboto"
      },
      icon: icon
    });
  }

  // // The marker, positioned at Newark
  // var marker = new google.maps.Marker({
  //   position: mapCenter, 
  //   map: map
  // });

  // createPanelListener(accountsToolbar, map);

  // Why is this a var?
  // var mapListeners = new createListener(searchToolbar, map);

  // Not sure what this does
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(toolbar);
}




$("#accountsToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#geosToolbar").removeClass("selected");
  $("#territoriesToolbar").removeClass("selected");
  if ($(this).hasClass("selected")) {
    $(".rightPanelBase").addClass("expanded");
} else {
    $(".rightPanelBase").removeClass("expanded");
  }
});

$("#geosToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#accountsToolbar").removeClass("selected");
  $("#territoriesToolbar").removeClass("selected");
  if ($(this).hasClass("selected")) {
    $(".rightPanelBase").addClass("expanded");
} else {
    $(".rightPanelBase").removeClass("expanded");
  }
});

$("#territoriesToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#geosToolbar").removeClass("selected");
  $("#accountsToolbar").removeClass("selected");
  if ($(this).hasClass("selected")) {
    $(".rightPanelBase").addClass("expanded");
} else {
    $(".rightPanelBase").removeClass("expanded");
  }
});

$("#searchToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#filtersToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#layersToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#labelsToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#paletteToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#measureToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#routesToolbar").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  if ($(this).hasClass("selected")) {
    $(".leftPanelBase320").addClass("expanded");
} else {
    $(".leftPanelBase320").removeClass("expanded");
  }
});

$("#selectMenu").on("click", function () {
  $(this).toggleClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#searchToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
});

$(".leftPanelClose").on("click", function () {
  $("#searchToolbar").removeClass("selected");
  $("#filtersToolbar").removeClass("selected");
  $("#layersToolbar").removeClass("selected");
  $("#labelsToolbar").removeClass("selected");
  $("#paletteToolbar").removeClass("selected");
  $("#measureToolbar").removeClass("selected");
  $("#routesToolbar").removeClass("selected");
  $("#selectMenu").removeClass("selected");

  $(".leftPanelBase320").removeClass("expanded");
});


// Have to dynamically reattach the listener on each click?
$("#labelsToggleTab").on("click", ".toggleTabUnselected", function () {
  $("#labelsToggleTab > *").removeClass("toggleTabSelected");
  $("#labelsToggleTab > *").addClass("toggleTabUnselected");
  $(this).addClass("toggleTabSelected");
  $(this).removeClass("toggleTabUnselected");
});


// function createListener(controlDiv, map) {

//   // Setup the click event listeners: simply set the map to Chicago.
//   searchToolbar.addEventListener('click', function() {
//     map.setCenter(mapCenter);
//   });

// function createPanelListener(controlDivID, map) {

//   $(controlDivID).on("click", function () {
//     if ($(".rightPanelBase").attr.display == "none") {
//       $(".rightPanelBase").css("display", "inline-block");
//     }
//   });

// }

// $("#accountsToolbar").on("click", function () {
//     $(".rightPanelBase").toggleClass("hide");

// });

// $("#accountsToolbar").on("click", function () {
//   if (rightToolbarStatus[0] == 0) {
//     rightToolbarStatus[0] = 1;
//     // $(".rightPanelBase").css("width", "400px");
//     $(".rightPanelBase").addClass("expanded");
//     $("#accountsToolbar").addClass("selected");
// } else if (rightToolbarStatus[0] == 1) {
//     rightToolbarStatus[0] = 0;
//     // $(".rightPanelBase").css("width", "0px");
//     $(".rightPanelBase").removeClass("expanded");
//     $("#accountsToolbar").removeClass("selected");
//   }
// });
