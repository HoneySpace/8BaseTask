export interface IPost {
  id: string
  title: string
  createdAt: Date

  tags: {
    items: string[]
  }

  thumbnail: {
    downloadUrl: string
  }

  comments?: {
    items: IComment[]
  }
}

export interface IComment {
  content: string
  createdAt: Date
}

export interface IPostList {
  items: IPost[]
}

export enum ETag {
  food = "Еда",
  spots = "Места",
  cats = "Коты",
}
