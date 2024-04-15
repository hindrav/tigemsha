import { WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import logo from "app/assets/images/logo.png";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <Box className="tb">
        <Box className="tb-container">
            <Box className="tb-logo">
                <img src={logo} alt="logo" />
                <span className="uppercase text-3xl ml-3" >Tigemsha</span>
            </Box>
            <Box className="tb-contact">
                <a href="https://wa.link/qwajkq" className="uppercase text-xl mr-3"><WhatsApp sx={{ fontSize: "2rem", marginRight: "1rem" }}/>Contactar</a>
            </Box>
        </Box>
    </Box>
  )
}

export { Topbar };