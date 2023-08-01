import PropTypes from 'prop-types'
import Task from '../task'

function Column({state}) {
  return (
    <div>
        <div className='border-b border-b-[#292C2D] pb-2'>
            <h5 className="text-lg-font-semibold text-white">{state}</h5>
        </div>
        <Task title='Todo'/>
    </div>
  )
}
Column.propTypes = {
    state: PropTypes.string.isRequired
}


export default Column