import { type NextFunction, type Request, type Response, Router } from 'express';
import { createPostController, createUserController } from './bootstrap';
import { validateRequest } from './middlewares/validate-request';
import { userSchema } from './tools/schemas/user-schema';
import { postSchema } from './tools/schemas/post-schema';

const router = Router();

router.post('/post', validateRequest(postSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await createPostController.run({ body: req.body });

    return res.status(response.statusCode).json(response.body);
  } catch (error) {
    next(error);
  }
});

router.post('/user', validateRequest(userSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await createUserController.run({ body: req.body });

    return res.status(response.statusCode).json(response.body);
  } catch (error) {
    next(error);
  }
});

export default router;
