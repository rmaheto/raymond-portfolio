export interface PortfolioProfile {
  id?: number;
  name: string;
  title: string;
  blurb: string;
  avatarUrl: string;
  aboutMe: string;
  resumeUrl: string;
  resumeFileName?: string;
  activeTheme?: string;
  location: string;
  contactIntro: string;
  footerText: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  facebook: string;
  facebookDisplay: string;
  xHandle: string;
  xDisplay: string;
  instagram: string;
  instagramDisplay: string;
  seo?: { pageTitle: string; description: string };
}

export interface SkillEntry {
  id?: number;
  category: string;
  name: string;
  displayOrder: number;
}

export interface ExperienceEntry {
  id?: number;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  stack?: string;
}

export interface ProjectEntry {
  id?: number;
  name: string;
  description: string;
  tags: string[];
}

export interface CertificationEntry {
  id?: number;
  name: string;
  badgeUrl: string;
  link: string;
}

export interface EducationEntry {
  id?: number;
  name: string;
  school: string;
  years: string;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  skills: Record<string, string[]>;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  education: EducationEntry[];
}
