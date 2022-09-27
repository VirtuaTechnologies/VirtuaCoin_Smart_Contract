const { expect } = require("chai");
const { assert } = require("hardhat");

const {BN, constants, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const { soliditySha3 } = require("web3-utils");

const VirtuaCoin = artifacts.require("VirtuaCoin");

let accounts;
let virtuaCoin;

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("VirtuaCoin ERC20 Contract", function () {

	before(async function() {
		accounts = await web3.eth.getAccounts();
		virtuaCoin = await VirtuaCoin.new("Virtua Coin", "VCO", "100000000000000000000000000", "0x996F5Aa76f8B7Ebf723A4cFC54F60b14c141226C");
	});
	
	it("Should return the right name and symbol of the token once VirtuaCoin is deployed", async function() {
		assert.equal(await virtuaCoin.name(), "Virtua Coin");
		assert.equal(await virtuaCoin.symbol(), "VCO");
    assert.equal(await virtuaCoin.totalSupply(), "100000000000000000000000000");
	});

});