import { describe, it, expect } from 'vitest'
import { errorCatch, getContentType } from './api.hepler'

describe('api helper', () => {
  it('getContentType повертає json content-type', () => {
    expect(getContentType()).toEqual({
      'Content-type': 'application/json'
    })
  })

  it('errorCatch повертає message з response.data.message', () => {
    const error = {
      response: {
        data: {
          message: 'Invalid credentials'
        }
      }
    }

    expect(errorCatch(error)).toBe('Invalid credentials')
  })

  it('errorCatch повертає перший елемент якщо message є масивом', () => {
    const error = {
      response: {
        data: {
          message: ['Email is required', 'Password is required']
        }
      }
    }

    expect(errorCatch(error)).toBe('Email is required')
  })

  it('errorCatch повертає error.message якщо response відсутній', () => {
    const error = {
      message: 'Network error'
    }

    expect(errorCatch(error)).toBe('Network error')
  })
})