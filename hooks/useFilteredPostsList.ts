import { useQuery } from "@apollo/client"
import { ETag, IPostList } from "../interfaces"
import { FILTERED_POSTS_QUERY } from "../queries"

export const useFilteredPostsList = (tag: ETag, options?: any) => {
  return useQuery<{ postsList: IPostList }>(FILTERED_POSTS_QUERY, {
    ...options,
    variables: { ...options?.variables, tag },
  })
}
