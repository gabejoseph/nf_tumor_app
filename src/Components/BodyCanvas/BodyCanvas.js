import React, {useRef, useEffect} from 'react'

import './BodyCanvas.css'

export default function BodyCanvas() {
    const canvas = useRef();
    let ctx = null;

    // initialize the canvas context
    useEffect(() => {

        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
    
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, []);

    // draw a line
    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
    
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    return (
        <div className='BodyCanvas'>
            <canvas onClick={()=>{drawLine({x: 1, y: 2, x1: 20, y1: 30})}} ref={canvas}></canvas>
        </div>
    )
}
