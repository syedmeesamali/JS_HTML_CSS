contract Bank {
    mapping(address => uint) public balanceOf;
    uint public totalSupply;

    function deposit() public payable {
        balanceOf[msg.sender] += 100;
        totalSupply += msg.value;
        //invariant statement as statement below SHOULD always be TRUE
        assert(balanceOf[msg.sender] >= msg.value);
    }
}