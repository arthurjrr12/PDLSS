// Module and submodule data for the learning system
export const MODULES = [
  {
    id: 1,
    title: "Introduction to Physics",
    description: "Master the fundamental principles and methods that form the foundation of physics.",
    progress: 0,
    completed: false,
    totalSubmodules: 6,
    submodules: [
      { id: 1, title: "Basic Scientific Method", progress: 0, completed: false },
      { id: 2, title: "Advanced Scientific Method", progress: 0, completed: false },
      { id: 3, title: "Basic Measurement", progress: 0, completed: false },
      { id: 4, title: "Advanced Measurement", progress: 0, completed: false },
      { id: 5, title: "Basic Vectors Calculation", progress: 0, completed: false },
      { id: 6, title: "Advanced Vectors Calculation", progress: 0, completed: false }
    ]
  },
  {
    id: 2,
    title: "Forces & Motion",
    description: "Explore the laws that govern movement and the forces that affect objects in our universe.",
    progress: 0,
    completed: false,
    totalSubmodules: 6,
    submodules: [
      { id: 1, title: "Newton's Laws Application", progress: 0, completed: false },
      { id: 2, title: "Newton's Law of Gravitation", progress: 0, completed: false },
      { id: 3, title: "Equilibrium and Friction Forces", progress: 0, completed: false },
      { id: 4, title: "Motion in Inclined Planes", progress: 0, completed: false },
      { id: 5, title: "Single Pendulum and Double Pendulum", progress: 0, completed: false },
      { id: 6, title: "Motion (Horizontal, Vertical, Projectile and Circular)", progress: 0, completed: false }
    ]
  },
  {
    id: 3,
    title: "Energy, Work and Power",
    description: "Understand the core concepts of energy transfer, conservation, and transformation.",
    progress: 0,
    completed: false,
    totalSubmodules: 3,
    submodules: [
      { id: 1, title: "Potential and Kinetic Energies", progress: 0, completed: false },
      { id: 2, title: "Work-Energy Relationship", progress: 0, completed: false },
      { id: 3, title: "Power", progress: 0, completed: false }
    ]
  },
  {
    id: 4,
    title: "Thermodynamics",
    description: "Explore heat, temperature, and energy transfer in systems from molecular to cosmic scale.",
    progress: 0,
    completed: false,
    totalSubmodules: 4,
    submodules: [
      { id: 1, title: "Temperature and Temperature Scales", progress: 0, completed: false },
      { id: 2, title: "Quantity of Heat and Methods of Heat Transfer", progress: 0, completed: false },
      { id: 3, title: "Engines and Refrigerators", progress: 0, completed: false },
      { id: 4, title: "Laws of Thermodynamics", progress: 0, completed: false }
    ]
  },
  {
    id: 5,
    title: "Electromagnetism",
    description: "Discover the fundamental forces that power our modern technological world.",
    progress: 0,
    completed: false,
    totalSubmodules: 4,
    submodules: [
      { id: 1, title: "Electric Circuits", progress: 0, completed: false },
      { id: 2, title: "Ohm's Law", progress: 0, completed: false },
      { id: 3, title: "Electric Potential and Electrical Resistance", progress: 0, completed: false },
      { id: 4, title: "Magnetic and Electric Fields", progress: 0, completed: false }
    ]
  },
  {
    id: 6,
    title: "Waves and Optics",
    description: "Study wave behavior, light properties, and the instruments that allow us to see our world.",
    progress: 0,
    completed: false,
    totalSubmodules: 4,
    submodules: [
      { id: 1, title: "Wave Properties", progress: 0, completed: false },
      { id: 2, title: "Sound Waves", progress: 0, completed: false },
      { id: 3, title: "Light", progress: 0, completed: false },
      { id: 4, title: "Optical Instruments", progress: 0, completed: false }
    ]
  }
];

// Quiz questions for all modules
export const QUIZZES = {
  // Introduction to Physics - Basic Scientific Method 
  "1-1": [
    {
      question: "What is the first step in the scientific method?",
      options: [
        "Perform an experiment",
        "Ask a question",
        "Form a conclusion",
        "Develop a hypothesis"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "A good scientific hypothesis must be:",
      options: [
        "Complicated and technical",
        "Testable and falsifiable",
        "Proven by previous research",
        "Approved by senior scientists"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "What is the purpose of controlling variables in an experiment?",
      options: [
        "To make the experiment more complex",
        "To ensure the experiment can be patented",
        "To isolate the effect of the independent variable",
        "To confirm the hypothesis is correct"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "Scientific theories:",
      options: [
        "Are just educated guesses",
        "Cannot be changed once established",
        "Are comprehensive explanations supported by extensive evidence",
        "Are the same as scientific laws"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "What distinguishes a scientific observation from an inference?",
      options: [
        "Observations are always correct while inferences can be wrong",
        "Observations are what we perceive directly, inferences are interpretations of observations",
        "Observations require special equipment while inferences do not",
        "Observations are quantitative while inferences are qualitative"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    }
  ],
  
  // Forces & Motion - Uniformly Accelerated Motion (Single Pendulum and Double Pendulum)
  "2-5": [
    {
      question: "Which equation correctly relates final velocity (v), initial velocity (u), acceleration (a), and time (t) for uniformly accelerated motion?",
      options: [
        "v = u + at²",
        "v = u + at",
        "v = u + a/t",
        "v = ut + a"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "A car accelerates uniformly from rest to 25 m/s in 10 seconds. What is its acceleration?",
      options: [
        "2.5 m/s²",
        "0.4 m/s²",
        "4.0 m/s²",
        "25 m/s²"
      ],
      correctAnswer: 0,
      selectedAnswer: null
    },
    {
      question: "In a velocity-time graph for uniformly accelerated motion, what does the slope represent?",
      options: [
        "Displacement",
        "Velocity",
        "Acceleration",
        "Time"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "Which of the following correctly describes a simple pendulum's period when its length is doubled?",
      options: [
        "The period remains the same",
        "The period doubles",
        "The period increases by a factor of √2",
        "The period increases by a factor of 1.414"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "What happens to the period of a simple pendulum if the mass of the bob is doubled?",
      options: [
        "The period remains the same",
        "The period doubles",
        "The period decreases by half",
        "The period increases by √2"
      ],
      correctAnswer: 0,
      selectedAnswer: null
    }
  ],
  
  // Energy - Potential and Kinetic Energies
  "3-1": [
    {
      question: "The kinetic energy of an object is given by which formula?",
      options: [
        "KE = mv",
        "KE = mgh",
        "KE = (1/2)mv²",
        "KE = (1/2)kx²"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "If the velocity of an object doubles, its kinetic energy:",
      options: [
        "Doubles",
        "Increases by 50%",
        "Quadruples",
        "Remains the same"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "The gravitational potential energy of an object is calculated using:",
      options: [
        "PE = mv²",
        "PE = mgh",
        "PE = (1/2)kx²",
        "PE = mg/h"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "A 2 kg mass is lifted to a height of 5 meters. If the gravitational acceleration is 10 m/s², what is its gravitational potential energy?",
      options: [
        "10 J",
        "50 J",
        "100 J",
        "1000 J"
      ],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "When a ball is thrown upward, at the highest point its:",
      options: [
        "Kinetic energy is maximum, potential energy is minimum",
        "Potential energy is maximum, kinetic energy is minimum",
        "Both potential and kinetic energy are maximum",
        "Both potential and kinetic energy are minimum"
      ],
      correctAnswer: 1,
      selectedAnswer: null
    }
  ]
};

// For backward compatibility
export const BASIC_SCIENTIFIC_METHOD_QUIZ = QUIZZES["1-1"];

// Career paths
export const CAREER_PATHS = [
  {
    id: "engineering",
    title: "Engineering",
    description: "Focus on mechanics, thermodynamics, and electromagnetic principles essential for various engineering disciplines.",
    imageSrc: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Applied mechanics and materials",
      "Thermodynamic systems",
      "Electrical circuit analysis"
    ]
  },
  {
    id: "medicine",
    title: "Medicine",
    description: "Learn physics concepts crucial for medical diagnostics, imaging technologies, and understanding bodily functions.",
    imageSrc: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Medical imaging physics",
      "Radiation and nuclear medicine",
      "Biomechanics and fluid dynamics"
    ]
  },
  {
    id: "aviation",
    title: "Aviation",
    description: "Study aerodynamics, propulsion, navigation principles, and the physics that keeps aircraft aloft.",
    imageSrc: "https://images.unsplash.com/photo-1520437358207-323b43b50729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Aerodynamics and flight mechanics",
      "Propulsion systems",
      "Navigation and atmospheric physics"
    ]
  }
];

// Theme colors
export const COLORS = {
  primary: "#3A56E4",
  secondary: "#FF9F43",
  success: "#28C76F",
  error: "#EA5455",
  dark: "#2C3E50",
  light: "#F8F9FA",
  textPrimary: "#2C3E50",
  textSecondary: "#6E7687"
};

// Learning resources categories
export const RESOURCE_CATEGORIES = [
  {
    title: "🔭 General Learning Platforms",
    icon: "fas fa-telescope",
    resources: [
      {
        title: "Khan Academy",
        description: "Free lessons, videos, and exercises from basic to advanced physics.",
        url: "https://www.khanacademy.org/science/physics"
      },
      {
        title: "HyperPhysics",
        description: "Concept maps and concise explanations for all major physics topics.",
        url: "http://hyperphysics.phy-astr.gsu.edu/"
      },
      {
        title: "The Physics Classroom",
        description: "High school-friendly tutorials, simulations, and quizzes.",
        url: "https://www.physicsclassroom.com/"
      },
      {
        title: "MIT OpenCourseWare",
        description: "Free university-level physics lectures, notes, and assignments.",
        url: "https://ocw.mit.edu/index.htm"
      },
      {
        title: "Coursera and edX",
        description: "College-level physics courses by top universities.",
        url: "https://www.coursera.org/"
      }
    ]
  },
  {
    title: "⚙️ Interactive Simulations & Virtual Labs",
    icon: "fas fa-cogs",
    resources: [
      {
        title: "PhET Interactive Simulations",
        description: "Fun and interactive physics and science simulations.",
        url: "https://phet.colorado.edu/"
      },
      {
        title: "My Physics Lab",
        description: "Simulations in mechanics and systems of motion.",
        url: "https://www.myphysicslab.com/"
      },
      {
        title: "Falstad Physics Applets",
        description: "Simulations in waves, electricity, optics, and more.",
        url: "https://www.falstad.com/mathphysics.html"
      },
      {
        title: "Labster",
        description: "Virtual labs for in-depth science learning (subscription required).",
        url: "https://www.labster.com/"
      },
      {
        title: "Physics Aviary",
        description: "Virtual labs ideal for classroom and remote use.",
        url: "https://www.thephysicsaviary.com/Physics/Programs/Labs/"
      }
    ]
  },
  {
    title: "📘 Open Textbooks & Reference Guides",
    icon: "fas fa-book",
    resources: [
      {
        title: "OpenStax Physics",
        description: "Free downloadable textbooks for high school and college.",
        url: "https://openstax.org/subjects/science"
      },
      {
        title: "LibreTexts Physics",
        description: "A dynamic, open-source platform for physics content.",
        url: "https://phys.libretexts.org/"
      },
      {
        title: "CK-12 Foundation",
        description: "FlexBooks and interactive content across all physics topics.",
        url: "https://www.ck12.org/student/"
      },
      {
        title: "Physics LibreNotes",
        description: "Notes and guides for college-level physics.",
        url: "https://phys.libretexts.org/"
      }
    ]
  },
  {
    title: "🎓 Problem Solving & Assessment Tools",
    icon: "fas fa-graduation-cap",
    resources: [
      {
        title: "Brilliant.org",
        description: "Problem-solving-based physics learning (free & paid).",
        url: "https://brilliant.org/"
      },
      {
        title: "Isaac Physics",
        description: "Free problems for students moving from high school to university physics.",
        url: "https://isaacphysics.org/"
      },
      {
        title: "Physics Stack Exchange",
        description: "Ask or browse complex physics questions and expert answers.",
        url: "https://physics.stackexchange.com/"
      },
      {
        title: "Past Exam Archives",
        description: "Practice with previous exams from various curricula.",
        url: "#",
        subLinks: [
          { label: "Cambridge IGCSE Physics", url: "https://www.cambridgeinternational.org" },
          { label: "IB Physics Resources", url: "https://ibphysics.org/" },
          { label: "AP Physics Exams", url: "https://apstudents.collegeboard.org/courses/ap-physics-1" }
        ]
      }
    ]
  },
  {
    title: "📺 Video Learning Channels",
    icon: "fas fa-video",
    resources: [
      {
        title: "MinutePhysics",
        description: "Short, engaging physics videos.",
        url: "https://www.youtube.com/user/minutephysics"
      },
      {
        title: "Veritasium",
        description: "Explores deep science concepts and experiments.",
        url: "https://www.youtube.com/user/1veritasium"
      },
      {
        title: "PBS SpaceTime",
        description: "Physics and cosmology topics in detail.",
        url: "https://www.youtube.com/pbsspacetime"
      },
      {
        title: "Flipping Physics",
        description: "High school physics with animations and humor.",
        url: "https://www.flippingphysics.com/"
      },
      {
        title: "Tibees",
        description: "Exam walkthroughs and physics history in a relaxing style.",
        url: "https://www.youtube.com/user/tibees"
      }
    ]
  },
  {
    title: "📱 Physics Mobile Apps",
    icon: "fas fa-mobile-alt",
    resources: [
      {
        title: "Pocket Physics (Android)",
        description: "Quick reference for formulas and concepts.",
        url: "https://play.google.com/store/apps/details?id=com.nineapps.pocketphysics"
      },
      {
        title: "PhyWiz (Android/iOS)",
        description: "Solves physics problems with step-by-step explanations.",
        url: "https://phywiz.herokuapp.com/"
      },
      {
        title: "Wolfram Alpha",
        description: "Powerful equation solver and physics calculator.",
        url: "https://www.wolframalpha.com/"
      },
      {
        title: "Physics Toolbox Sensor Suite",
        description: "Turn your phone into a data collection tool!",
        url: "https://www.vieyrasoftware.net/physics-toolbox-suite"
      }
    ]
  }
];

// Publications for the STEM Publications page
export const PUBLICATIONS = [
  {
    title: "Strategies for Teaching Forces and Motion in STEM Education",
    excerpt: "This research paper presents innovative teaching approaches for physics concepts related to forces and motion in STEM education, with emphasis on hands-on learning activities and real-world applications.",
    author: "Dr. Maria Santos, University of the Philippines",
    date: "January 2025",
    journal: "International Journal of STEM Education",
    image: "https://images.unsplash.com/photo-1636466497217-06a74308cb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education"]
  },
  {
    title: "Energy Conservation Principles in High School Physics: Effective Teaching Methods",
    excerpt: "This study explores effective methodologies for teaching energy conservation principles to high school students, incorporating interactive demos and career-relevant applications.",
    author: "Prof. David Rodriguez, Ateneo de Manila University",
    date: "March 2024",
    journal: "Science Education Research",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education"]
  },
  {
    title: "Integration of Technology in Physics Education: A Philippine Perspective",
    excerpt: "This comprehensive review discusses how technology can enhance physics education in Philippine schools, covering simulation tools, mobile apps, and virtual laboratories.",
    author: "Dr. Anna Reyes, De La Salle University",
    date: "November 2024",
    journal: "Asian Journal of Science Education",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education", "Technology"]
  },
  {
    title: "Career-Focused Physics Instruction: Connecting Classroom to Professions",
    excerpt: "This paper examines the benefits of career-oriented physics instruction, showing how connecting physics concepts to engineering, medicine, and aviation careers improves student engagement and learning outcomes.",
    author: "Dr. Miguel Santos, University of Santo Tomas",
    date: "August 2024",
    journal: "Career and Technical Education Research",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education", "Career Development"]
  },
  {
    title: "Implementing Interactive Physics Experiments Using Low-Cost Materials",
    excerpt: "This practical guide provides educators with detailed instructions for creating engaging physics demonstrations and experiments using affordable, locally available materials.",
    author: "Prof. Lisa Tan, Mapúa University",
    date: "February 2025",
    journal: "Practical Physics Teaching",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education", "Practical Teaching"]
  },
  {
    title: "The Impact of STEMIFIED Instruction on Student Performance in Physics",
    excerpt: "This study presents quantitative evidence showing how the STEMIFIED approach to physics instruction significantly improves student understanding, retention, and application of key concepts.",
    author: "Dr. Rafael Cruz, Technological University of the Philippines",
    date: "May 2024",
    journal: "Science and Education Research",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    tags: ["Physics", "Education", "Research"]
  }
];
