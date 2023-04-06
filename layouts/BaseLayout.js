import PropTypes from 'prop-types';
import { Box,  styled,createTheme } from '@mui/material';
import HeroSection from "../components/HeroSection";
const BaseLayout = ({ children }) => {
 
  const OverviewWrapper = styled(Box)(
    ({ theme }) => `
      overflow: auto;
      background: ${theme.palette.common.white};
      flex: 1;
      height: 100%;
      
    `
  );
  return (
    <OverviewWrapper
    >
       <HeroSection></HeroSection>
      {children}
    </OverviewWrapper>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
