import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, MobileStepper, Typography, Button, Link } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import firstImage from "../images/welcome1.png";
import secondImage from "../images/welcome2.png";
import thirdImage from "../images/welcome3.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    header: "Исследуйте",
    description:
      "множество занятий и материалов\n по различным темам и направлениям",
    image: firstImage,
  },
  {
    header: "Занимайтесь",
    description:
      "в подходящее время, в удобном месте,\n с лучшими преподавателями",
    image: secondImage,
  },
  {
    header: "Создавайте",
    description: "собственные курсы и занятия",
    image: thirdImage,
  },
];

export const Welcome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant={"h1"} sx={{ fontSize: "32px", fontWeight: 500 }}>
          {slides[activeStep].header}
        </Typography>
        <Typography
          variant={"h4"}
          sx={{
            whiteSpace: "pre-wrap",
            fontSize: "16px",
            fontWeight: 400,
            mt: "16px",
            minHeight: "44px",
            mb: "64px",
          }}
        >
          {slides[activeStep].description}
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {slides.map((step, index) => (
            <div key={step.header}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    display: "block",
                    maxWidth: 375,
                    overflow: "hidden",
                    width: "100%",
                    mb: "22px",
                  }}
                  src={step.image}
                  alt={step.header}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ justifyContent: "center", 
          mb: "70px" 
        }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
      <Button variant="contained" sx={{ 
        mb: "16px" 
      }}>
        Присоединиться
      </Button>
      <Typography>
        Уже есть аккаунт?
        <Link underline="none" sx={{ ml: "8px" }}>
          Войти
        </Link>
      </Typography>
    </Box>
  );
};
