import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormUp = () => {
const [ id, setId] = useState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = ({ ident, file, remember }) => {
    // You should handle login logic with username, password and remember form data
    setId({ id: ident })
  }
  return (
    <div className="container">
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label>Identificador</label>
      <input placeholder='ID'
      {...register('ident', {
        required: { value: true, message: 'ID required' },
        minLength: {
          value: 3,
          message: 'ID cannot be less than 3 character',
        },
      })}
      className={'form-field' + (errors.ident ? ' has-error' : '')}
       />
       {errors.ident && (
          <span className="error-label">{errors.ident.message}</span>
        )}
    </Form.Field>
    <Form.Field>
      <label>Arquivo</label>
      <input type="file" placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Enviar</Button>
  </Form>
  </div>
  )
}

export default FormUp
