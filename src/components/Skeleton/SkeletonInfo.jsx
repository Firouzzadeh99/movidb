import React from 'react'
import SkeletonElement from './SkeletonElement'
import "./style.scss"

const SkeletonInfo = () => {
  return (
    <div className='skelecton__info'>
         <SkeletonElement type="avatar" /> 
       <div>
       <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
        <div className='s-item'>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
 
       </div>
     </div>
   )
}

export default SkeletonInfo
