$(document).ready(function () {
  let events = [
    {
      eventName: "zero to one",
      image: "./images/2023/0-to-1/img.jpg",
      eventDate: "19th April, 2023",
      report: "The workshop on Utilization of Plastic Waste for Indoor Applications, led by S N Kumar of AJCE's EEE Department, delved into pioneering research and innovations in repurposing plastic waste. The event provided a platform for a comprehensive exploration of sustainable solutions, addressing environmental challenges and optimizing resources. Attendees actively participated in a meaningful dialogue, showcasing the latest advancements in transforming plastic waste into valuable assets for indoor use. This workshop, spearheaded by S N Kumar, played a pivotal role in driving forward sustainable practices and contributing to a more eco-friendly future.",
    },
    {
      eventName: "108",
      image: "./images/2023/108/img.jpg",
      eventDate: "26th September, 2023",
      report: "BLS Sentinal Training workshop organized by IEEE SB AJCE SIGHT Team ",
    },
    {
      eventName: "AGM 2023",
      image: "./images/2023/agm23/img.jpg",
      eventDate: "February, 2023",
      report: "The Annual General Meeting (AGM) conducted by the IEEE Student Branch at AJCE was a momentous event, bringing together members for a comprehensive review and planning session. Led by the dedicated team, the AGM highlighted key achievements, challenges, and future plans for the IEEE SB AJCE. Attendees actively participated in discussions on various initiatives and collaborative projects, fostering a sense of community and shared purpose. The AGM served as a valuable platform for members to engage with the IEEE community, contributing ideas and shaping the future trajectory of the IEEE Student Branch at AJCE.",
    },
    {
      eventName: "Agree to Disagree",
      image: "./images/2023/agree-2-disagree/img.jpg",
      eventDate: "9th March, 2023",
      report: "The WIE IEEE SB AJCE organized a thought-provoking debate titled \"Agree to Disagree.\" This event brought participants from diverse backgrounds to engage in constructive discussions, encouraging open-mindedness and tolerance. The format allowed for the exploration of various viewpoints on contentious topics, fostering public speaking and critical thinking skills. \"Agree to Disagree\" successfully created an inclusive platform for the exchange of ideas, contributing to a vibrant intellectual atmosphere within the IEEE community at AJCE.",
    },
    {
      eventName: "AICERA'23",
      image: "./images/2023/aicera/img.jpg",
      eventDate: "16th - 18th November, 2023",
      report: "AICERA-2023 : INTERNATIONAL CONFERENCE ON INTELLIGENT SYSTEMS (ICIS 2023). Amal Jyothi College of Engineering, Kanjirapally in collaboration with IEEE SB AJCE has been organizing a series of International conferences AICERA (Annual International Conference on Emerging Research Areas) since 2011. Speciﬁc conferences are held under the parent AICERA umbrella, the theme varying every year.",
    },
    {
      eventName: "AR Workshop",
      image: "./images/2023/ar-workshop/img.jpg",
      eventDate: "18th October, 2023",
      report: "The Augmented Reality (AR) Workshop, conducted by Salih Yoosaf and organized by IEEE SB AJCE in collaboration with IEEE SB MLMCE, was a transformative event that delved into the realm of emerging AR technologies. The workshop served as a comprehensive exploration of the latest advancements in AR, highlighting its diverse applications and potential impact on various industries. Participants gained insights into cutting-edge AR technologies through practical demonstrations and hands-on sessions. The workshop successfully provided a platform for attendees to deepen their understanding of AR's significance and applications, fostering a greater appreciation for this rapidly evolving field within the IEEE community.",
    },
    {
      eventName: "Asvasya",
      image: "./images/2023/asvasya/img.jpg",
      eventDate: "8th March, 2023",
      report: "\"Asvasya,\" a special event conducted on Women's Day by Computer Society IEEE SB AJCE, WIE IEEE SB AJCE, and Women Development Cell AJCE, was dedicated to empowering working women through technological familiarization. Focused on bridging the tech awareness gap, the event provided a platform for women to explore and understand emerging technologies. Through interactive sessions and hands-on experiences, \"Asvasya\" aimed to equip working women with the knowledge and confidence to navigate the ever-evolving tech landscape, fostering inclusivity and empowerment in the professional realm.",
    },
    {
      eventName: "Byteboost",
      image: "./images/2023/byteboost/img.jpg",
      eventDate: "20th May, 2023",
      report: "\"ByteBoost,\" an exclusive membership development session for IEEE, was skillfully conducted by Joel John, the former chair of IEEE SB AJCE. This session, designed to enhance the IEEE community, focused on nurturing member engagement and fostering a sense of belonging. Leveraging Joel John's expertise, ByteBoost provided valuable insights into IEEE's offerings, benefits, and opportunities for professional and personal growth. Participants gained a deeper understanding of the IEEE community and were inspired to actively contribute to its development. ByteBoost exemplified Joel John's commitment to empowering IEEE members and strengthening the fabric of the IEEE community.",
    },
    {
      eventName: "Cipher",
      image: "./images/2023/cipher/img.jpg",
      eventDate: "3rd April",
      report: "\"Cipher,\" the science puzzle-solving day organized by WIE IEEE SB AJCE, proved to be a thrilling and intellectually stimulating event. Participants engaged in a series of captivating science puzzles that tested their problem-solving skills and scientific knowledge. The event fostered teamwork and encouraged participants to think critically in a fun and competitive environment. \"Cipher\" not only provided a platform for enthusiasts to showcase their scientific acumen but also promoted a sense of camaraderie among participants. The event was a resounding success, leaving attendees with a sense of accomplishment and a deeper appreciation for the intriguing world of science puzzles.",
    },
    {
      eventName: "Code Clash",
      image: "./images/2023/code-clash/img.jpg",
      eventDate: "16th May, 2023",
      report: "\"CodeClash,\" a riveting talk on competitive coding by Zameel Hassan, was an insightful exploration into the world of algorithmic challenges. Hassan, with his expertise, delved into effective coding strategies, tips, and tricks to excel in competitive programming. Participants gained valuable insights, enhancing their problem-solving skills and approach to coding competitions. \"CodeClash\" left attendees inspired and equipped with practical knowledge, fostering a culture of competitive coding within the IEEE community at AJCE.",
    },
    {
      eventName: "Engineering Marvels",
      image: "./images/2023/engineering-marvels/img.jpg",
      eventDate: "28th May, 2023",
      report: "The \"Engineering Marvels\" photography contest captivated the essence of innovation and creativity within the IEEE community. Participants showcased their artistic prowess by capturing stunning visuals of various engineering marvels. From architectural wonders to technological masterpieces, the submissions reflected the diverse facets of engineering excellence. The contest not only celebrated the aesthetic appeal of these marvels but also highlighted the vital role of engineering in shaping our world. The judging process was both challenging and inspiring, as each photograph encapsulated the spirit of ingenuity. \"Engineering Marvels\" successfully united the lens of the photographer with the brilliance of engineering, creating a visual tapestry that resonated with the IEEE community's passion for technology and aesthetics.",
    },
    {
      eventName: "Entrepreneurial Engineering",
      image: "./images/2023/entrepreneurial-engineering/img.jpg",
      eventDate: "20th April, 2023",
      report: "The Entrepreneurial Engineering Event conducted by Jaison Thomas for students was a dynamic and inspiring gathering that aimed to cultivate an entrepreneurial mindset among participants. Through engaging talks, interactive workshops, and insights from successful entrepreneurs, attendees gained valuable knowledge about the principles of starting and managing a business. The event fostered creativity, innovation, and provided a platform for networking and idea exchange. Students left with a heightened understanding of entrepreneurship, equipped with practical insights to embark on their entrepreneurial journeys. The event successfully ignited a spark of entrepreneurial spirit among the student community.",
    },
    {
      eventName: "Eventure",
      image: "./images/2023/eventure/img.jpg",
      eventDate: "19th - 20th August, 2023",
      report: "EVenture is a 2-day technical conclave organized by the Industry Applications Society Chapter of IEEE SB AJCE in collaboration with IEEE IA/IE/PELS Jt. Chapter Kerala. The conclave brings together electric vehicle enthusiasts, industry experts, and students to discuss and learn about the latest trends and innovations in the electric vehicle industry. The event  featured a range of activities and programs designed to educate and engage attendees, including a panel discussion, EV Entrepreneurship Pitch Competition, Keynote Speech/EV Showcase, Treasure Hunt Game, Cultural Events, Network Session, Basic Workshop for School Students, JAM(Just a Minute), Workshop on EV Battery Design Using MATLAB and EVTechnologies.",
    },
    {
      eventName: "Fusion 360",
      image: "./images/2023/fusion-360/img.jpg",
      eventDate: "7th October, 2023",
      report: "The Fusion 360 workshop, led by Prof. Rony Scaria, was a comprehensive exploration of the powerful design and engineering tool. Participants were guided through hands-on sessions, learning the intricacies of Fusion 360's capabilities. Prof. Scaria shared practical insights into 3D modeling, simulation, and collaborative design processes, making the workshop invaluable for students and professionals alike. The interactive nature of the workshop allowed attendees to grasp the nuances of Fusion 360, empowering them to apply this knowledge to real-world design challenges. Prof. Rony Scaria's expertise and engaging teaching style made the workshop a resounding success, leaving participants equipped with a valuable skill set for modern design and engineering practices.",
    },
    {
      eventName: "Greenovation",
      image: "./images/2023/greenovation/img.png",
      eventDate: "26th April, 2023",
      report: "The \"GREENOVATURE\" Ideathon on Powering a Climate Change Safer Future was a dynamic and impactful event that brought together innovative minds to tackle pressing environmental challenges. Participants engaged in collaborative brainstorming sessions, proposing creative and sustainable solutions to address the adverse effects of climate change. The event fostered a spirit of entrepreneurship and environmental stewardship, inspiring teams to develop actionable ideas that could contribute to a greener and safer future. The Ideathon successfully combined passion for climate action with innovative thinking, creating a platform where participants could envision and present concrete steps towards mitigating the impact of climate change.",
    },
    {
      eventName: "Inspiration",
      image: "./images/2023/inspiration/img.png",
      eventDate: "12th May, 2023",
      report: "The \"Inspiron\" membership development session was a focused and enlightening event organized by IEEE. Geared towards fostering growth and engagement within the IEEE community, Inspiron aimed to empower members with the tools and insights necessary for personal and professional development. The session featured discussions on IEEE's diverse offerings, benefits, and opportunities for networking and skill enhancement. Through interactive sessions and guidance, participants gained a deeper understanding of the IEEE community and its potential impact on their career trajectories. Inspiron effectively underscored the value of IEEE membership, inspiring attendees to actively contribute to and benefit from the IEEE network.",
    },
    {
      eventName: "KHM 2023",
      image: "./images/2023/khm/img.jpg",
      eventDate: "19th November, 2023",
      report: "We hosted Kochi Hub Meet 2023 (KHM'23) a 1-day annual flagship event organized by IEEE Kochi Hub. It serves as a dynamic platform for student branches within the hub to connect, collaborate, and exchange ideas in the ever-evolving field of technology. KHM'23 stands as a beacon of innovation, collaboration, and knowledge-sharing in the vibrant landscape of technology.",
    },
    {
      eventName: "Matlab Workshop",
      image: "./images/2023/matlab/img.jpg",
      eventDate: "30th April",
      report: "The \"Introduction to MATLAB\" workshop, conducted by Dr. Jisha Kuruvilla, was a highly informative and practical session that provided participants with a solid foundation in MATLAB programming. Dr. Kuruvilla, with her expertise, guided attendees through essential concepts and hands-on exercises, ensuring a comprehensive understanding of MATLAB's capabilities. The workshop covered topics such as data visualization, programming basics, and application in engineering and scientific domains. Attendees appreciated the interactive nature of the session, enabling them to apply MATLAB skills in real-world scenarios. Dr. Jisha Kuruvilla's engaging teaching style made the workshop both accessible and beneficial, leaving participants well-equipped with valuable MATLAB knowledge for their academic and professional pursuits.",
    },
    {
      eventName: "Prompt Engineering",
      image: "./images/2023/prompt-engineering/img.jpg",
      eventDate: "29th July, 2023",
      report: "The Prompt Engineering Workshop led by Karthik K was an insightful and hands-on session that delved into the nuances of prompt engineering. Participants were guided through practical exercises and discussions, exploring the intricacies of creating effective and prompt responses in various engineering scenarios. Karthik K's expertise and engaging teaching style made the workshop both informative and interactive. Attendees gained valuable insights into crafting efficient and prompt engineering solutions, enhancing their problem-solving skills. The session successfully equipped participants with practical knowledge that could be applied to real-world engineering challenges, making it a valuable experience for all involved.",
    },
    {
      eventName: "Quantum Quest",
      image: "./images/2023/quantum-quest/img.jpg",
      eventDate: "28th March, 2023",
      report: "\"Quantum Quest,\" the puzzle-solving event, proved to be an intellectually stimulating and engaging challenge for participants. The event, designed to test problem-solving skills in the realm of quantum concepts, attracted enthusiasts eager to navigate the intricacies of quantum puzzles. Attendees were presented with thought-provoking challenges that required a deep understanding of quantum principles. The competitive yet collaborative atmosphere fostered teamwork and critical thinking. \"Quantum Quest\" successfully blended the excitement of puzzle-solving with the intriguing world of quantum mechanics, leaving participants with a heightened appreciation for the complexity and beauty of quantum concepts.",
    },
    {
      eventName: "QuaRunTime 4.0",
      image: "./images/2023/quaruntime/img.jpg",
      eventDate: "14th - 23rd September, 2023",
      report: "QuaRunTime is proudly hosted by the Computer Society Chapter of IEEE SB AJCE. Last year marked the triumphant third edition of our flagship event, boasting an impressive participation of over a hundred enthusiasts. Notably, QuaRunTime 2.0 was honored with the prestigious Darrel Chong Student Activity Award in 2022, clinching the Bronze accolade. This year, we returned with the much-anticipated fourth installment of QuaRunTime, presenting six distinct events spanning from September 14th to September 19th, 2023. This thrilling 6-day extravaganza includes five online events that cater to a global audience and culminates in an offline event that promises unforgettable experiences. Join us in this journey through innovation, connection, and technical excellence.",
    },
    {
      eventName: "Tech of Future",
      image: "./images/2023/tech-of-future/img.jpg",
      eventDate: "7th October, 2023",
      report: "The \"Tech of the Future\" event, led by Nevin Koshy, unfolded as an illuminating exploration into cutting-edge technologies and their potential impact on the future. Koshy, with his expertise, guided participants through a journey of emerging trends, innovations, and transformative technologies shaping the tech landscape. The event encompassed insightful discussions, engaging presentations, and interactive sessions that offered a glimpse into the possibilities and challenges posed by futuristic technologies. Attendees gained valuable insights into how these advancements could redefine industries and societies.",
    },
    {
      eventName: "TechElevate",
      image: "./images/2023/techelevate/img.jpg",
      eventDate: "24th June, 2023",
      report: "The TechElevate workshops, covering Augmented Reality (AR), Virtual Reality (VR), Coding, and Cybersecurity, were an enriching series of sessions aimed at elevating participants' technical skills. Each workshop provided in-depth insights into the respective domains, with hands-on activities and practical demonstrations. The AR and VR sessions explored the immersive world of extended reality, while the coding workshop equipped participants with essential programming skills. The cybersecurity segment delved into critical aspects of securing digital systems.",
    },
    {
      eventName: "Techtrivia",
      image: "./images/2023/techtrivia/img.jpg",
      eventDate: "31st March, 2023",
      report: "\"TechTrivia,\" a tech quiz, was a fun and competitive event testing participants' knowledge across various tech domains. The quiz covered coding, emerging technologies, and tech history, creating a dynamic atmosphere that celebrated participants' passion for technology in a concise and entertaining format.",
    },
    {
      eventName: "Transistoria",
      image: "./images/2023/transistoria/img.jpg",
      eventDate: "28th October, 2023",
      report: "\"Transistoria,\" an electronics and technology quiz event, was a riveting and knowledge-packed experience for participants. The quiz, designed to test participants' understanding of electronic concepts and technological advancements, featured thought-provoking questions that challenged their knowledge. Attendees showcased their expertise in a competitive yet friendly atmosphere, demonstrating a passion for electronics and technology. \"Transistoria\" successfully combined fun and learning, leaving participants with a deeper appreciation for the diverse and ever-evolving world of electronics.",
    },
    {
      eventName: "Unsung Heroines",
      image: "./images/2023/unsung-heroines/img.png",
      eventDate: "15th March, 2023",
      report: "The Unsung Women Heroes quiz, held in celebration of Women's Day, was an engaging and enlightening event. Participants navigated through a series of thought-provoking questions highlighting the impactful contributions of women throughout history. The quiz aimed to recognize the achievements of often overlooked women who have made significant impacts in various fields. Beyond testing knowledge, the event served as a platform to raise awareness about the remarkable accomplishments of these unsung heroes. Unsung Women Heroes successfully blended education with celebration, fostering a deeper understanding and appreciation for the diverse roles women have played in shaping our world.",
    },
    {
      eventName: "Vidyarpan",
      image: "./images/2023/vidyarpan/img.jpg",
      eventDate: "17th November, 2023",
      report: "The Computer Literacy event, conducted in Malayalam, aimed to bridge the digital divide by providing accessible education to participants. The session covered essential computer skills, software usage, and online navigation, making it tailored to the local audience. The event successfully empowered attendees with foundational computer knowledge, fostering digital literacy within the community and promoting inclusive access to technology.",
    },
    {
      eventName: "YP Talks",
      image: "./images/2023/yp-talks/img.jpg",
      eventDate: "25th September, 2023",
      report: "The \"Career in Semiconductor Industry\" session by Rony Alex Thomas provided insightful perspectives on opportunities in the semiconductor sector. Drawing from industry experience, Thomas discussed key aspects such as skill requirements and industry trends. Attendees gained valuable insights to make informed career choices in this dynamic field, enhancing their understanding of the semiconductor landscape.",
    },
    {
      eventName: "Zip Hunt",
      image: "./images/2023/zip-hunt/img.jpg",
      eventDate: "31st March, 2023",
      report: "ZipHunt, a virtual puzzle and treasure hunt game, offered participants an exhilarating and challenging experience. The event seamlessly blended critical thinking and problem-solving skills in a virtual setting. Attendees navigated through a series of engaging puzzles, showcasing teamwork and creativity. ZipHunt successfully created an interactive and enjoyable platform, combining the thrill of a treasure hunt with the convenience of a virtual format. Participants emerged with a sense of accomplishment and enhanced problem-solving abilities.",
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
