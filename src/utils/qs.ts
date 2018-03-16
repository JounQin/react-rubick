import { parse, stringify } from 'qs'

function qs<T>(input: string): T
function qs(input: object): string
function qs<T>(input: string | object): T | string {
  return typeof input === 'string'
    ? parse(input.replace(/^\?/, ''))
    : stringify(input)
}

export { qs }
