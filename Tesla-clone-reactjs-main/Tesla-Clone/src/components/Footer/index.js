import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://github.com/gordiancyber/Tesla-clone-reactjs" target='_blank' >Tesla-Clone &copy; 2022</a>
                </div>
                <div>
                <a href="mailto:etimgordian@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/gordianetim/" target="_blank" >LinkedIn</a>
                <a href="https://github.com/gordiancyber" target="_blank">GitHub</a>
                </div>
            </Content>
            
        </Wrapper>
    )
}

export default Footer