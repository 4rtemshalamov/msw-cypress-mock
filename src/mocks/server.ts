import {setupServer} from 'msw/node'
import {handlers} from './ghapi'

export const server = setupServer(...handlers)