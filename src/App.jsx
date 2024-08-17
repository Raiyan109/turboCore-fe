import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { UpdateFollower } from 'react-mouse-follower'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <UpdateFollower mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5
      }}>
        <RouterProvider router={routes} />
      </UpdateFollower>
    </div>
  )
}

export default App
