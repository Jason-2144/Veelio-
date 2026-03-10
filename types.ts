export type QuestionType = 'single' | 'slider';

export interface Option {
  id: string;
  label: string;
  subtext?: string;
}

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: Option[];
  microcopy: string;
  minLabel?: string;
  maxLabel?: string;
}

export interface MetricScores {
  focus: number;
  structure: number;
  burnout: number;
  consistency: number;
  confidence: number;
  energy_pattern: number;
}

export interface Insight {
  title: string;
  description: string;
  icon: string;
}

export interface Archetype {
  title: string;
  description: string;
}

export interface DiagnosticResults {
  metrics: MetricScores;
  archetype: Archetype;
  insights: Insight[];
  assignedCore: string;
  assignedModifiers: string[];
  riskProfile: 'HIGH BURNOUT RISK' | 'MODERATE INSTABILITY' | 'STABLE BUT INEFFICIENT';
  focusPattern: string;
  focusRange: string;
  energyType: string;
  energyWindow: string;
  strategyMismatch: string;
  stressResponse: string;
  timelinePressure: string;
  monthsLeft: string;
  examType: string;
  syllabusRemaining: number;
  coreModule: string;
  modifier1: string;
  modifier2: string;
  modifier3: string;
}

export interface ContentModule {
  id: string;
  title: string;
  description: string;
  file: string;
  type: 'core' | 'modifier';
}

export interface UserState {
  step: 'landing' | 'quiz' | 'loader' | 'result' | 'content';
  answers: Record<number, string | number>;
  unlockedModules?: ContentModule[];
  results?: DiagnosticResults;
}