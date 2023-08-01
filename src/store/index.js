import { create } from 'zustand';

const status = create(() => ({
    task: [{ title: "uji", state: "Perencanaan" }],
}));

export default status