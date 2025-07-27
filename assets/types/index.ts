export interface Stack {
  title: string;
  img: string;
}

export interface Experience {
  title: string;
  description: string;
  img: string;
  startDate: string;
  endDate: string;
  stacks?: Stack[];
}