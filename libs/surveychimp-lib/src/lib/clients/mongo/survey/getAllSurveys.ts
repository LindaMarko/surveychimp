import SurveyModel, { ISurvey } from './SurveyModel';

export const getAllSurveys = async () => {
  const surveys: ISurvey[] = await SurveyModel.find({});
  return surveys;
  //   if (surveys.length > 0) {
  //   }
  //   throw '404';
};
