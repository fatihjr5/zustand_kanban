import PropTypes from 'prop-types'
import status from '../../store/index'

function Task({title}) {
  const tasks = status((state) => state.task);
  
  return (
    <div className='bg-[#292C2D] w-auto p-4 rounded-lg my-4 mx-auto hover:scale-105 transition-all'>
      <h5 className='text-lg font-semibold text-white'>{title}</h5>
      <p className='ms-auto text-black px-2 py-1 font-medium rounded-md mt-4 text-sm bg-[#CFDDDB] w-fit'>{tasks[0].state}</p>
    </div>
  )
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Task;