/**
 * Created by jj on 2/12/17.
 * TODO: Commit radar sensor code to github from medium.com article
 * TODO: Change icon from site to google drive to show the report
 */

import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const RadarSensor = (props) => {
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Radar Sensor"
                subtitle="24 Ghz Radar sensor to detect real time speed and range measurement"
            />
            <CardText>
                <li>• Programmed a micro-processor to control a patch array antenna and transmit signals to a receiver</li>
                <li>• Utilized SPI protocol to manipulate the amplitude of an infineon transceiver</li>
            </CardText>
            <CardActions>
                <a
                    href="https://docs.google.com/document/d/1jGDBupBqz7a-Cig6KLieLi5r4yu8q2ELPhPQUG7XAjY/edit?usp=sharing"
                    target ="_blank">
                    <i className="fa fa-file-pdf-o fa-3x"></i>
                </a>
                <a href="https://youtu.be/HwhnhoFssBY"
                   target ="_blank">
                    <i className="fa fa-youtube fa-3x"></i>
                </a>
                <a href="http://github.com/JonathanCMitchell/RadarSensorCode/blob/master/spi_protocol.c"
                   target ="_blank">
                    <i className="fa fa-code fa-3x"></i>
                </a>
                <a href="http://medium.com/@jmitchell1991/talking-to-chips-and-minimizing-noise-8a7de1188a67#.saeypxnf6"
                   target ="_blank">
                    <i className="fa fa-medium fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default RadarSensor