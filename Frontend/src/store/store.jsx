import { create } from "zustand"

const useStore = create((set) => ({
    chatHistory: {
        channelId: null,
        messages: []
    },
    setChatHistory: (chatHistory) => set({chatHistory})
}))

export default useStore