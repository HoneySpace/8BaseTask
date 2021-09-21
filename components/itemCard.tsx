import { IPost } from "../interfaces";
import Link from "next/link"

interface ItemCardProps extends IPost {
  readMoreOff?: boolean
}

const ItemCard = ({ createdAt, id, tags, thumbnail, title, readMoreOff = false }: ItemCardProps) => {
  return (
    <div className="m-10">
      <div className="mb-4 text-white">
        <div className="text-3xl font-semibold  uppercase font-mono">
          {title}
        </div>
        <div className="flex items-baseline">
          <div className="mr-4">
            {(new Date(createdAt)).toLocaleString()}
          </div>
          {!readMoreOff && <Link href={`/post/${id}`}>
            <div className="font-sans hover:text-indigo-700 transition-all cursor-pointer link-underline">
              Read more
            </div>
          </Link>}
        </div>
      </div>
      <img className="w-full" src={thumbnail.downloadUrl} alt={title} />
    </div>
  );
}

export default ItemCard