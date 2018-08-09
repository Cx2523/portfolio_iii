import React, {Component} from 'react';
import { Polar , HorizontalBar} from 'react-chartjs-2';
import { Container, Row, Col, Button } from 'reactstrap';

const data1 = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'green']
    }],
    labels: [
        'TypeScript',
        'React',
        'Redux'
    ]
        
}

const data2 = {
    datasets: [{
        data: [15, 10, 12],
        backgroundColor: ['yellow', 'orange', 'purple']
    }],
    labels: [
        'C#',
        'PostGreSQL',
        'TDD'
    ]    
}
const data3 = {
    datasets: [{
        data: [8, 25, 30],
        backgroundColor: ['lightblue', 'blue', 'green']
    }],    
    labels: [
        'Business Intelligence',
        'Node js',
        'Express'
    ]
}


class SkillsWidget extends Component{
    constructor(){
        super();
        this.state = {
            data: data1,
            summary: false
        }
        this.changeDataSet = this.changeDataSet.bind(this);
    }

    changeDataSet(newDataSet){
        if (newDataSet === 'summary'){
            this.setState({
                data: null,
                summary: true 
            });
        } else {
            this.setState({
                data: newDataSet,
                summary: false
            });
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="3">
                        <Button onClick={() => this.changeDataSet(data1)} block outline color="primary">ONe</Button>
                        <Button onClick={() => this.changeDataSet(data2)} block outline color="primary">Two</Button>
                        <Button onClick={() => this.changeDataSet(data3)} block outline color="primary">Three</Button>
                        <Button onClick={() => this.changeDataSet('summary')} block outline color="primary">Summary</Button>
                    </Col>
                    <Col xs="9">
                        {this.state.summary ? <HorizontalBar data={data1}/> : <Polar data={this.state.data}/>}
                            
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default SkillsWidget;