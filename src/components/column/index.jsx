/* eslint-disable no-unused-vars */
// Props
import { useState } from 'react'
import PropTypes from 'prop-types';
// Components
import { Modal, Input } from 'antd'
// State Management
import useStore from '../../store';
import Task from '../task';

function Column({ state }) {
  // configure state
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drop, setDrop] = useState(false)
  // zustand
  const tasks = useStore((store) => store.task.filter((task) => task.state === state));
  const addTasks = useStore((store)=> store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);
  
  // configure modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    addTasks(text, state);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div
    onDragOver={(e) => {
      setDrop(true);
      e.preventDefault();
    }}
    onDragLeave={(e) => {
      setDrop(false);
      e.preventDefault();
    }}
    onDrop={(e) => {
      setDrop(false);
      moveTask(draggedTask, state);
      setDraggedTask(null);
    }}>
      <div className='border-b border-b-[#292C2D] pb-2 flex flex-row items-center justify-between'>
        <h5 className="text-lg font-semibold text-white">{state}</h5>
        <button onClick={showModal} className='bg-slate-100 px-2 py-0.5 rounded-sm text-sm font-medium'>Tambahkan</button>
        <Modal title="Tambah Judul" open={isModalOpen} onOk={() => { handleOk; addTasks(text, state); }} onCancel={handleCancel}>
          <Input placeholder="Enter Title" onChange={(e)=> setText(e.target.value)} value={text}/>
        </Modal>
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