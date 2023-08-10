export type Skill = {
    name: string;
    url: string;
    imageSrc: string;
  };

  export type SkillGroup = {
    name: string;
    skills: Skill[];
  };

  /*
   * language
   */

  export const go: Skill = {
    name: "Go",
    url: "https://golang.org/",
    imageSrc: "/images/skill/go.svg",
  };

  export const typescript: Skill = {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    imageSrc: "/images/skill/typescript.svg",
  };

  export const javascript: Skill = {
    name: "JavaScript",
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
    imageSrc: "/images/skill/javascript.svg",
  };

  export const php: Skill = {
    name: "PHP",
    url: "",
    imageSrc: "",
  };

  /*
   * framework/library
   */

  export const gin: Skill = {
    name: "Gin",
    url: "https://gin-gonic.com/",
    imageSrc: "/images/skill/gin.svg",
  };

  export const laravel: Skill = {
    name: "Laravel",
    url: "https://laravel.com/",
    imageSrc: "/images/skill/laravel.svg",
  };

  export const react: Skill = {
    name: "React",
    url: "https://reactjs.org/",
    imageSrc: "/images/skill/react.svg",
  };

  export const nextjs: Skill = {
    name: "Next.js",
    url: "https://nextjs.org/",
    imageSrc: "/images/skill/nextjs.svg",
  };

  export const mantine: Skill = {
    name: "Mantine",
    url: "https://mantine.dev/",
    imageSrc: "/images/skill/mantine.svg",
  };

  export const materialui: Skill = {
    name: "Material UI",
    url: "http://material-ui.com/",
    imageSrc: "/images/skill/materialui.svg",
  };


  export const cobra: Skill = {
    name: "Cobra",
    url: "https://cobra.dev/",
    imageSrc: "/images/skill/cobra.png",
  };


  /*
   * cloud
   */

  export const aws: Skill = {
    name: "AWS",
    url: "https://aws.amazon.com/",
    imageSrc: "/images/skill/aws.svg",
  };


  /*
   * ci/cd
   */

  export const githubActions: Skill = {
    name: "GitHub Actions",
    url: "https://github.co.jp/features/actions",
    imageSrc: "/images/skill/githubactions.svg",
  };

  /*
   * other
   */

  export const docker: Skill = {
    name: "Docker",
    url: "https://www.docker.com/",
    imageSrc: "/images/skill/docker.svg",
  };

  export const serverless: Skill = {
    name: "Serverless",
    url: "https://serverless.com/",
    imageSrc: "/images/skill/serverless.svg",
  };
