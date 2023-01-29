import React from 'react'
import { Button } from '@mui/material'
import Table from './Table'


const Index = ({
    status,
    files,
    setFiles,
    setStatus,
    setIsdisable,
    width

}) => {


    const handelRemoveFiles =()=>{
        setFiles([])
    }
    const sendFiles =()=>{
        setStatus('pending')
        setFiles([])
        setIsdisable(false)
     }
    return (
        <> 
        <Table files={files} status={status} width={width} setFiles={setFiles} />
        <Button onClick={handelRemoveFiles}  variant="contained"color="error"  sx={{ mx:1}}>حذف اسناد</Button>
        <Button onClick={sendFiles}  variant="contained" color="success" sx={{mx:1}}>
            {status==='unset' && 'ارسال اسناد'}{ status === 'error' && 'ارسال مجدد'}
        </Button>
        </>
    )
}
export default Index; 
