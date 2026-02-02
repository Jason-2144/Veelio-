import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the mountain you are climbing?",
    type: 'single',
    microcopy: "The pressure curve is different for every exam.",
    options: [
      { id: 'jee', label: 'JEE (Main + Advanced)' },
      { id: 'neet', label: 'NEET' },
      { id: 'other', label: 'Other Competitive Exams' }
    ]
  },
  {
    id: 2,
    question: "Where do you stand academically?",
    type: 'single',
    microcopy: "A 12th grader has different constraints than a dropper.",
    options: [
      { id: '11', label: 'Class 11', subtext: 'Just started, overwhelmed' },
      { id: '12', label: 'Class 12', subtext: 'Boards + Prep juggling' },
      { id: 'dropper', label: 'Dropper', subtext: 'One shot, high stakes' }
    ]
  },
  {
    id: 3,
    question: "When does your brain actually come alive?",
    type: 'single',
    microcopy: "Fighting your biology guarantees burnout.",
    options: [
      { id: 'lark', label: 'Early Bird', subtext: '5:00 AM - 12:00 PM focus' },
      { id: 'owl', label: 'Night Owl', subtext: '10:00 PM - 3:00 AM focus' },
      { id: 'afternoon', label: 'Afternoon Warrior', subtext: 'Mid-day energy spikes' }
    ]
  },
  {
    id: 4,
    question: "Be honest. How long until you reach for your phone?",
    type: 'single',
    microcopy: "We need to set your breaks before your brain forces them.",
    options: [
      { id: 'low', label: '15-20 Minutes', subtext: 'Highly distracted' },
      { id: 'med', label: '45 Minutes', subtext: 'Standard endurance' },
      { id: 'high', label: '90+ Minutes', subtext: 'Deep work state' }
    ]
  },
  {
    id: 5,
    question: "How much sleep did you average in the last 7 days?",
    type: 'single',
    microcopy: "Sleep debt kills recall. We need to know the damage.",
    options: [
      { id: 'starved', label: '< 5 Hours', subtext: 'Danger zone' },
      { id: 'low', label: '5-6 Hours', subtext: 'Survival mode' },
      { id: 'good', label: '7+ Hours', subtext: 'Optimal recovery' }
    ]
  },
  {
    id: 6,
    question: "What is your silent killer right now?",
    type: 'single',
    microcopy: "Identifying the enemy is 50% of the battle.",
    options: [
      { id: 'proc', label: 'Procrastination', subtext: 'Starting is the hardest part' },
      { id: 'burn', label: 'Burnout', subtext: 'Working hard, retaining nothing' },
      { id: 'anx', label: 'Exam Anxiety', subtext: 'Fear of failure paralyzes me' },
      { id: 'backlog', label: 'Backlogs', subtext: 'Drowning in old chapters' }
    ]
  },
  {
    id: 7,
    question: "Where are you fighting this war?",
    type: 'single',
    microcopy: "Your environment dictates your discipline.",
    options: [
      { id: 'home', label: 'Home', subtext: 'Comfortable but distracting' },
      { id: 'hostel', label: 'Hostel / PG', subtext: 'Social chaos, low privacy' }
    ]
  },
  {
    id: 8,
    question: "What takes your non-negotiable hours?",
    type: 'single',
    microcopy: "We build around your life, not over it.",
    options: [
      { id: 'school', label: 'Regular School', subtext: '6-7 hours gone' },
      { id: 'coaching', label: 'Offline Coaching', subtext: 'Travel + Class fatigue' },
      { id: 'dummy', label: 'Dummy School / Online', subtext: 'All day available' }
    ]
  },
  {
    id: 9,
    question: "How do you prefer to attack a chapter?",
    type: 'single',
    microcopy: "Your flow state requires the right rhythm.",
    options: [
      { id: 'sprint', label: 'Sprints', subtext: 'Short bursts, high intensity' },
      { id: 'marathon', label: 'Marathons', subtext: 'Long, uninterrupted sessions' }
    ]
  },
  {
    id: 10,
    question: "On a scale of 1-10, what is your current stress level?",
    type: 'slider',
    microcopy: "This calibrates the intensity of your initial plan.",
    minLabel: "Zen Mode (Aggressive Plan)",
    maxLabel: "Panic Mode (Protective Plan)"
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