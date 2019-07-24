import React from 'react';
import Card from 'react-bootstrap/Card'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup'

import file_icon from './image/fileIcon.png'
export default  class WordCard extends React.Component {
  constructor({name, files}){

    super({name, files});
    this.state = {nameWord : name,
                  filesInWord: files};
  }
  onClickHandler = () => {
const inputComponent =  document.getElementById("text_input_main" )
this.setState({nameWord:inputComponent.value});
};

render() {
  return (
  <Card className="word card"  >
  <Card.Title className="card center"  as="Button">{this.state.nameWord}</Card.Title>
  <ListGroup variant="flush">
    {this.state.filesInWord.map(file =>  <ListGroup.Item className="file item">             <img
              src={file_icon}
              className="icon"
              alt="icon"
            />{file}</ListGroup.Item>)}

    <ListGroup.Item><img
              src={file_icon}
              className="icon"
              alt="icon"
            />Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item><img
              src={file_icon}
              className="icon"
              alt="icon"
            />Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
)
};
}
