import { BandSiteApi } from "./band-site-api.js";
const apiKey = "77b54739-3df2-4aca-9c51-d7e6ea28be3f";

let bandSiteApi = new BandSiteApi(apiKey);
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

function changeDateFormat(timestamp) {
  let showTime = new Date(timestamp);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthIndex = showTime.getMonth();
  const day = showTime.getDate();
  const year = showTime.getFullYear();

  const dayIndex = showTime.getDay();
  const dayOfWeek = dayNames[dayIndex];
  const month = monthNames[monthIndex];
  
  return `${dayOfWeek} ${month} ${day} ${year}`;
}

async function setGigs() {
  const arr = await bandSiteApi.getShows();
  console.log(arr);

  arr.forEach((element) => {
    let singleGig = document.createElement("div");
    singleGig.setAttribute("class", "shows-single");

    let dateLabel = document.createElement("p");
    dateLabel.setAttribute("class", "shows-label");
    dateLabel.textContent = "DATE";

    let showDate = document.createElement("p");
    showDate.setAttribute("class", "shows-date");
    showDate.textContent = changeDateFormat(element.date);

    singleGig.appendChild(dateLabel);
    singleGig.appendChild(showDate);

    let venueLabel = document.createElement("p");
    venueLabel.setAttribute("class", "shows-label");
    venueLabel.textContent = "VENUE";

    let showVenue = document.createElement("p");
    showVenue.setAttribute("class", "shows-text");
    showVenue.textContent = element.place;

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
}

setGigs();
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
