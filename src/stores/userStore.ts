import { create } from 'zustand'

const useUserStore =  create((set) => ({
    name: ""
})) 

export default useUserStore;