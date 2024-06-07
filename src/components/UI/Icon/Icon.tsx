/* eslint-disable react/prop-types */
import React from 'react';

import classNames from 'classnames';

import { Ticon } from 'styles/icon/icon-type';

export const Icon = ({
  className = '',
  color = 'text-primary',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: Ticon; color?: any }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className, color)} {...props} />;
};
