import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import {v4 as uuidv4} from 'uuid';

export interface EntriesState {
    entries: Entry[];
}
interface Props{
    children: ReactNode;
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [{
        _id: uuidv4(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas est quis ipsum luctus auctor.',
        status: 'pending',
        createdAt: Date.now() - 1000000,
    },
    {
        _id: uuidv4(),
        description: 'Sed scelerisque arcu vitae risus aliquet, at convallis ex malesuada. Nullam aliquam elit sapien, vitae finibus nisi semper ut.',
        status: 'in-progress',
        createdAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'Phasellus a lobortis ligula, non scelerisque justo. Suspendisse ut risus nec dolor ultricies iaculis vitae et nisi. ',
        status: 'finished',
        createdAt: Date.now() - 100000,
    },],
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);


  return (
      <EntriesContext.Provider value={{
      ...state,
      }}>
          {children}
    </EntriesContext.Provider>
  )
}