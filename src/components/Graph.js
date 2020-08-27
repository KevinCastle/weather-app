import React from 'react';
import { appleStock } from '@vx/mock-data';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { withParentSize } from '@vx/responsive';
import { extent, max } from 'd3-array';

const Graph = (props) => {
    const data = props.data.map((time) => {
        return [time.dt_txt, time.main.temp];
    })

    console.log(data);

    //const data = appleStock;

    const width = 750;
    const height = 400;

    const x = d => new Date(d[0]);
    const y = d => d[1];

    // Bounds
    const margin = {
        top: 10,
        bottom: 60,
        left: 50,
        right: 130,
    };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const xScale = scaleTime({
        range: [0, xMax],
        domain: extent(data, x)
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        domain: [0, max(data, y)],
    });


    return (
        <div className="svg-container">
            <svg width={width} height={height}>
                <Group top={margin.top} left={margin.left}>

                    <AreaClosed
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        x={x}
                        y={y}
                        fill={"transparent"}
                        stroke={"#eceff1"}
                    />

                    <AxisLeft
                        scale={yScale}
                        top={0}
                        left={0}
                        label={'Temperatura'}
                        stroke={'#25c5d8'}
                        tickTextFill={'#25c5d8'}
                    />

                    <AxisBottom
                        scale={xScale}
                        top={yMax}
                        label={'Hora'}
                        stroke={'#25c5d8'}
                        tickTextFill={'#25c5d8'}
                    />

                </Group>
            </svg>
        </div>
    )
}

export default Graph
