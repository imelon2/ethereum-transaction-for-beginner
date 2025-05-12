// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
 
contract EIP7702OpcodeView {
    address public sender;

    event SetNewSender(address sender);

    function setSender() public {
        sender = msg.sender;

        emit SetNewSender(sender);
    }

   /// @notice Returns the size of *this* contract’s own code
   function extCodeSize() public view returns (uint256 size) {
    address _addr = address(this);
        assembly {
            size := extcodesize(_addr)
        }
    }

    /// @notice Returns the size of *this* contract’s own runtime code
    function codeSize() public pure returns (uint256 size) {
        assembly {
            // CODESIZE → size
            size := codesize()
        }
    }

    /// @notice Copies `len` bytes of code from  *this* contract, starting at `offset`
    function extCodeCopy() public view returns (bytes memory code) {
        uint256 size;
        address _addr = address(this);
        assembly {
            size := extcodesize(_addr)
        }
            code = new bytes(size);
            assembly {
                // EXTCODECOPY <address> <destPtr> <offset> <len>
                extcodecopy(_addr, add(code, 0x20), 0, size)
            }
    }


    /// @notice Copies `len` bytes of *this* contract’s own runtime code, starting at `offset`
    function codeCopy() public pure returns (bytes memory code) {
        uint256 size;
        assembly {
            size := codesize()
        }
        code = new bytes(size);

        assembly {
            // CODECOPY <destPtr> <offset> <len>
            codecopy(add(code, 0x20), 0, size)
        }
    }
}