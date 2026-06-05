import {
  FormButtonGroup,
  FormItem,
  NumberPicker,
  Submit,
} from '@formily/antd-sync'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="input"
        title="input box"
        required
        decorator={[FormItem]}
        component={[
          NumberPicker,
          {
            style: {
              width: 240,
            },
          },
        ]}
      />

      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
