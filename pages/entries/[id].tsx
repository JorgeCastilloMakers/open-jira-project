import { Layout } from '@/components/layouts';
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { EntryStatus } from '@/interfaces';
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next'
import { isValidObjectId } from 'mongoose';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {

}

export const EntryPage: FC = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

    const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }
    const onSave = () => {
        
    }

    return (
        <Layout title='.............'>
            <Grid
                container
                justifyContent='center'
                sx={{marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada hace: ... minutos`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label="Nueva Entrada"
                                value={inputValue}
                                onChange={onInputValueChanged}
                                helperText={isNotValid && 'Ingrese un valor'}
                                onBlur={() => setTouched(true)}
                                error={isNotValid && touched}

                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}
                                >
                                    {
                                        validStatus.map(option => (<FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio />}
                                            label={capitalize(option)}
                                        />))
                                    }
                                </RadioGroup>
                            </FormControl>
                            <CardActions>
                                <Button
                                    startIcon={<SaveOutlinedIcon />}
                                    variant="contained"
                                    fullWidth
                                    onClick={onSave}
                                    disabled={inputValue.length <= 0 }
                                >
                                    Guardar
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
            <IconButton sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'error.dark'
            }}>
                <DeleteOutlineOutlinedIcon/>                    
            </IconButton>
        </Layout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
    const { id } = params as { id: string };
    
    if (isValidObjectId(id)) {
        return {
            redirect: {
                destination: `/`,
                permanent: false,
            }
        }
    }

    return {
        props: {
            id: isValidObjectId(id)
        }
    }
}

export default EntryPage;