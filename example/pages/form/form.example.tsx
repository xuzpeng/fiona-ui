import React, { useState } from 'react';
import { Form, FormData } from '../../../lib';

export default () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' }, autoComplete: 'new-password' },
    { name: 'password', label: '密码', input: { type: 'password' }, autoComplete: 'new-password' },
  ]);

  return <div>
    <div>
      <h1 style={{marginBottom: 20}}>第一个例子</h1>
      <Form onChange={(newFormData: FormData) => setFormData({
        ...formData,
        ...newFormData
      })} fields={fields} formData={formData}/>
    </div>
  </div>
}