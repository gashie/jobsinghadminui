import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {Card, Col, Row, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {useDispatch}from 'react-redux'
import { createResume, updateResume } from '../../../store/actions'

function MyResume() {
const dispatch = useDispatch()



    const [file, setfile] = useState([]);

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
      }
  

   
    const handleAcceptedFiles =(files) => {
        files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
          })
        );
        setfile(files);
        console.log(file)
        }

        console.log(file)

    const handleCreateResume = () =>{
       const formData = new FormData();
       formData.append('myCv', file[0])
       formData.append('resumeId', "e527149a-40af-46c7-aa4a-d21d35b5c0c7")
       formData.append('patch', "true")

      dispatch(updateResume(formData))
    }

    
  return (
    
    <>
   <div className="list-unstyled mb-0" id="file-previews">
                  {file.map((f, i) => {
                    return (
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            <Col>
                              <Link
                                to="#"
                                className="text-muted font-weight-bold"
                              >
                                {f.name}
                              </Link>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    );
                  })}
                </div>


             <h5 className="mb-3 mt-3" style={{fontWeight: 'boder'}}>Replace your CV</h5>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    handleAcceptedFiles(acceptedFiles);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone dz-clickable">
                      <div
                        className="dz-message needsclick"
                        {...getRootProps()}
                      >
                        <div className="mb-3">
                          <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                        </div>
                        <h5>Drag or Click to upload file</h5>
                        <h6>(.doc, .docx, .pdf, .rtf, .txt, Max size 2 MB)</h6>
                      </div>
                    </div>
                  )}
                  
                </Dropzone>

<Button classname='btn btn-dark mt-4 w-100' onClick={()=>{
  handleCreateResume()
}}
style={{backgroundColor: '#244159'}}
>
  Submit
</Button>

 </>
  )
}

export default MyResume