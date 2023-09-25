// import {Row, Col, Form, Input, Button, Container} from 'reactstrap'
// import { useFormik } from "formik";
// import {useState} from 'react'
// import {Link} from 'react-router-dom'

// const EmployerOTP = () =>{


//     const [activeTab, setactiveTab] = useState(1);
//     const [activeArrowTab, setactiveArrowTab] = useState(4);
//     const [passedSteps, setPassedSteps] = useState([1]);
//     const [progressbarvalue, setprogressbarvalue] = useState(0);
  
//     function toggleTab(tab, value) {
//       if (activeTab !== tab) {
//         var modifiedSteps = [...passedSteps, tab];
  
//         if (tab >= 1 && tab <= 4) {
//           setactiveTab(tab);
//           setPassedSteps(modifiedSteps);
//         }
//       }
//       setprogressbarvalue(value);
//     }

//     const validation = useFormik({
//         // enableReinitialize : use this flag when initial values needs to be changed
//         enableReinitialize: true,
    
//         initialValues: {
//           digit1_input: "",
//           digit2_input: "",
//           digit3_input: "",
//           digit4_input: "",
//           digit5_input: "",
//           digit6_input: "",
//         },
//         // validationSchema: Yup.object({
//         //     digit1_input: Yup.string().required("Please Enter Your Phone Number"),
//         //     password: Yup.string().required("Please Enter Your Password"),
//         // }),
//         onSubmit: (values) => {
//           let {
//             digit1_input,
//             digit2_input,
//             digit3_input,
//             digit4_input,
//             digit5_input,
//             digit6_input,
//           } = values;
//           let finalCode = `${digit1_input}${digit2_input}${digit3_input}${digit4_input}${digit5_input}${digit6_input}`;
    
//           //   let payload = {
//           //     phonenumber: `+${phonenumber}`,
//           //     passcode: finalCode,
//           //   };
//           //   dispatch(verifyPasscodeRequest(payload, props.router.navigate));
//           //   dispatch({ type: VERIFY_PASSCODE_RESET });
//         },
//       });
    
//       const getInputElement = (index) => {
//         return document.getElementById("digit" + index + "-input");
//       };
    
//       const moveToNext = (index) => {
//         if (getInputElement(index).value.length === 1) {
//           if (index !== 6) {
//             getInputElement(index + 1).focus();
//           } else {
//             getInputElement(index).blur();
//             // Submit code
//             // console.log('submit code', getInputElement(index));
//           }
//         }
//       };

//     return (
//         <>
//           <Link to='/login'>
//         <h5 className="fw-bolder text-end m-3">
//           Existing employers/recruiters?
//           <span style={{ color: "#244a59" }}>Login</span>{" "}
//         </h5>
//         </Link>
//         <div style={{backgroundColor: 'white', padding: "14rem"}}>
//             <Container>
//         <Form
//                                 // onSubmit={(e) => {
//                                 //   e.preventDefault();
//                                 //   validation.handleSubmit();
//                                 //   return false;
//                                 // }}
//                                 // action="#"
                                
                                
//                               > 
//                               <h4 className='fw-bolder text-center mb-3'>Verification Center</h4>
//                               <h6 className="pt-5 text-center mb-4">We have sent an OTP to your phone number +233559752223</h6>
//                                 <h6 className="pt-5 text-center mb-5">Enter OTP</h6>
//                                 <Row>
//                                   <Col className="col-2 mb-5">
//                                     <Input
//                                       type="text"
//                                       name="digit1_input"
//                                       className="form-control text-center"
//                                       onChange={validation.handleChange}
//                                       maxLength="1"
//                                       id="digit1-input"
//                                       onKeyUp={() => moveToNext(1)}
//                                       style={{
//                                         marginRight: 2,
//                                         paddingLeft: 3,
//                                         fontSize: 20,
//                                         height: "10rem"
//                                       }}
//                                     />
//                                   </Col>

//                                   <Col className="col-2">
//                                     <div className="mb-3">
//                                       <label
//                                         htmlFor="digit2-input"
//                                         className="visually-hidden"
//                                       >
//                                         Digit 2
//                                       </label>
//                                       <Input
//                                         type="text"
//                                         name="digit2_input"
//                                         className="form-control text-center"
//                                         onChange={validation.handleChange}
//                                         maxLength="1"
//                                         id="digit2-input"
//                                         onKeyUp={() => moveToNext(2)}
//                                         style={{
//                                           marginRight: 2,
//                                           paddingLeft: 3,
//                                           fontSize: 20,
//                                           height: "10rem"
//                                         }}
//                                       />
//                                     </div>
//                                   </Col>

//                                   <Col className="col-2">
//                                     <div className="mb-3">
//                                       <label
//                                         htmlFor="digit3-input"
//                                         className="visually-hidden"
//                                       >
//                                         Digit 3
//                                       </label>
//                                       <Input
//                                         type="text"
//                                         name="digit3_input"
//                                         className="form-control text-center"
//                                         onChange={validation.handleChange}
//                                         maxLength="1"
//                                         id="digit3-input"
//                                         onKeyUp={() => moveToNext(3)}
//                                         style={{
//                                           marginRight: 2,
//                                           paddingLeft: 3,
//                                           fontSize: 20, height: "10rem"
//                                         }}
//                                       />
//                                     </div>
//                                   </Col>

//                                   <Col className="col-2">
//                                     <div className="mb-3">
//                                       <label
//                                         htmlFor="digit4-input"
//                                         className="visually-hidden"
//                                       >
//                                         Digit 4
//                                       </label>
//                                       <Input
//                                         type="text"
//                                         name="digit4_input"
//                                         className="form-control text-center"
//                                         onChange={validation.handleChange}
//                                         maxLength="1"
//                                         id="digit4-input"
//                                         onKeyUp={() => moveToNext(4)}
//                                         style={{
//                                           marginRight: 2,
//                                           paddingLeft: 3,
//                                           fontSize: 20,
//                                           height: "10rem"
//                                         }}
//                                       />
//                                     </div>
//                                   </Col>
//                                   <Col className="col-2">
//                                     <div className="mb-3">
//                                       <label
//                                         htmlFor="digit5-input"
//                                         className="visually-hidden"
//                                       >
//                                         Digit 5
//                                       </label>
//                                       <Input
//                                         type="text"
//                                         name="digit5_input"
//                                         className="form-control text-center"
//                                         onChange={validation.handleChange}
//                                         maxLength="1"
//                                         id="digit5-input"
//                                         onKeyUp={() => moveToNext(5)}
//                                         style={{
//                                           marginRight: 2,
//                                           paddingLeft: 3,
//                                           fontSize: 20,
//                                           height: "10rem"
//                                         }}
//                                       />
//                                     </div>
//                                   </Col>
//                                   <Col className="col-2">
//                                     <div className="mb-3">
//                                       <label
//                                         htmlFor="digit6-input"
//                                         className="visually-hidden"
//                                       >
//                                         Digit 6
//                                       </label>
//                                       <Input
//                                         type="text"
//                                         name="digit6_input"
//                                         className="form-control text-center"
//                                         onChange={validation.handleChange}
//                                         maxLength="1"
//                                         id="digit6-input"
//                                         onKeyUp={() => moveToNext(6)}
//                                         style={{
//                                           marginRight: 2,
//                                           paddingLeft: 3,
//                                           //   paddingTop: 3,
//                                           //   paddingBottom: 3,
//                                           fontSize: 20,
//                                           height: "10rem"
//                                         }}
//                                       />
//                                     </div>
//                                   </Col>
//                                 </Row>

//                                 <h6
//                                   className="fw-bolder text-center"
//                                   style={{
//                                     color: "#244a59",
//                                     cursor: "pointer",
//                                   }}
//                                 >
//                                   Didn't receive your OTP? Resend
//                                 </h6>

//                                 <div className="mt-5">
//                                     <Link to='/employer-otp-success'>
//                                   <Button
//                                     color="success"
//                                     // disabled={
//                                     //   passCodeError
//                                     //     ? null
//                                     //     : passCodeLoading
//                                     //     ? true
//                                     //     : false
//                                     // }
//                                     className="btn btn-dark w-100"
//                                     type="submit"
//                                     style={{ backgroundColor: "#244a59", padding: '1.5rem' }}
//                                     onClick={() => {
//                                       toggleTab(activeTab + 1, 100);
//                                     }}
//                                   >
//                                     {/* {passCodeError ? null : passCodeLoading ? (
//                                   <Spinner size="sm" className="me-2">
//                                     {" "}
//                                     Loading...{" "}
//                                   </Spinner>
//                                 ) : null} */}
//                                     Verify Mobile Numner
//                                   </Button>
//                                   </Link>
//                                 </div>
//                               </Form>
//                               </Container>
//         </div>
        
        
//         </>
//     )
// }

// export default EmployerOTP;