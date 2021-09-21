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
import LoaderIcon from '../components/icons/loader'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const { checked } = useContext(FilterContext)
  const { loading, error, data } = useFilteredPostsList(checked, { pollInterval: 500 })

  if (error)
    return <div className="bg-indigo-900 place-items-center grid text-white w-full h-full ">
      <div>
        Возникла ошибка :с
      </div>
    </div>

  return (
    <div className="bg-indigo-900 w-screen h-screen grid grid-cols-12 overflow-auto">
      <div className="col-span-6 col-start-4 bg-yellow-400 px-4 pb-4">
        {loading ? <div className="h-screen w-full grid place-items-center">
          <div className="h-16 text-white">
            <LoaderIcon />
          </div>
        </div>
          : <Virtuoso
            className="styled-scroll"
            style={{ height: "100%" }}
            totalCount={data?.postsList.items.length}
            itemContent={index => <ItemCard {...(data?.postsList.items[index] as IPost)} />}
          />}
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
