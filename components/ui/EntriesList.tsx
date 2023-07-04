import { EntriesContext } from "@/context/entries";
import { EntryStatus } from "@/interfaces";
import { List, Paper } from "@mui/material"
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntriesCard } from "./";

interface Props{
    status: EntryStatus;
}

export const EntriesList: FC<Props> = ({ status }) => {
    
    const {entries} = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status)  , [entries])
        
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log("dropped", id);
    }

    const allowDrop = (event: DragEvent) => {
        event.preventDefault();
    };


    return (
        <div
        onDrop={onDropEntry}
        onDragOver={allowDrop}
        >
            <Paper sx={{height: 'calc(100vh - 150px', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 4px'}}>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntriesCard key={entry._id} entry={ entry } />  
                        ))
                    }
                    
                </List>
            </Paper>
        </div>
    )
};
