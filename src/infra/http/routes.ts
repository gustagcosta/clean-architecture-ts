import { type NextFunction, type Request, type Response, Router } from 'express';
import { createPostController, createUserController, postRepository, signInController, userRepository } from './bootstrap';
import { validateRequest } from './middlewares/validate-request';
import { createUserSchema } from './tools/schemas/create-user-schema';
import { createPostSchema } from './tools/schemas/create-post-schema';
import { signInSchema } from './tools/schemas/sign-in.schema';

const router = Router();

router.post('/sign-in', validateRequest(signInSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await signInController.run({ body: req.body });

    return res.status(response.statusCode).json(response.body);
  } catch (error) {
    next(error);
  }
});

router.post('/post', validateRequest(createPostSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await createPostController.run({ body: req.body });

    return res.status(response.statusCode).json(response.body);
  } catch (error) {
    next(error);
  }
});

router.post('/user', validateRequest(createUserSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await createUserController.run({ body: req.body });

    return res.status(response.statusCode).json(response.body);
  } catch (error) {
    next(error);
  }
});

router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(userRepository.users);
  } catch (error) {
    next(error);
  }
});

router.get('/posts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(postRepository.posts);
  } catch (error) {
    next(error);
  }
});

export default router;
