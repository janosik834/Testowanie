import React from 'react';
import Card from 'react-bootstrap/Card'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup'

import file_icon from './image/fileIcon.png'
export default  class WordCard extends React.Component {
  constructor(props){
  console.log("dsdfdsfdsddddd",props.files);

    super(props);
      // console.log("dsdfdsfdsddddd",props.files);
    this.state = {nameWord : props.name,
                  filesInWord: props.files};
  }
  onClickHandler = () => {
const inputComponent =  document.getElementById("text_input_main" )
this.setState({nameWord:inputComponent.value});
};

componentWillReceiveProps(nextProps){
  this.setState( {nameWord : nextProps.name,
                filesInWord: nextProps.files});

}
render() {
console.log(this.state)
  return (
  <Card className="word card" key='card1'  >
  <Card.Title className="card center"  as="button">{this.state.nameWord}</Card.Title>
  <ListGroup variant="flush" key='list1'>
    {this.state.filesInWord.map(file =>  <ListGroup.Item className="file item" key={file}>             <img
              src={file_icon}
              className="icon"
              alt="icon"

            />{file}</ListGroup.Item>)}

    <ListGroup.Item key='ddddd'><img
              src={file_icon}
              className="icon"
              alt="icon"

            />Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item key='ddd'><img
              src={file_icon}
              className="icon"
              alt="icon"

            />Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
)
};
}
