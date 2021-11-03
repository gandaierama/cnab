import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormUp = () => {
const [ id, setId] = useState()
const [ visible, setVisible] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = ({ ident, file, remember }) => {
    setId({ id: ident });
    setVisible(true);
    console.log(file);

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
      <Checkbox label='Aceito testar' />
    </Form.Field>
    <Button type='submit'>Enviar</Button>
  </Form>
  </div>
  )
}

export default FormUp
