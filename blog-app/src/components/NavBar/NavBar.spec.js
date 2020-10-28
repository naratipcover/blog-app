// global describe test expect

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import NavBar from '.'

describe('NavBar', () => {
  test('should contains logo text', () => {
    const { getByText }  = render(
    <MemoryRouter>
    <NavBar />
    </MemoryRouter>
    )
    expect(getByText(/logo/ig)).toBeInTheDocument()
  })

  test ('should have link navigate to home, about, contact and story', () => {
    const { getByText }  = render(
      <MemoryRouter>
      <NavBar />
      </MemoryRouter>
    )
    expect(getByText(/home/gi)).toBeInTheDocument()
    expect(getByText(/home/gi).closest('a')).toHaveAttribute('href', '/')

    expect(getByText(/about/gi)).toBeInTheDocument()
    expect(getByText(/about/gi).closest('a')).toHaveAttribute('href', '/about')

    expect(getByText(/contact/gi)).toBeInTheDocument()
    expect(getByText(/contact/gi).closest('a')).toHaveAttribute('href', '/contact')

    expect(getByText(/home/gi)).toBeInTheDocument()
    expect(getByText(/home/gi).closest('a')).toHaveAttribute('href', '/story')
  })

  test ('should render layout correctiy', () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
