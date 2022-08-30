import { Router } from 'express';
import { QuestRoutes } from './quest.route';

const router: Router = Router();

router.use('/quest', QuestRoutes);

export const ApiRoutes: Router = router;
