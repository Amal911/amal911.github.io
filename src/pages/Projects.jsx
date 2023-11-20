import React from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from '../utils/Themes.js'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useState } from "react";
import Projects from "../components/Projects/index.js";
import Footer from "../components/Footer/index.js";
import ProjectDetails from "../components/ProjectDetails";



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`



export const ProjectsPage = () =>{
    const [darkMode, setDarkMode] = useState(true);
        const [openModal, setOpenModal] = useState({ state: false, project: null });
        console.log(openModal)
    return(
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Navbar/>
            <Body>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Footer/>
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
            </Body>
        </ThemeProvider>
        
    )
}