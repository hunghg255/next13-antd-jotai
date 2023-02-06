/* eslint-disable @typescript-eslint/no-unused-vars */
import { extend } from 'umi-request';
import { ENV } from 'src/utils/env';
import TokenManagement from './tokenManagement';

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

const injectBearer = (token: string, configs: any) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  if (configs?.headers?.Authorization) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
      },
    };
  }

  if (configs?.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    // try {
    //   const token = getAccessToken();

    //   const decoded = parseJwt(token);
    //   const { exp } = decoded;

    //   const currentTime = Date.now() / 1000;

    //   if (exp - 5 > currentTime) {
    //     return true;
    //   }

    //   return false;
    // } catch (error) {
    //   return false;
    // }

    return true;
  },
  getAccessToken: () => {
    const localInfo = window?.localStorage.getItem(ENV.LOCAL_STORAGE_KEY as string);
    let localInfoObject;

    if (localInfo) {
      localInfoObject = JSON.parse(localInfo);
    }

    return localInfoObject?.token || '';
  },
  onRefreshToken() {
    // const localInfo = window?.localStorage.getItem(ENV.LOCAL_STORAGE_KEY as string);
    // let localInfoObject;
    // if (localInfo) {
    //   localInfoObject = JSON.parse(localInfo);
    // }
    // const refreshToken = localInfoObject?.refreshToken;
    // if (!refreshToken) {
    //   return done(null);
    // }
    // request
    //   .post('/auth/refreshToken', {
    //     data: {
    //       refreshToken,
    //     },
    //   })
    //   .then((result) => {
    //     if (result.refreshToken && result.accessToken) {
    //       done(result.accessToken);
    //       return;
    //     }
    //     done(null);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     done(null);
    //   });
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token
    ? configs?.token
    : ((await TokenManager.getToken()) as string);

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
    return null;
  } catch (error) {
    return null;
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

export { request, privateRequest };
