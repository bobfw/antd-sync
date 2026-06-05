import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import {
  FormButtonGroup,
  FormItem,
  NumberPicker,
  Submit,
} from 'formily-antd-sync'
import React from 'react'

const form = createForm()
const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="input"
        title="文本框"
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
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
