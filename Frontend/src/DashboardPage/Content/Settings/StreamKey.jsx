import React from 'react'

const StreamKey = ({ streamKey }) => {
  return (
    <div className="mt-8 p-4 bg-gray-800 rounded-lg text-gray-200 text-center">
        <h3 className="text-lg font-semibold mb-2">Stream Key</h3>
        <span className="block text-sm font-mono bg-gray-900 p-2 rounded-lg">{streamKey}</span>
    </div>
  )
}

export default StreamKey
