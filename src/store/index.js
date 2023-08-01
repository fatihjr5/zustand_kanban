/* eslint-disable no-unused-vars */
import { create } from 'zustand';

const useStore = create((set) => ({
  task: [{ title: "Kanban", state: "Perencanaan" }],
}));

export default useStore;