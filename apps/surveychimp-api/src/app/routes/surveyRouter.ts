import { Router } from 'express';
import { addSurvey, addResponseToSurvey, getSurveyById } from '@surveychimp/surveychimp-lib';
import { body, param, validationResult } from 'express-validator';
import { nextTick } from 'process';

const router = Router();

router.get(
    '/survey/:surveyId',
    param("surveyId").isMongoId(),
    async (req, res, next) => {
        try {
            //validation
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //do stuff if valid input data
            const survey = await getSurveyById(req.params.surveyId);
            res.json(survey);
        } catch (err) {
            next(err);
        }

    });

router.post('/survey',
    body("recipient.name").isString().isLength({ "min": 3 }).withMessage("Du måste skriva minst 3 tecken"),
    body("recipient.mobileNumber").isMobilePhone("sv-SE").withMessage("Skriv in ett mobilnummer, t.ex. 070 123 12 12"),
    async (req, res) => {

        //validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const survey = await addSurvey(req.body);
        res.json(survey);
    });

router.patch('/survey/:surveyId', async (req, res) => {
    const survey = await addResponseToSurvey("6354fa3e707d56d9524fd2f3", {
        rating: 3
    });
    res.json(survey);
});


export default router;