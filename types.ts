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
}

export interface Archetype {
  title: string;
  description: string;
  traits: string[];
}