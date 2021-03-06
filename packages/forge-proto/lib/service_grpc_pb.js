// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_pb = require('./rpc_pb.js');

function serialize_forge_abi_RequestCreateTx(arg) {
  if (!(arg instanceof rpc_pb.RequestCreateTx)) {
    throw new Error('Expected argument of type forge_abi.RequestCreateTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestCreateTx(buffer_arg) {
  return rpc_pb.RequestCreateTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestCreateWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestCreateWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestCreateWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestCreateWallet(buffer_arg) {
  return rpc_pb.RequestCreateWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestDeclareNode(arg) {
  if (!(arg instanceof rpc_pb.RequestDeclareNode)) {
    throw new Error('Expected argument of type forge_abi.RequestDeclareNode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestDeclareNode(buffer_arg) {
  return rpc_pb.RequestDeclareNode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAccountState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAccountState(buffer_arg) {
  return rpc_pb.RequestGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAssetState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAssetState(buffer_arg) {
  return rpc_pb.RequestGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetBlock(arg) {
  if (!(arg instanceof rpc_pb.RequestGetBlock)) {
    throw new Error('Expected argument of type forge_abi.RequestGetBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetBlock(buffer_arg) {
  return rpc_pb.RequestGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetBlocks(arg) {
  if (!(arg instanceof rpc_pb.RequestGetBlocks)) {
    throw new Error('Expected argument of type forge_abi.RequestGetBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetBlocks(buffer_arg) {
  return rpc_pb.RequestGetBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetChainInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetChainInfo(buffer_arg) {
  return rpc_pb.RequestGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetConfig(arg) {
  if (!(arg instanceof rpc_pb.RequestGetConfig)) {
    throw new Error('Expected argument of type forge_abi.RequestGetConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetConfig(buffer_arg) {
  return rpc_pb.RequestGetConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetForgeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetForgeState(buffer_arg) {
  return rpc_pb.RequestGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetForgeStats(arg) {
  if (!(arg instanceof rpc_pb.RequestGetForgeStats)) {
    throw new Error('Expected argument of type forge_abi.RequestGetForgeStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetForgeStats(buffer_arg) {
  return rpc_pb.RequestGetForgeStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetHealthStatus(arg) {
  if (!(arg instanceof rpc_pb.RequestGetHealthStatus)) {
    throw new Error('Expected argument of type forge_abi.RequestGetHealthStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetHealthStatus(buffer_arg) {
  return rpc_pb.RequestGetHealthStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetNetInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetNetInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetNetInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetNetInfo(buffer_arg) {
  return rpc_pb.RequestGetNetInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetNodeInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetNodeInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetNodeInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetNodeInfo(buffer_arg) {
  return rpc_pb.RequestGetNodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetProtocolState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetProtocolState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetProtocolState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetProtocolState(buffer_arg) {
  return rpc_pb.RequestGetProtocolState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetStakeState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetStakeState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetStakeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetStakeState(buffer_arg) {
  return rpc_pb.RequestGetStakeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetTetherState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetTetherState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetTetherState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetTetherState(buffer_arg) {
  return rpc_pb.RequestGetTetherState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetTx(arg) {
  if (!(arg instanceof rpc_pb.RequestGetTx)) {
    throw new Error('Expected argument of type forge_abi.RequestGetTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetTx(buffer_arg) {
  return rpc_pb.RequestGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetUnconfirmedTxs(arg) {
  if (!(arg instanceof rpc_pb.RequestGetUnconfirmedTxs)) {
    throw new Error('Expected argument of type forge_abi.RequestGetUnconfirmedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetUnconfirmedTxs(buffer_arg) {
  return rpc_pb.RequestGetUnconfirmedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetValidatorsInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetValidatorsInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetValidatorsInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetValidatorsInfo(buffer_arg) {
  return rpc_pb.RequestGetValidatorsInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAccount(arg) {
  if (!(arg instanceof rpc_pb.RequestListAccount)) {
    throw new Error('Expected argument of type forge_abi.RequestListAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAccount(buffer_arg) {
  return rpc_pb.RequestListAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAssetTransactions(arg) {
  if (!(arg instanceof rpc_pb.RequestListAssetTransactions)) {
    throw new Error('Expected argument of type forge_abi.RequestListAssetTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAssetTransactions(buffer_arg) {
  return rpc_pb.RequestListAssetTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAssets(arg) {
  if (!(arg instanceof rpc_pb.RequestListAssets)) {
    throw new Error('Expected argument of type forge_abi.RequestListAssets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAssets(buffer_arg) {
  return rpc_pb.RequestListAssets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListBlocks(arg) {
  if (!(arg instanceof rpc_pb.RequestListBlocks)) {
    throw new Error('Expected argument of type forge_abi.RequestListBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListBlocks(buffer_arg) {
  return rpc_pb.RequestListBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListStakes(arg) {
  if (!(arg instanceof rpc_pb.RequestListStakes)) {
    throw new Error('Expected argument of type forge_abi.RequestListStakes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListStakes(buffer_arg) {
  return rpc_pb.RequestListStakes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListTopAccounts(arg) {
  if (!(arg instanceof rpc_pb.RequestListTopAccounts)) {
    throw new Error('Expected argument of type forge_abi.RequestListTopAccounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListTopAccounts(buffer_arg) {
  return rpc_pb.RequestListTopAccounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListTransactions(arg) {
  if (!(arg instanceof rpc_pb.RequestListTransactions)) {
    throw new Error('Expected argument of type forge_abi.RequestListTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListTransactions(buffer_arg) {
  return rpc_pb.RequestListTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestListWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestListWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListWallet(buffer_arg) {
  return rpc_pb.RequestListWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestLoadFile(arg) {
  if (!(arg instanceof rpc_pb.RequestLoadFile)) {
    throw new Error('Expected argument of type forge_abi.RequestLoadFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestLoadFile(buffer_arg) {
  return rpc_pb.RequestLoadFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestLoadWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestLoadWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestLoadWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestLoadWallet(buffer_arg) {
  return rpc_pb.RequestLoadWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestMultisig(arg) {
  if (!(arg instanceof rpc_pb.RequestMultisig)) {
    throw new Error('Expected argument of type forge_abi.RequestMultisig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestMultisig(buffer_arg) {
  return rpc_pb.RequestMultisig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestPinFile(arg) {
  if (!(arg instanceof rpc_pb.RequestPinFile)) {
    throw new Error('Expected argument of type forge_abi.RequestPinFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestPinFile(buffer_arg) {
  return rpc_pb.RequestPinFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestRecoverWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestRecoverWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestRecoverWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestRecoverWallet(buffer_arg) {
  return rpc_pb.RequestRecoverWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestRemoveWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestRemoveWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestRemoveWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestRemoveWallet(buffer_arg) {
  return rpc_pb.RequestRemoveWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSearch(arg) {
  if (!(arg instanceof rpc_pb.RequestSearch)) {
    throw new Error('Expected argument of type forge_abi.RequestSearch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSearch(buffer_arg) {
  return rpc_pb.RequestSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSendTx(arg) {
  if (!(arg instanceof rpc_pb.RequestSendTx)) {
    throw new Error('Expected argument of type forge_abi.RequestSendTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSendTx(buffer_arg) {
  return rpc_pb.RequestSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestStoreFile(arg) {
  if (!(arg instanceof rpc_pb.RequestStoreFile)) {
    throw new Error('Expected argument of type forge_abi.RequestStoreFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestStoreFile(buffer_arg) {
  return rpc_pb.RequestStoreFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSubscribe(arg) {
  if (!(arg instanceof rpc_pb.RequestSubscribe)) {
    throw new Error('Expected argument of type forge_abi.RequestSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSubscribe(buffer_arg) {
  return rpc_pb.RequestSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestUnsubscribe(arg) {
  if (!(arg instanceof rpc_pb.RequestUnsubscribe)) {
    throw new Error('Expected argument of type forge_abi.RequestUnsubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestUnsubscribe(buffer_arg) {
  return rpc_pb.RequestUnsubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseCreateTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseCreateTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseCreateTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseCreateTx(buffer_arg) {
  return rpc_pb.ResponseCreateTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseCreateWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseCreateWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseCreateWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseCreateWallet(buffer_arg) {
  return rpc_pb.ResponseCreateWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseDeclareNode(arg) {
  if (!(arg instanceof rpc_pb.ResponseDeclareNode)) {
    throw new Error('Expected argument of type forge_abi.ResponseDeclareNode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseDeclareNode(buffer_arg) {
  return rpc_pb.ResponseDeclareNode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAccountState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAccountState(buffer_arg) {
  return rpc_pb.ResponseGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAssetState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAssetState(buffer_arg) {
  return rpc_pb.ResponseGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetBlock(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetBlock)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetBlock(buffer_arg) {
  return rpc_pb.ResponseGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetBlocks(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetBlocks)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetBlocks(buffer_arg) {
  return rpc_pb.ResponseGetBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetChainInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetChainInfo(buffer_arg) {
  return rpc_pb.ResponseGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetConfig(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetConfig)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetConfig(buffer_arg) {
  return rpc_pb.ResponseGetConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetForgeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetForgeState(buffer_arg) {
  return rpc_pb.ResponseGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetForgeStats(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetForgeStats)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetForgeStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetForgeStats(buffer_arg) {
  return rpc_pb.ResponseGetForgeStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetHealthStatus(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetHealthStatus)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetHealthStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetHealthStatus(buffer_arg) {
  return rpc_pb.ResponseGetHealthStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetNetInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetNetInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetNetInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetNetInfo(buffer_arg) {
  return rpc_pb.ResponseGetNetInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetNodeInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetNodeInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetNodeInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetNodeInfo(buffer_arg) {
  return rpc_pb.ResponseGetNodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetProtocolState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetProtocolState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetProtocolState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetProtocolState(buffer_arg) {
  return rpc_pb.ResponseGetProtocolState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetStakeState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetStakeState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetStakeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetStakeState(buffer_arg) {
  return rpc_pb.ResponseGetStakeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetTetherState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetTetherState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetTetherState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetTetherState(buffer_arg) {
  return rpc_pb.ResponseGetTetherState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetTx(buffer_arg) {
  return rpc_pb.ResponseGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetUnconfirmedTxs(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetUnconfirmedTxs)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetUnconfirmedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetUnconfirmedTxs(buffer_arg) {
  return rpc_pb.ResponseGetUnconfirmedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetValidatorsInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetValidatorsInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetValidatorsInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetValidatorsInfo(buffer_arg) {
  return rpc_pb.ResponseGetValidatorsInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAccount(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAccount)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAccount(buffer_arg) {
  return rpc_pb.ResponseListAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAssetTransactions(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAssetTransactions)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAssetTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAssetTransactions(buffer_arg) {
  return rpc_pb.ResponseListAssetTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAssets(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAssets)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAssets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAssets(buffer_arg) {
  return rpc_pb.ResponseListAssets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListBlocks(arg) {
  if (!(arg instanceof rpc_pb.ResponseListBlocks)) {
    throw new Error('Expected argument of type forge_abi.ResponseListBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListBlocks(buffer_arg) {
  return rpc_pb.ResponseListBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListStakes(arg) {
  if (!(arg instanceof rpc_pb.ResponseListStakes)) {
    throw new Error('Expected argument of type forge_abi.ResponseListStakes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListStakes(buffer_arg) {
  return rpc_pb.ResponseListStakes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListTopAccounts(arg) {
  if (!(arg instanceof rpc_pb.ResponseListTopAccounts)) {
    throw new Error('Expected argument of type forge_abi.ResponseListTopAccounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListTopAccounts(buffer_arg) {
  return rpc_pb.ResponseListTopAccounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListTransactions(arg) {
  if (!(arg instanceof rpc_pb.ResponseListTransactions)) {
    throw new Error('Expected argument of type forge_abi.ResponseListTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListTransactions(buffer_arg) {
  return rpc_pb.ResponseListTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseListWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseListWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListWallet(buffer_arg) {
  return rpc_pb.ResponseListWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseLoadFile(arg) {
  if (!(arg instanceof rpc_pb.ResponseLoadFile)) {
    throw new Error('Expected argument of type forge_abi.ResponseLoadFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseLoadFile(buffer_arg) {
  return rpc_pb.ResponseLoadFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseLoadWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseLoadWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseLoadWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseLoadWallet(buffer_arg) {
  return rpc_pb.ResponseLoadWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseMultisig(arg) {
  if (!(arg instanceof rpc_pb.ResponseMultisig)) {
    throw new Error('Expected argument of type forge_abi.ResponseMultisig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseMultisig(buffer_arg) {
  return rpc_pb.ResponseMultisig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponsePinFile(arg) {
  if (!(arg instanceof rpc_pb.ResponsePinFile)) {
    throw new Error('Expected argument of type forge_abi.ResponsePinFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponsePinFile(buffer_arg) {
  return rpc_pb.ResponsePinFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseRecoverWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseRecoverWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseRecoverWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseRecoverWallet(buffer_arg) {
  return rpc_pb.ResponseRecoverWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseRemoveWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseRemoveWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseRemoveWallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseRemoveWallet(buffer_arg) {
  return rpc_pb.ResponseRemoveWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSearch(arg) {
  if (!(arg instanceof rpc_pb.ResponseSearch)) {
    throw new Error('Expected argument of type forge_abi.ResponseSearch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSearch(buffer_arg) {
  return rpc_pb.ResponseSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSendTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseSendTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseSendTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSendTx(buffer_arg) {
  return rpc_pb.ResponseSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseStoreFile(arg) {
  if (!(arg instanceof rpc_pb.ResponseStoreFile)) {
    throw new Error('Expected argument of type forge_abi.ResponseStoreFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseStoreFile(buffer_arg) {
  return rpc_pb.ResponseStoreFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSubscribe(arg) {
  if (!(arg instanceof rpc_pb.ResponseSubscribe)) {
    throw new Error('Expected argument of type forge_abi.ResponseSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSubscribe(buffer_arg) {
  return rpc_pb.ResponseSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseUnsubscribe(arg) {
  if (!(arg instanceof rpc_pb.ResponseUnsubscribe)) {
    throw new Error('Expected argument of type forge_abi.ResponseUnsubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseUnsubscribe(buffer_arg) {
  return rpc_pb.ResponseUnsubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

// forge RPC definition
//
// Notice: when you define a new RPC, please follow the naming convention. Your
// function name is snake case, and req / req are PASCAL case of the function
// name, prefixed with Request / Response. e.g. rpc get_abc(RequestGetAbc)
// returns (ResponseGetAbc). If you break this, RPC builder would complain.
//
var ChainRpcService = (exports.ChainRpcService = {
  // tx related
  create_tx: {
    path: '/forge_abi.ChainRpc/create_tx',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestCreateTx,
    responseType: rpc_pb.ResponseCreateTx,
    requestSerialize: serialize_forge_abi_RequestCreateTx,
    requestDeserialize: deserialize_forge_abi_RequestCreateTx,
    responseSerialize: serialize_forge_abi_ResponseCreateTx,
    responseDeserialize: deserialize_forge_abi_ResponseCreateTx,
  },
  multisig: {
    path: '/forge_abi.ChainRpc/multisig',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestMultisig,
    responseType: rpc_pb.ResponseMultisig,
    requestSerialize: serialize_forge_abi_RequestMultisig,
    requestDeserialize: deserialize_forge_abi_RequestMultisig,
    responseSerialize: serialize_forge_abi_ResponseMultisig,
    responseDeserialize: deserialize_forge_abi_ResponseMultisig,
  },
  send_tx: {
    path: '/forge_abi.ChainRpc/send_tx',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestSendTx,
    responseType: rpc_pb.ResponseSendTx,
    requestSerialize: serialize_forge_abi_RequestSendTx,
    requestDeserialize: deserialize_forge_abi_RequestSendTx,
    responseSerialize: serialize_forge_abi_ResponseSendTx,
    responseDeserialize: deserialize_forge_abi_ResponseSendTx,
  },
  get_tx: {
    path: '/forge_abi.ChainRpc/get_tx',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetTx,
    responseType: rpc_pb.ResponseGetTx,
    requestSerialize: serialize_forge_abi_RequestGetTx,
    requestDeserialize: deserialize_forge_abi_RequestGetTx,
    responseSerialize: serialize_forge_abi_ResponseGetTx,
    responseDeserialize: deserialize_forge_abi_ResponseGetTx,
  },
  get_block: {
    path: '/forge_abi.ChainRpc/get_block',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetBlock,
    responseType: rpc_pb.ResponseGetBlock,
    requestSerialize: serialize_forge_abi_RequestGetBlock,
    requestDeserialize: deserialize_forge_abi_RequestGetBlock,
    responseSerialize: serialize_forge_abi_ResponseGetBlock,
    responseDeserialize: deserialize_forge_abi_ResponseGetBlock,
  },
  get_blocks: {
    path: '/forge_abi.ChainRpc/get_blocks',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetBlocks,
    responseType: rpc_pb.ResponseGetBlocks,
    requestSerialize: serialize_forge_abi_RequestGetBlocks,
    requestDeserialize: deserialize_forge_abi_RequestGetBlocks,
    responseSerialize: serialize_forge_abi_ResponseGetBlocks,
    responseDeserialize: deserialize_forge_abi_ResponseGetBlocks,
  },
  get_unconfirmed_txs: {
    path: '/forge_abi.ChainRpc/get_unconfirmed_txs',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetUnconfirmedTxs,
    responseType: rpc_pb.ResponseGetUnconfirmedTxs,
    requestSerialize: serialize_forge_abi_RequestGetUnconfirmedTxs,
    requestDeserialize: deserialize_forge_abi_RequestGetUnconfirmedTxs,
    responseSerialize: serialize_forge_abi_ResponseGetUnconfirmedTxs,
    responseDeserialize: deserialize_forge_abi_ResponseGetUnconfirmedTxs,
  },
  // utility
  get_chain_info: {
    path: '/forge_abi.ChainRpc/get_chain_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetChainInfo,
    responseType: rpc_pb.ResponseGetChainInfo,
    requestSerialize: serialize_forge_abi_RequestGetChainInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetChainInfo,
    responseSerialize: serialize_forge_abi_ResponseGetChainInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetChainInfo,
  },
  get_node_info: {
    path: '/forge_abi.ChainRpc/get_node_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetNodeInfo,
    responseType: rpc_pb.ResponseGetNodeInfo,
    requestSerialize: serialize_forge_abi_RequestGetNodeInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetNodeInfo,
    responseSerialize: serialize_forge_abi_ResponseGetNodeInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetNodeInfo,
  },
  search: {
    path: '/forge_abi.ChainRpc/search',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestSearch,
    responseType: rpc_pb.ResponseSearch,
    requestSerialize: serialize_forge_abi_RequestSearch,
    requestDeserialize: deserialize_forge_abi_RequestSearch,
    responseSerialize: serialize_forge_abi_ResponseSearch,
    responseDeserialize: deserialize_forge_abi_ResponseSearch,
  },
  get_net_info: {
    path: '/forge_abi.ChainRpc/get_net_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetNetInfo,
    responseType: rpc_pb.ResponseGetNetInfo,
    requestSerialize: serialize_forge_abi_RequestGetNetInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetNetInfo,
    responseSerialize: serialize_forge_abi_ResponseGetNetInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetNetInfo,
  },
  get_validators_info: {
    path: '/forge_abi.ChainRpc/get_validators_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetValidatorsInfo,
    responseType: rpc_pb.ResponseGetValidatorsInfo,
    requestSerialize: serialize_forge_abi_RequestGetValidatorsInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetValidatorsInfo,
    responseSerialize: serialize_forge_abi_ResponseGetValidatorsInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetValidatorsInfo,
  },
  get_config: {
    path: '/forge_abi.ChainRpc/get_config',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetConfig,
    responseType: rpc_pb.ResponseGetConfig,
    requestSerialize: serialize_forge_abi_RequestGetConfig,
    requestDeserialize: deserialize_forge_abi_RequestGetConfig,
    responseSerialize: serialize_forge_abi_ResponseGetConfig,
    responseDeserialize: deserialize_forge_abi_ResponseGetConfig,
  },
});

exports.ChainRpcClient = grpc.makeGenericClientConstructor(ChainRpcService);
var EventRpcService = (exports.EventRpcService = {
  subscribe: {
    path: '/forge_abi.EventRpc/subscribe',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestSubscribe,
    responseType: rpc_pb.ResponseSubscribe,
    requestSerialize: serialize_forge_abi_RequestSubscribe,
    requestDeserialize: deserialize_forge_abi_RequestSubscribe,
    responseSerialize: serialize_forge_abi_ResponseSubscribe,
    responseDeserialize: deserialize_forge_abi_ResponseSubscribe,
  },
  unsubscribe: {
    path: '/forge_abi.EventRpc/unsubscribe',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestUnsubscribe,
    responseType: rpc_pb.ResponseUnsubscribe,
    requestSerialize: serialize_forge_abi_RequestUnsubscribe,
    requestDeserialize: deserialize_forge_abi_RequestUnsubscribe,
    responseSerialize: serialize_forge_abi_ResponseUnsubscribe,
    responseDeserialize: deserialize_forge_abi_ResponseUnsubscribe,
  },
});

exports.EventRpcClient = grpc.makeGenericClientConstructor(EventRpcService);
var FileRpcService = (exports.FileRpcService = {
  // filesystem related
  store_file: {
    path: '/forge_abi.FileRpc/store_file',
    requestStream: true,
    responseStream: false,
    requestType: rpc_pb.RequestStoreFile,
    responseType: rpc_pb.ResponseStoreFile,
    requestSerialize: serialize_forge_abi_RequestStoreFile,
    requestDeserialize: deserialize_forge_abi_RequestStoreFile,
    responseSerialize: serialize_forge_abi_ResponseStoreFile,
    responseDeserialize: deserialize_forge_abi_ResponseStoreFile,
  },
  load_file: {
    path: '/forge_abi.FileRpc/load_file',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestLoadFile,
    responseType: rpc_pb.ResponseLoadFile,
    requestSerialize: serialize_forge_abi_RequestLoadFile,
    requestDeserialize: deserialize_forge_abi_RequestLoadFile,
    responseSerialize: serialize_forge_abi_ResponseLoadFile,
    responseDeserialize: deserialize_forge_abi_ResponseLoadFile,
  },
  pin_file: {
    path: '/forge_abi.FileRpc/pin_file',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestPinFile,
    responseType: rpc_pb.ResponsePinFile,
    requestSerialize: serialize_forge_abi_RequestPinFile,
    requestDeserialize: deserialize_forge_abi_RequestPinFile,
    responseSerialize: serialize_forge_abi_ResponsePinFile,
    responseDeserialize: deserialize_forge_abi_ResponsePinFile,
  },
});

exports.FileRpcClient = grpc.makeGenericClientConstructor(FileRpcService);
var StateRpcService = (exports.StateRpcService = {
  // state related
  get_account_state: {
    path: '/forge_abi.StateRpc/get_account_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetAccountState,
    responseType: rpc_pb.ResponseGetAccountState,
    requestSerialize: serialize_forge_abi_RequestGetAccountState,
    requestDeserialize: deserialize_forge_abi_RequestGetAccountState,
    responseSerialize: serialize_forge_abi_ResponseGetAccountState,
    responseDeserialize: deserialize_forge_abi_ResponseGetAccountState,
  },
  get_asset_state: {
    path: '/forge_abi.StateRpc/get_asset_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetAssetState,
    responseType: rpc_pb.ResponseGetAssetState,
    requestSerialize: serialize_forge_abi_RequestGetAssetState,
    requestDeserialize: deserialize_forge_abi_RequestGetAssetState,
    responseSerialize: serialize_forge_abi_ResponseGetAssetState,
    responseDeserialize: deserialize_forge_abi_ResponseGetAssetState,
  },
  get_forge_state: {
    path: '/forge_abi.StateRpc/get_forge_state',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetForgeState,
    responseType: rpc_pb.ResponseGetForgeState,
    requestSerialize: serialize_forge_abi_RequestGetForgeState,
    requestDeserialize: deserialize_forge_abi_RequestGetForgeState,
    responseSerialize: serialize_forge_abi_ResponseGetForgeState,
    responseDeserialize: deserialize_forge_abi_ResponseGetForgeState,
  },
  get_protocol_state: {
    path: '/forge_abi.StateRpc/get_protocol_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetProtocolState,
    responseType: rpc_pb.ResponseGetProtocolState,
    requestSerialize: serialize_forge_abi_RequestGetProtocolState,
    requestDeserialize: deserialize_forge_abi_RequestGetProtocolState,
    responseSerialize: serialize_forge_abi_ResponseGetProtocolState,
    responseDeserialize: deserialize_forge_abi_ResponseGetProtocolState,
  },
  get_stake_state: {
    path: '/forge_abi.StateRpc/get_stake_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetStakeState,
    responseType: rpc_pb.ResponseGetStakeState,
    requestSerialize: serialize_forge_abi_RequestGetStakeState,
    requestDeserialize: deserialize_forge_abi_RequestGetStakeState,
    responseSerialize: serialize_forge_abi_ResponseGetStakeState,
    responseDeserialize: deserialize_forge_abi_ResponseGetStakeState,
  },
  get_tether_state: {
    path: '/forge_abi.StateRpc/get_tether_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetTetherState,
    responseType: rpc_pb.ResponseGetTetherState,
    requestSerialize: serialize_forge_abi_RequestGetTetherState,
    requestDeserialize: deserialize_forge_abi_RequestGetTetherState,
    responseSerialize: serialize_forge_abi_ResponseGetTetherState,
    responseDeserialize: deserialize_forge_abi_ResponseGetTetherState,
  },
});

exports.StateRpcClient = grpc.makeGenericClientConstructor(StateRpcService);
var WalletRpcService = (exports.WalletRpcService = {
  // wallet related
  create_wallet: {
    path: '/forge_abi.WalletRpc/create_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestCreateWallet,
    responseType: rpc_pb.ResponseCreateWallet,
    requestSerialize: serialize_forge_abi_RequestCreateWallet,
    requestDeserialize: deserialize_forge_abi_RequestCreateWallet,
    responseSerialize: serialize_forge_abi_ResponseCreateWallet,
    responseDeserialize: deserialize_forge_abi_ResponseCreateWallet,
  },
  load_wallet: {
    path: '/forge_abi.WalletRpc/load_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestLoadWallet,
    responseType: rpc_pb.ResponseLoadWallet,
    requestSerialize: serialize_forge_abi_RequestLoadWallet,
    requestDeserialize: deserialize_forge_abi_RequestLoadWallet,
    responseSerialize: serialize_forge_abi_ResponseLoadWallet,
    responseDeserialize: deserialize_forge_abi_ResponseLoadWallet,
  },
  recover_wallet: {
    path: '/forge_abi.WalletRpc/recover_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestRecoverWallet,
    responseType: rpc_pb.ResponseRecoverWallet,
    requestSerialize: serialize_forge_abi_RequestRecoverWallet,
    requestDeserialize: deserialize_forge_abi_RequestRecoverWallet,
    responseSerialize: serialize_forge_abi_ResponseRecoverWallet,
    responseDeserialize: deserialize_forge_abi_ResponseRecoverWallet,
  },
  list_wallet: {
    path: '/forge_abi.WalletRpc/list_wallet',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestListWallet,
    responseType: rpc_pb.ResponseListWallet,
    requestSerialize: serialize_forge_abi_RequestListWallet,
    requestDeserialize: deserialize_forge_abi_RequestListWallet,
    responseSerialize: serialize_forge_abi_ResponseListWallet,
    responseDeserialize: deserialize_forge_abi_ResponseListWallet,
  },
  remove_wallet: {
    path: '/forge_abi.WalletRpc/remove_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestRemoveWallet,
    responseType: rpc_pb.ResponseRemoveWallet,
    requestSerialize: serialize_forge_abi_RequestRemoveWallet,
    requestDeserialize: deserialize_forge_abi_RequestRemoveWallet,
    responseSerialize: serialize_forge_abi_ResponseRemoveWallet,
    responseDeserialize: deserialize_forge_abi_ResponseRemoveWallet,
  },
  declare_node: {
    path: '/forge_abi.WalletRpc/declare_node',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestDeclareNode,
    responseType: rpc_pb.ResponseDeclareNode,
    requestSerialize: serialize_forge_abi_RequestDeclareNode,
    requestDeserialize: deserialize_forge_abi_RequestDeclareNode,
    responseSerialize: serialize_forge_abi_ResponseDeclareNode,
    responseDeserialize: deserialize_forge_abi_ResponseDeclareNode,
  },
});

exports.WalletRpcClient = grpc.makeGenericClientConstructor(WalletRpcService);
var StatsRpcService = (exports.StatsRpcService = {
  get_forge_stats: {
    path: '/forge_abi.StatsRpc/get_forge_stats',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetForgeStats,
    responseType: rpc_pb.ResponseGetForgeStats,
    requestSerialize: serialize_forge_abi_RequestGetForgeStats,
    requestDeserialize: deserialize_forge_abi_RequestGetForgeStats,
    responseSerialize: serialize_forge_abi_ResponseGetForgeStats,
    responseDeserialize: deserialize_forge_abi_ResponseGetForgeStats,
  },
  list_transactions: {
    path: '/forge_abi.StatsRpc/list_transactions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListTransactions,
    responseType: rpc_pb.ResponseListTransactions,
    requestSerialize: serialize_forge_abi_RequestListTransactions,
    requestDeserialize: deserialize_forge_abi_RequestListTransactions,
    responseSerialize: serialize_forge_abi_ResponseListTransactions,
    responseDeserialize: deserialize_forge_abi_ResponseListTransactions,
  },
  list_assets: {
    path: '/forge_abi.StatsRpc/list_assets',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAssets,
    responseType: rpc_pb.ResponseListAssets,
    requestSerialize: serialize_forge_abi_RequestListAssets,
    requestDeserialize: deserialize_forge_abi_RequestListAssets,
    responseSerialize: serialize_forge_abi_ResponseListAssets,
    responseDeserialize: deserialize_forge_abi_ResponseListAssets,
  },
  list_stakes: {
    path: '/forge_abi.StatsRpc/list_stakes',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListStakes,
    responseType: rpc_pb.ResponseListStakes,
    requestSerialize: serialize_forge_abi_RequestListStakes,
    requestDeserialize: deserialize_forge_abi_RequestListStakes,
    responseSerialize: serialize_forge_abi_ResponseListStakes,
    responseDeserialize: deserialize_forge_abi_ResponseListStakes,
  },
  list_account: {
    path: '/forge_abi.StatsRpc/list_account',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAccount,
    responseType: rpc_pb.ResponseListAccount,
    requestSerialize: serialize_forge_abi_RequestListAccount,
    requestDeserialize: deserialize_forge_abi_RequestListAccount,
    responseSerialize: serialize_forge_abi_ResponseListAccount,
    responseDeserialize: deserialize_forge_abi_ResponseListAccount,
  },
  list_top_accounts: {
    path: '/forge_abi.StatsRpc/list_top_accounts',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListTopAccounts,
    responseType: rpc_pb.ResponseListTopAccounts,
    requestSerialize: serialize_forge_abi_RequestListTopAccounts,
    requestDeserialize: deserialize_forge_abi_RequestListTopAccounts,
    responseSerialize: serialize_forge_abi_ResponseListTopAccounts,
    responseDeserialize: deserialize_forge_abi_ResponseListTopAccounts,
  },
  list_asset_transactions: {
    path: '/forge_abi.StatsRpc/list_asset_transactions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAssetTransactions,
    responseType: rpc_pb.ResponseListAssetTransactions,
    requestSerialize: serialize_forge_abi_RequestListAssetTransactions,
    requestDeserialize: deserialize_forge_abi_RequestListAssetTransactions,
    responseSerialize: serialize_forge_abi_ResponseListAssetTransactions,
    responseDeserialize: deserialize_forge_abi_ResponseListAssetTransactions,
  },
  list_blocks: {
    path: '/forge_abi.StatsRpc/list_blocks',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListBlocks,
    responseType: rpc_pb.ResponseListBlocks,
    requestSerialize: serialize_forge_abi_RequestListBlocks,
    requestDeserialize: deserialize_forge_abi_RequestListBlocks,
    responseSerialize: serialize_forge_abi_ResponseListBlocks,
    responseDeserialize: deserialize_forge_abi_ResponseListBlocks,
  },
  get_health_status: {
    path: '/forge_abi.StatsRpc/get_health_status',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetHealthStatus,
    responseType: rpc_pb.ResponseGetHealthStatus,
    requestSerialize: serialize_forge_abi_RequestGetHealthStatus,
    requestDeserialize: deserialize_forge_abi_RequestGetHealthStatus,
    responseSerialize: serialize_forge_abi_ResponseGetHealthStatus,
    responseDeserialize: deserialize_forge_abi_ResponseGetHealthStatus,
  },
});

exports.StatsRpcClient = grpc.makeGenericClientConstructor(StatsRpcService);
