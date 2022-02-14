import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

export default function Layout({ children }) {
    return(
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <div style={{flex: '.95'}}>
                <TopBar/>
                <div style={{padding: '3rem'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}