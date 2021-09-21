import { useQuery } from "@apollo/client"
import { ETag, IPostList } from "../interfaces"
import { FILTERED_POSTS_QUERY } from "../queries"

export const useFilteredPostsList = (tags: ETag[], options?: any) => {
  return useQuery<{ postsList: IPostList }>(FILTERED_POSTS_QUERY(tags), {
    ...options,
  })
}
