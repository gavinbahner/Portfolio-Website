
/*
  ========================================
  PLACEHOLDER IMAGES
  ========================================
*/
export const Mimages = [
  './src/Data/Images/portrait_isolated.png',
]
export const placeholderImages = [
  './src/Data/Images/portrait_isolated.png',

  'src/Data/Images/gearbox.jpeg',

  './src/Data/Images/VBANEW.png',

  './src/Data/Images/Acuator-Electrical.png',

  './src/Data/Images/Chassis.png',

  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',

  './src/Data/Images/team1.JPG',
  
  './src/Data/Images/iceland3.JPG',

  './src/Data/Images/frontwing.png',

  './src/Data/Images/lowerplate.jpeg',

  './src/Data/Images/motor.jpg',

  './src/Data/Images/unittesting.jpeg',

  './src/Data/Images/impAct.jpg'
];


/*
  ========================================
  PROJECTS
  ========================================
*/

export const initialProjects = [

  {
    id: 1,
    title: 'Boat Gearbox Design - PEP Competition',
    category: 'Senior Capstone',
    image: placeholderImages[1],
    description:
      'As part of my senior capstone project at Wake Forest, I was in charge of the design and implementation of gear system for the 2026 Wake Forest PEP Boat. \
      PEP (Promoting Electric Propulsion) is an annual competition between universities, where each school is tasked with designed and building an electric boat. \
      Joining the team, in Janurary, I had 3 months to design and manufacture this gear system while ensuring fit with other drive components.\
      The team selected a former 50 HP Yamaha Outboard (ELG 150) as the lower drive unit to attach our ME 1616 electric motor to. It was my job to\
      link the motor to the lower drive unit. ',
    link: '#',
    pdf: 'src/Data/Images/cs.pdf',
    featureImage:placeholderImages[9],
    description2: 'The ensuing mechanical design included power-torque curve considerations, selecting drive type, \
    gear ratios, lubrication system and housing materials. I designed a sprocket-chain system with a 1:2 gear ratio\
    that allowed the propeller to reach higher RPMs despite our low power cap leading to performance of up to 26.4 mph \
    of boat speed. Ultimately, this experience created new curiousities about performance design engineering and taught me \
    lessons about loaded/unloaded conditions, power delivery curves, designing considering manufacturing capabilites, \
    and project planning.'
    ,featureImage2: placeholderImages[10]},

  {
    id: 2,
    title: 'FSAE Aero Component Design',
    category: 'Formula Wake FSAE',
    image: placeholderImages[8],
    description:
      "As a first year team, I first served as chassis lead. After designing a chassis, identifying material sourcing, and making a manufacturing plan, I took up the mantle of Aerodynamic Lead. \
      As a team of two, we designed a nose cone, front wing, rear wing, and diffuser that would be compabtible with our chassis. Using sources like Competition Car\
      Aerodynamics by Simon McBeath and Race Car Aerodynamics by Joseph Katz, we developed our aerodynamic intution, created aerodynamic design goals and established good starting points for our components. Then\
      we transitioned into geometry development and fluid simulation of these geometries.",
    link: '#',
    pdf: 'src/Data/Images/cs.pdf',
    featureImage: null,
    description2: 'After establishing design goals, aerodynamic intuition, and exploring historical trends (what other people have done), we turned \
    to Solidworks to develop our geometries. Components were mindfully designed understanding the limited manufacturing capabilities of a first year \
    team and the regulations. After developing a single geometry each for the nose cone, front wing, rear wing, and the diffuser, each were exported into\
    Ansys for meshing and simulation. We used online guides to get advice on our CFD parameters including turbulence models and volume/surface grid generation. \
    We simulated each individual component and then combined them to understand the aerodynamic interactions. This was examined through longitudianal cross sections\
    mapping static pressure coeffecieints, total pressure, and velocity fields. This was compared to aerodynamic force values and distribution. Using this information \
    the the geometries were redesigned based on our results. I am compiling this into a report to attach to this website.'
  ,featureImage2: null},

  {
    id: 3,
    title: 'Excel-VBA Data Processing Optimization',
    category: 'Internship at RPS LLC',
    image: placeholderImages[2],
    description:
      'While at Revere, I had the chance to work on several different multi-disciplinary projects. This included helping develop and implement software\
      for their asset preventative maintenance scheduling program. This included manual retrieval of data and automated implementation into their new\
      software system. To do this, I wrote python scripts that extracted csv data from local Excel spreadsheets which was then used to creat new objects\
      and scheduling events within their PM software. These scripts saved upwards of 60 hours of manual implementation.',
    link: '#',
    pdf: 'src/Data/Gavin Bahner Revere Internship.pdf',
    featureImage: null,
    description2: 'I also improved the manufacturing process data pipeline. The plant had litte-to-none processes for recording input and output\
    data for the manufacturing of each component. I started by developing intermediate solutions that included manual recording of the data. I fully \
    optimized this process by creating a fully interactive Excel sheet with buttons, forms, and self-reporting email feature when inputs or outputs \
    were outside of the prescribed tolerance bands. For the long term, I explored a feasibility study on long term possibilities of creating an automated data pipeline that \
    directly linked the asset onboard computers to a plant server in order to datalog. '
  ,featureImage2: null},

  {
    id: 4,
    title: 'Directional Gear Shift Control System Design',
    category: 'Senior Capstone',
    image: placeholderImages[3],
    description:
      'The Yamaha outboard included a shaft which could mechnaically actuate the postion of the lower drive clutch dog and, in turn, determine \
      the direction the properller spun. Removing the gas motor from the outboard included disabling this mechanical acuation system. I endeavored \
      to design and build an electrical control system that would allow the driver to control direction from the center console. This involved scoping\
      required loads, existing purchasable actuation technology, spacing constraints, and implementation timeline. Through testing and research, I landed\
      on a 12V DC-motor driven linear actuator.',
    link: '#',
    pdf: 'src/Data/Images/cs.pdf',
    featureImage: placeholderImages[12],
    description2: 'My design connected the DC-motor driven linear actuator to a microcontroller through the use of a H-Bridge configuration. \
    This allowed for reverse polarity to be achieved-necessary for operating the actuator both up and down. I developed schematics, wrote microcontroller\
    code, and completed unit testing to ensure hardware and software were interacting seamlessly before making further developments. Then, I designed\
    and manufactured clamping mount and completed an operational test with throttle engaged. After operatoinal success, the prototype was iterated into a\
    compact, fully-soldered and waterproof shield with an isolated microcontroller power system. Working with other members of the team, we configured \
    the mounting in order to protect from splash and prevent attachment being dislodged.'
  ,featureImage2: placeholderImages[11]},

  // {
  //   id: 5,
  //   title: 'FSAE Chassis Design',
  //   category: 'Formula Wake FSAE',
  //   image: placeholderImages[4],
  //   description:
  //     'A service-design exploration focused on reducing friction in community-facing digital services.',
  //   link: '#',
  //   pdf: 'src/Data/Images/cs.pdf',
  //   featureImage: Mimages[0],
  //   description2: ''
  // ,featureImage2: placeholderImages[1]},

  // {
  //   id: 6,
  //   title: 'Apple App - GoPack Bus App',
  //   category: 'NCSU App Dev Team',
  //   image: placeholderImages[5],
  //   description:
  //     'A polished storefront concept with a premium visual system and a streamlined purchase path.',
  //   link: '#',
  //   pdf: 'src/Data/Images/cs.pdf',
  //   featureImage: Mimages[0],
  //   description2: ''
  // ,featureImage2: placeholderImages[1]},

  // {
  //   id: 7,
  //   title: 'Car Sim with OpenVSP',
  //   category: '',
  //   image: placeholderImages[1],
  //   description:
  //     'A visual archive that experiments with motion, pacing, and editorial composition.',
  //   link: '#',
  //   pdf: 'src/Data/Images/cs.pdf',
  //   featureImage: Mimages[0],
  //   description2: ''
  // ,featureImage2: placeholderImages[1]},

  // {
  //   id: 8,
  //   title: 'Exploring Aeromapping',
  //   category: '',
  //   image: '',
  //   description:
  //     'A launch toolkit bringing positioning, messaging, and campaign assets into one coherent system.',
  //   link: '#',
  //   pdf: 'src/Data/Images/cs.pdf',
  //   featureImage: Mimages[0],
  //   description2: ''
  // }

];


/*
  ========================================
  EXPERIENCE TIMELINE
  ========================================
*/

export const initialTimeline = [

  {
    year: '2026 — Present',
    title: 'NC State FSAE - Aero New Member',
    text:
      'Joining the NC State FSAE team. Completing new member onboarding process'
  },

  {
    year: '2026 Summer',
    title: 'Mechanic Assistant at Gladiator Auto/Commericial Sales at Autozone',
    text:
      'Worked on commericial sales at Autozone. Took it as an opportunity to become more familiar with\
      automotive subsystems and learn how to work on my own car. Made friends with a local mechanic and began working at\
      his shop. Mostly worked rebuilding a 1974 MG MGB.'
  },

  {
    year: 'Summer 2025',
    title: 'Engineering Intern at Revere Plastic Systems LLC',
    text:
      'Spent a summer interning at plastic manufacturing plant developing technical solutions for a wide range of problems in a RPS\
      Ohio plant.'
  },

  {
    year: 'Spring 2025 - Spring 2026',
    title: 'Formula Wake FSAE - Chassis/Aero Team Lead',
    text:
      'Helped start a FSAE team at Wake Forest. Started by developing a chassis which served as a good introduction to automotive\
      engineering and vehicle dynamics. Then, transitioned into a role leading the first time design of aerodynamic components. '
  },
  {
    year: 'Summer 2023/2024',
    title: 'Ocean Rescue - Beach Lifeguard',
    text:
      'Worked on the beach, saving lives while maintaining fitness and professionalism.'
  }

];

