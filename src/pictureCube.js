import React, {Component} from 'react';

// props: size, transitions([faces])
class PictureCube extends Component {
    constructor(props){
        super(props);
        this.state = {
            faceUp: 0,
            rotation: { transform: 'rotate3d(0, 0, 0, 0deg)'},
            intervalId: null
        }
        this.timer = this.timer.bind(this);
    }

    rotationAngle = 0;

    componentDidMount() {
        var intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
    }

    timer() {
        this.rotationAngle = this.rotationAngle + 90;
        this.setState({rotation: { transform: `rotate3d(1, 1, 0, ${this.rotationAngle}deg)`}})
    }

    scene = {
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        perspective: `${2 * this.props.size}px`
    };

    cube = {
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        position: 'relative',
        transformStyle: "preserve-3d",
        transform: `translateZ(-${this.props.size / 2})`,
        transition: "transform 1s"
    };

    cubeFace = {
        position: 'absolute',
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        // opacity: '.5',
        backgroundColor: 'pink',
        color: 'white',
        fontSize: '2rem',
        border: "2px solid black"
    };

    frontFace = { 
        transform: `rotateY(0deg) translateZ(${this.props.size / 2}px)` ,
        backgroundImage: "url(\'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350\')"
    }
    backFace = { 
        transform: `rotateY(180deg) translateZ(${this.props.size / 2}px)`,
        backgroundImage: "url(\'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350\')"
    }
    rightFace = { transform: `rotateY(90deg) translateZ(${this.props.size / 2}px)` }
    leftFace = { transform: `rotateY(-90deg) translateZ(${this.props.size / 2}px)` }
    topFace = { 
        transform: `rotateX(90deg) translateZ(${this.props.size / 2}px)`,
        backgroundImage: "url(\'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\')",
    }
    bottomFace = { 
        transform: `rotateX(-90deg) translateZ(${this.props.size / 2}px)`,
        backgroundImage: "url(\'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\')"
    }


    render(){
        return (
            <div style={this.scene}>
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