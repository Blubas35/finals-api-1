import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'

const AuthorsPage = () => {

    const { authorId } = useParams()

    const [authorInformation, setAuthorInformation] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [authorImage, setAuthorImage] = useState('')
    const [authorDescription, setAuthorDescription] = useState('')
    const [bookTitle, setBookTitle] = useState('')
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/books?authorId=${authorId}`)
            .then(res => res.json())
            .then(authorData => {
                console.log(authorData)
                setAuthorInformation(authorData)
            })
    }, [])

    const fullNameHandler = (e) => setAuthorName(e.target.value)
    const imageUrlHandler = (e) => setAuthorImage(e.target.value)
    const authorDescriptionHandler= (e) => setAuthorDescription(e.target.value)


    const editAuthorHandler = (authorInfo) => {
        console.log(authorInfo)
        const { author, authorDescription, authorImage } = authorInfo

        setAuthorName(author)
        setAuthorImage(authorImage)
        setAuthorDescription(authorDescription)
        // setEditMode(true)
    }

    const submitFormHandler = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/books?authorId=${authorId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: 1,
                author: authorDescription,
                authorImage,
                authorDescription,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                fetch(`http://localhost:3000/books?authorId=${authorId}`)
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data)
                    })
            });
          
    }

    return (
        <Container>
            {authorInformation && authorInformation.length > 0 && (
                authorInformation.map((info, index) => (

                    <div key={index} className='author-information-wrapper'>
                        <div className='author-personal-info-wrapper'>
                            <h2 className='author-name'>{info.author}</h2>
                            <div className='author-image-wrapper'>
                                <img className='author-image' src={info.authorImage} alt='author image' width='200' height='200'></img>
                            </div>
                        </div>
                        <div className='author-biography'>
                            <h2 className='biography-title'>About the author</h2>
                            <p className='biography-content'>{info.authorDescription}</p>
                        </div>
                        <button className='edit-author' onClick={() => editAuthorHandler(info)}>Edit author</button>

                        {!editMode && (
                            <form onSubmit={submitFormHandler}>
                                <div className='form-control'>
                                    <label htmlFor='fullName'>Authors full name: </label>
                                    <input name='fullName' type='text' value={authorName} onChange={fullNameHandler}></input>
                                </div>
                                <div className='form-control'>
                                    <label htmlFor='author-image'>Authors image url:  </label>
                                    <input name='author-image' type='text' value={authorImage} onChange={imageUrlHandler}></input>
                                </div>
                                <div className='form-control'>
                                    <label htmlFor='author-description'>Authors description: </label>
                                    <textarea name='author-description' type='text' value={authorDescription} onChange={authorDescriptionHandler} rows="10" cols="75"></textarea>
                                </div>
                                <input type='submit' value='Save changes!'></input>
                            </form>
                        )}

                        <section className='recommended-book-list'>
                            <h3>If you are interested in {info.author} writing style. Check out these books:</h3>
                            <div className='recommended-book-card'>
                                <div className='card-left-side'>
                                    <h4>
                                        <span>
                                            <Link
                                                to={'/book/' + info.id}
                                            >
                                                {info.title}
                                            </Link>
                                        </span>
                                    </h4>
                                    <img className='card-image' src={info.image} alt='book image' width='100'></img>
                                    <div className='card-right-side'>
                                        <p>{info.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='recommended-book-card'>
                                <div className='card-left-side'>
                                    <h4>
                                        <span>
                                            <Link
                                                to={'/book/' + info.id}
                                            >
                                                {info.title}
                                            </Link>
                                        </span>
                                    </h4>
                                    <img className='card-image' src={info.image} alt='book image' width='100'></img>
                                    <div className='card-right-side'>
                                        <p>{info.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='recommended-book-card'>
                                <div className='card-left-side'>
                                    <h4>
                                        <span>
                                            <Link
                                                to={'/book/' + info.id}
                                            >
                                                {info.title}
                                            </Link>
                                        </span>
                                    </h4>
                                    <img className='card-image' src={info.image} alt='book image' width='100'></img>
                                    <div className='card-right-side'>
                                        <p>{info.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )

                )
            )}
        </Container>
    )
}

export default AuthorsPage