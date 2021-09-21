import type { NextPage } from 'next'
import Head from 'next/head'
import { usePostsList } from '../hooks/usePostsList'
import { Virtuoso } from 'react-virtuoso'
import ItemCard from '../components/itemCard'
import { IPost } from '../interfaces'
import FilterIcon from '../components/icons/filter'

const Home: NextPage = () => {
  const { loading, error, data } = usePostsList()

  return (
    <div className="bg-indigo-900 w-screen h-screen grid grid-cols-12" >

      <div className="col-span-6 col-start-4 bg-yellow-400 px-4 pb-4">
        <Virtuoso
          className="styled-scroll"
          style={{ height: "100%" }}
          totalCount={data?.postsList.items.length}
          itemContent={index => <ItemCard {...(data?.postsList.items[index] as IPost)} />}
        />
      </div>
      <div className="col-span-3 col-start-10 p-4">
        <div className="w-8 text-white hover:text-yellow-400 transition-all cursor-pointer">
          <FilterIcon />
        </div>
      </div>
    </div >
  )
}

export default Home
