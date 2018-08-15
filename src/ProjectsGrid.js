import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PictureCube from './pictureCube';
class ProjectsGrid extends Component{
    constructor(){
        super();
    }

    render() {
        return (
            <Container style={{width: '70%', marginLeft:'auto', marginRigh:'auto'}}>
                <Row>
                    <Col style={{backgroundColor: 'black', height: '350px'}}></Col>
                    <Col>
                        <PictureCube depth={350}/>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col style={{backgroundColor: 'black', height: '350px'}}></Col>
                </Row>
                <Row>
                    <Col style={{backgroundColor: 'black', height: '350px'}}></Col>
                    <Col></Col>
                </Row>
            </Container>    
        );
    }
}

export default ProjectsGrid;