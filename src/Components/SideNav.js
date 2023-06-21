import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import data from './data.json';
import MultiSelect from './MultiSelect';
import { Col, Container, Row } from 'react-bootstrap';

function SideNav() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='side_nav'>
      <div className='navbar'>
        <Link to='#' className='menu-bars_one'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <Container>
        <Row>
          <Col>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <Container>
                <Row>
                  <Col>
                    <Row className=''>
                      <Col>
                        <div className='menu_logo'>
                          <Link to='#' className='menu-bars'>
                            <div className='menu_bar_title'>
                              <FaIcons.FaRegChartBar />
                              <span> Statistics </span>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <Row className='menu_bar_row'>
                      <Col>
                        <div className='side_menu'>
                          {
                            data.map(({childrens, title}) => (
                              <MultiSelect title={title} data={childrens} />
                            ))
                          }

                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SideNav