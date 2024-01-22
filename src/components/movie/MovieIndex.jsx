import React from 'react';
import { Col, Container, Row } from 'reactstrap'
import MovieCreate from './MovieCreate';
import MovieTable from './MovieTable';  //! <-- Added

function MovieIndex(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col md="4">
                        <MovieCreate token={props.token} />
                    </Col>
                    <Col md="8">
                        <MovieTable /> {/* <-- MOUNTED */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieIndex