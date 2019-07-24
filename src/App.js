import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';
import logo_src from './image/LogoMakr.png'
import file_icon from './image/fileIcon.png'
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import HeaderTag from './header.jsx'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ReactDOM from 'react-dom'
import WordCard from './File_card.jsx'
// function onClickHandler(){
//   // alert('Kliknięto!');
// const inputComponent =  document.getElementById("text_input_main" )
// // alert(inputComponent.value);
// const outputComponent = document.getElementById("card_renderr")
// outputComponent.onClickHandler;
// }

const title_value = "start"
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

function LookingBar () {

  return (

    <InputGroup className="ig-1"   >
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">Czego poszukujesz?</InputGroup.Text>
      </InputGroup.Prepend>

      <FormControl
      id="text_input_main"
        type="text"
        placeholder="Search"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
      <InputGroup.Append>
      <InputGroup.Text className="buttonsearch" >Search</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
}
// function WordCard({name, files}) {
// return (
//   <Card className="word card" id="card_renderr"  >
//   <Card.Title className="card center"  as="Button">{name}</Card.Title>
//   <ListGroup variant="flush">
//     {files.map(file =>  <ListGroup.Item className="file item">             <img
//               src={file_icon}
//               className="icon"
//               alt="icon"
//             />{file}</ListGroup.Item>)}
//     <ListGroup.Item><img
//               src={file_icon}
//               className="icon"
//               alt="icon"
//             />Cras justo odio</ListGroup.Item>
//     <ListGroup.Item><img
//               src={file_icon}
//               className="icon"
//               alt="icon"
//             />Dapibus ac facilisis in</ListGroup.Item>
//     <ListGroup.Item><img
//               src={file_icon}
//               className="icon"
//               alt="icon"
//             />Vestibulum at eros</ListGroup.Item>
//   </ListGroup>
// </Card>
// )
// }
const namecards = "start"
const filesstart = ["one", "two", "three"]
function App() {
  return (
    <div >
      <HeaderTag className="head"/>
      <main className="ui main text container">
      <LookingBar />
      <WordCard name={namecards} files={filesstart} id="card_renderr" />
        <ContactsList />
      </main>
    </div>
  );
}
export default App
