import React from 'react'

const BranchCard = ({branch}) => {
  return (
    <>
        <div className="mx-4 my-4 bg-white px-6 py-4 rounded-lg shadow-lg h-max">
            <p className='sub-title text-[#058AB3]'>{branch.name || '--'}</p>
            <div className='my-4 text-sm text-gray-500'>
                <p className=''>Full Name: {branch.long_name || '--'}</p>
                <p className=''>Address: {branch.address || '--'}</p>
                <p className=''>State: {branch.state_name || '--'}</p>
                <p className=''>Phone: {branch.phone || '--'}</p>
            </div>
        </div>
    </>
  )
}

export default BranchCard;