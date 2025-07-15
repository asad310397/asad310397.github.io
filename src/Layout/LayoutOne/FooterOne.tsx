import { Box, Typography } from "@mui/material";

const FooterOne = () => {
  return (
    <div className="footer-one">
      <Box className={"footer-box"}>
        <Typography variant="h5">Thank you for stopping by</Typography>
        <Typography variant="h2" color={"primary"}>
          Asad Siddiqui
        </Typography>
        <Typography variant="body1">
          All logos, trademarks, and brandnames are the property of their
          respective owners
        </Typography>
        <Typography variant="body1">Icons from React-Icons</Typography>
      </Box>
    </div>
  );
};

export default FooterOne;
