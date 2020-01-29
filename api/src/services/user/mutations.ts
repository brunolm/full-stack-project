import * as yup from 'yup'
import { create } from './service/create'

export const userMutations = {
  createUser: {
    validationSchema: yup.object().shape({
      input: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        password: yup.string().required(),
        passwordConfirm: yup.string().required(),
      }),
    }),

    resolve(_, { input }) {
      return create(input)
    },
  },
}
