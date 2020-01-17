import * as yup from 'yup'

export const userMutations = {
  createUser: {
    validationSchema: yup.object().shape({
      input: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        password: yup.string().required(), // TODO: @bruno pass validation
      }),
    }),

    resolve(_, { input }) {
      // TODO: @bruno resolve
      return { id: (Math.random() * 100) | 0, message: input.message }
    },
  },
}
