# What is transaction
블록체인은 흔히 하나의 거대한 장부로 비유된다. 이는 전 세계에 분산된 노드들이 모두 동일한 데이터베이스를 공유하고 있기 때문이다. 블록체인 장부에 기록된 잔액, 계좌, 논스 등의 정보는 블록체인의 현재 상태(state)를 의미한다. 제네시스 블록(최초의 블록)의 상태부터 순서대로 블록이 추가 될때 마다 이전 상태에서 다음 상태로 계속 이동하는 과정이 블록체인의 매커니즘이다.</br>
특정 블록에 포함된 트랜잭션은 특정 블록 시점(block number)에서 발생한 이벤트를 뜻한다. 과거의 이벤트는 이전 블록 넘버에서 발생한 이벤트를 뜻하며, 앞으로 일어날 미래의 이벤트는 다음 블록 넘버에서 발생하는 이벤트이다. 즉, 블록체인의 시간 개념은 블록 단위이다.</br>
트랜잭션은 블록체인 네트워크에서 이더를 전송하거나 상태를 변경하는 데 사용되는 작업 단위를 의미한다. 트랜잭션은 이더리움 가상 머신 (EVM)에서 실행되며, 이더리움 네트워크의 노드들이 이를 검증하고 블록에 포함시킨다. 이 과정에서 트랜잭션은 이더리움 프로토콜에서 정해진 표준(규칙)에 따라 작성해야지만 노드에서 받아들인다.

<br/>

# Ethereum Transaction Type
이더리움은 [Pectra 업그레이드(2025-5-7)](https://eips.ethereum.org/EIPS/eip-7600) 기준으로 총 5종류의 트랜잭션이 네트워크에 존재한다. 이때, transaction을 전달받는 네트워크가 각각의 transaction를 구분하기 위해 EIP-2718를 도입하여 Transaction Type(이하 Type) 개념을 적용한다. 이더리움의 트랜잭션은 종류가 다양하기에 사용자의 목적에 따라 네트워크의 정해진 프로토콜에 맞춰 동작하며, 사용자는 원하는 결과와 과정에 따라 적합한 트랜잭션을 선택하게 된다. 이더리움 네트워크는 트랜잭션 내 데이터 필드의 정보에 따라 동작하며, 그 결과를 블록에 기록한다.

| name                       | type | EIP |
|----------------------------|------|-----|
| Legacy Transaction         | 0x00 | original Ethereum txs |
| Access List Transaction    | 0x01 | [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930) |
| Gas Fee Market Transaction | 0x02 | [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) |
| Blob Carrying Transaction  | 0x03 | [EIP-4844](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md) |
| EOA Code Transaction       | 0x04 | [EIP-7702](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7702.md) |