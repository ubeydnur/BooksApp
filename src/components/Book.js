import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Book extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(contextTheme) => {
                    const { isDartTheme, dark, light } = contextTheme
                    const theme = isDartTheme ? dark : light
                    return (
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover" style={{background:theme.hover}}>
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={this.props.book.imageURL} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{this.props.book.title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{this.props.book.author}</div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}


