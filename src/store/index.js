/* eslint-disable no-unused-vars */
import { create } from 'zustand';

const useStore = create((set) => ({
  // task function
  task: [{ title: "Kanban", state: "Berjalan" }],
  addTask: (title, state) => {
    set((store) => ({ task: [...store.task, { title, state }] }));
  },
  deleteTask: (title) => {
    set((store) => ({ task: store.task.filter((task)=> task.title !== title) }));
  },
  // dragged function
  draggedTask:null,
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      task: store.task.map((task) =>
        task.title === title ? { title, state } : task
      ),
  })),
}));

export default useStore;