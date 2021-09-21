export const qwq = "qw"
import { useQuery } from "@apollo/client"
import { IPostList } from "../interfaces"
import { POSTS_QUERY } from "../queries"

export const usePostInfo = (options?: any) => {
  return useQuery<{ postsList: IPostList }>(POSTS_QUERY, {
    ...options,
  })
}
