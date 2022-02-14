import { useSelector } from "react-redux"

export default function UserDetail() {
    const { list, pending, error } = useSelector(state => state.user.user)
    
    return(
        <div style={{width: '276px', height: '458px', padding: '1rem', borderRadius: '5px', boxShadow: '0px 1.38581px 11.0864px rgba(143, 153, 163, 0.1)'}}>
            
            {
                list === null ? <EmptyState/> :
                pending ? <div style={{width: '276px', textAlign: 'center'}}>Loading...</div> :
                error ? <div style={{width: '276px', textAlign: 'center'}}>Something went wrong!!!</div> :
                <>
                    <div style={{display: 'flex', width: '250px', borderBottom: '0.692903px solid #EDF2F7'}}>
                        <div style={{width: '118.49px', height: '110.39px'}}>
                            <img src={list?.picture} width='118.49px' height='110.39px' alt='profile' style={{borderRadius: '5px'}} />
                        </div>
                        <div style={{marginLeft: '1rem'}}>
                            <Item title='FULL NAME' details={`${list?.firstName}  ${list?.lastName}`} />
                            <Item title='EMAIL ADDRESS' details={list?.email} />
                            <Item title='PHONE NUMBER' details={list?.phone} />
                        </div>
                    </div>
                    <div style={{display: 'flex', minWidth: '250px', borderBottom: '0.692903px solid #EDF2F7', marginTop: '1rem'}}>
                        <Item title='GENDER' details={list?.gender} />
                        <Item title='DATE OF BIRTH' details={list?.dateOfBirth} />
                    </div>
                    <div style={{borderBottom: '0.692903px solid #EDF2F7', minWidth: '250px', marginTop: '1rem'}}>
                        <div style={{display: 'flex'}}>
                            <Item title='STREET' details={list?.location?.street} />
                            <Item title='CITY' details={list?.location?.city} />
                        </div>
                        <div style={{display: 'flex', minWidth: '250px'}}>
                            <Item title='STATE' details={list?.location?.state} />
                            <Item title='COUNTRY' details={list?.location?.country} />
                        </div>
                        <Item title='YEAR ENROLLED' details='' />
                    </div>
                    <div style={{marginTop: '1rem', minWidth: '250px'}}>
                        <div style={{display: 'flex'}}>
                            <Item title='REGISTERED' details={list?.registerDate} />
                            <Item title='LAST UPDATED' details={list?.updatedDate} />
                        </div>
                        <div style={{display: 'flex', minWidth: '250px'}}>
                            <Item title='POSTS' details='' />
                            <Item title='COMMENTS' details='' />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

const Item = ({title, details}) => {
    return(
        <div style={{marginBottom: '1rem', width: '100%'}}>
            <div style={{color: '#AFC2D4', fontSize: '0.431rem', fontWeight: 600, marginBottom: '0.344rem'}}>{title}</div>
            <div style={{color: '#051A2E', fontSize: '.606rem', fontWeight: 400}}>{details}</div>
        </div>
    )
}

const EmptyState = () => {
    const { pending, error } = useSelector(state => state.user.user)

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