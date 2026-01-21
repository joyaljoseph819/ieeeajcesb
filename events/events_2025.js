$(document).ready(function () {
  // Use the current year for a dynamic title
  const currentYear = new Date().getFullYear();
  $(".module-title h2").text(`EVENTS ${currentYear}`);
  $(".module-title .font-serif").text(`Events during the year ${currentYear}`);

  let events = [
    // Main SB Events
    {
      chapter: "Main SB",
      eventName: "AGM 2025",
      image: "images/2025/main-sb/agm2025.jpg",
      eventDate: "March 10, 2025",
      report: "The Annual General Meeting (AGM) 2025 was held on March 10, 2025, at Research Square 109. Inaugurated by college officials, the event included an oath-taking ceremony, inspiring speeches on leadership, and a cake-cutting celebration. Annual reports were presented, and outstanding volunteers were recognized. The meeting facilitated a smooth leadership transition with the introduction of the new Executive Committee, setting a motivated tone for the year ahead.",
    },
    {
      chapter: "Main SB",
      eventName: "Farewell",
      image: "./images/2025/main-sb/farewell.jpg",
      eventDate: "May, 2025",
      report: "A farewell event to honor the graduating students of the 2025 batch.",
    },
    {
      chapter: "Main SB",
      eventName: "IDEA 2025",
      image: "./images/2025/main-sb/idea2025.png",
      eventDate: "August 2, 2025",
      report: "The I.D.E.A (Innovate, Design, Execute, Achieve) Ideathon was successfully conducted on August 2nd, fostering creativity among 20 shortlisted teams. Participants from various domains pitched software and hardware solutions to a panel of IEEE Young Professionals. Top teams shared a prize pool of ₹25,000, marking a day of innovation and healthy competition.",
    },
    {
      chapter: "Main SB",
      eventName: "Precision in Professional Writing",
      image: "./images/2025/main-sb/professional-writing.png",
      eventDate: "June 4, 2025",
      report: "Introduced by Chair Josna Clare Jolly, this Google Meet session featured Ms. Ardra Saji focusing on professional event documentation and vTools reporting. She emphasized the importance of accuracy and consistency, sharing valuable tips for maintaining professionalism in IEEE communications. The session also explored collaborative opportunities with the IEEE Kerala Section to maximize impact, concluding as a highly insightful and productive evening for all IEEE SB AJCE Execom members.",
    },
    {
      chapter: "Main SB",
      eventName: "Hack a Habit",
      image: "./images/2025/main-sb/hack-a-habit.jpg",
      eventDate: "September, 2025",
      report: "An event to help students develop better habits for personal and academic growth.",
    },
    {
      chapter: "Main SB",
      eventName: "First Execom Meeting",
      image: "./images/2025/main-sb/execom-first-meet.png",
      eventDate: "July 1, 2025",
      report: "The first Executive Committee (Execom) meeting of the year was held on July 1st, bringing together society chairs and team members. Guest Mr. Ruben Abraham (Chair, IEEE SB AJCE 2021) shared insights on effective branch management. Society chairs outlined future events and strategies, while the design team was recognized for their branding contributions. The meeting concluded as a productive start to the year's journey.",
    },
    {
      chapter: "Main SB",
      eventName: "Virtual Arduino Simulation Workshop",
      image: "./images/2025/main-sb/arduino-workshop/img.png",
      eventDate: "October 18, 2025",
      report: "Held on October 18, 2025, this workshop introduced Arduino basics, spanning history, board components, and programming with the Arduino IDE. Participants engaged in hands-on demonstrations including LED control and sensor interfacing (Ultrasonic, DHT22, etc.). The session concluded with a smart streetlight project simulation using Tinkercad, offering practical insights into embedded systems.",
    },
    {
      chapter: "Main SB",
      eventName: "ROBO-NAV",
      image: "./images/2025/main-sb/robo-nav/img.png",
      eventDate: "October, 2025",
      report: "The IEEE Student Branch successfully conducted ROBO-NAV, a Line Follower Bot competition, as part of AITHRA 2025. Ten teams from across Kerala participated, showcasing innovative designs and precise control of their autonomous robots on a complex track. With a prize pool of ₹15,000, the event provided students with hands-on experience in robotics and automation challenges.",
    },
    {
      chapter: "SSCS Chapter",
      eventName: "SHESPARK",
      image: "./images/2025/sscs-chapter/shespark/img.png",
      eventDate: "August 21, 2025",
      report: "SHESPARK, conducted on August 21st, aimed to ignite a passion for electronics among female students. The event featured an interactive session by Mr. Nijo M Joseph (Asst. Prof, AJCE) fostering community and confidence. This was followed by a hands-on circuit building workshop led by Mr. Deva Prakash (IEEE SSCS Kerala), where 33 students successfully designed and tested their own circuits.",
    },
    {
      chapter: "CS Chapter",
      eventName: "Ctrl+H: Key to Hackathon",
      image: "./images/2025/cs-chapter/ctrl-h/img.png",
      eventDate: "March 24, 2025",
      report: "IEEE CS SB AJCE hosted 'Ctrl+H: Key to Hackathon', a Google Meet session featuring Joel John (SDE Intern @ IBM). Joel introduced the concept of hackathons, used polls for interactivity, and shared insights on teamwork, skill-building, and his own success in the IBM WatsonX Challenge. The talk was inspiring, guiding students on how to leverage hackathons for career growth.",
    },
    {
      chapter: "CS Chapter",
      eventName: "Yours Technically: A Techie’s Love Confession",
      image: "./images/2025/cs-chapter/yours-technically/img.png",
      eventDate: "April 20 - May 11, 2025",
      report: "IEEE CS SB AJCE conducted 'Yours Technically', a creative writing contest where students wrote love letters using technical terms. The two-round event ran from April 20th to May 11th, challenging participants to blend wit and engineering concepts. Winners received cash prizes and certificates, celebrating the poetic side of technology.",
    },
    {
      chapter: "CS Chapter",
      eventName: "Emerging Tech Alert",
      image: "./images/2025/cs-chapter/tech-alert/img.png",
      eventDate: "June, 2025",
      report: "The June edition of 'Emerging Tech Alert' spotlighted Neuralink, Elon Musk’s BCI company, and its first human brain implant. The series introduced students to cutting-edge innovations like direct neural communication, sparking discussions on the medical applications and ethical dimensions of such transformative technologies, reinforcing the club's commitment to nurturing a future-ready mindset.",
    },

    // CS Chapter Events
    // {
    //   chapter: "CS Chapter",
    //   eventName: "Beyond Borders: Cracking M.Tech Abroad",
    //   image: "./images/2025/cs-chapter/bugs-to-bucks.jpg", // Placeholder path original was incorrect beyond-borders.jpg
    //   eventDate: "June, 2025",
    //   report: "A session offering guidance for students aspiring to pursue M.Tech degrees abroad.",
    // },
    {
      chapter: "CS Chapter",
      eventName: "Bugs to Bucks",
      image: "./images/2025/cs-chapter/bugs-to-bucks.jpg",
      eventDate: "June, 2025",
      report: "An event focused on bug bounty hunting and ethical hacking.",
    },
    {
      chapter: "CS Chapter",
      eventName: "Cloud 9: From Zero to Deployment",
      image: "./images/2025/cs-chapter/cloud9.png",
      eventDate: "June 17, 2025",
      report: "Part of the INFORMATYKA 5.0 initiative, this session by Ms. Nayana S (Software Engineer at SADA & 3x Google Cloud Certified) provided a structured roadmap for cloud computing. Attended by over 105 participants, the talk covered essential tools, certifications, and deployment strategies. Ms. Nayana also highlighted the role of IEEE in her career growth, offering practical advice for students to excel in the cloud domain.",
    },
    {
      chapter: "CS Chapter",
      eventName: "Ctrl + Meme",
      image: "./images/2025/cs-chapter/ctrl-meme.jpg",
      eventDate: "June, 2025",
      report: "A lighthearted meme-making competition for a fun and creative break.",
    },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "Did You Know?",
    //   image: "./images/2025/cs-chapter/ctrl-meme.jpg", // Placeholder path original was incorrect did-you-know.jpg
    //   eventDate: "June, 2025",
    //   report: "A tech trivia event to test knowledge of interesting facts in computer science.",
    // },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "Emerging Tech Alert",
    //   image: "./images/2025/cs-chapter/tech-alert.jpg", // Placeholder path no image!
    //   eventDate: "June, 2025",
    //   report: "A seminar on the latest and most promising emerging technologies in the industry.",
    // },
    {
      chapter: "CS Chapter",
      eventName: "Guess_the_mess()",
      image: "./images/2025/cs-chapter/guess-the-mess.jpg",
      eventDate: "June, 2025",
      report: "A fun debugging challenge to find and fix errors in code snippets.",
    },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "IEEE × Code: Hello World → Global Voice",
    //   image: "./images/2025/cs-chapter/hello-world.jpg", // Placeholder path no image!
    //   eventDate: "June, 2025",
    //   report: "An introductory coding workshop aimed at beginners, connecting coding with global impact.",
    // },
    {
      chapter: "CS Chapter",
      eventName: "120 WPM: Ctrl the Clock",
      image: "./images/2025/cs-chapter/120wpm-ctrl-clock.jpg",
      eventDate: "July, 2025",
      report: "The first part of a typing speed and accuracy challenge for keyboard enthusiasts.",
    },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "120 WPM: The Final Strike",
    //   image: "./images/2025/cs-chapter/120wpm-final-strike.jpg", // Placeholder path no image!
    //   eventDate: "July, 2025",
    //   report: "The final round of the typing competition, where speed and precision are put to the ultimate test.",
    // },
    {
      chapter: "CS Chapter",
      eventName: "Command the Room: Beyond the Résumé",
      image: "./images/2025/cs-chapter/command-the-room.jpg",
      eventDate: "July, 2025",
      report: "A soft skills workshop focused on presentation, communication, and interview techniques.",
    },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "Councilium Imperium: CS Execom Meet July 2025",
    //   image: "./images/2025/cs-chapter/execom-meet-july.jpg", // Placeholder path no image!
    //   eventDate: "July, 2025",
    //   report: "A dedicated meeting for the Computer Society Execom members to plan and strategize upcoming events.",
    // },
    {
      chapter: "CS Chapter",
      eventName: "From Dark Web to Dream Job",
      image: "./images/2025/cs-chapter/dark-web-dream-job.jpg",
      eventDate: "July, 2025",
      report: "An expert talk on cybersecurity and how skills from the field can lead to a successful career.",
    },
    // {
    //   chapter: "CS Chapter",
    //   eventName: "Trust Issues: Cybersecurity Beyond the Code",
    //   image: "./images/2025/cs-chapter/trust-issues.jpg", // Placeholder path no image!
    //   eventDate: "August, 2025",
    //   report: "A deep dive into the human element of cybersecurity and social engineering.",
    // },

    // IAS Chapter Events
    {
      chapter: "IAS Chapter",
      eventName: "Beyond the Stars: An Indian Space Odyssey",
      image: "./images/2025/ias-chapter/beyond-the-stars.png",
      eventDate: "July 16, 2025",
      report: "This virtual session, led by Mr. Rojan Mathew (Scientist/Engineer at VSSC), explored the historical evolution and future goals of India's space program. The talk covered ISRO's landmark achievements, current projects, and emerging technologies in aerospace engineering. A key highlight was the guidance on career pathways at ISRO, offering BTech students practical advice on qualifications and preparation strategies for the space sector.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "Career Launchpad: Job Interviews & Public Speaking Mastery",
      image: "./images/2025/ias-chapter/career-launchpad.png",
      eventDate: "August 5, 2025",
      report: "Led by Mr. Nijo M Joseph, a faculty member with extensive HR experience, this workshop focused on mastering job interviews and public speaking. The session provided students with real-world recruitment insights, covering techniques to manage stage fear, structure ideas, and answer common interview questions effectively. The interactive discussion helped participants build confidence and communication skills essential for campus placements and professional growth.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "WINGS WITHOUT PILOTS: Entering the UAV Era",
      image: "./images/2025/ias-chapter/wings-without-pilots.png",
      eventDate: "August 28, 2025",
      report: "Hosted in collaboration with IEEE SB AJCE and other student branches, this virtual session explored the evolving world of Unmanned Aerial Vehicles (UAVs). Leading student innovators from AROHA Drone Club, CUSAT, shared expertise on drone types, historical development, and practical applications in sectors like disaster management and agriculture. The session also delved into technical advancements in sensors and autonomous navigation, concluding with an engaging Q&A.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "IGNITE: Membership Development (MD) Session",
      image: "./images/2025/ias-chapter/ignite-membership.png",
      eventDate: "August 23, 2025",
      report: "Organized collaboratively by IEEE SB AJCE, MACE, and CUSAT, this session aimed to inspire students about the benefits of IEEE membership and volunteering. Speakers Sivapriya Sivadasan and Aleena Mathews shared their personal journeys, highlighting how IEEE involvement builds leadership, networking, and technical skills. The interactive discussion covered grants and professional growth opportunities, motivating 55 attendees to take active roles within IEEE societies.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "TECHNOQUEST Quiz Competition",
      image: "./images/2025/ias-chapter/technoquest.png",
      eventDate: "August 30, 2025",
      report: "TECHNOQUEST, a collaborative quiz competition by IEEE SB AJCE, MACE, and CUSAT, engaged over 100 participants in challenging rounds like \"Tech Logo Quiz\" and \"Guess the Gadget.\" The event rewarded both speed and accuracy, fostering a thrilling and competitive atmosphere on the Wayround platform. This initiative highlighted the collective spirit of Cluster 10 student branches in promoting intellectual growth and teamwork within the IEEE community.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "SkillSprint 2025: Chess Mastery - Like a Grandmaster",
      image: "./images/2025/ias-chapter/chess-mastery.png",
      eventDate: "September 29, 2025",
      report: "As the inaugural session of SkillSprint 2025, this workshop led by Aby Mathew (S3 IT) introduced chess as a strategic tool for decision-making. Participants explored fundamental opening strategies, piece coordination, and foresight while discovering parallels between chess and real-life problem-solving. The interactive session combined theory with live game analysis, effectively setting a tone of engaging and impactful learning for the series.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "SkillSprint 2025: The Art of Asking AI",
      image: "./images/2025/ias-chapter/art-of-asking-ai.png",
      eventDate: "October 3, 2025",
      report: "In the second workshop of SkillSprint 2025, Abel Biju George introduced the field of prompt engineering, teaching students how to communicate effectively with AI systems. The session covered various prompt styles—including role-based and step-by-step instructions—and demonstrated their practical use in academics, coding, and creative workflows. By emphasizing productivity and ethical usage, the workshop equipped participants with essential skills for an AI-driven technological landscape.",
    },
    {
      chapter: "IAS Chapter",
      eventName: "SkillSprint 2025: UI/UX Unlocked (Figma Basics)",
      image: "./images/2025/ias-chapter/uiux-unlocked.png",
      eventDate: "October 7, 2025",
      report: "Conducted by Niveditha K Narayanan (S3 AD), the third workshop of SkillSprint 2025 introduced participants to the fundamentals of UI/UX design. The session covered core concepts such as user-centered design, color theory, and visual hierarchy, using real-world examples to distinguish between effective and poor design practices. Through a hands-on interface redesign activity, attendees gained practical insights into design tools and creative problem-solving in the digital product landscape.",
    },



    // // PES Chapter Events (unchanged)
    // {
    //   chapter: "PES Chapter",
    //   eventName: "Sustainable Power Grids",
    //   image: "./images/2025/pes-chapter/power-grids.jpg",
    //   eventDate: "February, 2025",
    //   report: "A seminar on the challenges and future of integrating renewable energy into existing power grids.",
    // },

    // // SIGHT Group Events (unchanged)
    // {
    //   chapter: "SIGHT Group",
    //   eventName: "Tech for Social Good Hackathon",
    //   image: "./images/2025/sight-group/hackathon.jpg",
    //   eventDate: "June, 2025",
    //   report: "A hackathon dedicated to creating technological solutions for community and humanitarian problems.",
    // },

    // // SSCS Chapter Events (unchanged)
    // {
    //   chapter: "SSCS Chapter",
    //   eventName: "VLSI Design Fundamentals",
    //   image: "./images/2025/sscs-chapter/vlsidesign.jpg",
    //   eventDate: "September, 2025",
    //   report: "A foundational workshop on Very-Large-Scale Integration (VLSI) for electronics students.",
    // },

    // WIE Group Events (unchanged)
    {
      chapter: "WIE Group",
      eventName: "Pixel Perfect: UI/UX Workshop on Figma",
      image: "./images/2025/wie-group/pixel-perfect.png",
      eventDate: "March 19, 2025",
      report: "Led by Abel Biju George, this interactive workshop introduced participants to core UI/UX principles and hands-on design using Figma. The session covered user-centric design concepts and included a live demonstration of building a sample app interface. Emphasizing accessibility, the event concluded with a Q&A session, providing students with practical, real-world design skills.",
    },
    {
      chapter: "WIE Group",
      eventName: "She Rides, She Leads",
      image: "./images/2025/wie-group/she-rides.png",
      eventDate: "March 8, 2025",
      report: "Starting from Amal Jyothi College, this drug-awareness rally covered campus and surrounding areas with participants advocating for a drug-free society. The event featured inspiring speeches from faculty and the Women’s Cell on the dangers of substance abuse. Recognizing extraordinary women with mementos, the session concluded with a symbolic balloon release, marking a collective commitment to a healthy, drug-free future.",
    },
    {
      chapter: "WIE Group",
      eventName: "The Firewalled Garden",
      image: "./images/2025/wie-group/firewalled-garden.png",
      eventDate: "June 25 - July 5, 2025",
      report: "Launched as part of IEEE WIE Day 2025 celebrations, this poster designing competition themed \"Pioneering Safe Cyberspace\" aimed to raise awareness about cybersecurity. Participants created visual stories representing how technology and vigilance work hand-in-hand for digital security. The event concluded with the recognition of an outstanding design for its aesthetic clarity and alignment with the goal of securing cyberspace.",
    },
    {
      chapter: "WIE Group",
      eventName: "Nilavillakku: Illuminating Self-Reliance",
      image: "./images/2025/wie-group/nilavillakku.png",
      eventDate: "October 24, 2025",
      report: "Dedicated to fostering women’s empowerment, this \"Women for Women\" series event involved Kudumbashree women in hands-on technical and sustainable learning. Participants engaged in eco-brick making, followed by practical sessions on electrical safety and appliance repair. A key highlight was a workshop where attendees built their own Mini Emergency LED Lamps, symbolizing self-reliance and boosting confidence in technical skills.",
    }
  ];

  // Group events by chapter
  const groupedEvents = events.reduce((acc, event) => {
    (acc[event.chapter] = acc[event.chapter] || []).push(event);
    return acc;
  }, {});

  // Clear existing cards (if any)
  $(".event-cards").empty();

  // Dynamically create sections for each chapter
  for (const chapter in groupedEvents) {
    if (groupedEvents.hasOwnProperty(chapter)) {
      const chapterEvents = groupedEvents[chapter];

      // Create a heading for the chapter
      $(".event-cards").append(`<h3 class="chapter-heading">${chapter}</h3>`);

      // Loop through events for the current chapter
      chapterEvents.forEach((event) => {
        $(".event-cards").append(
          `<div class="card border-dark mb-3 rounded event-card-item">
            <div class="row no-gutters">
              <div class="col-md-4">
                <a class="venobox" href="${event.image}"><img src="${event.image}" alt="${event.eventName} image" class="card-img card-img-class "/></a>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${event.eventName}</h5>
                  <p class="card-text my-0"><small class="text-muted">${event.eventDate} </small></p>
                  <p class="card-text">${event.report}</p>
                </div>
              </div>
            </div>
          </div>`
        );
      });
    }
  }

  $(".venobox").venobox({});
});