import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileInput from "react-file-reader-input";
import mammoth from "mammoth";
import { html } from "gridjs";

const Editor = ({ onPlainTextChange, content, data }) => {
  function decodeEntities(encodedString) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
  }

  // Wrap the plain text data in minimal HTML structure
  const decodedData = decodeEntities(data); // Assuming you have a decodeEntities function
  const formattedContent = `<div>${decodedData}</div>`;

  const [finalForm, setFinalForm] = useState();

  useEffect(() => {
    setFinalForm(formattedContent);
  }, [formattedContent]);

  console.log(finalForm);

  const [editorHtml, setEditorHtml] = useState(finalForm || "");
  const [Des, setDes] = useState("");

  const handleFileUpload = (e, results) => {
    results.forEach((result) => {
      const [e, file] = result;
      if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const reader = new FileReader();
        reader.onload = () => {
          const options = {
            styleMap: [
              "p[style-name='Heading 1'] => h1:fresh",
              "p[style-name='Heading 2'] => h2:fresh",
              "p[style-name='Heading 3'] => h3:fresh",
              "p[style-name='Heading 4'] => h4:fresh",
              "p[style-name='Heading 5'] => h5:fresh",
              "p[style-name='Heading 6'] => h6:fresh",
              "p: => p",
              "table => table",
              "tr => tr",
              "td => td",
              "p[style-name='CustomStyle1'] => p.custom-style-1",
            ],
          };

          mammoth
            .convertToHtml({ arrayBuffer: reader.result }, options)
            .then((result) => {
              const html = result.value;
              setEditorHtml(html);
              onPlainTextChange(html);
              setDes(html);
            })
            .catch((error) => {
              console.error("Error converting Word to HTML:", error);
            });
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert("Please upload a valid Word document (docx).");
      }
    });
  };

  const handleChange = (html) => {
    setEditorHtml(html);
    onPlainTextChange(html);
    setDes(html);
  };

  useEffect(() => {
    // Set initial content when 'content' prop changes
    setEditorHtml(content);
    setDes(content);
  }, [content]);

  return (
    <div>
      <FileInput as="binary" onChange={handleFileUpload}>
        <button className="btn btn-light mb-2" type="button">
          Upload Word Document
        </button>
      </FileInput>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        readOnly={false}
      />
    </div>
  );
};

export default Editor;
