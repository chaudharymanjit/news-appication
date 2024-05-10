import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../App.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const editorStyle = {
  height: '300px',
  width: '100%',
};

const AddNews = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setImages(event.target.value);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  };

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video', 'formula'],
    ['clean']
  ];

  return (
    <Box className='editor'>
      <ReactQuill
        style={editorStyle}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{ toolbar: toolbarOptions }}
      />
      <Box className='messageBottom'>
        <Button sx={{
          mt: 8
        }} variant="contained" color='info'>Message Preview</Button>
        <TextField
          sx={{
            mt: 3,
            width: '98%'
          }}
          label="Category"
          defaultValue=""
        />
        <Box
          sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={handleFileClick}
        >
          <CameraAltIcon fontSize="large" sx={{ mr: 1, cursor: 'pointer' }} />
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <p>Choose File</p>
        </Box>
        <Box
          sx={{
            mt: 3,
            width: '98%'
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select any option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={images}
              label="Image"
              onChange={handleChange}
            >
              <MenuItem value={10}>img1</MenuItem>
              <MenuItem value={20}>img2</MenuItem>
              <MenuItem value={30}>img3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            mt: 3,
          }}
        >
          <Button variant="contained" color='info' startIcon={<CloudUploadIcon />}>
            Upload PDF
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddNews;
