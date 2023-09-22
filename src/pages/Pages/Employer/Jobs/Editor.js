import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FileInput from 'react-file-reader-input';
import mammoth from 'mammoth'; // Import mammoth library

const Editor = ({ onContentChange }) => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleFileUpload = (e, results) => {
    results.forEach(result => {
      const [e, file] = result;
      // Check if the uploaded file is a Word document (docx)
      if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const reader = new FileReader();
        reader.onload = () => {
          // Use mammoth to convert Word document to HTML with custom options
          const options = {
            styleMap: [
              "p[style-name='Heading 1'] => h1:fresh",
              "p[style-name='Heading 2'] => h2:fresh",
              "p[style-name='Heading 3'] => h3:fresh",
              "p[style-name='Heading 4'] => h4:fresh",
              "p[style-name='Heading 5'] => h5:fresh",
              "p[style-name='Heading 6'] => h6:fresh",
              "table => table", // Keep the default table style
              "tr => tr", // Keep the default row style
              "td => td", // Keep the default cell style
            ],
          };

          mammoth.convertToHtml({ arrayBuffer: reader.result }, options)
            .then(result => {
              // Set the extracted HTML as editorHtml
              setEditorHtml(result.value);
            })
            .catch(error => {
              console.error('Error converting Word to HTML:', error);
            });
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert('Please upload a valid Word document (docx).');
      }
    });
  };

  const handleChange = (html) => {
    setEditorHtml(html);
   
    onContentChange(html);
  };



  return (
    <div>
     
      <FileInput as="binary" onChange={handleFileUpload}>
        <button className='btn btn-light mb-2' type="button">Upload Word Document</button>
      </FileInput>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
