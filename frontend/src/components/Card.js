import React from 'react'

export default function Card() {
  return (
    <div className="m-8" style={{ width: 350 }}>

      <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" className="hidden sm:block rounded-lg shadow-xl mb-4" alt="" />

      <div className="text-center">
        <h5 className="text-xl font-semibold mb-2">Card title</h5>

        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure sequi tenetur, voluptatibus
          harum
          consequuntur
          alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta!Saepe alias dolores dolorem
          assumenda totam?</p>

        <button
          className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button">
          Button
        </button>
      </div>
    </div>
  )
}
