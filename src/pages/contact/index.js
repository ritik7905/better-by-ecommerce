import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { PageIntroHeader } from "../../components/allComponentsTogether"

// styles
import "./style.scss"

const Contact = () => {


  // Submit Form-data
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // Submit Form-data-failed
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <section className='contact-page'>
      <div className="content contact-content">
        <PageIntroHeader intro_title="CONTACT US" />

        <div className="container">
          <h3 className='contact-title'>feel free to contact</h3>
          <Row gutter={10} className="contact-row">
            <Col md={12} className="contact-map location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224090.76384654432!2d76.95317999010548!3d28.647194764735694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1666868564423!5m2!1sen!2sus" width="600"
                height="500"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
                title='map'
                aria-hidden="false"
                tabindex="0"></iframe>
            </Col>
            <Col md={12} className="contact-details contact-form">
              <h2>Get In Touch</h2>
              <Form
                name="basic"
                {...layout}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input placeholder='Username....' />
                </Form.Item>
                <Form.Item
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your number!',
                    },
                  ]}
                >
                  <Input placeholder='Number....' />
                </Form.Item>

                <Form.Item
                  name={'email'}
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input placeholder='Email....' />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      type: 'text',
                      required: true,
                      message: 'Please input your message!',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder='Ask Anything....' />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size='middle' className='submit-form'>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Contact