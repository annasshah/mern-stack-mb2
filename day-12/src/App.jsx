import React from 'react'
import { RenderListCards } from './components/RenderListCards'
// import { RenderUsers } from './components/RenderUsers'
// import { RenderListCardsIndProps } from './components/IndPropsCards/RenderListCardsIndProps'

const App = () => {
//   const namesArray = [
// 'Adnan',
// 'Hassan',
// 'Adil',
// 'Abdullah',
// 'Abdullah',
// 'Abdullah',
// 'Mohsin',
// 'Mohsin',
// 'Mohsin',
// 'Mohsin',
//   ]

  return (
    // <div>
    //   <h1 className='text-primary-color'>Primary Color</h1>
    //   <p className='text-secondary-color font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at asperiores beatae sed sint architecto dolorem labore, eius id libero nam officia, nesciunt delectus, dolores ab sit perspiciatis dolor excepturi.</p>
    // </div>

    <div>

      {/* {
        namesArray.map((username)=> {

          return <RenderUsers username={username} />

        })
      } */}


      {/* <RenderListCardsIndProps /> */}
      <RenderListCards />
      

    </div>

  )

}

export default App
