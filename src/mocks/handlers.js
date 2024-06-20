import { setupWorker } from "msw/browser";
import {bypass, http, HttpResponse, passthrough} from 'msw';

const isRealApi = true;

export const handlers = [
  http.get('https://swapi.dev/api/people/', async ({request}) => {

    if (isRealApi) {
      return passthrough()
    }

    const response = await fetch(bypass(request))
    const realData = await response.json()
    return HttpResponse.json({data: 'bla', realData})
  }),
];


export const startWorker = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};
