let albumSect = document.querySelector(".album");
let showSect = document.querySelector(".shows");

let preText = document.createElement("p");
preText.setAttribute("class", "album-text");
preText.textContent = `Beautiful Beasts Album`;
let title = document.createElement("h1");
title.setAttribute("class", "album-title");
title.textContent = `Stripes of Yellow x For the Stings`;
albumSect.appendChild(preText);
albumSect.appendChild(title);


let showTitle = document.createElement("h2");
showTitle.setAttribute("class", "shows-title");
showTitle.textContent = "Shows";
showSect.appendChild(showTitle);

let gigs = document.createElement("div");
gigs.setAttribute("class", "shows-gig");

showA = {
  date: "Mon Sept 09 2024",
  venue: "Ronald lane",
  location: "San Fransisco, CA",
};

showB = {
  date: "Tue Sept 17 2024",
  venue: "Pier 3 East",
  location: "San Fransisco, CA",
};

showC = {
  date: "Sat Oct 12 2024",
  venue: "View Lounge",
  location: "San Fransisco, CA",
};

showD = {
  date: "Sat Nov 16 2024",
  venue: "Hyatt Agency",
  location: "San Fransisco, CA",
};

showE = {
  date: "Fri Nov 29 2024",
  venue: "Moscow Center",
  location: "San Fransisco, CA",
};

showF = {
  date: "Wed Dec 18 2024",
  venue: "Press Club",
  location: "San Fransisco, CA",
};

gigsArray = [showA, showB, showC, showD, showE, showF];
const setGigs = (arr) => {
  arr.forEach((element) => {
    let singleGig = document.createElement("div");
    singleGig.setAttribute("class", "shows-single");

    let dateLabel = document.createElement("p");
    dateLabel.setAttribute("class", "shows-label");
    dateLabel.textContent = "DATE";

    let showDate = document.createElement("p");
    showDate.setAttribute("class", "shows-date");
    showDate.textContent = element.date;

    singleGig.appendChild(dateLabel);
    singleGig.appendChild(showDate);

    let venueLabel = document.createElement("p");
    venueLabel.setAttribute("class", "shows-label");
    venueLabel.textContent = "VENUE";

    let showVenue = document.createElement("p");
    showVenue.setAttribute("class", "shows-text");
    showVenue.textContent = element.venue;

    singleGig.appendChild(venueLabel);
    singleGig.appendChild(showVenue);

    let locationLabel = document.createElement("p");
    locationLabel.setAttribute("class", "shows-label");
    locationLabel.textContent = "LOCATION";

    let showLocation = document.createElement("p");
    showLocation.setAttribute("class", "shows-text");
    showLocation.textContent = element.location;

    singleGig.appendChild(locationLabel);
    singleGig.appendChild(showLocation);

    let buyButton = document.createElement("button");
    buyButton.setAttribute("class", "shows-btn");
    buyButton.textContent = "BUY TICKETS";
    singleGig.appendChild(buyButton);

    gigs.appendChild(singleGig);
  });
};

setGigs(gigsArray);
let dateLabel = document.createElement("p");
dateLabel.setAttribute("class", "shows-super-label");
dateLabel.textContent = "DATE";

let venueLabel = document.createElement("p");
venueLabel.setAttribute("class", "shows-super-label");
venueLabel.textContent = "VENUE";

let locationLabel = document.createElement("p");
locationLabel.setAttribute("class", "shows-super-label");
locationLabel.textContent = "LOCATION";

let singleGig = document.createElement("div");
singleGig.setAttribute("class", "shows-super-labels");
singleGig.appendChild(dateLabel);
singleGig.appendChild(venueLabel);
singleGig.appendChild(locationLabel);

let showDiv = document.createElement("div");
showDiv.setAttribute("class", "shows-sect");
showDiv.appendChild(singleGig);
showDiv.appendChild(gigs);
showSect.appendChild(showDiv);
