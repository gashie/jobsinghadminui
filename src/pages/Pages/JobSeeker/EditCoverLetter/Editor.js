import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileInput from "react-file-reader-input";
import mammoth from "mammoth";
import { useDispatch } from "react-redux";

const Editor = ({ onPlainTextChange, content }) => {
  const [editorHtml, setEditorHtml] = useState("");
  const [plainText, setPlainText] = useState(""); // Add state for plain text

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
              "p: => p", // Keep paragraph styles
              "table => table", // Keep the default table style
              "tr => tr", // Keep the default row style
              "td => td", // Keep the default cell style
              "p[style-name='CustomStyle1'] => p.custom-style-1", // Example: CustomStyle1 in Word mapped to a CSS class
              // Add more style mappings here as needed
            ],
          };

          mammoth
            .convertToHtml({ arrayBuffer: reader.result }, options)
            .then((result) => {
              setEditorHtml(result.value);

              // content(result.value);
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

    // Extract plain text from the HTML content
    // const tempDiv = document.createElement("div");
    // tempDiv.innerHTML = html;
    // const plainText = tempDiv.textContent || tempDiv.innerText || "";
    // setPlainText(plainText);

    onPlainTextChange(html);
  };

  const [Des, setDes] = useState();

  useEffect(() => {
    setDes(content);
  }, [content, Des]);

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
        placeholder={Des}
      />
    </div>
  );
};

export default Editor;
