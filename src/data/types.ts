export interface Option {
  id: string;
  text: string;
  nextQuestionId?: string;
  resultId?: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Result {
  id: string;
  title: string;
  description: string;
  quote: string;
  tags: string[];
}
