export interface IJobItem {
  job_id: number;
  video_id: number;
  video_url: string;
  title: string;
  description: string;
  country: string;
  city: string;
  continent: string;
  company: string;
  company_logo_url: string;
  start_salary: number;
  end_salary: number;
  currency: string;
  required_skills: string[];
  posted_date: string;
  deadline_date: string;
}