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

const Purchase = () => {

    const [purchaseDatas, setPurchaseDatas] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://api.microservice.thaidataonline.com/service-excel/api/v1/data/findData/Purchase')
            .then(response => {
                if (response.status == 200) {
                    setPurchaseDatas(response.data.data);
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
            field: 'PurchaseNumber',
            headerName: 'Purchase number',
            width: 160,
            editable: false,
        },
        {
            field: 'DocDate',
            headerName: 'Document Date',
            width: 230,
            editable: false,
        },
        {
            field: 'Sup_Code',
            headerName: 'Supplier code',
            width: 130,
            editable: false,
        },
        {
            field: 'BeforeVat',
            headerName: 'Before Vat',
            width: 170,
            editable: false,
            type: 'number'
        },
        {
            field: 'BeforeTotal',
            headerName: 'Before Total',
            width: 170,
            editable: false,
            type: 'number'
        },
        {
            field: 'AmountVat',
            headerName: 'Amount Vat',
            editable: false,
            width: 170,
            type: 'number'
        },
        {
            field: 'AmountGrandTotal',
            headerName: 'Amount Grand Total',
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
                    <CardHeader title='Create Awesome Purchase Table'></CardHeader>
                    <CardContent>
                        {/* <Typography sx={{ mb: 2 }}>This is your third page.</Typography> */}
                        <Typography>
                            <Box sx={{ height: 700, width: '100%' }}>
                                <DataGrid
                                    rows={purchaseDatas}
                                    columns={columns}
                                    getRowId={(row) => row.PurchaseNumber}
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

export default Purchase
