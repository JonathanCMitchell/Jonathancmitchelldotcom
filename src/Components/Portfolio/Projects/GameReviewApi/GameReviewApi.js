/**
 * Created by jj on 2/12/17.
 * Display for GameReviewApi component
 * TODO: Delete class on CardMedia tag inside component after images are all the same size
 *
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const GameReviewApi = (props) => {
    return (
            <Card className="col-md-6 col-xs-12 Project-Card">
                <CardMedia>
                    <img src={props.imageurl} />
                </CardMedia>
                <CardTitle
                    title="Game Review API"
                    subtitle="A restful API that allows users to search through 18k game reviews and query for top scores by genre, platform, title etc"
                />
                <CardText>
                <li>• Parsed game review data from ign.com and filled MySql database tables using an MVC file pattern</li>
                <li>• Designed ES7 generator functions to synchronously seed the database with 18k row entries</li>
                </CardText>
                    <CardActions>
                    <a href="http://gamereviewdocs.herokuapp.com"
                       target ="_blank">
                        <i className="fa fa-eye fa-3x"></i>
                    </a>
                    <a href="http://github.com/ConsoleGameApi"
                       target ="_blank">
                        <i className="fa fa-github fa-3x"></i>
                    </a>
                    </CardActions>
            </Card>
    )
};



export default GameReviewApi