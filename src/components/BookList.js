import React, { Component } from 'react'
import './BookList.css'
import { Button } from 'reactstrap'
import Book from './Book'
import { BookContext } from '../contexts/BookContext'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {

    render() {

        return (
            <ThemeContext.Consumer>
                {(contextTheme) => (
                    <BookContext.Consumer>
                        {contextBook => {
                            const { books } = contextBook
                            const { changeTheme, isDartTheme, dark, light } = contextTheme
                            const theme = isDartTheme ? dark : light
                            return (
                                <section
                                    className="page-section"
                                    style={{ background: theme.bg, color: theme.txt }} id="portfolio">
                                    <div className="container">
                                        <div className="text-center">
                                            <h2 className="section-heading">
                                                BOOKFOLIO
                                            </h2>
                                            <h3 className="section-subheading text-muted">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </h3>
                                            <Button color="info" outline
                                                onClick={changeTheme}
                                                className='mb-5 mt-2'>Change Theme
                                            </Button>
                                        </div>
                                        <div className="row">
                                            {books.map((book, i) => {
                                                return <Book book={book} key={i} />
                                            })}
                                        </div>
                                    </div>
                                </section>
                            )
                        }}
                    </BookContext.Consumer>
                )}
            </ThemeContext.Consumer>
        )
    }
}
