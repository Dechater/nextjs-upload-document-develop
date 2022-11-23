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

const Customer = () => {

    const [customerDatas, setCustomerDatas ] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://api.microservice.thaidataonline.com/service-excel/api/v1/data/findData/Customer')
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    setCustomerDatas(response.data.data);
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
            field: 'Cus_Code',
            headerName: 'Customer code',
            width: 140,
            editable: false,
        },
        {
            field: 'CusName',
            headerName: 'Customer name',
            width: 350,
            editable: false,
        },
        {
            field: 'TaxNumber',
            headerName: 'Tax number',
            width: 150,
            editable: false,
        },
        {
            field: 'CusAddress',
            headerName: 'Address',
            width: 940,
            editable: false,
        },
        {
            field: 'CusTel',
            headerName: 'Customer Tel.',
            width: 250,
            editable: false,
        },
        {
            field: 'CusFax',
            headerName: 'Customer fax',
            width: 250,
            editable: false,
        },
        {
            field: 'Remark',
            headerName: 'Remark',
            width: 160,
            editable: false,
        },
        {
            field: 'AccountCodeNumber',
            headerName: 'Account code number',
            width: 160,
            editable: false,
        },
        {
            field: 'CreatedDate',
            headerName: 'Created date',
            width: 230,
            editable: false,
        },
        {
            field: 'UpdatedDate',
            headerName: 'Updated date',
            width: 230,
            editable: false,
        }
    ];
    
    return (
        loading ? null : <Grid container spacing={6}>
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Create Awesome Customer Table'></CardHeader>
                <CardContent>
                    {/* <Typography sx={{ mb: 2 }}>This is your Customer page.</Typography> */}
                    <Typography>
                        <Box sx={{ height: 660, width: '100%' }}>
                            <DataGrid
                                rows={customerDatas}
                                columns={columns}
                                getRowId={(row) => row.Cus_Code}
                                components={{ Toolbar: CustomToolbar }}
                                // pageSize={pageSize}
                                // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                // rowsPerPageOptions={[10, 20, 30]}
                            />
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
        
    )
}

export default Customer
