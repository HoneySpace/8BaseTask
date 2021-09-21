import { useRouter } from "next/dist/client/router";
import { MutableRefObject, useRef, useState } from "react";
import LoaderIcon from "../../components/icons/loader";
import ItemCard from "../../components/itemCard";
import { useAddComment } from "../../hooks/useAddComment";
import { usePostInfo } from "../../hooks/usePostInfo";
import { IPost } from "../../interfaces";

const Post = () => {
  const router = useRouter()
  const { postId } = router.query

  const [commentText, setCommentText] = useState("")

  const { loading, error, data } = usePostInfo(postId as string, { pollInterval: 500 })
  const [addComment, { loading: addCommentLoading, error: addCommentError }] = useAddComment()

  const sendComment = () => {
    if (commentText.length < 1) {
      alert("Невозмоно отправить пустой комментарий")
      return
    }

    addComment({
      variables: {
        text: commentText,
        postId: postId
      }
    })

    setCommentText("")
  }

  if (error)
    return <div className="bg-indigo-900 place-items-center grid text-white w-full h-full ">
      <div>
        Возникла ошибка :с
      </div>
    </div>

  return (
    <div className="bg-indigo-900 w-full h-full grid grid-cols-12" >
      <div className="col-span-6 col-start-4 bg-yellow-400 px-4 pb-4 text-white font-medium">
        {loading ? <div className="h-screen w-full grid place-items-center">
          <div className="h-16">
            <LoaderIcon />
          </div>
        </div>
          :
          <><ItemCard readMoreOff {...data?.postsList.items[0] as IPost} />
            <div className="w-full flex">
              <div className="border border-white px-3 py-1.5 rounded mr-2 w-full">
                <textarea
                  value={commentText}
                  onChange={(e) => { setCommentText(e.target.value) }}
                  placeholder="Your comment"
                  className="bg-transparent max-h-64 outline-none styled-scroll w-full"
                  style={{ caretColor: "#fff" }}
                />
              </div>
              <button onClick={sendComment} className="border border-white px-3 py-1.5 rounded">
                {addCommentLoading ? <div className="h-5"><LoaderIcon /></div> : "Send"}
              </button>
            </div>
            <div>
              <div className="text-3xl my-4">
                Comments
              </div>
              <div>
                {data?.postsList.items[0]?.comments?.items.map(comment =>
                  <div className="mb-4">
                    <div className="text-lg">
                      {(new Date(comment.createdAt)).toLocaleString()}
                    </div>
                    <div className="">
                      {comment.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>}
      </div>
    </div >
  );
}

export default Post