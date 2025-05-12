import "dotenv/config";
import { isHex } from "viem";

type RequestEnv = "sepoliaURL" | "relayerPK" | "authorizerPK";

export const EOA0x7702 = "0x770258Aa798A463Db46b56c4BF46b84761C274Af"

export const initEnv = <T extends RequestEnv[]>(
  _RequestEnv: T
): Promise<{ [K in T[number]]: string }> => {
  const result: any = {};

  _RequestEnv.map((param) => {
    switch (param) {
      case "sepoliaURL":
        if (!process.env.ETH_SEPOLIA_RPC_URL) {
          throw new Error(
            `The following environmental variables are required: ETH_SEPOLIA_RPC_URL`
          );
        }
        result[param] = process.env.ETH_SEPOLIA_RPC_URL;
        break;

      case "relayerPK":
        if (!isHex(process.env.RELAYER_PK)) {
          throw new Error(
            `The following environmental variables are required: RELAYER_PK, AUTHORIZER_PK`
          );
        }
        result[param] = process.env.RELAYER_PK;
        break;

      case "authorizerPK":
        if (!isHex(process.env.AUTHORIZER_PK)) {
          throw new Error(
            `The following environmental variables are required: RELAYER_PK, AUTHORIZER_PK`
          );
        }
        result[param] = process.env.AUTHORIZER_PK;
        break;
    }
  });

  return result;
};
