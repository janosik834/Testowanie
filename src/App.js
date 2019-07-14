import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';
import logo_src from './image/LogoMakr.png'
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/DropdownItem'
import FormControl from 'react-bootstrap/FormControl';
function AppHeader() {
  return (
    <header className="ui menu" fluid={true}>
      <nav className="ui container" fluid={true}>
        <a href="#" className="header item">
          <img
            className="App-logo" alt="logo"
            src={logo_src}
          />

        </a>
         <div className="header item" fluid={true}>
         <ButtonGroup className="header button">
         <Button className="head button" variant="secondary" >Main</Button>
         <Button className="head button"  variant="secondary">Settings</Button>
         <Button  className="head button" variant="secondary">About us</Button>
         <Button  className="head button" variant="secondary">Find word</Button>

         </ButtonGroup>

         <DropdownButton  className="head dropdown button"   as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown" >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
         </DropdownButton>

         </div>
      </nav>

    </header>
  );
}

function ContactsList() {
  return (

    <ul className="ui relaxed divided list selection">
      <ContactItem
        login="typeofweb1"
        name="Lena"
        department="JavaScript Developer"
      />
      <ContactItem
        login="typeofweb2"
        name="Brian"
        department="Human Resources"
      />
      <ContactItem
        login="typeofweb3"
        name="Rick"
        department="QA"
      />
    </ul>
  );
}

function ContactItem({ login, name, department }) {
  const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
  return (
    <li className="item">
      <img src={imgUrl} className="ui mini rounded image" alt="avatar"/>
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
  );
}

function App() {
  return (
    <div >
      <AppHeader />
      <main className="ui main text container">
      <InputGroup className="ig-1"   >
        <InputGroup.Prepend>
          <InputGroup.Text id="btnGroupAddon">Czego poszukujesz?</InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          type="text"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />

      </InputGroup>
        <ContactsList />
      </main>
    </div>
  );
}
export default App
