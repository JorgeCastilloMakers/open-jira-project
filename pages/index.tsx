
import { Layout } from '@/components/layouts';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title='Home - OpenJira'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Pendientes"/>
              <CardContent>
                
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="En Progreso"/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Completadas"/>
            </Card>
          </Grid>
        </Grid>
      </Layout>
      
    </>
  )
}

export default HomePage;