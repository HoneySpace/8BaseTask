import type { NextPage } from 'next'
import Head from 'next/head'
import { usePostsList } from '../hooks/usePostsList'
import { Virtuoso } from 'react-virtuoso'
import ItemCard from '../components/itemCard'
import { ETag, IPost } from '../interfaces'
import FilterIcon from '../components/icons/filter'
import ModalWrapper from '../components/ModalWrapper'
import { useContext, useEffect, useState } from 'react'
import { useFilteredPostsList } from '../hooks/useFilteredPostsList'
import FilterSelect from '../components/filterSelect'
import FilterContext from '../context/filter'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const { checked } = useContext(FilterContext)
  const { loading, error, data } = useFilteredPostsList(checked, { pollInterval: 500 })

  useEffect(() => {
    console.log({ data, error });
  })

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
        <div onClick={(e) => { e.stopPropagation(), setModalOpen(true) }} className="w-8 text-white hover:text-yellow-400 transition-all cursor-pointer">
          <FilterIcon />
        </div>
      </div>
      <ModalWrapper open={modalOpen} onClose={(e) => setModalOpen(false)} >
        <div className="rounded-lg p-8 drop-shadow-md bg-white">
          <FilterSelect />
        </div>
      </ModalWrapper>
    </div >
  )
}

export default Home
