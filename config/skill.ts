import { SkillGroup } from '../model/skill'
import * as skills from '../model/skill'

export const skillGroups: SkillGroup[] = [
  {
    name: 'Language',
    skills: [skills.go, skills.typescript, skills.python, skills.php]
  },
  {
    name: 'Framework / Library',
    skills: [
      skills.gin,
      skills.grpc,
      skills.graphql,
      skills.laravel,
      skills.react,
      skills.nextjs,
      skills.vue2,
      skills.nuxtjs,
      skills.flask,
      skills.slim
    ]
  },
  {
    name: 'Cloud',
    skills: [skills.aws]
  },
  {
    name: 'CI / CD',
    skills: [
      skills.githubActions,
      skills.argoCD
    ]
  },
  {
    name: 'Other',
    skills: [
      skills.postgres,
      skills.redis,
      skills.kafka,
      skills.docker,
      skills.kubernetes,
      skills.etcd,
      skills.k6,
      skills.helm,
      skills.istio,
      skills.strimzi,
      skills.vault,
    ]
  }
]
