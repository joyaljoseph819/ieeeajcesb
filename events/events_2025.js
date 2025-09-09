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
      eventDate: "February, 2025",
      report: "The Annual General Meeting (AGM) for the IEEE SB AJCE 2025 chapter.",
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
      image: "./images/2025/main-sb/idea2025.jpg",
      eventDate: "March, 2025",
      report: "Details about the IDEA 2025 event.",
    },
    {
      chapter: "Main SB",
      eventName: "Precision in Professional Writing",
      image: "./images/2025/main-sb/professional-writing.jpg", 
      eventDate: "April, 2025",
      report: "A workshop focused on developing strong professional writing skills.",
    },
    {
      chapter: "Main SB",
      eventName: "Hack a Habit",
      image: "./images/2025/main-sb/hack-a-habit.jpg", 
      eventDate: "September, 2025",
      report: "An event to help students develop better habits for personal and academic growth.",
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
      image: "./images/2025/cs-chapter/cloud9.jpg", 
      eventDate: "June, 2025",
      report: "A workshop on cloud computing basics, from setup to deployment.",
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

    // // IAS Chapter Events (unchanged)
    // {
    //   chapter: "IAS Chapter",
    //   eventName: "Industry Visit: Smart Factory",
    //   image: "./images/2025/ias-chapter/industry-visit.jpg",
    //   eventDate: "April, 2025",
    //   report: "A field trip to a smart factory to understand the practical applications of industrial automation.",
    // },

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

    // // WIE Group Events (unchanged)
    // {
    //   chapter: "WIE Group",
    //   eventName: "International Women's Day Celebration",
    //   image: "./images/2025/wie-group/iwd.jpg",
    //   eventDate: "March 8, 2025",
    //   report: "An inspiring event celebrating the achievements of women in engineering and technology with guest speakers and awards.",
    // },
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