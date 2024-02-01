import React from 'react';

import { Row, Col, Dropdown, Space, MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const PageSsr = () => {
  return (
    <>
      <h1>SSR PAGE</h1>
      <Row>
        <Col>1</Col>
        <Col>3</Col>
        <Col>2</Col>
      </Row>

      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>Hover me</Space>
        </a>
      </Dropdown>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default PageSsr;
