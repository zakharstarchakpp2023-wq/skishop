import { describe, it, expect } from 'vitest'
import { formatDate } from './format-date'

describe('formatDate', () => {
  it('форматує дату у вигляд dd.mm.yyyy', () => {
    expect(formatDate('2026-04-09T00:00:00.000Z')).toMatch(/\d{2}\.\d{2}\.\d{4}/)
  })
})