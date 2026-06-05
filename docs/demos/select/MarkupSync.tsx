import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import { FormButtonGroup, FormItem, Select, Submit } from 'formily-antd-sync'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const form = createForm()

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Number
          name="select"
          title="select box"
          required={true}
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
          ]}
          x-component-props={{
            allowClear: true,
            style: {
              width: 120,
            },
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
export default Demo
