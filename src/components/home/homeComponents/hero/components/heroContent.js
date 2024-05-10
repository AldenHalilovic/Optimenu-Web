import React from "react";
import { Grid, Stack, Typography, Button, IconButton } from "@mui/material";
import { IoChevronForwardSharp } from "react-icons/io5";
import Link from "next/link";

const HeroContent = () => {
  return (
    <Grid
      container
      className="main"
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-start" },
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "grid", gap: 3, placeItems: "center", py: 43 }}
      >
        <Stack direction="row" spacing={2} mt={3}>
          <Link href="/signup">
            <Button
              variant="outlined"
              color="warning"
              sx={{ fontSize: "20px", py: 1 }}
            >
              Get Started
            </Button>
          </Link>
          <IconButton
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "20px",
            }}
          >
            See all features
            <IoChevronForwardSharp />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HeroContent;
