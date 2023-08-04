/* eslint-disable no-unused-vars */
import { create } from 'zustand';

const useStore = create((set) => ({
  task: [{ title: "Kanban", state: "Berjalan" }],
  addTask: (title, state) => {
    set((store) => ({ task: [...store.task, { title, state }] }));
  },
  deleteTask: (title) => {
    set((store) => ({ task: store.task.filter((task)=> task.title !== title) }));
  }
}));

export default useStore;