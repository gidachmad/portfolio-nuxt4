export interface experienceTypes {
  company: string;
  role: string;
  desc: string;
  start_date: string | number;
  end_date: string | number;
  skills: string[];
  proof?: string;
}

export interface projectTypes {
  title: string;
  role?: string;
  link: string;
  desc: string;
  // year: string | number;
  skills?: string[];
}
