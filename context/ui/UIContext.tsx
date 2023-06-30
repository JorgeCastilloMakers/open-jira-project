import { createContext } from "react";


export interface ContextProps{
    sidemenuOpen: boolean;
    //Method
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps)