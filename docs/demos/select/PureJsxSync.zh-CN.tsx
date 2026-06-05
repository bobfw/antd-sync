import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import { FormButtonGroup, FormItem, Input, Submit } from 'formily-antd-sync'
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
          Input,
          {
            style: {
              width: 240,
            },
          },
        ]}
      />
      <Field
        name="textarea"
        title="输入框"
        required
        decorator={[FormItem]}
        component={[
          Input.TextArea,
          {
            style: {
              width: 400,
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
