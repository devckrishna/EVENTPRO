import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EventSwitch() {
  let [categories] = useState({
    Past: [
      {
       
      },
      {
        
      },
    ],
    Live: [
      {
       
      },
      {
       
      },
    ],
    Upcoming: [
      {
      
      },
      {
        
      },
    ],
  })

  return (
    <div className="w-full  max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5  font-medium text-red-500 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-800 ring-white ring-opacity-60',
                  selected
                    ? 'bg-indigo-500 shadow'
                    : 'text-black hover:bg-white/[0.12] hover:text-red-700'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
        <Tab.Panel> <h1>Past Events</h1> </Tab.Panel>
        <Tab.Panel><h1>Live Events</h1></Tab.Panel>
        <Tab.Panel><h1>Upcoming Events</h1></Tab.Panel>
      </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

