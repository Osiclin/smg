export default function Sidebar() {
    return(
        <div style={{backgroundColor: '#051A2E', flex: '.05', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem .5rem'}}>
            <div style={{cursor: 'pointer'}}>
                <img src='/images/profile.svg' width='100px' height='100px' alt='profile' />
                <div style={{color: '#ffffff', marginTop: '-10px', textAlign: 'center'}}>ADD A USER</div>
            </div>
        </div>
    )
}