import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getUser } from '../../redux/userSlice'
import styles from './Table.module.css'
import { getPost } from '../../redux/postSlice'
import UserDetail from '../UserDetail/UserDetail'
import PostsDetails from '../PostDetails/PostDetails'

const usersHead = ['TITLE', 'FIRST NAME', 'LAST NAME', 'ID']
const postsHead = ['OWNER', 'TITLE', 'LIKES', 'PUBLISH DATE']

export default function Table() {
    const [page, setPage] = useState('users')

    return(
        <>
        <div style={{display: 'flex'}}>
        <div style={{width: '100%', minWidth: '700px', marginRight: '5.8rem'}}>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <div 
                    style={{
                        padding: '1rem', color: page === 'users' ? '#4799EB' : '#607485', borderBottom: page === 'users' ? '2px solid #4799EB' : '', cursor: 'pointer'
                    }}
                    onClick={() => setPage('users')}
                >
                    All Users
                </div>
                <div 
                    style={{
                        padding: '1rem', color: page !== 'users' ? '#4799EB' : '#607485', borderBottom: page !== 'users' ? '2px solid #4799EB' : '', cursor: 'pointer'
                    }}
                    onClick={() => setPage('posts')}
                >
                    All Posts
                </div>
            </div>
            <div style={{padding: '0 1rem', backgroundColor: '#EDEEEF', borderRadius: '8px'}}>
                <table style={{tableLayout: 'auto', width: '100%', height: '500px', backgroundColor: '#EDEEEF', borderCollapse: 'seperate', borderSpacing: '0 1rem'}}>
                    <thead>
                        <tr style={{textAlign: 'left'}}>
                            <th>
                                <input type='checkbox' style={{width: '18px', height: '18px', margin: '0 0 0 2rem'}} />
                            </th>
                            {
                                page === 'users' ? <th></th> : ''
                            }
                            {
                                page === 'users' ?
                                usersHead.map((item, i) => 
                                <th key={i} style={{fontSize: '.688rem', color: '#787878', fontWeight: 500, padding: '1rem 0'}}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{marginRight: '.2rem'}}>{item}</div>
                                        <div>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z" fill="#787878"/>
                                                <path d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z" fill="#787878"/>
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                ) :
                                postsHead.map((item, i) => 
                                <th key={i} style={{fontSize: '.688rem', color: '#787878', fontWeight: 500, padding: '1rem 0'}}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{marginRight: '.2rem'}}>{item}</div>
                                        <div>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z" fill="#787878"/>
                                                <path d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z" fill="#787878"/>
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                )
                            }
                        </tr>
                    </thead>
                    {
                        page === 'users' ? <UsersData/> : <PostsData/>
                    }
                </table>
            </div>
        </div>
        {
            page === 'users' ? <UserDetail/> : <PostsDetails/>
        }
        </div>
        </>
    )
}

const PostsData = () => {
    const {posts, pending, error} = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    const getSelectedPost = (id) => {
        dispatch(getPost(id))
    }

    return(
        <tbody>
            {
                pending ? <tr><td colSpan='6' rowSpan='6'>Loading...</td></tr> :
                error ? <tr><td>Something went wrong!!!</td></tr> :
                posts?.data.map((item) => 
                <tr key={item?.id} className={styles.tr} style={{backgroundColor: '#ffffff', margin: '.5rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', cursor: 'pointer'}} onClick={() => getSelectedPost(item?.id)}>
                    <td style={{padding: '.5rem 0'}}>
                        <input type='checkbox' style={{width: '18px', height: '18px', margin: '0 0 0 2rem'}} />
                    </td>
                    <td style={{padding: '.5rem 0', fontSize: '.75rem'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={item?.image} width='35px' height='35px' alt={item?.firstName} style={{borderRadius: '50%'}} />
                            <div style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize', marginLeft: '.5rem'}}>{`${item?.owner.firstName} ${item?.owner.lastName}`}</div>
                        </div>
                    </td>
                    <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{item?.text}</td>
                    <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V9.75C1.5 9.35218 1.65804 8.97064 1.93934 8.68934C2.22064 8.40804 2.60218 8.25 3 8.25H5.25M10.5 6.75V3.75C10.5 3.15326 10.2629 2.58097 9.84099 2.15901C9.41903 1.73705 8.84674 1.5 8.25 1.5L5.25 8.25V16.5H13.71C14.0717 16.5041 14.4228 16.3773 14.6984 16.143C14.9741 15.9087 15.1558 15.5827 15.21 15.225L16.245 8.475C16.2776 8.26002 16.2631 8.04051 16.2025 7.83169C16.1419 7.62287 16.0366 7.42972 15.8939 7.26564C15.7512 7.10155 15.5746 6.97045 15.3762 6.88141C15.1778 6.79238 14.9624 6.74754 14.745 6.75H10.5Z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div style={{marginLeft: '.5rem'}}>
                                {item?.likes}
                            </div>
                        </div>
                    </td>
                    <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{new Date(item?.publishDate).toLocaleDateString('en-us', { month: 'long', day: '2-digit', year: 'numeric'})}</td>
                </tr>
                )
            }
        </tbody>
    )
}

const UsersData = () => {
    const {list, pending, error} = useSelector(state => state.user.users)
    const dispatch = useDispatch()

    const getSelectedUser = (id) => {
        dispatch(getUser(id))
    }

    return(
        <tbody>
            {
                pending ? <tr><td>Loading...</td></tr> :
                error ? <tr><td>Something went wrong!!!</td></tr> :
                list.data && list?.data.map((item) => 
                    <tr key={item.id} className={styles.tr} style={{backgroundColor: '#ffffff', margin: '.5rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', cursor: 'pointer'}} onClick={() => getSelectedUser(item.id)}>
                        <td style={{padding: '.5rem 0'}}>
                            <input type='checkbox' style={{width: '18px', height: '18px', margin: '0 0 0 2rem'}} />
                        </td>
                        <td style={{padding: '.5rem 0', fontSize: '.75rem'}}>
                            <img src={item.picture} width='35px' height='35px' alt={item.firstName} style={{borderRadius: '50%'}} />
                        </td>
                        <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{item.title}</td>
                        <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{item.firstName}</td>
                        <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{item.lastName}</td>
                        <td style={{padding: '.5rem 0', fontSize: '.75rem', textTransform: 'capitalize'}}>{item.id}</td>
                    </tr>
                )
            }
        </tbody>
    )
}