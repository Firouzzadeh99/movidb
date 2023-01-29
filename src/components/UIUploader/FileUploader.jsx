import React , {useRef,useState} from 'react'
import { Box, Typography } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import {getSelectedFileType} from '../../utils/functions'

const FileUploader = (
    {
        isdisable,
        textDifaultFile = "با کلیک کردن در اینجا فایل مورد نظر را انتخاب نمایید",
        setFileData,
         width
    }
) => {
    const inputRef = useRef()
     const handelClick=(e)=>{
       if(!isdisable){
         alert('نوع سند را انتخاب کنید')
         return
        }else{
          inputRef.current.click()
        }
      }
      const handlerChangeFile =(e)=>{
        const isValidFile = getSelectedFileType(e.target.files[0].name)
        if(!isValidFile){
          alert('پسوند فابل باید از نوع pdf,exel,mp4,png باشد')
          return
        }
         const sizeInMB = (e.target.files[0].size / (1024*1024)).toFixed(2);
        if(sizeInMB > 20){
            alert('حجم فایل باید کمتر از ۲۰ مگابایت باشد ')
            return
        }
        if(e.target.files)
        setFileData(e.target.files[0],isValidFile)
         inputRef.current.value = ''
     }
    return (
        <Box 
        className="box-uploader"
         onClick={handelClick}
         sx={isdisable ? { textAlign: "center", my: 4,cursor:"pointer"} : {my: 4,cursor:"auto",opacity: [0.9, 0.8, 0.5]} }>
        <Typography
        component={"fieldset"}
        color={"text.secondary"}
        sx={{
          px: "12px",
          width: `${width}px`,
          pb: "8px",
          border: "2px dashed",
          borderColor: "text.secondary",
          borderRadius: "6px",
          textAlign: "center",
        }}
        >
        <Typography
          component={"legend"}
          sx={{
              all: "unset",
              fontSize: "14px",
              lineHeight: 1,
              px: "8px",
              marginInlineStart: 1,
            }}
            >
            آپلود فایل
              </Typography>
            <Box sx={{ my:1}}>
                <CloudQueueIcon sx={{ fontSize: "72px",color:"#5e6464c4" }} />
                <Typography color={"text.secondary"} sx={{ my: 1, fontSize: "20px" }}>{textDifaultFile}</Typography>
           </Box>
             </Typography>
             <input
          ref={inputRef}
          type="file"
          id="upload-file"
          placeholder="upload file"
          onChange={handlerChangeFile}
          style={{
            display: "none",
          }}
        />
        </Box>

    )
}
export default FileUploader;