
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPageWith4Stars from './pages/SurveyPageWith4Stars';
import { Route, Routes } from 'react-router-dom';
import ThankYou from './pages/ThankYou';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {
  console.log(process.env.NX_ENABLE_FOUR_STAR_FEATURE);
  
  return (
    <StyledApp>
      <Routes>
        {process.env.NX_ENABLE_FOUR_STAR_FEATURE === 'true' ?
        (<Route
        path="/survey/:surveyId"
        element={<SurveyPageWith4Stars />}
      />) :
        (<Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />)}
        <Route
          path="/"
          element={<div>Du är på förstasidan</div>} />
        <Route
          path="/thankyou"
          element={<ThankYou />}
        />
      </Routes>
    </StyledApp>
  );

}


export default App;
