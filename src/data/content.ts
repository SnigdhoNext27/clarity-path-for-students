export interface RoadmapPhase {
  name: string;
  description: string;
  steps: {
    title: string;
    instruction: string;
    focus: string;
    avoid: string;
    commonMistake: string;
    completionSignal: string;
  }[];
  reflection: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "accent" | "highlight" | "primary";
  duration: string;
  phases: RoadmapPhase[];
}

export const ROADMAPS: Roadmap[] = [
  {
    id: "student-foundation",
    title: "Student Foundations",
    description: "Build strong study habits and learning systems that last a lifetime. Master the art of focused learning.",
    icon: "📚",
    color: "accent",
    duration: "4-8 weeks",
    phases: [
      {
        name: "Phase 1: Mindset & Habits",
        description: "Establish the mental foundation for effective learning.",
        steps: [
          {
            title: "Define your learning identity",
            instruction: "Write down who you want to become as a learner. Be specific about the skills and knowledge you want to acquire.",
            focus: "Focus on identity, not outcomes. 'I am becoming a disciplined learner.'",
            avoid: "Vague goals like 'get better at studying'",
            commonMistake: "Setting too many goals at once. Start with one clear identity shift.",
            completionSignal: "You can clearly articulate your learning identity in one sentence."
          },
          {
            title: "Create a minimal daily habit",
            instruction: "Choose one small action you can do every day for learning. Make it so easy you can't fail.",
            focus: "Consistency over intensity. 10 minutes daily beats 2 hours weekly.",
            avoid: "Ambitious schedules you can't maintain",
            commonMistake: "Starting with too much and burning out after a week.",
            completionSignal: "You've completed your minimal habit for 7 consecutive days."
          }
        ],
        reflection: "What did you learn about yourself in this phase? What surprised you about building new habits?"
      },
      {
        name: "Phase 2: Study Systems",
        description: "Build repeatable systems that make learning automatic.",
        steps: [
          {
            title: "Set up your learning environment",
            instruction: "Designate a specific place for focused learning. Remove all distractions from this space.",
            focus: "Environmental design. Make the right behavior the easy behavior.",
            avoid: "Studying in bed or high-distraction areas",
            commonMistake: "Underestimating how much environment affects focus.",
            completionSignal: "You have a dedicated, distraction-free study space."
          },
          {
            title: "Implement time-blocking",
            instruction: "Schedule specific blocks for learning in your calendar. Protect these blocks like important meetings.",
            focus: "Treat learning time as non-negotiable appointments with yourself.",
            avoid: "Studying 'whenever you have time'",
            commonMistake: "Not accounting for energy levels when scheduling.",
            completionSignal: "You have recurring study blocks in your calendar for the next month."
          }
        ],
        reflection: "How has having a system changed your approach to learning? What adjustments might you need?"
      },
      {
        name: "Phase 3: Revision & Recall",
        description: "Learn techniques that make knowledge stick.",
        steps: [
          {
            title: "Practice active recall",
            instruction: "After each study session, close your materials and write everything you remember. Check and correct.",
            focus: "Retrieval practice strengthens memory far more than re-reading.",
            avoid: "Passive highlighting or re-reading notes",
            commonMistake: "Checking answers too quickly before really trying to recall.",
            completionSignal: "Active recall is your default study method."
          },
          {
            title: "Use spaced repetition",
            instruction: "Review material at increasing intervals: 1 day, 3 days, 1 week, 2 weeks.",
            focus: "Spacing makes memory durable. Review just before you forget.",
            avoid: "Cramming everything the night before",
            commonMistake: "Not tracking what needs review and when.",
            completionSignal: "You have a working spaced repetition system (physical or digital)."
          }
        ],
        reflection: "How effective has your memory been compared to before? What evidence do you have?"
      },
      {
        name: "Phase 4: Long-term Consistency",
        description: "Build systems for sustainable, lifelong learning.",
        steps: [
          {
            title: "Track your progress",
            instruction: "Create a simple way to track your learning streaks and progress. Review weekly.",
            focus: "What gets measured gets managed. Visual progress is motivating.",
            avoid: "Complex tracking systems that become a chore",
            commonMistake: "Tracking too many things or abandoning tracking entirely.",
            completionSignal: "You have a simple, sustainable tracking method you've used for 2+ weeks."
          },
          {
            title: "Build in recovery",
            instruction: "Schedule regular breaks and off-days. Plan for them, don't wait until burnout.",
            focus: "Sustainable pace beats burnout cycles. Rest is part of the system.",
            avoid: "Guilting yourself for taking breaks",
            commonMistake: "Ignoring signs of fatigue until it's too late.",
            completionSignal: "You have planned rest periods built into your schedule."
          }
        ],
        reflection: "What has changed in your relationship with learning? What will you carry forward?"
      }
    ]
  },
  {
    id: "programming",
    title: "Beginner to Programmer",
    description: "A universal roadmap to go from zero to writing real programs. Language-agnostic foundations.",
    icon: "💻",
    color: "highlight",
    duration: "3-6 months",
    phases: [
      {
        name: "Phase 1: Logic & Basics",
        description: "Understand how computers think before writing code.",
        steps: [
          {
            title: "Learn computational thinking",
            instruction: "Practice breaking problems into smaller steps. Write instructions for everyday tasks in plain language.",
            focus: "Programming is problem-solving first, syntax second.",
            avoid: "Jumping straight into complex code",
            commonMistake: "Focusing on memorizing syntax instead of understanding logic.",
            completionSignal: "You can write step-by-step instructions for any everyday task."
          },
          {
            title: "Understand data types and variables",
            instruction: "Learn what numbers, text, and booleans are. Understand how computers store information.",
            focus: "Variables are containers for data. Types define what you can do with them.",
            avoid: "Moving on without truly understanding these fundamentals",
            commonMistake: "Not practicing enough with simple exercises.",
            completionSignal: "You can explain variables and data types to someone else clearly."
          }
        ],
        reflection: "What aspects of programming logic felt intuitive? What needs more practice?"
      },
      {
        name: "Phase 2: Core Language",
        description: "Master the fundamentals of one programming language.",
        steps: [
          {
            title: "Choose one language and commit",
            instruction: "Pick Python, JavaScript, or another beginner-friendly language. Stick with it for at least 3 months.",
            focus: "Depth in one language beats shallow knowledge of many.",
            avoid: "Language-hopping or debating which language is 'best'",
            commonMistake: "Switching languages when things get difficult.",
            completionSignal: "You've committed to one language and started the basics."
          },
          {
            title: "Master control flow",
            instruction: "Learn if/else statements, loops, and functions. These are the building blocks of all programs.",
            focus: "Control flow is how programs make decisions and repeat actions.",
            avoid: "Moving on without being able to write these from memory",
            commonMistake: "Copying code without understanding each line.",
            completionSignal: "You can write if/else, loops, and functions without looking up syntax."
          }
        ],
        reflection: "What patterns do you notice in code? What clicked for you in this phase?"
      },
      {
        name: "Phase 3: Projects",
        description: "Apply your knowledge by building real things.",
        steps: [
          {
            title: "Build something small and complete",
            instruction: "Create a simple project: a calculator, to-do list, or guessing game. Finish it completely.",
            focus: "Completing projects teaches more than any tutorial.",
            avoid: "Starting many projects without finishing any",
            commonMistake: "Making the project too ambitious and never finishing.",
            completionSignal: "You have one complete, working project you can show others."
          },
          {
            title: "Build something slightly harder",
            instruction: "Take on a project that requires learning one new concept. Push just beyond your comfort zone.",
            focus: "Growth happens at the edge of your abilities.",
            avoid: "Projects that are either too easy or impossibly hard",
            commonMistake: "Not pushing yourself enough to learn new things.",
            completionSignal: "You've completed a second project with new skills."
          }
        ],
        reflection: "What did building real things teach you that tutorials couldn't?"
      },
      {
        name: "Phase 4: Problem Solving",
        description: "Develop the debugging mindset and problem-solving skills.",
        steps: [
          {
            title: "Practice debugging systematically",
            instruction: "When code doesn't work, read error messages carefully. Form hypotheses and test them one at a time.",
            focus: "Debugging is detective work. Be systematic, not random.",
            avoid: "Randomly changing code hoping it will work",
            commonMistake: "Not reading error messages fully before seeking help.",
            completionSignal: "You can debug most simple errors independently."
          },
          {
            title: "Solve coding challenges",
            instruction: "Practice with structured problems on platforms like Codewars or LeetCode. Start with easy problems.",
            focus: "Consistent practice builds problem-solving intuition.",
            avoid: "Problems that are too hard and demotivating",
            commonMistake: "Spending too long on one problem without seeking hints.",
            completionSignal: "You can consistently solve easy-level coding challenges."
          }
        ],
        reflection: "How has your approach to problems changed? What's your debugging process now?"
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Beginner to Cybersecurity",
    description: "Start from IT basics and build toward understanding security. No prior experience needed.",
    icon: "🔐",
    color: "primary",
    duration: "6-12 months",
    phases: [
      {
        name: "Phase 1: IT Foundations",
        description: "Build the technical base that security knowledge rests on.",
        steps: [
          {
            title: "Understand how computers work",
            instruction: "Learn about hardware, operating systems, file systems, and processes. Use the command line daily.",
            focus: "Security requires deep understanding of what you're protecting.",
            avoid: "Skipping to 'hacking' without fundamentals",
            commonMistake: "Underestimating how important IT basics are for security.",
            completionSignal: "You're comfortable navigating and managing a computer via command line."
          },
          {
            title: "Set up a practice environment",
            instruction: "Install virtual machines. Create a safe sandbox for learning and experimentation.",
            focus: "Practice in isolated environments, never on production systems.",
            avoid: "Practicing on systems you don't own or have permission to test",
            commonMistake: "Not creating proper isolated environments for testing.",
            completionSignal: "You have a working VM lab environment set up."
          }
        ],
        reflection: "What aspects of IT fundamentals surprised you? What do you want to explore deeper?"
      },
      {
        name: "Phase 2: Networking",
        description: "Understand how data moves and how systems communicate.",
        steps: [
          {
            title: "Learn the OSI model and TCP/IP",
            instruction: "Understand how data travels across networks. Learn what happens at each layer.",
            focus: "Networking is the foundation of most security work.",
            avoid: "Memorizing without understanding",
            commonMistake: "Not practicing with real network tools like Wireshark.",
            completionSignal: "You can explain how data travels from browser to server."
          },
          {
            title: "Practice network analysis",
            instruction: "Use tools like Wireshark to capture and analyze traffic. Learn to read packets.",
            focus: "Hands-on practice is essential. Theory alone isn't enough.",
            avoid: "Analyzing traffic on networks you don't have permission to monitor",
            commonMistake: "Getting overwhelmed by the amount of data. Focus on basics first.",
            completionSignal: "You can capture and interpret basic network traffic."
          }
        ],
        reflection: "How does understanding networking change how you see the internet?"
      },
      {
        name: "Phase 3: Security Basics",
        description: "Learn the fundamental principles and common vulnerabilities.",
        steps: [
          {
            title: "Understand the CIA triad",
            instruction: "Learn about Confidentiality, Integrity, and Availability. Apply these concepts to everyday scenarios.",
            focus: "These three principles guide all security decisions.",
            avoid: "Treating security as just 'hacking'",
            commonMistake: "Not considering all three aspects when analyzing security.",
            completionSignal: "You can analyze any system through the CIA lens."
          },
          {
            title: "Learn common vulnerabilities",
            instruction: "Study the OWASP Top 10. Understand how common attacks work and how to prevent them.",
            focus: "Understanding attacks helps you build better defenses.",
            avoid: "Using attack knowledge on systems without explicit permission",
            commonMistake: "Learning attacks without learning defenses.",
            completionSignal: "You can explain the OWASP Top 10 and basic mitigations."
          }
        ],
        reflection: "What security concepts will you apply to your own digital life?"
      },
      {
        name: "Phase 4: Hands-on Practice",
        description: "Apply your knowledge in controlled environments.",
        steps: [
          {
            title: "Practice on intentionally vulnerable systems",
            instruction: "Use platforms like TryHackMe, HackTheBox, or DVWA to practice safely and legally.",
            focus: "Legal, ethical practice is the only way forward.",
            avoid: "Any unauthorized access to real systems",
            commonMistake: "Not documenting what you learn during practice.",
            completionSignal: "You've completed beginner challenges on a practice platform."
          },
          {
            title: "Build something secure",
            instruction: "Apply security principles to a project. Secure a web application or network you've built.",
            focus: "Building secure systems teaches more than breaking insecure ones.",
            avoid: "Only focusing on offense without understanding defense",
            commonMistake: "Not testing your own security implementations.",
            completionSignal: "You've built and secured a simple project."
          }
        ],
        reflection: "What area of security interests you most? Where will you focus next?"
      }
    ]
  },
  {
    id: "english",
    title: "English Fluency & Exams",
    description: "Improve English skills systematically. Works for everyday fluency and exam preparation.",
    icon: "🗣️",
    color: "accent",
    duration: "Ongoing",
    phases: [
      {
        name: "Phase 1: Daily Input",
        description: "Surround yourself with English every day.",
        steps: [
          {
            title: "Create an immersion environment",
            instruction: "Change device languages to English. Listen to English podcasts or watch shows daily, even as background.",
            focus: "Consistent exposure builds intuition for natural language.",
            avoid: "Only studying during dedicated 'study time'",
            commonMistake: "Choosing content that's too difficult or boring to maintain.",
            completionSignal: "You consume at least 30 minutes of English content daily."
          },
          {
            title: "Read regularly at your level",
            instruction: "Find reading material slightly above your level. Read for pleasure, not just study.",
            focus: "Reading builds vocabulary naturally. Find topics you genuinely enjoy.",
            avoid: "Material so difficult it requires constant dictionary use",
            commonMistake: "Stopping to look up every unknown word. Let context teach you.",
            completionSignal: "You read in English for pleasure at least 3 times per week."
          }
        ],
        reflection: "What type of English content do you enjoy most? How can you increase exposure?"
      },
      {
        name: "Phase 2: Speaking Practice",
        description: "Build confidence and fluency through regular speaking.",
        steps: [
          {
            title: "Talk to yourself in English",
            instruction: "Narrate your day, explain concepts, or practice conversations alone. Out loud is essential.",
            focus: "Speaking practice doesn't require a partner. Start alone to build confidence.",
            avoid: "Only speaking when you feel 'ready'",
            commonMistake: "Being silent instead of making mistakes out loud.",
            completionSignal: "You speak English aloud for at least 10 minutes daily."
          },
          {
            title: "Find conversation practice",
            instruction: "Use language exchange apps, tutors, or conversation groups. Prioritize speaking time over explanation time.",
            focus: "Real conversation is irreplaceable. Make mistakes and learn from them.",
            avoid: "Lessons that are mostly listening to explanations",
            commonMistake: "Not speaking enough because of fear of mistakes.",
            completionSignal: "You have regular speaking practice with another person."
          }
        ],
        reflection: "What makes you hesitate to speak? How can you address that?"
      },
      {
        name: "Phase 3: Writing & Grammar",
        description: "Refine your written English and address grammar gaps.",
        steps: [
          {
            title: "Write something every day",
            instruction: "Keep a journal, write social media posts, or summarize what you learned. Short is fine.",
            focus: "Regular writing reveals gaps in your knowledge and builds fluency.",
            avoid: "Only writing for formal assignments or exams",
            commonMistake: "Not getting feedback on your writing.",
            completionSignal: "You write something in English every day."
          },
          {
            title: "Focus on high-impact grammar",
            instruction: "Identify your most common grammar mistakes. Study and practice those specifically.",
            focus: "Fix your personal error patterns, not every possible grammar rule.",
            avoid: "Trying to master all grammar at once",
            commonMistake: "Studying grammar without applying it in speaking and writing.",
            completionSignal: "You've identified and improved your top 3 grammar issues."
          }
        ],
        reflection: "What grammar patterns still trip you up? What's your plan to address them?"
      },
      {
        name: "Phase 4: Exam Preparation",
        description: "Prepare specifically for English proficiency exams if needed.",
        steps: [
          {
            title: "Understand your target exam",
            instruction: "Study the format, timing, and scoring of your specific exam. Know exactly what's tested.",
            focus: "Each exam has specific patterns. Learn what they reward.",
            avoid: "Generic study that doesn't match your exam",
            commonMistake: "Not practicing under realistic time conditions.",
            completionSignal: "You know the exact format and requirements of your exam."
          },
          {
            title: "Practice with real conditions",
            instruction: "Take full practice tests under exam conditions. Time yourself strictly. Review mistakes carefully.",
            focus: "Exam performance is a skill that requires specific practice.",
            avoid: "Only practicing individual sections without full tests",
            commonMistake: "Not analyzing why you got questions wrong.",
            completionSignal: "You've completed multiple practice tests with consistent improvement."
          }
        ],
        reflection: "What areas of the exam still need work? What's your focused plan?"
      }
    ]
  },
  {
    id: "career",
    title: "Career & Life Planning",
    description: "Design a fulfilling direction for your studies, skills, and future. Clarity over ambition.",
    icon: "🧭",
    color: "highlight",
    duration: "Ongoing",
    phases: [
      {
        name: "Phase 1: Self-Assessment",
        description: "Understand yourself before choosing a direction.",
        steps: [
          {
            title: "Identify your values",
            instruction: "List what matters most to you in life and work. Rank them. Be honest, not aspirational.",
            focus: "Values guide decisions. Know them before making big choices.",
            avoid: "Choosing values because they sound good",
            commonMistake: "Copying others' values instead of discovering your own.",
            completionSignal: "You have a ranked list of your top 5 core values."
          },
          {
            title: "Map your strengths and interests",
            instruction: "List activities where you lose track of time. Note skills others compliment you on. Look for patterns.",
            focus: "Sustainable careers build on genuine strengths and interests.",
            avoid: "Only considering what pays well or sounds impressive",
            commonMistake: "Ignoring soft skills and focusing only on technical abilities.",
            completionSignal: "You have a clear list of your top strengths and genuine interests."
          }
        ],
        reflection: "What surprised you about yourself in this assessment? What patterns emerged?"
      },
      {
        name: "Phase 2: Skill Mapping",
        description: "Understand the skills market and your position in it.",
        steps: [
          {
            title: "Research fields that match your interests",
            instruction: "Investigate 3-5 career fields. Talk to people in those fields. Understand day-to-day reality.",
            focus: "Real information beats assumptions. Talk to actual practitioners.",
            avoid: "Relying only on job descriptions or media portrayals",
            commonMistake: "Not reaching out to real people in the field.",
            completionSignal: "You've had conversations with people in fields you're considering."
          },
          {
            title: "Identify skill gaps",
            instruction: "Compare your current skills to what's needed in your target fields. Make a priority list of what to learn.",
            focus: "Targeted skill development beats random learning.",
            avoid: "Trying to learn everything at once",
            commonMistake: "Overemphasizing formal credentials vs. practical skills.",
            completionSignal: "You have a prioritized list of skills to develop."
          }
        ],
        reflection: "What skills are most important for your direction? What's your learning plan?"
      },
      {
        name: "Phase 3: Opportunities",
        description: "Find and create opportunities aligned with your direction.",
        steps: [
          {
            title: "Build in public",
            instruction: "Share your learning journey and work publicly. Write, post, or create where others can see your growth.",
            focus: "Opportunities often come from visibility, not just applications.",
            avoid: "Waiting until you're 'expert enough' to share",
            commonMistake: "Not documenting your progress and projects.",
            completionSignal: "You have a public presence showing your work and learning."
          },
          {
            title: "Create a portfolio of proof",
            instruction: "Document projects, achievements, and learning. Show what you've done, not just what you claim.",
            focus: "Evidence of ability matters more than descriptions of ability.",
            avoid: "Empty claims without demonstrated work",
            commonMistake: "Not presenting your work in an accessible way.",
            completionSignal: "You have a portfolio or collection of work you can share."
          }
        ],
        reflection: "What opportunities have come from your visibility? What else could you share?"
      },
      {
        name: "Phase 4: Continuous Growth",
        description: "Build systems for ongoing development and adaptation.",
        steps: [
          {
            title: "Schedule regular reflection",
            instruction: "Monthly, review what's working and what isn't. Adjust your direction based on new information.",
            focus: "Plans should evolve. Regular reflection keeps you on course.",
            avoid: "Sticking rigidly to plans that aren't working",
            commonMistake: "Not making time for strategic thinking.",
            completionSignal: "You have a monthly reflection practice in place."
          },
          {
            title: "Build a learning system",
            instruction: "Create ongoing habits for skill development. Allocate time weekly for learning new things in your field.",
            focus: "Continuous learning is a career survival skill.",
            avoid: "Only learning during formal education periods",
            commonMistake: "Letting learning slide when busy with work.",
            completionSignal: "You have a sustainable weekly learning routine."
          }
        ],
        reflection: "How has your direction clarified? What will you focus on in the next quarter?"
      }
    ]
  }
];

export const RESOURCES = [
  {
    category: "Programming",
    description: "Learn to code from fundamentals to advanced concepts.",
    icon: "💻",
    items: [
      {
        title: "Free Programming Courses",
        purpose: "Structured learning paths for absolute beginners to intermediate programmers.",
        howToUse: "Choose one course and complete it fully before starting another. Consistency beats variety.",
        actionableAdvice: "Start with Python or JavaScript. Pick one language and stick with it for 3 months minimum."
      },
      {
        title: "Interactive Coding Platforms",
        purpose: "Learn by doing with immediate feedback on your code.",
        howToUse: "Use daily for at least 20-30 minutes. The key is consistent practice, not marathon sessions.",
        actionableAdvice: "Complete easy challenges until they feel automatic, then move to medium difficulty."
      },
      {
        title: "Project-Based Learning",
        purpose: "Build real things to cement your knowledge and create portfolio pieces.",
        howToUse: "After learning basics, build small complete projects. Document your process.",
        actionableAdvice: "Start with a simple project you can finish in a weekend. Ship it, then iterate."
      }
    ]
  },
  {
    category: "Cybersecurity",
    description: "Build security knowledge from IT fundamentals to ethical hacking.",
    icon: "🔐",
    items: [
      {
        title: "Security Fundamentals Courses",
        purpose: "Build foundational knowledge in IT security concepts and practices.",
        howToUse: "Complete foundational IT training before specialized security content.",
        actionableAdvice: "Get comfortable with Linux command line and networking before studying security."
      },
      {
        title: "Practice Platforms",
        purpose: "Legally practice security skills in controlled environments.",
        howToUse: "Start with beginner rooms and work up. Document what you learn in notes.",
        actionableAdvice: "Spend time understanding why attacks work, not just how to execute them."
      },
      {
        title: "Certifications Prep",
        purpose: "Prepare for industry-recognized security certifications.",
        howToUse: "Use after building practical skills. Certifications validate, but don't replace, real knowledge.",
        actionableAdvice: "Start with CompTIA Security+ or similar entry-level certifications."
      }
    ]
  },
  {
    category: "English & Communication",
    description: "Improve language skills for academic, professional, and everyday use.",
    icon: "🗣️",
    items: [
      {
        title: "Daily English Practice",
        purpose: "Build fluency through consistent, low-pressure exposure.",
        howToUse: "Listen to podcasts during commutes. Read articles in English daily.",
        actionableAdvice: "Change your phone and social media to English. Immersion accelerates learning."
      },
      {
        title: "Speaking Practice Tools",
        purpose: "Develop speaking confidence and pronunciation.",
        howToUse: "Use language exchange apps or AI conversation tools daily. Focus on output.",
        actionableAdvice: "Record yourself speaking and listen back. You'll improve faster by hearing your patterns."
      },
      {
        title: "Writing Improvement",
        purpose: "Develop clear, effective written communication.",
        howToUse: "Write something every day. Use grammar tools for feedback, but learn the rules.",
        actionableAdvice: "Keep a journal in English. Review and rewrite old entries to see improvement."
      },
      {
        title: "Exam Preparation",
        purpose: "Targeted preparation for IELTS, TOEFL, Cambridge exams, etc.",
        howToUse: "Learn exam format first. Practice under timed conditions. Review every mistake.",
        actionableAdvice: "Take a diagnostic test first to identify weak areas. Focus practice there."
      }
    ]
  },
  {
    category: "Study Skills",
    description: "Learn how to learn more effectively and efficiently.",
    icon: "📚",
    items: [
      {
        title: "Active Recall Techniques",
        purpose: "Remember more by practicing retrieval instead of passive review.",
        howToUse: "After studying, close your notes and write what you remember. Check and correct.",
        actionableAdvice: "Use flashcards, but make your own. The creation process is part of learning."
      },
      {
        title: "Spaced Repetition Systems",
        purpose: "Optimize review timing for long-term memory.",
        howToUse: "Use apps like Anki or create a simple manual system. Review consistently.",
        actionableAdvice: "Start with just 20 new cards per day maximum. Consistency beats volume."
      },
      {
        title: "Focus & Productivity",
        purpose: "Develop deep focus and reduce distractions.",
        howToUse: "Use techniques like Pomodoro. Design your environment to reduce willpower needs.",
        actionableAdvice: "Put your phone in another room during study sessions. Out of sight, out of mind."
      },
      {
        title: "Note-Taking Methods",
        purpose: "Capture information in ways that support understanding and review.",
        howToUse: "Experiment with methods like Cornell notes, mind maps, or the Zettelkasten system.",
        actionableAdvice: "Take notes in your own words. Copying verbatim is not learning."
      }
    ]
  }
];

export const APP_HUB_ITEMS = [
  {
    category: "Application Documents",
    items: [
      {
        title: "CV & Resume Basics",
        description: "Create a clear, effective CV that highlights your strengths.",
        steps: [
          "Lead with impact: Put most relevant experience first",
          "Quantify achievements: Use numbers where possible",
          "Tailor for each application: Match keywords from job description",
          "Keep it scannable: Clear sections, consistent formatting",
          "Proofread twice: Errors suggest carelessness"
        ]
      },
      {
        title: "Cover Letter Framework",
        description: "Write compelling cover letters that get read.",
        steps: [
          "Open with why this specific role: Show you've researched",
          "Connect your experience to their needs: Make it about them",
          "Give one specific example: Evidence over claims",
          "Close with clear next steps: What you want to happen",
          "Keep it to one page: Respect their time"
        ]
      }
    ]
  },
  {
    category: "Communication Templates",
    items: [
      {
        title: "Professional Email Structure",
        description: "Write clear, professional emails that get responses.",
        steps: [
          "Clear subject line: Specific and scannable",
          "One ask per email: Don't bury the request",
          "Front-load the important information: TL;DR at top",
          "Keep paragraphs short: Max 3-4 lines",
          "End with clear action: What should they do next?"
        ]
      },
      {
        title: "Follow-up Templates",
        description: "Professional ways to follow up without being pushy.",
        steps: [
          "Wait appropriate time: 3-5 business days typically",
          "Reference previous communication: Make it easy to find",
          "Add value if possible: New information or insight",
          "Keep it short: One paragraph is often enough",
          "Have a backup plan: What if they don't respond?"
        ]
      }
    ]
  },
  {
    category: "Planning Frameworks",
    items: [
      {
        title: "Weekly Planning Template",
        description: "Start each week with clarity on priorities.",
        steps: [
          "Review last week: What worked, what didn't?",
          "Identify top 3 priorities: What must happen this week?",
          "Block time for priorities: Put them in the calendar first",
          "Plan buffer time: Things always take longer than expected",
          "Set one learning goal: What will you improve this week?"
        ]
      },
      {
        title: "Decision-Making Framework",
        description: "Make better decisions with less stress.",
        steps: [
          "Define the decision clearly: What exactly are you choosing?",
          "List options: Include 'do nothing' as an option",
          "Identify criteria that matter: What makes a choice good?",
          "Set a deadline: Prevent endless deliberation",
          "Commit and review: Decide, act, then evaluate later"
        ]
      }
    ]
  }
];
