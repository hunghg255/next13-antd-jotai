import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const ENV = publicRuntimeConfig;

export { ENV };
