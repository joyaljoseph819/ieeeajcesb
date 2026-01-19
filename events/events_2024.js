$(document).ready(function () {
  let events = [
    {
      eventName: "Cyber Security in Power Systems",
      image: "./images/2024/cyber-security/img.jpg",
      eventDate: "18th - 19th May, 2024",
      report: "The IAS chapter of IEEE SB AJCE hosted a talk session \"Cyber Security in Power Systems\" in collaboration with IEEE IAS SBC TKMCE, which was a remarkable success. This two-day session featured Dr RP Maheshwari, a retired professor of Electrical Engineering from IIT Roorkee, whose extensive knowledge and experience provided invaluable insights into the critical aspects of cyber security within power systems.",
    },
    {
      eventName: "DronCon",
      image: "./images/2024/droncon/img.png",
      eventDate: "18th April, 2023",
      report: "IAS Chapter of IEEE SB AJCE in collaboration with SOPC LAB conducted a Hands-on-workshop on 18th April 2023. The participants were given hands-on training on assembling and disassembling drones, followed by the calibration of sensors and testing of the motors. They were trained on how to control the drones, their speed, altitude, and direction.",
    },
    {
      eventName: "Electra Boost",
      image: "./images/2024/electra-boost/img.png",
      eventDate: "22nd April, 2024",
      report: "ElectraBoost, A Low-Budget Portable Inverter Making Workshop organised as part of Azure 2024-Inter College Techno-Cultural Fest by IEEE IAS SBC AJCE in collaboration with IEEE PES SBC AJCE, aimed to introduce participants to the construction and functionality of a 200W 50Hz inverter.",
    },
    {
      eventName: "Envisioning Tomorrow",
      image: "./images/2024/envisioning-tomorrow/img.png",
      eventDate: "22nd September, 2024",
      report: "As part of LA GUERRE 2.0, IEEE IA/IE/PELS Jt. Chapter Kerala, in collaboration with IEEE IAS SBC AJCE and IEEE IAS SBC MACE, organised a webinar titled \"Envisioning Tomorrow: The Rise of IIoT in Smart Industries\". The session focused on the transformative impact of the Industrial Internet of Things (IIoT) on industries, highlighting key areas such as increased operational efficiency, predictive maintenance, enhanced data analytics, and supply chain optimisation.",
    },
    {
      eventName: "EVENTURE 2.0",
      image: "./images/2024/eventure-2.0/img.png",
      eventDate: "9th - 11th August, 2024",
      report: "EVENTURE 2.0, a 3 day immersive EV conclave by IEEE IAS SBC AJCE, was conducted at Amal Jyothi College of Engineering on August 9, 10 and 11.",
    },
    {
      eventName: "EVENTURE",
      image: "./images/2023/eventure/img.jpg",
      eventDate: "19th - 20th August, 2023",
      report: "IEEE IAS SBC in association with IEEE IA/IE/PELS Jt. Chapter organize the most electrifying EV Conclave, Eventure. Eventure was held on 19th to 20th August 2023 at Amal Jyothi College of engineering.",
    },
    {
      eventName: "EVisdom - Electric Vehicle Quiz",
      image: "./images/2024/evisdom/img.png",
      eventDate: "7th July, 2024",
      report: "On 7th July 2024, from 8:30 PM to 8:45 PM, IAS SBC IEEE SB AJCE hosted the EVisdom - Electric Vehicle Quiz on Quizizz. The event was a blast, with lots of participants joining in to test their knowledge about electric vehicles (EVs) and sustainability.",
    },
    {
      eventName: "IGNITE",
      image: "./images/2024/ignite/img.png",
      eventDate: "20th September, 2024",
      report: "IEEE IAS SBC MACE, in collaboration with IEEE IAS SBC AJCE, hosted the IGNITE Membership Development Session as part of LA GUERRE on 20th September 2024 at 7:30 PM via Google Meet. The session, attended by 41 participants, aimed to inspire engagement in the Industrial Applications Society (IAS), Industrial Electronics Society (IES), and Power Electronics Society (PELS), promoting professional growth and technical passion. The event featured two speakers: Miss Sreepriya S, Newsletter Editor of IEEE IA/IE/PELS Joint Chapter Kerala, and Miss Ann Mary Roy, Malabar Hub Student Representative (HSR), IEEE IA/IE/PELS Joint Chapter Kerala.",
    },
    {
      eventName: "LinkedIn: Beyond Likes & Lurking",
      image: "./images/2024/linkedin-session/img.png",
      eventDate: "2nd April, 2024",
      report: "The IAS chapter of IEEE SB AJCE hosted an enlightening talk session \"LinkedIn; Beyond Likes & Lurking”, featuring Abimel S B Kulumala, LinkedIn Community Top Voice and DevOps Intern at IEEE R10 Young Professionals. This session aimed to provide an actionable strategy for leveraging LinkedIn as a potential tool for career advancement, particularly for job seekers. The event was held on April 2nd, 2024, from 8:00 PM to 9:30 PM, via Microsoft Teams.",
    },
    {
      eventName: "TechTwist: Decode the Future",
      image: "./images/2024/techtwist/img.png",
      eventDate: "9th October, 2024",
      report: "As part of LA GUERRE 2.0, IEEE IA/IE/PELS Jt. Chapter Kerala, in collaboration with IEEE IAS SBC AJCE and IEEE IAS SBC MACE, organised the TechTwist: Decode the Future crossword puzzle competition. Held on 09th October 2024, 8:30pm , the event challenged participants to test their knowledge of technology and gadgets in an engaging and fast-paced format. The competition, conducted online via Amuse Labs - Online Puzzle Maker , allowed participants to solve a crossword within 30 minutes.",
    },
    {
      eventName: "VEGA PROCESSOR WORKSHOP",
      image: "./images/2024/vega-processor/img.png",
      eventDate: "2nd - 3rd June, 2023",
      report: "The IAS chapter of IEEE SB AJCE hosted a hands-on VEGA Processor EcoSystem on 2nd and 3rd June. The workshop kicked off with an overview of Vega processors, highlighting key features. This initial phase likely laid the groundwork for participants, ensuring they had a solid conceptual understanding before delving into hands-on activities. The hands-on session that followed the introduction provided participants with a unique opportunity to work directly with Vega processors in a controlled lab environment.",
    },
    {
      eventName: "AGM 2024",
      image: "./images/2024/agm-2024/img.png",
      eventDate: "19th March, 2024",
      report: "IEEE SB AJCE’s Annual General Meeting was conducted on 19th March 2024 at Amal Jyothi College of Engineering. The meeting featured presidential addresses by college officials and esteemed chief guests. Certificates and awards were distributed to the executive committee and subcommittee members to honor their contributions. The event included a cake-cutting ceremony, report presentations from various chapters and affinity groups, the introduction of the new Executive Committee for 2024, and an experience-sharing session by outgoing members.",
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
