$(document).ready(function () {
  let events = [
    {
      eventName: "Talk on XTREME 16.0",
      image: "./images/2022/xtreme/img.jpeg",
      eventDate: "1 October , 2022",
      report: "Join us for an exhilarating talk on IEEEXtreme 16.0! IEEEXtreme is a global competition that challenges teams of IEEE Student and Graduate Student members, guided by IEEE Members, to tackle a series of programming tasks within a 24-hour timeframe. Dive into the world of intense problem-solving and camaraderie as participants from around the globe showcase their programming prowess in this thrilling event.",
    },
    {
      eventName: "Distinguished Visitors Talk",
      image: "./images/2022/visitors_talk/img.jpeg",
      eventDate: "4 October , 2022",
      report: "Delve into the realms of Functional Safety and Soft Error Rate Modeling for Deep Learning Applications with Jyotika Athavale, President-Elect of the IEEE Computer Society and Functional Safety Architecture expert at NVIDIA. Uncover insights at the intersection of computer science and safety-critical systems.",
    },
    {
      eventName: "OpenCV Workshop",
      image: "./images/2022/opencv/img.jpeg",
      eventDate: "5 October , 2022",
      report: "Unlock the mysteries of image analysis and coding with Abhijith Benny, STEM PROJECT Co-lead, in the engaging  OpenCV Workshop using Python  presented as part of IEEE DAY 2022 by WiE IEEE SB AJCE. Explore the power of Open-Source Computer Vision Library for image and video analysis—an event that brought together computer geeks and coding enthusiasts alike.",
    },
    {
      eventName: "Career in Semiconductor Industry",
      image: "./images/2022/semiconductor/img.jpeg",
      eventDate: "6 October , 2022",
      report: "Embark on a journey into the world of possibilities with our insightful talk on - Career in Semiconductor Industry Join us as we explore the dynamic landscape of the semiconductor field, discussing career paths, opportunities, and the evolving technology trends that shape this industry. Whether you're a student considering your career options or a professional seeking new horizons, this talk aims to provide valuable insights and guidance for navigating a successful career in the semiconductor sector.",
    },
    {
      eventName: "Exit: Basic Safety Measures",
      image: "./images/2022/exit/img.jpeg",
      eventDate: "7 October , 2022",
      report: "Embark on a journey into safety awareness with the captivating  event presented by IEEE SB AJCE in collaboration with SIGHT OU. Led by the Fire and Rescue Department Kanjirappally, this interactive session delved into essential Basic Safety Measures, equipping participants with knowledge to identify potential hazards in various aspects of life and fostering a culture of safety for themselves and others."
    },
    
    {
      eventName: "QuaRunTime 3.0",
      image: "./images/2022/qrt3.0/img.jpeg",
      eventDate: "27-31 October , 2022",
      report: "In a triumphant return, the IEEE Computer Society Student Branch Chapter of Amal Jyothi College of Engineering proudly presents the third edition of its flagship event, QuaRunTime 3.0. Recognized with The Darrel Chong Student Activity Award 2022 - Bronze, this past event invited participants to engage their sharp minds and rapid fingers in a challenging competition, exploring diverse technological facets across multiple levels of competition.",
    },
    {
      eventName: "Gear up : Importance of Professional Bodies ",
      image: "./images/2022/gearup_imp_of_prof_bodies/img.jpeg",
      eventDate: "15 November , 2022",
      report: "Embark on a series of enlightening talk sessions and workshops covering diverse technical and non-technical facets of engineering. Our inaugural event features an interactive and enlightening talk session on the Importance of Professional Bodies. Delivered by Shone Jose, Vice Chair of the Student Activities Committee, IEEE Kerala Section, this session provides valuable insights into the significance of professional bodies in the engineering landscape. "
    },
    {
      eventName: "Gear up : Computer Science - Go Beyond Coding ",
      image: "./images/2022/gearup_go_beyond/img.jpeg",
      eventDate: "17 November , 2022",
      report: "Dive into the world beyond coding with the IEEE Computer Society Chapter of Amal Jyothi College of Engineering. As part of Gear Up with IEEE SB AJCE, join an interactive session on skillfully guided by Jayakrishna V, Assistant Professor in the Department of CSE at AJCE. Unlock insights and explore the broader dimensions of computer science in this enlightening event"
    },
    {
      eventName: "QuaRunTime 3.0 Finals",
      image: "./images/2022/qrt_finals/img.jpeg",
      eventDate: "19 November , 2022",
      report: "Embark on the ultimate challenge as QuaRunTime 3.0 Finals arrive! Hosted by the IEEE Computer Society Chapter of Amal Jyothi College of Engineering, in collaboration with Arcane Society and Mystiko-CTF, it's time for the thrilling Capture The Flag competition. Engage in a battle of wits and skills in this exciting event where cybersecurity prowess takes center stage.",
    },
    {
      eventName: "Gear up : Stand Out ",
      image: "./images/2022/gearup_standout/img.jpeg",
      eventDate: "19 November , 2022",
      report: "Elevate your professional prowess with the 3rd event, STAND OUT presented by IEEE SB AJCE as part of Gear Up. Join an interactive session featuring resume building insights, personal interview training, and group discussion tips, skillfully guided by Antony Varkey, QA Analyst at EveryPoint. Arm yourself with essential skills to make a lasting impression in your career journey."
    },
    {
      eventName: "NFT and CRYPTO CURRENCY",
      image: "./images/2022/nft_crypto/img.jpeg",
      eventDate: "20 November , 2022",
      report: "Delve into the fascinating world of Cryptocurrency through an engaging YP talk by Hemang Mohan, Associate Software Engineer at Tech Mahindra, presented by the IEEE Computer Society Chapter of Amal Jyothi College of Engineering. Gain insights into the innovative realm of digital assets, exploring the security features of  NFT and cryptography that underpin decentralized currencies like Bitcoin and Ethereum."
    },
    {
      eventName: "Raksha",
      image: "./images/2022/raksha/img.jpeg",
      eventDate: "21-22 November , 2022",
      report: "Empower yourself with RAKSHA -  a self-defense workshop presented by the WiE Affinity group of IEEE SB AJCE in collaboration with the Women Development Cell AJCE. This workshop, conducted by the Kerala Police Department, aims to boost self-confidence and equip students with the skills to defend themselves in challenging situations. Join us for an empowering session dedicated to personal safety and well-being."
    },
    {
      eventName: "Gear up : PCB Workshop",
      image: "./images/2022/gearup_pcb/img.jpeg",
      eventDate: "22-23 November , 2022",
      report: "Unlock the secrets of Printed Circuit Boards (PCBs) with the IAS Society Chapter of IEEE AJCE! Don't worry if you haven't heard much about it – we've got your back! Join our informative session where we demystify the world of PCBs, providing insights into these essential components of electronic devices.",
    },
    {
      eventName: "Gear up : Computer Vision",
      image: "./images/2022/gearup_cv/img.jpeg",
      eventDate: "24 November , 2022",
      report: "Dive into the forefront of Computer Vision and explore how computers perceive the world! As part of Gear Up, the WiE Affinity group of IEEE SB AJCE is hosting a workshop on Computer Vision, offering insights into its cutting-edge applications in our daily lives. Join us for an enlightening session with speaker Prathyash J Binu to gain a deeper understanding of this transformative technology. ",
    },
    {
      eventName: "Eclipse",
      image: "./images/2022/eclipse/img.jpeg",
      eventDate: "26 November , 2022",
      report: "Embrace the excitement as the SIGHT group of IEEE SB AJCE eagerly presents , ECLIPSE – a camp designed to explore leadership, teamwork, and the strength of cultural values through engaging and fun activities. Join us for an immersive experience where camaraderie meets adventure, promising memorable interactions and shared enjoyment."
    },
    {
      eventName: "Gear up : Interactive Session",
      image: "./images/2022/gearup_ai/img.jpeg",
      eventDate: "28 November , 2022",
      report: "Unravel the mysteries of open-sourcing, explore FOSS, and delve into the intricacies of the stock market with IEEE SB AJCE! Join us for an interactive session on Open Source and Artificial Intelligence in hybrid mode, led by Mr. Kailash Nadh, CTO at Zerodha, India's largest Stock Broker. Don't miss this opportunity to discover the magic these platforms bring to projects and the latest innovations in these dynamic fields.",
    },
    {
      eventName: "Tech Talk : Python",
      image: "./images/2022/techtalk_python/img.jpeg",
      eventDate: "30 November , 2022",
      report: "Dive into the world of Python with our engaging Tech Talk! Whether you're a seasoned developer or just starting, join us for an exploration of the versatile programming language. From its elegant syntax to its extensive libraries, we'll delve into the power of Python and its applications across various domains. Get ready to unravel the capabilities of this language and discover how Python continues to shape the landscape of technology.",
    },
    {
      eventName: "Lend a hand",
      image: "./images/2022/lend_a_hand/img.jpeg",
      eventDate: "2 December , 2022",
      report: "Attention programming enthusiasts! 🚀 The Computer Society Chapter of IEEE SB AJCE, in collaboration with the WIE affinity group, presents - Lend a Hand a predict the output competition! Whether you're a seasoned C programmer or looking to test your skills, join us for this thrilling challenge where observation, adaptability, and strategic planning pave the way to predicting and creating the future. ",
    },
    {
      eventName: "Gear up : Introduction to VHDL ",
      image: "./images/2022/gearup_vhdl/img.jpeg",
      eventDate: "2 December , 2022",
      report: "Unlock the realm of hardware description languages and delve into the intricacies of digital design verification with IEEE SB AJCE! In collaboration with IEEE Solid-State Circuits Society and the WiE Affinity group, we proudly present Introduction to Verilog - a session that explores the basics of design languages and their applications. Don't miss the chance to learn from Agi Joseph George, Assistant Professor in the Department of ECE. Join us for an enlightening journey into Verilog!",
    },
    {
      eventName: "Game on",
      image: "./images/2022/game_on/img.jpeg",
      eventDate: "19 December , 2022",
      report: "no description available at this moment.",
    },
    {
      eventName: "Gear up : Project Development from necessity",
      image: "./images/2022/gearup_proj_developmnt/img.jpeg",
      eventDate: "19 December , 2022",
      report: "Join us for an exciting session in the Gear Up series: Project Development from Necessity - Explore the journey of transforming needs into innovative solutions through project development. Whether you're a student, developer, or technology enthusiast, discover the strategies and insights that drive successful projects born out of necessity. Don't miss the chance to gain valuable knowledge and inspiration for your own project endeavors.",
    },
    
    {
      eventName: "Gear up : Blockchain",
      image: "./images/2022/gearup_blockchain/img.jpeg",
      eventDate: "21 December , 2022",
      report: "Uncover the mysteries of the leading platform for digital assets with IEEE SB AJCE! Proudly presenting a talk show on Blockchain - this session is your gateway to understanding the intricacies of this revolutionary technology. Don't miss the opportunity to learn from Vyasan J, an esteemed alumni of the Kerala Blockchain Academy, and explore the best-known possibilities of blockchain.",
    },
    
    {
      eventName: "Gear up : The 'Job equation' ",
      image: "./images/2022/gearup_job_equation/img.jpeg",
      eventDate: "21 December , 2022",
      report: "Navigate the post-BTech career maze with IEEE SB AJCE! Join our talk session under the Gear Up series . Gain insights from Nijo M Joseph, Assistant Professor, as he guides you through the equation for a prosperous career path. Don't miss this opportunity to unravel the formula for success!",
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
