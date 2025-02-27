import { getInjectedName } from './getInjectedName'

describe.each`
  ethereum                      | expected
  ${undefined}                  | ${'Injected'}
  ${{ isBraveWallet: true }}    | ${'Brave Wallet'}
  ${{ isMetaMask: true }}       | ${'MetaMask'}
  ${{ isCoinbaseWallet: true }} | ${'Coinbase Wallet'}
  ${{ isFrame: true }}          | ${'Frame'}
  ${{ isTally: true }}          | ${'Tally'}
  ${{}}                         | ${'Injected'}
`('getInjectedName($ethereum)', ({ ethereum, expected }) => {
  it(`returns ${expected}`, () => {
    expect(getInjectedName(ethereum)).toEqual(expected)
  })
})
