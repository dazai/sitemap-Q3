import { z } from 'zod';
import { validateRequest } from 'zod-express-middleware';
import mongoose from 'mongoose';

const create = validateRequest({
  body: z.object({
    title: z
      .string({ required_error: 'The title is required' })
      .min(2, {
        message: 'Tittle must be at least 2 characters long',
      })
      .max(30, {
        message: 'Tittle cannot exceed 30 characters',
      }),
    description: z
      .string({ required_error: 'The description is required' })
      .min(50, {
        message: 'Description must be at least 50 characters long',
      })
      .max(200, {
        message: 'Description cannot exceed 200 characters',
      }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, 'The ID is not valid'),
  }),
});

const update = validateRequest({
  body: z.object({
    title: z
      .string({ required_error: 'The title is required' })
      .min(2, {
        message: 'Tittle must be at least 2 characters long',
      })
      .max(30, {
        message: 'Tittle cannot exceed 30 characters',
      }),
    description: z
      .string({ required_error: 'The description is required' })
      .min(50, {
        message: 'Description must be at least 50 characters long',
      })
      .max(200, {
        message: 'Description cannot exceed 20 characters',
      }),
  }),
});

export default {
  create,
  destroy,
  update,
};
