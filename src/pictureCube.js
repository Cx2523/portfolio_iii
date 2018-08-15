import React, {Component} from 'react';

// props: size, transitions([faces])
class PictureCube extends Component {
    constructor(props){
        super(props);
        this.state = {
            faceUp: 0,
            rotation: { transform: 'rotate3d(0, 0, 0, 0deg)'},
            intervalId: null,
            height:0,
            width:0,
            depth:0
        }
        this.frontFace = { 
            transform: `rotateY(0deg) translateZ(${this.props.depth / 2}px)` ,
            backgroundImage: "url('https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350')",
            width: '',
            height: '',
        }
        this.backFace = { 
            transform: `rotateY(180deg) translateZ(${this.props.depth / 2}px)`,
            backgroundImage: "url('https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350')",
            width: '',
            height: '',
        }
        this.rightFace = { 
            transform: `rotateY(90deg) translateZ(${this.props.depth / 2}px)`,
            width: '',
            height: ''
        }
        this.leftFace = { 
            transform: `rotateY(-90deg) translateZ(${this.props.depth / 2}px)`,
            width: '',
            height: ''
        }
        this.topFace = { 
            transform: `rotateX(90deg) translateZ(${this.props.depth / 2}px)`,
            backgroundImage: "url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            width: '',
            height: ''
        }
        this.bottomFace = { 
            transform: `rotateX(270deg) translateZ(${this.props.depth / 2}px)`,
            backgroundImage: "url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            width: '',
            height: ''
        }

        this.scene = {
            width: '',
            height: '',
            perspective: '',
            // transformOrigin: "-100px -100px -100px"
        }
    
        this.cube = {
            width: '',
            height: '',
            position: 'relative',
            transformStyle: "preserve-3d",
            // transformOrigin: "-100px -100px -100px",
            transform: "translateZ(-5000px)",
            transition: "transform 1s"
        }
    
        this.cubeFace = {
            position: 'absolute',
            // opacity: '.5',
            backgroundColor: 'pink',
            color: 'white',
            fontSize: '2rem',
            border: "2px solid black"
        }

        this.timer = this.timer.bind(this);
    }

    rotationAngle = 0;

    componentDidMount() {
        var intervalId = setInterval(this.timer, 1000);
        const height = this.refs.cubeContainer.parentNode.clientHeight;
        const width = this.refs.cubeContainer.parentNode.clientWidth;
        const depth = this.refs.cubeContainer.parentNode.clientHeight;
        
        this.frontFace.width = `${width}px`;
        this.frontFace.height = `${height}px`;
        this.backFace.width = `${width}px`;
        this.backFace.height = `${height}px`;
        this.rightFace.width = `${depth}px`;
        this.rightFace.height = `${height}px`;
        this.leftFace.width = `${depth}px`;
        this.rightFace.height = `${height}px`;
        this.topFace.width = `${width}px`;
        this.topFace.height = `${depth}px`;
        this.bottomFace.width = `${width}px`;
        this.bottomFace.height = `${depth}px`;
        this.cube.transformOrigin = "center";
        this.cube.width = `${width}px`;
        this.cube.height = `${height}px`;
        this.scene.width = `${width}px`;
        this.scene.height = `${height}px`;
        this.scene.perspective = "1000px"

        this.setState({
            intervalId: intervalId
        });
        
    }

    timer() {
        this.rotationAngle = this.rotationAngle + 90;
        this.setState({rotation: { transform: `rotate3d(1, 0, 0, ${this.rotationAngle}deg)`}})
    }

    render(){
        return (
            <div ref={'cubeContainer'} style={{...this.scene}}>
                <div id={"cube"} style={{...this.cube, ...this.state.rotation}}>
                    <div style={{...this.cubeFace, ...this.frontFace}}>front</div>
                    <div style={{...this.cubeFace, ...this.backFace}}>back</div>
                    <div style={{...this.cubeFace, ...this.rightFace}}>right</div>
                    <div style={{...this.cubeFace, ...this.leftFace}}>left</div>
                    <div style={{...this.cubeFace, ...this.topFace}}>top</div>
                    <div style={{...this.cubeFace, ...this.bottomFace}}>bottom</div>
                </div>
            </div>
        );
    }
}

export default PictureCube;