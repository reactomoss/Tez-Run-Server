import { Router } from 'express';
import { body } from 'express-validator';
import { createHandler as handler, validate } from 'utils/validator';
import * as raceService from 'services/race.service';

const router: Router = Router();

router.post(
  '/race/state',

  handler(({ body }) => raceService.updateRaceState(params.contract))
);

export const ApiRoutes: Router = router;
