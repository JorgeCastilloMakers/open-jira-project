import { EntriesContext } from "@/context/entries";
import { EntryStatus } from "@/interfaces";
import { List, Paper } from "@mui/material"
import { FC, useContext, useMemo } from "react";
import { EntriesCard } from "./";

interface Props{
    status: EntryStatus;
}

export const EntriesList: FC<Props> = ({ status }) => {
    
    const {entries} = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status)  , [entries])
        


    return (
        <div>
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
