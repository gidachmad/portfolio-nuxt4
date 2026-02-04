export interface experienceTypes {
  company: string;
  role: string;
  desc: string;
  desc_list: string[];
  start_date: string | number;
  end_date: string | number;
  skills: string[];
  proof?: string;
}

type ProjectKind = "normal" | "pixel-art" | "video";

export interface projectTypes {
  title: string;
  role?: string;
  link: string;
  desc: string;
  kind: ProjectKind;
  skills?: string[];
  examples?: exampleTypes[];
  // year: string | number;
}

export interface exampleTypes {
  name: string;
  url: string;
  youtubeId?: string;
}
