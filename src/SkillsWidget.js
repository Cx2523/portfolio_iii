import React, {Component} from 'react';
import { Polar , HorizontalBar} from 'react-chartjs-2';
import { Container, Row, Col, Button } from 'reactstrap';

const data1 = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'green'],
    },
],

    labels: [
        'TypeScript',
        'React',
        'Redux'
    ]
        
}

const data2 = {
    datasets: [{
        data: [15, 10, 12],
        backgroundColor: ['yellow', 'orange', 'purple'],
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
        backgroundColor: ['lightblue', 'blue', 'green'],
    }],    
    labels: [
        'Business Intelligence',
        'Node js',
        'Express'
    ]
}

const data4 = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [10,11,12,13,14]
        }
    ]
}

const barOptions = {
    scales: {
      xAxes: [{
        ticks: {
          min: 0
        }
      }],
    }
  }


const graphsDataList = [data1, data2, data3, data4];


class SkillsWidget extends Component{
    constructor(){
        super();
        this.state = {
            dataSet: 0,
            summary: false
        }
        this.selectDataSet = this.selectDataSet.bind(this);
    }

    selectDataSet(index){
       this.setState({
           dataSet: index
       });
    }

    drawChart(){
        if (this.state.dataSet === 3 ) {
            return <HorizontalBar redraw={true} data={graphsDataList[this.state.dataSet]} options={barOptions} />
        } else {
            return <Polar redraw={true} data={graphsDataList[this.state.dataSet]} options={{startAngle: (Math.random() - Math.random()) * Math.PI}}/>;
        }
        
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="3">
                        <Button onClick={() => this.selectDataSet(0)} block outline color="primary">ONe</Button>
                        <Button onClick={() => this.selectDataSet(1)} block outline color="primary">Two</Button>
                        <Button onClick={() => this.selectDataSet(2)} block outline color="primary">Three</Button>
                        <Button onClick={() => this.selectDataSet(3)} block outline color="primary">Summary</Button>
                    </Col>
                    <Col xs="9">
                    {this.drawChart()}  
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default SkillsWidget;