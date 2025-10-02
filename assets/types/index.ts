export interface Stack {
  title: string;
  img: string;
}

export interface Experience {
  title: string;
  description: string;
  img: string;
  startDate: Date | string;
  endDate: Date | string;
  stacks?: Stack[];
}

export interface Language {
  name: string;
  level: string;
  img: string;
}

export interface Avatar {
  img: string;
  alt: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  avatar: Avatar;
  socials: Social[];
}
