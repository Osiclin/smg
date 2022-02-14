import { useSelector } from 'react-redux'
import styles from './Cards.module.css'

export default function Cards() {
    const { list } = useSelector(store => store.user.users)
    const { posts } = useSelector(store => store.posts.posts)
    const { comments } = useSelector(store => store.comments)
    
    return(
        <div className={styles.container} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '2.688rem'}}>
            <Card title='USERS' total={list?.total} src='/images/users.svg' />
            <Card title='POSTS' total={posts?.total} src='/images/posts.svg' />
            <Card title='COMMENTS' total={comments?.total} src='/images/comments.svg' />
        </div>
    )
}

const Card = ({title, total, src}) => {
    return(
        <div style={{maxWidth: '368px', flex: 1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
            <img src={src} alt={title} />
            <div style={{marginLeft: '1rem'}}>
                <div style={{fontSize: '.633rem', fontWeight: 600, color: '#97A7B4'}}>{title}</div>
                <div style={{fontSize: '1.52rem', fontWeight: 600}}>{total}</div>
            </div>
        </div>
    )
}