import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo_src from './image/LogoMakr.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './header.css';
export default class HeaderTag extends React.Component {
render(){
return (
   <header className="ui menu" >
    <Container className="ui container" fluid={true} >
    <Row className="header row">
    <Col sm={2}>

      <img
        className="App-logo" alt="logo"
        src={logo_src}
      />


    </Col>
    <Col sm={{ span: 7, offset: 1 }} className="header item">

    <Row className="header row">
          <h1> Desert of Konowledge </h1>
    </Row>
    <Row className="header row" >

    <ButtonGroup className="header button">
    <DropdownButton  className="head dropdown button"  title="Main" id="bg-nested-dropdown" drop='left' >
       <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
       <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
    <Button className="head button"  variant="secondary">Settings</Button>
    <Button  className="head button" variant="secondary">About us</Button>
    <Button  className="head button" variant="secondary">Some New</Button>

    </ButtonGroup>

    <DropdownButton  className="head dropdown button"   title="Dropdown" id="bg-nested-dropdown" drop='right' >
       <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>

       <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>


    </Row>
    </Col>
    <Col sm={2}>

      <img
        className="App-logo" alt="logo"
        src={logo_src}
      />

    </Col>

</Row>



    </Container>

  </header>)


}

}
