import { User } from '../model/user'
import dayjs from 'dayjs'

const birth = dayjs('1996-03-03')
const age = dayjs().diff(birth, 'years')

export const user: User = {
  name: 'Ryotaro Seto',
  tag: 'Developer',
  description: `日本生まれ日本育ちの ${age} 歳。`,
  email: 'hahahahawaiwai321@gmail.com'
}
