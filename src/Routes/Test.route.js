import { Router } from 'express';
import { createTest, getAllTests, getTestByPk, findByName, updateTest, deleteTest} from '../Controllers/Test.controller';

const router = Router();

router.post('/', createTest);
router.get('/', getAllTests);
router.put('/:id', updateTest);
router.delete('/:id', deleteTest);

export default router;