import { createForm, Field, FormPathPattern, onFieldReact } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import { action } from '@formily/reactive'
import { FormButtonGroup, FormItem, Select, Submit } from 'formily-antd-sync'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
})

const useAsyncDataSource = (
  pattern: FormPathPattern,
  service: (field: Field) => Promise<{ label: string; value: any }[]>
) => {
  onFieldReact(pattern, (field: Field) => {
    field.loading = true
    service(field).then(
      action.bound?.((data) => {
        field.dataSource = data
        field.loading = false
      })
    )
  })
}

const form = createForm({
  effects: () => {
    useAsyncDataSource('select', async (field) => {
      const linkage = field.query('linkage').get('value')
      if (!linkage) return []
      return new Promise((resolve) => {
        setTimeout(() => {
          if (linkage === 1) {
            resolve([
              {
                label: 'AAA',
                value: 'aaa',
              },
              {
                label: 'BBB',
                value: 'ccc',
              },
            ])
          } else if (linkage === 2) {
            resolve([
              {
                label: 'CCC',
                value: 'ccc',
              },
              {
                label: 'DDD',
                value: 'ddd',
              },
            ])
          }
        }, 1500)
      })
    })
  },
})

const Demo: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Number
          name="linkage"
          title="联动选择框"
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: '发请求1', value: 1 },
            { label: '发请求2', value: 2 },
          ]}
          x-component-props={{
            style: {
              width: 120,
            },
          }}
        />
        <SchemaField.String
          name="select"
          title="异步选择框"
          x-decorator="FormItem"
          x-component="Select"
          x-component-props={{
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
