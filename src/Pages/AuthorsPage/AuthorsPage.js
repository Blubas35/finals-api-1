import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'
import './AuthorsPage.scss'
import BookCard from './Components/BookCard'

const AuthorsPage = () => {

    const { authorId } = useParams()

    const [authorInformation, setAuthorInformation] = useState('')
    const [bookInformation, setBookInformation] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [authorImage, setAuthorImage] = useState('')
    const [authorDescription, setAuthorDescription] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Blubas35/data.json/authors/${authorId}`)
            .then(res => res.json())
            .then(authorData => {
                setAuthorInformation(authorData)
                setIsLoading(false)
            })
    }, [authorId])

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Blubas35/data.json/books?authorId=${authorId}`)
            .then(res => res.json())
            .then(data => {
                setBookInformation(data)
                setIsLoading(false)
            })
    }, [authorId])


    const fullNameHandler = (e) => setAuthorName(e.target.value)
    const imageUrlHandler = (e) => setAuthorImage(e.target.value)
    const authorDescriptionHandler = (e) => setAuthorDescription(e.target.value)

    const editAuthorHandler = (authorInfo) => {
        console.log(authorInfo)
        const { name, description, image } = authorInfo

        setAuthorName(name)
        setAuthorImage(image)
        setAuthorDescription(description)
        setEditMode(true)
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        fetch(`https://my-json-server.typicode.com/Blubas35/data.json/authors/${authorId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: 1,
                name: authorName,
                image: authorImage,
                description: authorDescription,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                fetch(`https://my-json-server.typicode.com/Blubas35/data.json/authors/${authorId}`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setAuthorInformation(data);
                        setEditMode(false);
                    });
            });
    };
    return (
        <Container>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className='author-pages-wrapper'>
                    <div className='author-information-wrapper'>
                        <div className='author-personal-info-wrapper'>
                            {/* <h2 className='author-name'>{authorInformation.name}</h2> */}
                            <div className='author-image-wrapper'>
                                <img className='author-image' src={authorInformation.image} alt='author portrait' width='200' height='200'></img>
                            </div>
                        </div>
                        <div className='author-biography'>
                            <h2 className='biography-title'>About {authorInformation.name}</h2>
                            <p className='biography-content'>{authorInformation.description}</p>
                            {!editMode && (
                                <button className='button' onClick={() => editAuthorHandler(authorInformation)}>Edit author</button>
                            )}
                        </div>

                    </div>
                    {editMode && (
                        <form className='edit-form' onSubmit={submitFormHandler}>
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
                            <input className='button' type='submit' value='Save changes!'></input>
                        </form>
                    )}
                    {bookInformation && bookInformation.length > 0 && (
                        bookInformation.map((info, index) => {
                            return (
                                // <section key={index} className='recommended-book-list'>
                                //     <h3>If you are interested in {authorInformation.name} writing style. Check out these books:</h3>
                                //     <div className='recommended-book-card'>
                                //         <div className='card-left-side'>
                                //             <h4>
                                //                 <span>
                                //                     <Link
                                //                         to={'/book/' + info.id}
                                //                     >
                                //                         {info.title}
                                //                     </Link>
                                //                 </span>
                                //             </h4>
                                //             <img className='card-image' src={info.image} alt='book cover' width='100'></img>
                                //             <div className='card-right-side'>
                                //                 <p>{info.description}</p>
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div className='recommended-book-card'>
                                //         <div className='card-left-side'>
                                //             <h4>
                                //                 <span>
                                //                     <Link
                                //                         to={'/book/' + info.id}
                                //                     >
                                //                         {info.title}
                                //                     </Link>
                                //                 </span>
                                //             </h4>
                                //             <img className='card-image' src={info.image} alt='book cover' width='100'></img>
                                //             <div className='card-right-side'>
                                //                 <p>{info.description}</p>
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div className='recommended-book-card'>
                                //         <div className='card-left-side'>
                                //             <h4>
                                //                 <span>
                                //                     <Link
                                //                         to={'/book/' + info.id}
                                //                     >
                                //                         {info.title}
                                //                     </Link>
                                //                 </span>
                                //             </h4>
                                //             <img className='card-image' src={info.image} alt='book cover' width='100'></img>
                                //             <div className='card-right-side'>
                                //                 <p>{info.description}</p>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </section>
                                <BookCard key={index} data={info} authorInformation={authorInformation}></BookCard>
                            )
                        })
                    )}
                </div>
            )}

        </Container>
    )
}

export default AuthorsPage