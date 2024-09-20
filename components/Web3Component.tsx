import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Button } from '@chakra-ui/react'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const Web3Component: React.FC = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div>
      <Button onClick={connect} disabled={active}>
        Connect to MetaMask
      </Button>
      <Button onClick={disconnect} disabled={!active}>
        Disconnect
      </Button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
    </div>
  )
}

export default Web3Component