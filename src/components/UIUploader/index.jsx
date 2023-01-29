import React, { useState } from 'react'
import { Autocomplete, Box, TextField ,Typography} from '@mui/material'

import FileUploader from './FileUploader'
import UploaderTable from './UploaderTable'
import ProgressUpload from './ProgressUpload'
import "./index.scss"
const Index = ({
  width = 600
}) => {
  const [isdisable, setIsdisable] = useState(false)
  const [dataType, setDataType] = useState('')
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('unset')// unset , pending , error
  const top100Films =[
    'خرید',
    'فروش',
    'تجارت'
  ]
  const handelChange=(e)=>{
    setDataType(e.target.outerText)
    setIsdisable(true)
  }
  const getFiles = (file)=>{
    if(!dataType){
      alert('sanad')
      return
    }
    const id = Date.now()
    console.log(files)
    setFiles([...files,{...file,dataType,id}])
  }

  

  return (
    <Box className="ontainer" sx={{width:`${width}px`,textAlign: "center", my: 4,display: "flex",flexDirection: "column",alignItems: "center"}}>
            <Box sx={{padding:"20px 20px"}}>
           
             {
               status === 'pending' ?
               <>
               <FileUploader width={width} isdisable={isdisable} getFiles={getFiles}  />
              <Box
               sx={{width:width,height:'80px',px:3,display:'flex',flexDirection:'column',justifyContent:'center',alignItem:'center',
                boxShadow: "-3px 2px 17px -7px rgba(66, 68, 90, 1)",}}>
                <ProgressUpload />
                <Typography  color={"text.secondary"}> درحال ارسال</Typography>
                </Box>
                </>
                :<>
                 <Box>
              <Autocomplete
                disablePortal
                onChange={handelChange}
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 600 , margin:"auto"}}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
                  </Box>
             <FileUploader width={width} isdisable={isdisable} getFiles={getFiles}  />
                </>
             }
             
          </Box>
          {
            files.length ? (
           <Box>
            <UploaderTable width={width}  status={status}setIsdisable={setIsdisable} files={files} setFiles={setFiles} setStatus={setStatus} />
          </Box>
            ): ''
          }
     </Box>
  )
}

export default Index;