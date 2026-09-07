import{create}from'zustand';export const useAppStore=create<any>(set=>({tracking:false,setTracking:(v:boolean)=>set({tracking:v})}));
