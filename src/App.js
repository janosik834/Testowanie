import React from 'react';
// import * as bs from 'bootstrap/dist/css/bootstrap.css';
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';
// import logo_src from './image/LogoMakr.png'
// import file_icon from './image/fileIcon.png'
import './App.css';
// import ContactsFilter from './contactsfilter.jsx'
import FilesFilterContainer from './filesfilter.jsx'
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import HeaderTag from './header.jsx'
// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ReactDOM from 'react-dom'
import WordCard from './File_card.jsx';
import  {filesFetched} from './actions';
import {getFilteredFiles} from './selectors/getFilteredFiles';
import { connect } from 'react-redux'

// function onClickHandler(){
//   // alert('Kliknięto!');
// const inputComponent =  document.getElementById("text_input_main" )
// // alert(inputComponent.value);
// const outputComponent = document.getElementById("card_renderr")
// outputComponent.onClickHandler;
// }




// const title_value = "start"

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
      <InputGroup.Text className="buttonsearch" onClick={()=>{ const outputComponent = document.getElementById("card_renderr"); alert(outputComponent.id);}} >Search</InputGroup.Text>
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
console.log("filestart", filesstart)
export class App extends React.Component {
// constructor() {
// super();
// // this.state = {
// //     files: null,
// //   };
//
//
// }


  componentWillMount() {
    fetch("https://randomapi.com/api/y1w7j1as?key=WIFA-RP3U-OLOQ-I9I8")
      .then(res => {
        const tab = res.json();
        console.log("res",tab);
        return tab})
        .then(json => {
          console.log(json);
          this.props.filesFetched(json.results[0].files)});
     // .then(json => {console.log(json.results[0].files);this.setState({files: json.results[0].files})});
  }
render() {
  const filesss = this.props.files;
  // console.log("dsdfs",filesss);
  return (
    <div >
      <HeaderTag className="head"/>

      <main className="ui main text container">

      <LookingBar />

      <FilesFilterContainer className="center" />
      {filesss ? <WordCard name={namecards} files={filesss} id="card_renderr" key='wwordcard'/> : 'Ładowanie ...'}
    
      </main>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    files: getFilteredFiles(state.files, state.filesSearch)
  }
};
const mapDispatchToProps = { filesFetched };
// export default App

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
