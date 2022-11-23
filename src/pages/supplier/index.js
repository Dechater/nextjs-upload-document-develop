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

const Supplier = () => {

    const [supplierDatas, setSupplierDatas] = useState(null);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        axios.get('https://api.microservice.thaidataonline.com/service-excel/api/v1/data/findData/Supplier')
            .then(response => {
                if (response.status == 200) {
                    setSupplierDatas(response.data.data);
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
            field: 'Sup_Code',
            headerName: 'Supplier code',
            width: 140,
            editable: false,
        },
        {
            field: 'SupName',
            headerName: 'Supplier name',
            width: 320,
            editable: false,
        },
        {
            field: 'Taxnumber',
            headerName: 'Tax number',
            width: 150,
            editable: false,
        },
        {
            field: 'SupAddress',
            headerName: 'Address',
            width: 920,
            editable: false,
        },
        {
            field: 'SupTel',
            headerName: 'Supplier Tel.',
            editable: false,
            width: 250,
        },
        {
            field: 'SupFax',
            headerName: 'Supplier fax',
            editable: false,
            width: 250,
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
                    <CardHeader title='Create Awesome Supplier Table'></CardHeader>
                    <CardContent>
                        {/* <Typography sx={{ mb: 2 }}>This is your second page.</Typography> */}
                        <Typography>
                            <Box sx={{ height: 700, width: '100%' }}>
                                <DataGrid
                                    rows={supplierDatas}
                                    columns={columns}
                                    getRowId={(row) => row.Sup_Code}
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

export default Supplier
