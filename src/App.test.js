import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event' 

test("header renders with correct text", () => {
  render(<App />)
  const headerE1 = screen.getByRole("heading")
  expect(headerE1.textContent).toBe("Testing Playground")
})

describe('test for the button', () => {
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ 'backgroundColor': "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")
  })  
})

test("checkbox disables the button on the first click, then enables it on the second click", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole('checkbox')

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})