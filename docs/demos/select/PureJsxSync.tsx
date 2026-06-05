import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import { FormButtonGroup, FormItem, Select, Submit } from 'formily-antd-sync'
import React from 'react'

const form = createForm()

const Demo = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="select"
        title="select box"
        dataSource={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
        decorator={[FormItem]}
        component={[
          Select,
          {
            style: {
              width: 120,
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
