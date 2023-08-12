import {
    cobra,
    githubActions,
    go,
    githubAPI,
  } from "../model/skill";
  import { WorkGroup } from "../model/work";

  export const workGroups: WorkGroup[] = [
    {
      name: "Web Application",
      works: [
        {
          name: "star-golang-orms",
          description: "golangのO/Rマッパーのスターの数を取得するリポジトリ ⭐️",
          repository: "star-golang-orms",
          skills: [
            go,
            githubAPI,
            githubActions,
          ],
        },
        {
          name: "neko",
          description: "猫を呼び出すコマンド 😺",
          repository: "neko",
          skills: [
            go,
            cobra,
            githubActions,
          ],
        },
      ],
    },
  ];
