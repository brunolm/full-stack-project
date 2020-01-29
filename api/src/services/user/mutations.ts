import * as yup from 'yup'

export const userMutations = {
  createUser: {
    validationSchema: yup.object().shape({
      input: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        password: yup.string().required(),
        abcdef: yup.string().required(),
      }),
    }),

    resolve(_, { input }) {
      console.log('aaaaaaaaaaaaaaaaa', _)

      return { id: (Math.random() * 100) | 0, message: input.message }
    },
  },
}
