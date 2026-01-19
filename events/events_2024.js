$(document).ready(function () {
  let events = [
    {
      eventName: "Cyber Security in Power Systems",
      image: "./images/2024/cyber-security/img.jpg",
      eventDate: "18th - 19th May, 2024",
      report: "The IAS chapter of IEEE SB AJCE hosted a talk session \"Cyber Security in Power Systems\" in collaboration with IEEE IAS SBC TKMCE, which was a remarkable success. This two-day session featured Dr RP Maheshwari, a retired professor of Electrical Engineering from IIT Roorkee, whose extensive knowledge and experience provided invaluable insights into the critical aspects of cyber security within power systems.",
    },
  ];

  events.forEach((event) => {
    $(".event-cards")
      .append(`<div class="card border-dark mb-3 rounded event-card" >
      <div class="row no-gutters">
        <div class="col-md-4">
        <a class="venobox" href="${event.image}"><img src="${event.image}" alt="image alt" class="card-img card-img-class "/></a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${event.eventName}</h5>
            <p class="card-text my-0"><small class="text-muted">${event.eventDate} </small></p>
            <p class="card-text">${event.report}</p>
          </div>
        </div>
      </div>
    </div>`);
  });

  $(".venobox").venobox({});
});
