import { SkillGroup } from "../model/skill";
import * as skills from "../model/skill";

export const skillGroups: SkillGroup[] = [
  {
    name: "Language",
    skills: [skills.go, skills.typescript, skills.javascript, skills.php],
  },
  {
    name: "Framework / Library",
    skills: [skills.gin, skills.laravel, skills.react, skills.nextjs],
  },
  {
    name: "Cloud",
    skills: [skills.aws],
  },
  {
    name: "CI / CD",
    skills: [skills.githubActions],
  },
  {
    name: "Other",
    skills: [skills.docker],
  },
];
