export interface UserData {
  name: string
  avatarUrl: string
  createdAt: string
  url: string
  login: string
  repositories: Repositories
}

interface Repositories {
  totalCount: number
  totalDiskUsage: number
  nodes: Node[]
}

interface Node {
  name: string
  url: string
}

export interface GitProfileApiResponse {
  data: {
    user: UserData
  }
}
