import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  // task function
  task: [{ title: "Kanban", state: "Berjalan" }],
  addTask: (title, state) => {
    set((store) => ({ task: [...store.task, { title, state }] }));
  },
  deleteTask: (title) => {
    set((store) => ({ task: store.task.filter((task) => task.title !== title) }));
  },
  // dragged function
  draggedTask: null,
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      task: store.task.map((task) =>
        task.title === title ? { ...task, state } : task
      ),
      draggedTask: { ...store.draggedTask, state },
    })),
})));

export default useStore;