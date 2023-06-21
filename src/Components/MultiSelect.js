import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NestedSelect from './NestedSelect';

function MultiSelect({ data, title }) {
    const [open, setOpen] = useState(false);
    // console.log("dddd", data)
    return (
        <Container className='mt-5'>
            <Row className='mt-5'>
                <Col>
                    <Row>
                        <Col>
                            <button onClick={() => setOpen(!open)} className='checkbox_btn'><div><input type="checkbox" /> {title} </div> <MdOutlineKeyboardArrowDown className={open ? "arrow-up" : "arrow-down"} /> </button>
                        </Col>
                    </Row>
                    {
                        open ?
                            (
                                <div>
                                    {
                                        data.map(({ title, key, challangeData, challangetitle,id }) => (
                                            <Row >
                                                <Col>
                                                    <form className='checkbox_form'>
                                                        {key !== 2 ? <input className="checkmark" type="checkbox" id={id} name={title} value={title} /> : null}
                                                        {key !== 2 ? <label for="vehicle1"> {title} </label> : <NestedSelect data={challangeData} title={challangetitle} />}<br></br>
                                                    </form>
                                                </Col>
                                            </Row>
                                        ))
                                    }

                                </div>
                            ) : null
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default MultiSelect