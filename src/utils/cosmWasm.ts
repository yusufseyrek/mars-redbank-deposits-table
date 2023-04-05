import { REDBANK_CONTRACT_ADDRESS, RPC_URL } from "@/constants/rpc";
import { CosmWasmClient } from "cosmwasm";

let _cosmWasmClient: CosmWasmClient;

const getClient = async () => {
  try {
    if (!_cosmWasmClient) {
      _cosmWasmClient = await CosmWasmClient.connect(RPC_URL);
    }

    return _cosmWasmClient;
  } catch (error) {
    throw error;
  }
};

const createQuery = async (query: Record<string, unknown>) => {
  try {
    const client = await getClient();

    return client.queryContractSmart(REDBANK_CONTRACT_ADDRESS, query);
  } catch (error) {
    throw error;
  }
};

export { getClient, createQuery };
