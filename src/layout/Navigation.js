import React, { useState } from "react";
import NavComponent from "./NavComponent";
import { useDetectScroll } from "@smakss/react-scroll-direction";

const Navigation = () => {

    const [visible, setVisible] = useState(true);
    const [scrollDir] = useDetectScroll({});

    const toggleNav = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled === 0 || scrollDir === 'up') {
            setVisible(true);
        } else if( scrollDir === 'down') {
            setVisible(false);
        }
    }

    window.addEventListener('scroll', toggleNav);

    return (
        <React.Fragment>
            {visible && <NavComponent />}
        </React.Fragment>
    )
}

export default Navigation;