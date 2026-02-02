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

export interface UserState {
  step: 'landing' | 'quiz' | 'loader' | 'result';
  answers: Record<number, string | number>;
}

export interface Archetype {
  title: string;
  description: string;
  traits: string[];
}