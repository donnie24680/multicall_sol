import { ethers } from 'ethers'
import {DeployFunction} from 'hardhat-deploy/types'
import {HardhatRuntimeEnvironment} from "hardhat/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre
    const {deploy} = deployments
    const {deployer} = await getNamedAccounts()

    const { address } = await deploy('UniswapInterfaceMulticall', {
        from: deployer,
        args: [],
        log: true,
        contract: "UniswapInterfaceMulticall"
    })

}

export default func
func.tags = ['UniswapInterfaceMulticall']