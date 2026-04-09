import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('js-cookie', () => ({
  default: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn()
  }
}))

import Cookies from 'js-cookie'
import {
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage
} from './auth-token.serice'

describe('auth-token service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getAccessToken повертає токен', () => {
    vi.spyOn(Cookies, 'get').mockReturnValue('test-token' as any)

    const result = getAccessToken()

    expect(Cookies.get).toHaveBeenCalledWith(EnumTokens.ACCESS_TOKEN)
    expect(result).toBe('test-token')
  })

  it('getAccessToken повертає null якщо токена нема', () => {
    vi.spyOn(Cookies, 'get').mockReturnValue(undefined as any)

    const result = getAccessToken()

    expect(result).toBeNull()
  })

  it('saveTokenStorage зберігає токен у cookies', () => {
    saveTokenStorage('abc123')

    expect(Cookies.set).toHaveBeenCalledTimes(1)
    expect(Cookies.set).toHaveBeenCalledWith(
      EnumTokens.ACCESS_TOKEN,
      'abc123',
      expect.objectContaining({
        sameSite: 'strict',
        expires: 1
      })
    )
  })

  it('removeFromStorage видаляє токен', () => {
    removeFromStorage()

    expect(Cookies.remove).toHaveBeenCalledWith(EnumTokens.ACCESS_TOKEN)
  })
})