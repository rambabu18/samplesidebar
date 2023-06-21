import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function NestedSelect({data,title}) {
    const [openNest, setOpenNest] = useState(false);

    const handleOpen = (e) =>{
        e.preventDefault();
        setOpenNest(!openNest)
    }
    return (
        <Container className='mt-5'>
            <Row className='mt-5'>
                <Col>
                    <Row>
                        <Col>
                            <button onClick={handleOpen} className='checkbox_btn_one'><div><input className="checkmark" type="checkbox" value={title} /> {title} </div> <MdOutlineKeyboardArrowDown className={openNest ? "arrow-up" : "arrow-down"} /> </button>
                        </Col>
                    </Row>
                    {
                        openNest ?
                            (
                                <>
                                    {
                                        data.map((d,id) => (
                                            <Row >
                                                <Col>
                                                    <form className='checkbox_form_one'>
                                                        <input className="checkmark" type="checkbox" id={id} name={d.title} value={d.title} />
                                                        <label for="vehicle1"> {d.title} </label><br></br>
                                                    </form>
                                                </Col>
                                            </Row>
                                        ))
                                    }

                                </>
                            ) : null
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default NestedSelect