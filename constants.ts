import { Question, ContentModule } from './types';

export const CORE_MAPPING: Record<string, Record<string, ContentModule>> = {
  'jee': {
    '11': {
      id: 'jee-11',
      title: 'JEE Class 11 Core System',
      description: 'Your personalized study system for JEE Class 11.',
      file: 'JEE-11TH-GRADE-CORE-SYSTEM.pdf',
      type: 'core'
    },
    '12': {
      id: 'jee-12',
      title: 'JEE Class 12 Core System',
      description: 'Your personalized study system for JEE Class 12.',
      file: 'JEE-Class-12-Core-Study-System.pdf',
      type: 'core'
    },
    'dropper': {
      id: 'jee-dropper',
      title: 'JEE Dropper Core System',
      description: 'Your personalized study system for JEE Droppers.',
      file: 'JEE-Dropper-Core-Study-System.pdf',
      type: 'core'
    },
    'revision': {
      id: 'jee-revision',
      title: 'JEE War Plan (Revision)',
      description: '90-120 Day War Plan for Final Revision.',
      file: 'JEE-90-120-Day-WAR-PLAN.pdf',
      type: 'core'
    }
  },
  'neet': {
    '11': {
      id: 'neet-11',
      title: 'NEET Class 11 Core System',
      description: 'Your personalized study system for NEET Class 11.',
      file: 'NEET-11th-GRADE-CORE-SYSTEM.pdf',
      type: 'core'
    },
    '12': {
      id: 'neet-12',
      title: 'NEET Class 12 Core System',
      description: 'Your personalized study system for NEET Class 12.',
      file: 'NEET-12th-Grade-Core-Study-System.pdf',
      type: 'core'
    },
    'dropper': {
      id: 'neet-dropper',
      title: 'NEET Dropper Core System',
      description: 'Your personalized study system for NEET Droppers.',
      file: 'NEET-Dropper-Core-Study-System.pdf',
      type: 'core'
    },
    'revision': {
      id: 'neet-revision',
      title: 'NEET War Plan (Revision)',
      description: '90-10 Day War Plan for Final Revision.',
      file: 'NEET-90-10-Day-WAR-PLAN-core-study-system.pdf',
      type: 'core'
    }
  }
};

export const MODIFIER_MAPPING: Record<number, Record<string, ContentModule>> = {
  6: { // Question 6: Focus Time
    'morning': {
      id: 'mod-dawn',
      title: 'The DawnCore Protocol',
      description: 'Optimizing your early morning focus sessions.',
      file: 'DAWNCORE modifier.pdf',
      type: 'modifier'
    },
    'night': {
      id: 'mod-night',
      title: 'Night Owl Time Modifier',
      description: 'Maximizing productivity during late night hours.',
      file: 'Night-Owl-Time-Modifier.pdf',
      type: 'modifier'
    }
  },
  8: { // Question 8: Focus Duration
    '45_plus': {
      id: 'mod-focus-high',
      title: 'High Focus Modifier',
      description: 'Advanced techniques for prolonged deep work sessions.',
      file: 'High-Focus-Modifier.pdf',
      type: 'modifier'
    },
    '25_45': {
      id: 'mod-focus-med',
      title: 'High Focus Modifier',
      description: 'Advanced techniques for prolonged deep work sessions.',
      file: 'High-Focus-Modifier.pdf',
      type: 'modifier'
    },
    '10_25': {
      id: 'mod-focus-low',
      title: 'Low Focus Modifier',
      description: 'Strategies to build your attention span from scratch.',
      file: 'Low-Focus-Modifier.pdf',
      type: 'modifier'
    },
    'less_10': {
      id: 'mod-focus-crit',
      title: 'Low Focus Modifier',
      description: 'Strategies to build your attention span from scratch.',
      file: 'Low-Focus-Modifier.pdf',
      type: 'modifier'
    }
  },
  23: { // Question 23: Athlete
    'yes': {
      id: 'mod-athlete',
      title: 'The Athlete Modifier',
      description: 'Balancing intense physical training with academic excellence.',
      file: 'ATHLETE-MODIFIER.pdf',
      type: 'modifier'
    }
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Which exam are you currently preparing for?",
    type: 'single',
    microcopy: "Different exams require different strategies.",
    options: [
      { id: 'jee', label: 'JEE' },
      { id: 'neet', label: 'NEET' },
      { id: 'jee_boards', label: 'JEE + Boards' },
      { id: 'neet_boards', label: 'NEET + Boards' }
    ]
  },
  {
    id: 2,
    question: "What stage are you in right now?",
    type: 'single',
    microcopy: "A dropper's timeline is very different from a 12th grader's.",
    options: [
      { id: '11', label: 'Class 11' },
      { id: '12', label: 'Class 12' },
      { id: 'dropper', label: 'Dropper' },
      { id: 'revision', label: 'Final months / revision phase' }
    ]
  },
  {
    id: 3,
    question: "How many months do you realistically have left before your exam?",
    type: 'single',
    microcopy: "Time is your most valuable asset.",
    options: [
      { id: '15_plus', label: '15+ months' },
      { id: '10_12', label: '10–12 months' },
      { id: '8_10', label: '8–10 months' },
      { id: '4_6', label: '4–6 months' },
      { id: '2_3', label: '2–3 months' }
    ]
  },
  {
    id: 4,
    question: "Right now, how do you feel about your preparation?",
    type: 'single',
    microcopy: "Honesty is the first step to improvement.",
    options: [
      { id: 'ahead', label: 'Ahead of schedule' },
      { id: 'on_track', label: 'On track' },
      { id: 'behind', label: 'Slightly behind' },
      { id: 'very_behind', label: 'Very behind' }
    ]
  },
  {
    id: 5,
    question: "If the exam were tomorrow, how confident would you honestly feel?",
    type: 'single',
    microcopy: "Confidence comes from preparation.",
    options: [
      { id: 'high', label: 'High' },
      { id: 'moderate', label: 'Moderate' },
      { id: 'low', label: 'Low' }
    ]
  },
  {
    id: 6,
    question: "When do you naturally feel most focused?",
    type: 'single',
    microcopy: "Work with your biology, not against it.",
    options: [
      { id: 'morning', label: 'Early mornings' },
      { id: 'night', label: 'Late nights' },
      { id: 'varies', label: 'It varies day to day' }
    ]
  },
  {
    id: 7,
    question: "Do you currently follow a fixed daily study routine?",
    type: 'single',
    microcopy: "Consistency beats intensity.",
    options: [
      { id: 'yes', label: 'Yes, mostly consistent' },
      { id: 'somewhat', label: 'Somewhat consistent' },
      { id: 'no', label: 'No, every day is different' }
    ]
  },
  {
    id: 8,
    question: "How long can you usually study before zoning out?",
    type: 'single',
    microcopy: "Knowing your limit helps us plan breaks.",
    options: [
      { id: '45_plus', label: '45+ minutes' },
      { id: '25_45', label: '25–45 minutes' },
      { id: '10_25', label: '10–25 minutes' },
      { id: 'less_10', label: 'Less than 10 minutes' }
    ]
  },
  {
    id: 9,
    question: "Do you feel restless while studying?",
    type: 'single',
    microcopy: "Restlessness is a sign of underlying stress.",
    options: [
      { id: 'often', label: 'Very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 10,
    question: "Do you feel mentally tired even when you are physically fine?",
    type: 'single',
    microcopy: "Mental fatigue is just as real as physical fatigue.",
    options: [
      { id: 'often', label: 'Very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 11,
    question: "Does one bad study day affect multiple days after it?",
    type: 'single',
    microcopy: "Recovery speed defines your long-term success.",
    options: [
      { id: 'yes', label: 'Yes, very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 12,
    question: "Do you feel motivated but inconsistent with your studies?",
    type: 'single',
    microcopy: "Motivation gets you started. Habit keeps you going.",
    options: [
      { id: 'yes', label: 'Yes, very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 13,
    question: "Do you try to compensate by studying extreme hours?",
    type: 'single',
    microcopy: "Revenge studying often leads to burnout.",
    options: [
      { id: 'yes', label: 'Yes, frequently' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 14,
    question: "Have you abandoned study plans midway before?",
    type: 'single',
    microcopy: "The best plan is the one you stick to.",
    options: [
      { id: 'yes', label: 'Yes, many times' },
      { id: 'few', label: 'A few times' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 15,
    question: "Do you over-study subjects you like and avoid weaker ones?",
    type: 'single',
    microcopy: "Comfort zones effectively kill growth.",
    options: [
      { id: 'yes', label: 'Yes, very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 16,
    question: "Do you study daily without having a clear weekly structure?",
    type: 'single',
    microcopy: "Failing to plan is planning to fail.",
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'no', label: 'No' }
    ]
  },
  {
    id: 17,
    question: "How do you usually revise?",
    type: 'single',
    microcopy: "Revision is not just re-reading.",
    options: [
      { id: 'systematic', label: 'Systematically (planned revisions)' },
      { id: 'random', label: 'Randomly (whenever I feel like it)' },
      { id: 'rarely', label: 'I rarely revise properly' }
    ]
  },
  {
    id: 18,
    question: "Do you avoid taking tests until you feel “ready”?",
    type: 'single',
    microcopy: "You will never feel 100% ready.",
    options: [
      { id: 'yes', label: 'Yes, very often' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', label: 'Rarely' },
      { id: 'never', label: 'Never' }
    ]
  },
  {
    id: 19,
    question: "Have you ever followed a study system that worked for more than two weeks?",
    type: 'single',
    microcopy: "Sustainability is key.",
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'no', label: 'No' },
      { id: 'unsure', label: 'Not sure' }
    ]
  },
  {
    id: 20,
    question: "Did that system adapt to bad or low-energy days?",
    type: 'single',
    microcopy: "Rigid systems break under pressure.",
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'somewhat', label: 'Somewhat' },
      { id: 'no', label: 'No' },
      { id: 'none', label: 'I haven’t had such a system' }
    ]
  },
  {
    id: 21,
    question: "Are you willing to follow a system even on bad days?",
    type: 'single',
    microcopy: "Commitment is staying true to the plan when the mood leaves you.",
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'maybe', label: 'Maybe' },
      { id: 'no', label: 'No' }
    ]
  },
  {
    id: 22,
    question: "What do you want right now?",
    type: 'single',
    microcopy: "Let's build what you need.",
    options: [
      { id: 'fixed', label: 'A fixed timetable to follow' },
      { id: 'flexible', label: 'A flexible system that adapts to bad days' }
    ]
  },
  {
    id: 23,
    question: "Are you a competitive athlete or do you participate in intense daily sports training?",
    type: 'single',
    microcopy: "Physical fatigue requires a different study strategy.",
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'no', label: 'No' }
    ]
  }
];

export const LOADER_MESSAGES = [
  "Analyzing your daily energy patterns...",
  "Mapping focus strength and attention limits...",
  "Adjusting for sleep debt and fatigue...",
  "Detecting burnout risk signals...",
  "Filtering out unrealistic topper routines...",
  "Balancing discipline with recovery needs...",
  "Optimizing study intensity for sustainability...",
  "Aligning subject order with mental freshness...",
  "Designing a system you can repeat daily...",
  "Finalizing your personalized study architecture..."
];

export const PAYWALL_FEATURES = [
  {
    title: "Daily Flow Timeline",
    desc: "Hour-by-hour alignment with your biology."
  },
  {
    title: "Focus Rule",
    desc: "Matched to your actual attention span."
  },
  {
    title: "Energy Protection",
    desc: "Strategic breaks to prevent 2 PM crashes."
  },
  {
    title: "Phone Control",
    desc: "Hard limits that don't rely on willpower."
  },
  {
    title: "Weekly Reset",
    desc: "The Sunday protocol to clear backlogs."
  }
];