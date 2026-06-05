import { FormButtonGroup, FormItem, Select, Submit } from '@formily/antd-sync'
import {
  createForm,
  Field as FieldType,
  FieldDataSource,
  FormPathPattern,
  onFieldReact,
} from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import { action } from '@formily/reactive'
import React from 'react'

const useAsyncDataSource = (
  pattern: FormPathPattern,
  service: (field: FieldType) => Promise<FieldDataSource>
) => {
  onFieldReact(pattern, (field: FieldType) => {
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
      return new Promise<FieldDataSource>((resolve) => {
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

const Demo = () => (
  <FormProvider form={form}>
    <Field
      name="linkage"
      title="联动选择框"
      dataSource={[
        { label: '发请求1', value: 1 },
        { label: '发请求2', value: 2 },
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
    <Field
      name="select"
      title="异步选择框"
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
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>
)
export default Demo
