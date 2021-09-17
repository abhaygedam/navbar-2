

function NavApp() {
    return (
        <div>
            <ToolBar>
                <SiteName>
                    <DrawerItem head={true} label="SITENAME"  />
                </SiteName>
                <div style={{
                    display:"flex"
                }}>
                    <DrawerItem label="About us" />
                    <DrawerItem label="Prices" />
                    <DrawerItem label="Start page" />
                    <DrawerItem label="Offer" />
                    <DrawerItem label="Contact" />
                </div>
            </ToolBar>
        </div>
    );
}

function ToolBar({children}) {
    return (<div style={{
          width: "100vw",
            height: "50px",
            backgroundColor: "blue",
            display: "flex",
            justifyContent:"space-between"
    }}>
        {children}
    </div>)
}

function SiteName({ children }) {
   
    return (<div style={{
        margin: "0 20px",
    }}>
        {children}
    </div>)
}

function DrawerItem({label,head}) {
    return (<div style={{
    width: "100px",
    height: "30px",
    fontSize: "20px",
    color: "#F7F7F7",
    margin: "10px 20px",
    
  
  }}>{label}</div>)
}


export default NavApp;