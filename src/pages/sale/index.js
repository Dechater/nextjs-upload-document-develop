// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import { useState, useEffect } from 'react'
//MUI Import data-grid
import * as React from 'react';
import Box from '@mui/material/Box';
import { 
    DataGrid, 
    GridToolbarContainer, 
    GridToolbarColumnsButton,
    GridToolbarFilterButton
} from '@mui/x-data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

const Sale = () => {

    const [saleDatas, setSaleDatas] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://api.microservice.thaidataonline.com/service-excel/api/v1/data/findData/Sale')
            .then(response => {
                if (response.status == 200) {
                    setSaleDatas(response.data.data);
                    setloading(false)
                }
            })
            .catch(error => {
                console.log('error = ' + error)
            })

    }, []);

    //MUI data-grid
    const columns = [
        {
            field: 'SaleNumber',
            headerName: 'Sale number',
            width: 140,
            editable: false,
        },
        {
            field: 'DocDate',
            headerName: 'Document Date',
            width: 230,
            editable: false,
        },
        {
            field: 'Cus_Code',
            headerName: 'Customer code',
            width: 150,
            editable: false,
        },
        {
            field: 'BeforeVat',
            headerName: 'Before vat',
            width: 170,
            editable: false,
            type: 'number'
        },
        {
            field: 'BeforeTotal',
            headerName: 'Before total',
            width: 170,
            editable: false,
            type: 'number'
        },
        {
            field: 'AmountVat',
            headerName: 'Amount vat',
            editable: false,
            width: 170,
            type: 'number'
        },
        {
            field: 'AmountGrandTotal',
            headerName: 'Amount grand total',
            editable: false,
            width: 170,
            type: 'number'
        },
        {
            field: 'CreatedDate',
            headerName: 'Created date',
            editable: false,
            width: 230,
        },
        {
            field: 'UpdatedDate',
            headerName: 'Updated date',
            editable: false,
            width: 230,
        }
    ];

    return (
        loading ? null : <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Create Awesome Sale Table'></CardHeader>
                    <CardContent>
                        {/* <Typography sx={{ mb: 2 }}>This is your second page.</Typography> */}
                        <Typography>
                            <Box sx={{ height: 700, width: '100%' }}>
                                <DataGrid
                                    rows={saleDatas}
                                    columns={columns}
                                    getRowId={(row) => row.SaleNumber}
                                    components={{ Toolbar: CustomToolbar }}
                                    // pageSize={40}
                                />
                            </Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Sale
