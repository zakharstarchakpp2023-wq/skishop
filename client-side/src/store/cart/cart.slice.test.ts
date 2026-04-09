import { describe, it, expect } from 'vitest'
import { cartSlice } from './cart.slice'

const { addToCart, removeFromCart, changeQuantity, reset } = cartSlice.actions

const product = {
  id: 'p1',
  name: 'Test product',
  price: 100
} as any

describe('cartSlice', () => {
  it('додає товар у кошик', () => {
    const state = { items: [] }

    const nextState = cartSlice.reducer(
      state,
      addToCart({
        product,
        quantity: 1,
        price: 100
      } as any)
    )

    expect(nextState.items).toHaveLength(1)
    expect(nextState.items[0].product.id).toBe('p1')
    expect(nextState.items[0].quantity).toBe(1)
  })

  it('не додає дублікат товару', () => {
    const state = {
      items: [
        {
          id: 0,
          product,
          quantity: 1,
          price: 100
        }
      ]
    }

    const nextState = cartSlice.reducer(
      state,
      addToCart({
        product,
        quantity: 1,
        price: 100
      } as any)
    )

    expect(nextState.items).toHaveLength(1)
  })

  it('видаляє товар з кошика', () => {
    const state = {
      items: [
        {
          id: 0,
          product,
          quantity: 1,
          price: 100
        }
      ]
    }

    const nextState = cartSlice.reducer(
      state,
      removeFromCart({ id: 0 })
    )

    expect(nextState.items).toHaveLength(0)
  })

  it('збільшує кількість товару', () => {
    const state = {
      items: [
        {
          id: 0,
          product,
          quantity: 1,
          price: 100
        }
      ]
    }

    const nextState = cartSlice.reducer(
      state,
      changeQuantity({ id: 0, type: 'plus' })
    )

    expect(nextState.items[0].quantity).toBe(2)
  })

  it('очищає кошик', () => {
    const state = {
      items: [
        {
          id: 0,
          product,
          quantity: 2,
          price: 100
        }
      ]
    }

    const nextState = cartSlice.reducer(state, reset())

    expect(nextState.items).toEqual([])
  })
})