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
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.3334 56V50.6667C53.3334 47.8377 52.2095 45.1246 50.2092 43.1242C48.2088 41.1238 45.4957 40 42.6667 40H21.3334C18.5044 40 15.7913 41.1238 13.7909 43.1242C11.7905 45.1246 10.6667 47.8377 10.6667 50.6667V56" stroke="#607485" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32 29.3333C37.891 29.3333 42.6666 24.5577 42.6666 18.6667C42.6666 12.7756 37.891 8 32 8C26.1089 8 21.3333 12.7756 21.3333 18.6667C21.3333 24.5577 26.1089 29.3333 32 29.3333Z" stroke="#607485" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div>
                    View a selected users full details here
                    </div>
                </div>
            }
        </div>
    )
}