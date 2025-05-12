import { EOA0x7702, initEnv } from "./common";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

async function run() {
  const { sepoliaURL } = await initEnv(["sepoliaURL"]);

  const rpcClient = createPublicClient({
    chain: sepolia,
    transport: http(sepoliaURL),
  });

  const codeAtEOA0x7702 = await rpcClient.getCode({
    address: EOA0x7702,
  });

  console.log(codeAtEOA0x7702);
}

void run();
