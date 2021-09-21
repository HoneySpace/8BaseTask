import { useMutation } from "@apollo/client"
import { IComment } from "../interfaces"
import { ADD_COMMENT_QUERY } from "../queries"

export const useAddComment = (options?: any) => {
  return useMutation<{ commentCreate: IComment }>(ADD_COMMENT_QUERY)
}
