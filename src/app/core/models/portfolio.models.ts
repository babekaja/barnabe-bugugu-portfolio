export type ProjectCategory = 'Web' | 'Mobile' | 'IA' | 'IoT';

export interface SocialLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'mail';
}

export interface SkillGroup {
  title: string;
  icon: 'code' | 'smartphone' | 'database' | 'brain';
  skills: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  label?: string;
}

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  liveUrl?: string;
  videoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  meta?: string;
  images?: ProjectImage[];
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface Education {
  period: string;
  title: string;
  institution: string;
  location: string;
  detail?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  detail?: string;
}

export interface LanguageLevel {
  language: string;
  label: string;
  level: number;
}

export interface Engagement {
  title: string;
  organization: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
