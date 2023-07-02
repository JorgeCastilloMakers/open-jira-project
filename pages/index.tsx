
import { Layout } from '@/components/layouts';
import { EntriesList, NewEntry } from '@/components/ui';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title='Home - OpenJira'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Pendientes" />  
                <NewEntry/>
                <EntriesList status='pending'/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="En Progreso" />
                <EntriesList status='in-progress'/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Completadas" />
                <EntriesList status='finished'/>
            </Card>
          </Grid>
        </Grid>
      </Layout>
      
    </>
  )
}

export default HomePage;