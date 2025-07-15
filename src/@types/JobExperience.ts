export class JobExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  link: string;
  tags: string[];
  constructor(
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string[],
    link: string,
    tags: string[]
  ) {
    this.title = title;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.link = link;
    this.tags = tags;
  }
}
