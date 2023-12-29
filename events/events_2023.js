$(document).ready(function () {
  let events = [
    {
      eventName: "zero to one",
      image: "./images/2023/0-to-1/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "108",
      image: "./images/2023/108/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "AGM 2023",
      image: "./images/2023/agm23/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Agree to Disagree",
      image: "./images/2023/agree-2-disagree/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "AICERA'23",
      image: "./images/2023/aicera/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "AR Workshop",
      image: "./images/2023/ar-workshop/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Asvasya",
      image: "./images/2023/asvasya/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Byteboost",
      image: "./images/2023/byteboost/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Cipher",
      image: "./images/2023/cipher/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Code Clash",
      image: "./images/2023/code-clash/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Engineering Marvels",
      image: "./images/2023/engineering-marvels/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Entrepreneurial Engineering",
      image: "./images/2023/entrepreneurial-engineering/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Eventure",
      image: "./images/2023/eventure/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Fusion 360",
      image: "./images/2023/fusion-360/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Greenovation",
      image: "./images/2023/greenovation/img.png",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Inspiration",
      image: "./images/2023/inspiration/img.png",
      eventDate: "",
      report: "",
    },
    {
      eventName: "KHM 2023",
      image: "./images/2023/khm/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Matlab Workshop",
      image: "./images/2023/matlab/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Prompt Engineering",
      image: "./images/2023/prompt-engineering/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Quantum Quest",
      image: "./images/2023/quantum-quest/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "QuaRunTime 4.0",
      image: "./images/2023/quaruntime/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Tech of Future",
      image: "./images/2023/tech-of-future/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Techelevate",
      image: "./images/2023/techelevate/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Techtrivia",
      image: "./images/2023/techtrivia/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Transistoria",
      image: "./images/2023/transistoria/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Unsung Heroines",
      image: "./images/2023/unsung-heroines/img.png",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Vidyarpan",
      image: "./images/2023/vidyarpan/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "YP Talks",
      image: "./images/2023/yp-talks/img.jpg",
      eventDate: "",
      report: "",
    },
    {
      eventName: "Zip Hunt",
      image: "./images/2023/zip-hunt/img.jpg",
      eventDate: "",
      report: "",
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
