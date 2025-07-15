import { Box, Button, IconButton, Typography } from "@mui/material";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { navList } from "../../data/NavList";

const DesktopMenu = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `asad-h-siddiqui.pdf`;
    link.href = "Asad Siddiqui Resume.pdf";
    link.click();
  };
  return (
    <>
      <Typography
        variant="h3"
        color="inherit"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        Asad Siddiqui
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {navList.map((page) => (
          <Button
            key={page.title}
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => {
              let element = document.getElementById(page.link);
              element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="medium"
          aria-label="download resume"
          edge="end"
          color="inherit"
          onClick={onDownload}
          sx={{ mr: 1 }}
        >
          <FaFileDownload />
        </IconButton>

        <IconButton
          size="medium"
          aria-label="LinkedIn"
          edge="end"
          color="inherit"
          href="https://www.linkedin.com/in/asad-h-siddiqui/"
          target="_blank"
          sx={{ mr: 1 }}
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          size="medium"
          aria-label="Github"
          edge="end"
          color="inherit"
          href="https://github.com/asad310397"
          target="_blank"
          sx={{ mr: 1 }}
        >
          <FaGithub />
        </IconButton>

        <IconButton
          size="medium"
          aria-label="email"
          edge="end"
          color="inherit"
          href="mailto:asad.h.siddiqui@hotmail.com"
        >
          <MdEmail />
        </IconButton>
      </Box>
    </>
  );
};

export default DesktopMenu;
