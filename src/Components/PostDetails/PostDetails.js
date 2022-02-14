import { useSelector } from "react-redux"

export default function PostsDetails() {
    const { post, pending, error } = useSelector(state => state.posts.post)

    return(
        <div style={{width: '276px', height: '458px', padding: '1rem', borderRadius: '5px', boxShadow: ' 0px 1.38581px 11.0864px rgba(143, 153, 163, 0.1)'}}>
            {
                post === null ? <EmptyState/> :
                pending ? <div style={{width: '276px', textAlign: 'center'}}>Loading...</div> :
                error ? <div style={{width: '276px', textAlign: 'center'}}>Something went wrong!!!</div> :
                <>
                    <div style={{width: '250px', borderBottom: '0.692903px solid #EDF2F7'}}>
                        <div style={{width: '250px', height: '110.39px'}}>
                            <img src={post?.image} width='250px' height='110px' alt='profile' />
                        </div>
                        
                        <div style={{marginBottom: '1rem', fontSize: '.606rem'}}>
                            <p style={{}}>{post?.text}</p>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '.875rem'}}>
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.53109 1.51648C3.83295 -1.10654 0.395996 0.322394 0.395996 3.17974C0.395996 5.3254 5.10788 8.68178 5.53109 9.1182C5.95721 8.68178 10.4348 5.3254 10.4348 3.17974C10.4348 0.344056 7.2324 -1.10654 5.53109 1.51648Z" fill="#DD3C3C"/>
                                </svg>
                                <p style={{margin: '0 0 0 .5rem', padding: 0, color: '#DD3C3C'}}>{post?.likes} Likes</p>
                            </div>
                        </div>
                        <div>
                            <div style={{color: '#AFC2D4', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.344rem'}}>TAGS</div>
                            <div style={{display: 'flex'}}>
                                {
                                    post?.tags.map((item, i) => 
                                    <div key={i} style={{fontSize: '.433rem', border: '0.693467px solid #4799EB', width: 'max-content', padding: '.3rem', borderRadius: '11px', margin: '0 .5rem .5rem 0'}}>{item}</div>   
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                        <div style={{color: '#AFC2D4', fontSize: '0.431rem', fontWeight: 600, marginBottom: '0.344rem', borderBottom: '0.692903px solid #EDF2F7', padding: '.4rem 0'}}>OWNER</div>
                    </div>
                    <div style={{borderBottom: '0.692903px solid #EDF2F7', marginTop: '1rem'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{width: '16px', height: '16px'}}>
                                <img src={post?.owner?.picture} width='16px' height='16px' alt='' />
                            </div>
                            <div style={{fontSize: '.433rem'}}>{post?.owner?.firstName} {post?.owner?.lastName}</div>
                        </div>
                        <Item title='FULL NAME' details={`${post?.owner?.title} ${post?.owner?.firstName} ${post?.owner?.lastName}`} />
                        <Item title='EMAIL ADDRESS' details='' />
                        <Item title='PHONE NUMBER' details='' />
                    </div>
                </>
            }
        </div>
    )
}

const Item = ({title, details}) => {
    return(
        <div style={{marginBottom: '1rem'}}>
            <div style={{color: '#AFC2D4', fontSize: '0.431rem', fontWeight: 600, marginBottom: '0.344rem'}}>{title}</div>
            <div style={{color: '#051A2E', fontSize: '.606rem', fontWeight: 400}}>{details}</div>
        </div>
    )
}

const EmptyState = () => {
    const { pending, error } = useSelector(state => state.posts.post)

    return(
        <div style={{width: '276px', height: '458px'}}>
            {
                pending ? <div>Loading...</div> :
                error ? <div>Something went wrong!!!</div> :
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '276px', height: '458px'}}>
                    <div style={{marginBottom: '1rem'}}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5625 31.125H39.7708C40.7258 31.125 41.5 31.8992 41.5 32.8541C41.5 33.7295 40.8493 34.453 40.0055 34.5676L39.7708 34.5833H15.5625C14.6075 34.5833 13.8333 33.8091 13.8333 32.8541C13.8333 31.9787 14.4838 31.2552 15.3278 31.1406L15.5625 31.125ZM39.7708 38.0416H15.5625L15.3278 38.0573C14.4838 38.1719 13.8333 38.8954 13.8333 39.7708C13.8333 40.7258 14.6075 41.5 15.5625 41.5H39.7708L40.0055 41.4843C40.8493 41.3697 41.5 40.6462 41.5 39.7708C41.5 38.8158 40.7258 38.0416 39.7708 38.0416ZM48.4166 13.2569C48.4166 9.75527 45.578 6.91663 42.0763 6.91663H13.2569C9.75527 6.91663 6.91663 9.75527 6.91663 13.2569V42.0763C6.91663 45.578 9.75527 48.4166 13.2569 48.4166H42.0763C45.578 48.4166 48.4166 45.578 48.4166 42.0763V13.2569ZM13.2569 10.375H42.0763C43.6681 10.375 44.9583 11.6652 44.9583 13.2569V42.0763C44.9583 43.6681 43.6681 44.9583 42.0763 44.9583H13.2569C11.6652 44.9583 10.375 43.6681 10.375 42.0763V13.2569C10.375 11.6652 11.6652 10.375 13.2569 10.375Z" fill="#607485"/>
                    </svg>
                    </div>
                    <div>
                    View a selected posts full details here
                    </div>
                </div>
            }
        </div>
    )
}