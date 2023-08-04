import PropTypes from 'prop-types';
import useStore from '../../store';
import Task from '../task';

function Column({ state }) {
  const tasks = useStore((store) => store.task.filter((task) => task.state === state));
  const addTasks = useStore((store)=> store.addTask);

  return (
    <div>
      <div className='border-b border-b-[#292C2D] pb-2 flex flex-row items-center justify-between'>
        <h5 className="text-lg font-semibold text-white">{state}</h5>
        <button onClick={() => { addTasks('', state) }} className='bg-slate-100 px-2 py-0.5 rounded-sm text-sm font-medium'>Add Task</button>
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