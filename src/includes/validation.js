import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  email,
  confirmed,
  min_value as minValue,
  max_value as maxValue,
  not_one_of as excluded,
  alpha_spaces as alphaSpaces
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaSpaces', alphaSpaces)
    defineRule('email', email)
    defineRule('minValue', minValue)
    defineRule('maxValue', maxValue)
    defineRule('passwordMismatch', confirmed)
    defineRule('excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} is required.`,
          min: `This field ${ctx.field} is too short.`,
          max: `This field ${ctx.field} is too long.`,
          alphaSpaces: `This field ${ctx.field} may only contain alphabetical characters and spaces.`,
          email: `This field ${ctx.field} must be a valid email.`,
          minValue: `This field ${ctx.field} is too low.`,
          maxValue: `This field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          passwordMismatch: `The passwords don't match.`,
          tos: `You must accept the Terms of Service.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  }
}
