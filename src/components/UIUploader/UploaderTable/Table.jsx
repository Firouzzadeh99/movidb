import React from 'react'
import { Box } from '@mui/material'
 
const icontype = (type)=>{
    switch (type) {
        case 'image':
            return <span>عکس</span>
            break;
        case 'document':
            return <span>فایل</span>
            break;
        case 'voice':
            return <span>صوتی</span>
            break;
        default:
            break;
    }
}
 const Table = ({
    files,
    status,
    setFiles,
    width
 }) => {
    const removeFile = (fileId) => {
        const filterFiles = files.filter(file => file.id !== fileId)
        setFiles(filterFiles)
    }
  return (
    <Box sx={{height:'210px',overflowY:'auto',width:width,boxShadow: "-3px 2px 17px -7px rgba(66, 68, 90, 1)",borderRadius:"8px",marginBottom:"30px"}}>
                 <Box style={{display:'flex', background:'#ececec'}}>
                    <span style={{flex:'1',margin: '3px 28px',width:'30px',display:'inline-block',padding:'3px'}}>حذف</span>
                    <span style={{flex:'1',margin: '3px 28px',width:'30px',display:'inline-block',padding:'3px'}}>وضعیت</span>
                    <span style={{flex:'1',margin: '3px 28px',width:'65px',display:'inline-block',padding:'3px'}}>نوع فایل</span>
                    <span style={{flex:'1',margin: '3px 28px',width:'65px',display:'inline-block',padding:'3px'}}>نوع سند</span>
                    <span style={{flex:'1',margin: '3px 28px',width:'30px',display:'inline-block',padding:'3px'}}>تعداد</span>
                 </Box>
                {
                    status === 'unset' ||"error"  ? (
                        <>
                        {files.map((file, index) =>
                            <ul key={file.id} style={{display:'flex',borderBottom:"2px solid #f0f0f0",height:'45px'}}>
                                <li onClick={()=>removeFile(file.id)} style={{listStyle:'none',flex:'1',margin:'auto',cursor:'pointer'}}>*</li>
                                <li style={{listStyle:'none',flex:'1',margin:'auto',cursor:'pointer',borderRadius: '18px',padding: '4px 0',color: 'rgb(247 99 99)',background:'#f1f0f0'}}>ارسال نشده</li>
                                <li style={{listStyle:'none',flex:'1',margin:'auto',cursor:'pointer'}}>{icontype(file.fileType)}</li>
                                <li style={{listStyle:'none',flex:'1',margin:'auto',cursor:'pointer'}}>{file.dataType}</li>
                                <li style={{listStyle:'none',flex:'1',margin:'auto',cursor:'pointer'}}> {++index}</li>
                             </ul>
                        )}
                        </>
                    ): ''   
                }
         </Box>
   )
}
export default Table;
