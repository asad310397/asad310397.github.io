import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineMenu } from "react-icons/md";
import { navList } from "../../data/NavList";

const MobileMenu = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `asad-h-siddiqui.pdf`;
    link.href = "Asad Siddiqui Resume.pdf";
    link.click();
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MdOutlineMenu />
        </IconButton>
        <Typography
          variant="h3"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Asad Siddiqui
        </Typography>
      </Box>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          role="presentation"
          onClick={() => {
            setOpen(false);
          }}
        >
          <List>
            {navList.map((page) => (
              <ListItem key={page.title} sx={{ my: 2 }}>
                <Button
                  sx={{ color: "white" }}
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
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {" "}
            <ListItem disablePadding>
              <ListItemButton onClick={onDownload}>
                <ListItemIcon>{<FaFileDownload />}</ListItemIcon>
                <ListItemText primary={"Resume"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                href="https://www.linkedin.com/in/asad-h-siddiqui/"
                target="_blank"
              >
                <ListItemIcon>{<FaLinkedin />}</ListItemIcon>
                <ListItemText primary={"LinkedIn"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                href="https://github.com/asad310397"
                target="_blank"
              >
                <ListItemIcon>{<FaGithub />}</ListItemIcon>
                <ListItemText primary={"Github"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="mailto:asad.h.siddiqui@hotmail.com">
                <ListItemIcon>{<MdEmail />}</ListItemIcon>
                <ListItemText primary={"Email"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
