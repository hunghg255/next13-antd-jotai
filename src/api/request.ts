/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import TokenManager, { injectBearer } from 'brainless-token-manager';
import { extend } from 'umi-request';

import { ENV } from 'src/utils/env';

const REQ_TIMEOUT = 25 * 1000;
export const isDev = ENV.NODE_ENV === 'development';

export const PREFIX_API = ENV.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  errorHandler: (error) => {
    throw error?.data || error?.response;
  },
});

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    // const token = getAccessToken();

    // return token || '';
    return '';
  },
  getRefreshToken: async () => {
    // const refreshToken = getRefreshToken();

    // return refreshToken || '';
    return '';
  },
  executeRefreshToken: async () => {
    return {
      token: '',
      refresh_token: '',
    };
  },
  onRefreshTokenSuccess: () => {},
  onInvalidRefreshToken: async () => {
    // Logout
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token ?? ((await tokenManager.getToken()) as string);

  return request(suffixUrl, injectBearer(token, configs));
};

// dùng cái này khi gọi nhiều api ở phía server => đảm bảo có token mới nhất cho các request ở sau, tránh bị call reuqest đồng thời
export const checkTokenExpiredOnServer = async (ctx: any) => {
  try {
    // const token = getAccessToken(ctx?.res, ctx?.req);
    // const salonRefreshToken = getRefreshToken(ctx?.res, ctx?.req);

    // const decoded = parseJwt(token);
    // const { exp } = decoded;

    // const currentTime = Date.now() / 1000;

    // if (exp - 5 > currentTime) return null;

    // const res: any = await privateRequest(fetch, `${PREFIX_API}/auth/refresh-token`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ refresh_token: salonRefreshToken }),
    // }).then((r) => r.json());

    // if (res?.token && res?.refresh_token) {
    //   const objToken = {
    //     token: res?.token,
    //     refreshToken: res?.refresh_token,
    //     expiredTime: res?.expired_time || 0,
    //   };

    //   setAuthCookies(objToken, { res: ctx?.res, req: ctx?.req });

    //   return res?.token;
    // }
    return undefined;
  } catch {
    return undefined;
  }
};

export const requestFromServer = async (ctx: any, suffixUrl: string) => {
  // await checkTokenExpiredOnServer(ctx);
  // const token = getAccessToken(ctx?.res, ctx?.req);
  // const salonId = getSalonIdFromCookie(ctx?.req, ctx?.res);
  // return privateRequest(fetch, `${PREFIX_API}${suffixUrl}`, {
  //   token,
  //   headers: { salonId },
  // }).then((r) => r.json());
};

export { privateRequest, request };
