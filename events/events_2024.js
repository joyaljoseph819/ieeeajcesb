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
      report: "The webinar \"LinkedIn: Beyond Likes & Lurking\" proved to be a valuable session. Attendees gained actionable strategies to enhance their LinkedIn presence, optimizing their profiles and fostering meaningful connections to propel their careers forward. The event facilitated insightful discussions on leveraging social media for professional growth, leaving participants equipped and inspired to take proactive steps in their career journeys.",
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
    {
      eventName: "vTools Training Session",
      image: "./images/2024/vtools-training/img.png",
      eventDate: "March, 2024",
      report: "The meeting was held to familiarise the secretaries with reports and minutes writing and where to upload them. Chethana Raj, Chair SB 2023 and Jesna Susan Reji, Secretary SB 2023, gave the new execom members an idea of how all of it works. The members were familiarised with using vTools and how to create and publish a report of an event or meeting in vTools. They were asked to contact their respective chairs for the login info and to start publishing the events as soon as each event was completed.",
    },
    {
      eventName: "Alvida Farewell 2024",
      image: "./images/2024/alvida-farewell/img.png",
      eventDate: "9th May, 2024",
      report: "IEEE SB AJCE organized 'Alvida Farewell 2024' on 9th May 2024 to bid a heartfelt goodbye to the graduating seniors. During the event, the seniors reflected on their journey and contributions to IEEE, while juniors and faculty expressed their gratitude. The farewell ended with a token distribution and group photos, marking a memorable send-off for the 2023 batch.",
    },
    {
      eventName: "DLP – Intelligent Power Management and Control of Electric Drive in Electric Vehicles",
      image: "./images/2024/dlp-session/img.png",
      eventDate: "2024",
      report: "The Distinguished Lecture by Dr. Rajesh Kumar on \"Intelligent Power Management and Control of Electric Drive in Electric Vehicles using Reinforcement Learning\" was highly insightful and well-received by attendees. The session sparked significant interest in the application of reinforcement learning to optimize power management in electric vehicles. It started with an introduction then it delved into the Markov decision process and much more. Participants expressed satisfaction with the depth of knowledge shared. Many attendees showed keen interest in further exploring this topic and proposed follow-up sessions or workshops to delve deeper into the subject. Overall, the lecture was engaging and impactful, setting the stage for future discussions.",
    },
    {
      eventName: "Skyborne Robotics",
      image: "./images/2024/skyborne-robotics/img.png",
      eventDate: "2024",
      report: "The SIGHT Technical Group of IEEE SB AJCE conducted an offline session 'SKYBORNE ROBOTICS', featured Alwin Sibi, a 7th-semester EEE student of AJCE, and Dani Xavier, CTO at AdOn and IEEE SIGHT SBC AJCE Project Coordinator, as the key facilitators. Their combined expertise and passion for technology ensured that attendees gained a comprehensive understanding of drone navigation and control techniques. The event was successfully conducted with 41 participants.",
    },
    {
      eventName: "Perspectives: A Debate Prep",
      image: "./images/2024/debate-prep/img.png",
      eventDate: "12th August, 2024",
      report: "CS Society IEEE SB AJCE in collaboration with SJCET, CE Poonjar, TocH organized a debate preparation workshop 'Perspectives: A Debate Prep' as a part of Informatyka 4.0. The workshop/session was led by Prof. Nijo M Joseph. The session began with Prof. Nijo emphasizing the importance of public speaking. He encouraged everyone to introduce themselves using adjectives beginning with initial letters of their names. Further he guided each participant to describe each other in a creative way while maintaining a professional body language and eye contact. The workshop took a vibrant turn when the participants were given an opportunity to use the pointers they learned in an enthusiastic debate.",
    },
    {
      eventName: "From Campus to Code: Alumni Pathways to Success",
      image: "./images/2024/campus-to-code/img.png",
      eventDate: "19th July, 2024",
      report: "IEEE CS SB AJCE conducted 'From Campus to Code: Alumni Pathways to Success', an exclusive talk session via Google Meet by Joel John Kandathil, an active IEEE member, dedicated volunteer, and shining alumnus. During the session, he gave an overview of his experience and work life at SOTI. He also gave a detailed explanation of the interview process and the correct methodology to be successful. He reminisced about his experience with IEEE and the benefits he gained from volunteering. Prioritizing career guidance, the session was highly interactive and helpful for participants.",
    },
    {
      eventName: "Infoshare",
      image: "./images/2024/infoshare/img1.png",
      eventDate: "2024",
      report: "IEEE Computer Society SB AJCE in collaboration with the IEEE SB Sahrdaya organized an exciting Infoshare event on the social media platform Instagram. Different spheres of Computer Science and its aspects and utility was shared globally in an enticing manner. IEEE Computer Society SB AJCE sought to spread awareness on Cybersecurity underlying protection of data, Blockchain which is essential for cryptocurrency systems and Full Stack Web Development dealing with the front end and back end of websites. The event was a signature of the cordiality between the student branches across our section.",
    },
    {
      eventName: "ASTROQUEST: The Space Week Quiz",
      image: "./images/2024/astroquest/img.png",
      eventDate: "9th October, 2024",
      report: "IEEE Computer Society SB AJCE in collaboration with the IEEE SB SJCET organized an exciting ASTROQUEST: The Space Week Quiz event on the quiz platform Quizizz celebrating the Space week. This event sought to enlighten and entice the participants to the mysteries of space and trigger their interest in astrophysics. IEEE Computer Society SBC AJCE along with IEEE Computer Society SBC SJCET sought to spread awareness on space science which is essential for increasing general knowledge and sparking an interest in our physical world thus finding its secrets. The event was a signature of the cordiality between the student branches across our section.",
    },
    {
      eventName: "CodeCrusade: Forging Argo",
      image: "./images/2024/codecrusade/img.png",
      eventDate: "5th October, 2024",
      report: "This session is intended for participants from all walks of life, who are keen on gaining insight into competitive programming, the basic step being knowing which platform and which programming language to use. Ranging on the expertise of the interested, specific platforms and languages are suggested, and adding to that, a detailed explanation and portrayal of setting up each platform including LeetCode and Hackerrank are included, along with the additional functionalities. Neil Sen Easow will be the speaker for this event and he is entrusted with addressing each of their inquiries and ensuring every participant has a smooth sailing in this endeavor. This event marks the first and foundation of the CodeCrusade trilogy an initiative celebrating October Coding Fiesta and a preparation for IEEEXtreme 18.0 to be held on 26th October 2024. Each session cherishes a hope to strengthen the faith of each participant both in themselves and in turn in IEEE CS SBC AJCE. This is both the fruition of a promise and a beacon of many more to come and bloom.",
    },
    {
      eventName: "CodeCrusade: Learning the Ropes",
      image: "./images/2024/codecrusade-ropes/img.png",
      eventDate: "7th October, 2024",
      report: "This session is intended for participants who are just beginning to learn programming (1st and 2nd years) and are fairly new to competitive programming. It also beckons the fearful and underconfident allowing them to break their shells open and transforming them into mighty eagles soaring in the sky, strengthening their wings for the flight. Joel John will be the speaker for this session and he will guide them step by step into the land of competitive programming. This session will focus on using Hackerrank as the platform and providing them with certain tips that would give them an edge over their fellow competitors not only in competitions but also in campus placements. It can also help them clear theoretical concepts of data structure algorithms by using them practically. By the end of the session, it is desired for each participant to have newfound courage in themselves and learn to find programming fun and friendly. Being an offline session ensures each participant has a better learning curve and personal attention from the mentor ensuring every participant has a smooth sailing in this endeavor. This event marks the second in line of the CodeCrusade trilogy an initiative celebrating October Coding Fiesta and a preparation for IEEEXtreme 18.0 to be held on 26th October 2024. Each session cherishes a hope to strengthen the faith of each participant both in themselves and in turn in IEEE CS SBC AJCE.",
    },
    {
      eventName: "Extreme Info Session",
      image: "./images/2024/extreme-info/img.png",
      eventDate: "21st September, 2024",
      report: "This info session is designed to introduce students to the exciting world of competitive programming. It will provide a comprehensive overview of upcoming coding competitions, including key strategies for improving coding efficiency, problem-solving techniques, and insights into the types of challenges that participants may encounter. Participants will also learn about various platforms like HackerRank, LeetCode, and many more to gain experience solving coding problems, and how to utilize them for preparation. This session will serve as a prelude to the International coding competition scheduled to take place under the upcoming IEEE Xtreme 18.0 on October 26th. By attending this session, students will gain a better understanding of how to approach competitive coding, network with peers, and prepare themselves to participate in and excel in future competitions.",
    },
    {
      eventName: "DELVING INTO IEEE SIGHT",
      image: "./images/2024/delving-into-ieee-sight/img.png",
      eventDate: "8th May, 2024",
      report: "The SIGHT Technical Group of IEEE SB AJCE conducted an online session \"DELVING INTO IEEE SIGHT” featured an introduction to IEEE SIGHT providing an exploration of its purpose in utilizing technology for humanitarian causes. Our esteemed speaker, Ms. Adithya Rajeev, R&D Team Lead, IEEE Kerala Section shared her valuable expertise in research and development as well as project management. The event was successfully conducted with 71 participants.",
    },
    {
      eventName: "ECLIPSE 3.0",
      image: "./images/2024/eclipse/img.png",
      eventDate: "15th February, 2025",
      report: "On February 15, 2025, IEEE SIGHT SB AJCE organized a one-day camp at Mundiyeruma, Kattappana, with 33 student participants. The event aimed to bridge theory and real-world challenges through household surveys, identifying key issues like limited technology access and resource management. Participants proposed engineering-driven solutions and explored funding opportunities via IEEE HTB SIGHT \"Tech4Good.\" As part of the SIGHT Group Activity Initiative, we utilized $200 to support the camp activities. The camp enhanced problem-solving skills, social responsibility, and innovation, contributing to sustainable development and impactful community solutions.",
    },
    {
      eventName: "CHIP TO CAREERS",
      image: "./images/2024/chip-to-careers/img.png",
      eventDate: "20th August, 2024",
      report: "On 20th August 2024, IEEE SIGHT AJCE, in collaboration with IEEE SIGHT TKMCE, hosted the first session of the \"CHIP TO CAREERS\" series, featuring Rony Alex Thomas, SoC Design Validation Engineer at Intel Corporation. The session covered trends in the semiconductor industry and career guidance. Attendees gained valuable insights through an interactive Q&A session. The event successfully engaged aspiring students.",
    },
    {
      eventName: "RUDHIRAMRITHAM",
      image: "./images/2024/rudhiramritham/img.png",
      eventDate: "23rd August, 2024",
      report: "The IEEE SIGHT SB AJCE, in collaboration with the National Service Scheme (NSS) AJCE, successfully organized a Blood Donation Program that brought together participants from 10 colleges across Kottayam, Alapuzha, and Idukki regions. The event saw great participation, with Kottayam Medical College managing the blood donation process and accommodating up to 120 donors. A dedicated team of 10 NSS volunteers and 4 IEEE volunteers ensured the smooth flow of the event. All volunteers and participants were provided with food. The program was a meaningful success, reflecting a strong sense of community and service.",
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
