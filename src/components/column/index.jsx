import PropTypes from 'prop-types';
import useStore from '../../store';
import Task from '../task';

function Column({ state }) {
  const tasks = useStore((store) => store.task.filter((task) => task.state === state));

  return (
    <div>
      <div className='border-b border-b-[#292C2D] pb-2'>
        <h5 className="text-lg font-semibold text-white">{state}</h5>
      </div>
      {
        tasks.map((item) => (
          <Task title={item.title} key={item.title} />
        ))
      }
    </div>
  )
}

Column.propTypes = {
  state: PropTypes.string.isRequired
}

export default Column;