import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'

const AuthorsPage = () => {

    const { authorsName } = useParams()
    console.log(authorsName)

    return (
        <Container>

            <div>{authorsName}</div>
        </Container>
    )
}

export default AuthorsPage