import { useRouter } from "next/dist/client/router";
import { usePostInfo } from "../../hooks/usePostInfo";

const Post = () => {
  const router = useRouter()
  const { postId } = router.query

  const { loading, error, data } = usePostInfo(postId as string, { pollInterval: 500 })

  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>

  console.log(data)

  return (
    <div>
      {postId}
    </div>
  );
}

export default Post