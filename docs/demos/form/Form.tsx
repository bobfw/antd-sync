import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import {
  Form,
  FormButtonGroup,
  FormGrid,
  FormItem,
  Input,
  Select,
  Submit,
} from 'formily-antd-sync'
import React from 'react'

const form = createForm()
const Demo = () => {
  return (
    <Form
      form={form}
      layout="vertical"
      feedbackLayout="terse"
      onAutoSubmit={console.log}
      onAutoSubmitFailed={console.log}
    >
      <FormGrid maxColumns={4}>
        <Field
          name="aa"
          title="select box"
          decorator={[FormItem]}
          component={[Select]}
          dataSource={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
          ]}
        />
        <Field
          name="bb"
          title="input box"
          required
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="cc"
          title="input box"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="dd"
          title="input box"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="ee"
          title="input box"
          decorator={[FormItem]}
          component={[Input]}
        />
        <FormButtonGroup.FormItem>
          <Submit>Query</Submit>
        </FormButtonGroup.FormItem>
      </FormGrid>
    </Form>
  )
}

export default Demo
