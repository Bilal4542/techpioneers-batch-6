import React from 'react'

const MainTitles = ({mainTitle,sortBtn,iconBtn}) => {
  return (
    <>
        <div className="flex items-center justify-end gap-x-36 flex-col my-5">
        <div className="flex items-center justify-between w-[90%] my-10">
          <div className=""></div>
          <div className="">
            <h1 className="text-4xl uppercase font-bold">{mainTitle}</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href=""
              className="text-[rgba(255,191,61,1)] font-bold text-[20px] uppercase mr-1"
            >
              {iconBtn}
            </a>
            <a href="" className="font-bold text-[20px] uppercase mr-1">
              {sortBtn}
            </a>
          </div>
        </div>
      </div> 
    </>
  )
}

export default MainTitles
