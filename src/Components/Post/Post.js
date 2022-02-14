export default function Posts() {
    return(
        <div style={{width: '276px', padding: '1rem', borderRadius: '5px', boxShadow: ' 0px 1.38581px 11.0864px rgba(143, 153, 163, 0.1)'}}>
            <div style={{width: '250px', borderBottom: '0.692903px solid #EDF2F7'}}>
                <div style={{width: '250px', height: '110.39px'}}>
                    <img src='' width='250px' height='110px' alt='profile' />
                </div>
                
                <div style={{marginBottom: '1rem', fontSize: '.606rem'}}>
                    <p style={{}}>adult Labrador retriever</p>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '.875rem'}}>
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.53109 1.51648C3.83295 -1.10654 0.395996 0.322394 0.395996 3.17974C0.395996 5.3254 5.10788 8.68178 5.53109 9.1182C5.95721 8.68178 10.4348 5.3254 10.4348 3.17974C10.4348 0.344056 7.2324 -1.10654 5.53109 1.51648Z" fill="#DD3C3C"/>
                        </svg>
                        <p style={{margin: '0 0 0 .5rem', padding: 0, color: '#DD3C3C'}}>96 Likes</p>
                    </div>
                </div>
                <div>
                    <div style={{color: '#AFC2D4', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.344rem'}}>TAGS</div>
                    <div style={{display: 'flex'}}>
                        <div style={{fontSize: '.433rem', border: '0.693467px solid #4799EB', width: 'max-content', padding: '.3rem', borderRadius: '11px', margin: '0 .5rem .5rem 0'}}>ANIMAL</div>
                    </div>
                </div>
            </div>
            <div style={{marginBottom: '1rem'}}>
                <div style={{color: '#AFC2D4', fontSize: '0.431rem', fontWeight: 600, marginBottom: '0.344rem', borderBottom: '0.692903px solid #EDF2F7', padding: '.4rem 0'}}>OWNER</div>
            </div>
            <div style={{borderBottom: '0.692903px solid #EDF2F7', marginTop: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '16px', height: '16px'}}>
                        <img src='' width='16px' height='16px' alt='' />
                    </div>
                    <div style={{fontSize: '.433rem'}}>Edita fkrl</div>
                </div>
                <Item title='FULL NAME' details='fghjfghjfgh ghjhj' />
                <Item title='EMAIL ADDRESS' details='fghjfghjfgh ghjhj' />
                <Item title='PHONE NUMBER' details='fghjfghjfgh ghjhj' />
            </div>
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