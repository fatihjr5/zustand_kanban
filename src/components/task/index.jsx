// Props
import PropTypes from 'prop-types';
// State Management
import useStore from '../../store/index';
function Task({ title }) {
  // Zustand
  const task = useStore((state) => state.task.find((task) => task.title === title));
  const deleteTask = useStore((store)=> store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return(
    <div className='bg-[#292C2D] w-auto p-4 rounded-lg my-4 mx-auto' draggable
    onDragStart={() => setDraggedTask(task.title)}>
      <h5 className='text-lg font-semibold text-white'>{task.title}</h5>
      <div className="flex flex-row items-center justify-end gap-x-2 mt-4">
        <button onClick={()=> deleteTask(task.title)} className='px-2 py-1 font-medium rounded-md text-sm bg-red-400 text-white'>Delete</button>
        <p className='text-black px-2 py-1 font-medium rounded-md text-sm bg-[#CFDDDB] w-fit'>{task.state}</p>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Task;
