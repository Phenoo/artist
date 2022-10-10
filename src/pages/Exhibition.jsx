import React from 'react'


import Item1 from '../assets/exhibition1.jpeg'
import Item2 from '../assets/exhibition2.jpeg'
import Item3 from '../assets/exhibition3.jpeg'
import Item4 from '../assets/item2.jpeg'
import AnimatedCom from '../components/AnimatedCom'
import ExhibitCard from '../components/ExhibitCard'


const Exhibition = () => {
  const items = [
    {
      id: '01',
      nature: 'in progress',
      name: 'paint and mit - in flagella sumre',
      duration: 'nov 4 2022 - nov 11 2022',
      location: 'lagos',
      venue: 'matero ikeja',
      photo: Item1,
    },
    {
      id: '02',
      nature: 'in progress',
      name: 'signin monalisco',
      duration: 'dec 12 2022 - dec 20 2022',
      location: 'awka',
      venue: 'st. patrick parish',
      photo: Item2,
    },
    {
      id: '03',
      nature: 'in progress',
      name: 'christmas play - art, magic and more. ',
      duration: 'dec 26 2022 - jan 1 2023',
      location: 'abuja',
      venue: 'asokro valley',
      photo: Item3,
    },
    {
      id: '04',
      nature: 'in progress',
      name: 'egwu ndi oga ',
      duration: 'dec 14 2022 - dec 18 2022',
      location: 'enugu',
      venue: 'polo park',
      photo: Item4,
    },
  ]
  const List = [
    {
      id: '01',
      nature: 'passed  ',
      name: 'paint and mit - in flagella sumre',
      duration: 'nov 4 2022 - nov 11 2022',
      location: 'lagos',
      venue: 'matero ikeja',
      photo: Item1,
    },
    {
      id: '02',
      nature: 'passed',
      name: 'signin monalisco',
      duration: 'dec 12 2022 - dec 20 2022',
      location: 'awka',
      venue: 'st. patrick parish',
      photo: Item2,
    },
    {
      id: '03',
      nature: 'passed',
      name: 'christmas play - art, magic and more. ',
      duration: 'dec 26 2022 - jan 1 2023',
      location: 'abuja',
      venue: 'asokro valley',
      photo: Item3,
    },
    {
      id: '04',
      nature: 'passed',
      name: 'egwu ndi oga ',
      duration: 'dec 14 2022 - dec 18 2022',
      location: 'enugu',
      venue: 'polo park',
      photo: Item4,
    },
  ]

  return (
    <AnimatedCom>
      <div className="exhibition">
        <section>
          <div className="center">
              <div className="divider"></div>
              <h4 className="headline">
                exhibition
              </h4>
          </div>
          <div className="fourgrid">
          {
              items.map((item, index) => {
                return (
                    <ExhibitCard key={item.id} item={item} />
                )
              })
            }
          </div>
          <div className="pass-exhibit">
            <h4 className='headline'>
              past exhibitions
            </h4>
            <div className='pass'>
              {
                List.map((item, index) => {
                  return (
                      <ExhibitCard key={item.id} item={item} />
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </AnimatedCom>

  )
}

export default Exhibition