/*
Code = Instruction String/Syntax
len = Number of Operands

Addr = Addressing Mode
:0 = Implict
:1 = Accumulator
:2 = Immediate
:3 = Zero Page
:4 = Zero Page,X
:5 = Zero Page,Y
:6 = Relative
:7 = Absolute
:8 = Absolute,X
:9 = Absolute,Y
:10= Indirect
:11= Indexed Indirect
:12= Indirect Indexed
*/

const opcodes = {
	"00": {"code": "BRK", "len": 0, "addr": 0},
	"01": {"code": "ORA", "len": 1, "addr": 11},
	"05": {"code": "ORA", "len": 1, "addr": 3},
	"06": {"code": "ASL", "len": 1, "addr": 3},
	"08": {"code": "PHP", "len": 0, "addr": 0},
	"09": {"code": "ORA", "len": 1, "addr": 2},
	"0a": {"code": "ASL", "len": 0, "addr": 1},
	"0d": {"code": "ORA", "len": 2, "addr": 7},
	"0e": {"code": "ASL", "len": 2, "addr": 7},
	"10": {"code": "BPL", "len": 1, "addr": 6},
	"11": {"code": "ORA", "len": 1, "addr": 12},
	"15": {"code": "ORA", "len": 1, "addr": 4},
	"16": {"code": "ASL", "len": 1, "addr": 4},
	"18": {"code": "CLC", "len": 0, "addr": 0},
	"19": {"code": "ORA", "len": 2, "addr": 9},
	"1d": {"code": "ORA", "len": 2, "addr": 8},
	"1e": {"code": "ASL", "len": 2, "addr": 8},
	"20": {"code": "JSR", "len": 2, "addr": 7},
	"21": {"code": "AND", "len": 1, "addr": 11},
	"24": {"code": "BIT", "len": 1, "addr": 3},
	"25": {"code": "AND", "len": 1, "addr": 3},
	"26": {"code": "ROL", "len": 1, "addr": 3},
	"28": {"code": "PLP", "len": 0, "addr": 0},
	"29": {"code": "AND", "len": 1, "addr": 2},
	"2a": {"code": "ROL", "len": 0, "addr": 1},
	"2c": {"code": "BIT", "len": 2, "addr": 7},
	"2d": {"code": "AND", "len": 2, "addr": 7},
	"2e": {"code": "ROL", "len": 2, "addr": 7},
	"30": {"code": "BMI", "len": 1, "addr": 6},
	"31": {"code": "AND", "len": 1, "addr": 12},
	"35": {"code": "AND", "len": 1, "addr": 4},
	"36": {"code": "ROL", "len": 1, "addr": 4},
	"38": {"code": "SEC", "len": 0, "addr": 0},
	"39": {"code": "AND", "len": 2, "addr": 9},
	"3d": {"code": "AND", "len": 2, "addr": 8},
	"3e": {"code": "ROL", "len": 2, "addr": 8},
	"40": {"code": "RTI", "len": 0, "addr": 0},
	"41": {"code": "EOR", "len": 1, "addr": 11},
	"45": {"code": "EOR", "len": 1, "addr": 3},
	"46": {"code": "LSR", "len": 1, "addr": 3},
	"48": {"code": "PHA", "len": 0, "addr": 0},
	"49": {"code": "EOR", "len": 1, "addr": 2},
	"4a": {"code": "LSR", "len": 0, "addr": 1},
	"4c": {"code": "JMP", "len": 2, "addr": 7},
	"4d": {"code": "EOR", "len": 2, "addr": 7},
	"4e": {"code": "LSR", "len": 2, "addr": 7},
	"50": {"code": "BVC", "len": 1, "addr": 6},
	"51": {"code": "EOR", "len": 1, "addr": 12},
	"54": {"code": "EOR", "len": 1, "addr": 4},
	"55": {"code": "LSR", "len": 1, "addr": 4},
	"58": {"code": "CLI", "len": 0, "addr": 0},
	"59": {"code": "EOR", "len": 2, "addr": 9},
	"5d": {"code": "EOR", "len": 2, "addr": 8},
	"5e": {"code": "LSR", "len": 2, "addr": 8},
	"60": {"code": "RTS", "len": 0, "addr": 0},
	"61": {"code": "ADC", "len": 1, "addr": 11},
	"65": {"code": "ADC", "len": 1, "addr": 3},
	"66": {"code": "ROR", "len": 1, "addr": 3},
	"68": {"code": "PLA", "len": 0, "addr": 0},
	"69": {"code": "ADC", "len": 1, "addr": 2},
	"6a": {"code": "ROR", "len": 0, "addr": 1},
	"6c": {"code": "JMP", "len": 2, "addr": 10},
	"6d": {"code": "ADC", "len": 2, "addr": 7},
	"6e": {"code": "ROR", "len": 2, "addr": 7},
	"70": {"code": "BVS", "len": 1, "addr": 6},
	"71": {"code": "ADC", "len": 1, "addr": 12},
	"75": {"code": "ADC", "len": 1, "addr": 4},
	"76": {"code": "ROR", "len": 1, "addr": 4},
	"78": {"code": "SEI", "len": 0, "addr": 0},
	"79": {"code": "ADC", "len": 2, "addr": 9},
	"7d": {"code": "ADC", "len": 2, "addr": 8},
	"7e": {"code": "ROR", "len": 2, "addr": 8},
	"81": {"code": "STA", "len": 1, "addr": 11},
	"84": {"code": "STY", "len": 1, "addr": 3},
	"85": {"code": "STA", "len": 1, "addr": 3},
	"86": {"code": "STX", "len": 1, "addr": 3},
	"88": {"code": "DEY", "len": 0, "addr": 0},
	"8a": {"code": "TXA", "len": 0, "addr": 0},
	"8c": {"code": "STY", "len": 2, "addr": 7},
	"8d": {"code": "STA", "len": 2, "addr": 7},
	"8e": {"code": "STX", "len": 2, "addr": 7},
	"90": {"code": "BCC", "len": 1, "addr": 6},
	"91": {"code": "STA", "len": 1, "addr": 12},
	"94": {"code": "STY", "len": 1, "addr": 4},
	"95": {"code": "STA", "len": 1, "addr": 4},
	"96": {"code": "STX", "len": 1, "addr": 5},
	"98": {"code": "TYA", "len": 0, "addr": 0},
	"99": {"code": "STA", "len": 2, "addr": 9},
	"9a": {"code": "TXS", "len": 0, "addr": 0},
	"9d": {"code": "STA", "len": 2, "addr": 8},
	"a0": {"code": "LDY", "len": 1, "addr": 2},
	"a1": {"code": "LDA", "len": 1, "addr": 11},
	"a2": {"code": "LDX", "len": 1, "addr": 2},
	"a4": {"code": "LDY", "len": 1, "addr": 3},
	"a5": {"code": "LDA", "len": 1, "addr": 3},
	"a6": {"code": "LDX", "len": 1, "addr": 3},
	"a8": {"code": "TAY", "len": 0, "addr": 0},
	"a9": {"code": "LDA", "len": 1, "addr": 2},
	"aa": {"code": "TAX", "len": 0, "addr": 0},
	"ac": {"code": "LDY", "len": 2, "addr": 7},
	"ad": {"code": "LDA", "len": 2, "addr": 7},
	"ae": {"code": "LDX", "len": 2, "addr": 7},
	"b0": {"code": "BCS", "len": 1, "addr": 6},
	"b1": {"code": "LDA", "len": 1, "addr": 12},
	"b4": {"code": "LDY", "len": 1, "addr": 4},
	"b5": {"code": "LDA", "len": 1, "addr": 4},
	"b6": {"code": "LDX", "len": 1, "addr": 5},
	"b8": {"code": "CLV", "len": 0, "addr": 0},
	"b9": {"code": "LDA", "len": 2, "addr": 9},
	"ba": {"code": "TSX", "len": 0, "addr": 0},
	"bc": {"code": "LDY", "len": 2, "addr": 8},
	"bd": {"code": "LDA", "len": 2, "addr": 8},
	"be": {"code": "LDX", "len": 2, "addr": 9},
	"c0": {"code": "CPY", "len": 1, "addr": 2},
	"c1": {"code": "CMP", "len": 1, "addr": 11},
	"c4": {"code": "CPY", "len": 1, "addr": 3},
	"c5": {"code": "CMP", "len": 1, "addr": 3},
	"c6": {"code": "DEC", "len": 1, "addr": 3},
	"c8": {"code": "INY", "len": 0, "addr": 0},
	"c9": {"code": "CMP", "len": 1, "addr": 2},
	"ca": {"code": "DEX", "len": 0, "addr": 0},
	"cc": {"code": "CPY", "len": 2, "addr": 7},
	"cd": {"code": "CMP", "len": 2, "addr": 7},
	"ce": {"code": "DEC", "len": 2, "addr": 7},
	"d0": {"code": "BNE", "len": 1, "addr": 6},
	"d1": {"code": "CMP", "len": 1, "addr": 12},
	"d5": {"code": "CMP", "len": 1, "addr": 4},
	"d6": {"code": "DEC", "len": 1, "addr": 4},
	"d8": {"code": "CLD", "len": 0, "addr": 0},
	"d9": {"code": "CMP", "len": 2, "addr": 9},
	"dd": {"code": "CMP", "len": 2, "addr": 8},
	"de": {"code": "DEC", "len": 2, "addr": 8},
	"e0": {"code": "CPX", "len": 1, "addr": 2},
	"e1": {"code": "SBC", "len": 1, "addr": 11},
	"e4": {"code": "CPX", "len": 1, "addr": 3},
	"e5": {"code": "SBC", "len": 1, "addr": 3},
	"e6": {"code": "INC", "len": 1, "addr": 3},
	"e8": {"code": "INX", "len": 0, "addr": 0},
	"e9": {"code": "SBC", "len": 1, "addr": 2},
	"ea": {"code": "NOP", "len": 0, "addr": 0},
	"ec": {"code": "CPX", "len": 2, "addr": 7},
	"ed": {"code": "SBC", "len": 2, "addr": 7},
	"ee": {"code": "INC", "len": 2, "addr": 7},
	"f0": {"code": "BEQ", "len": 1, "addr": 6},
	"f1": {"code": "SBC", "len": 1, "addr": 12},
	"f5": {"code": "SBC", "len": 1, "addr": 4},
	"f6": {"code": "INC", "len": 1, "addr": 4},
	"f8": {"code": "SED", "len": 0, "addr": 0},
	"f9": {"code": "SBC", "len": 2, "addr": 9},
	"fd": {"code": "SBC", "len": 2, "addr": 8},
	"fe": {"code": "INC", "len": 2, "addr": 8},
};


function disassembler(hexString) {
	var result = "";
	var instruction = "";
	var operand = "";
	
	var address;
	var instructionBytes;
	var syntax;
	
	var startingAddr = 0;
	
	for(pc = 0; pc < hexString.length;pc+=2){
		operand = "";
		address = "";
		instructionBytes = "";
		syntax = "";
		
		address = (pc/2).toString(16);
		startingAddr = pc;
		
		if(!opcodes.hasOwnProperty(hexString.substring(pc,pc+2))){
			instruction = {"code": ".DB", "len": 0, "addr": 3};
		} else{
			instruction = opcodes[hexString.substring(pc,pc+2)];
		}
		
		//Retrieve operands (if there are any); Note: 6502 is little-endian
		if(instruction.len > 0){
			for(i = 0; i < instruction.len; i++){
				pc+=2;
				operand =  hexString.substring(pc,pc+2) + operand;
			}
		} else {
			operand = hexString.substring(pc,pc+2);
		}
		
		syntax += instruction.code;
		
		switch(instruction.addr){
			case 0: //If Implict
				break;
			case 1: //If Accumulator
				syntax += " A";
				break;
			case 2: //If Immediate
				syntax += " #$" + operand;
				break;
			case 3: //If Zero Page
				syntax += " $" + operand;
				break;
			case 4: //If Zero Page,X
				syntax += " $" + operand + ",X";
				break;
			case 5: //If Zero Page,Y
				syntax += " $" + operand + ",Y";
				break;
			case 6: //If Relative
				syntax += " $" + operand;
				break;
			case 7: //If Absolute
				syntax += " $" + operand;
				break;
			case 8: //If Absolute,X
				syntax += " $" + operand + ",X";
				break;
			case 9: //If Absolute,Y
				syntax += " $" + operand + ",Y";
				break;
			case 10: //If Indirect
				syntax += " ($" + operand + ")";
				break;
			case 11: //If Indexed Indirect
				syntax += " ($" + operand + ",X)";
				break;
			case 12: //If Indirect Indexed
				syntax += " ($" + operand + "),Y";
				break;
		}
		
		//Pad out address to 4 bytes
		while(address.length < 8){
			address = "0" + address;
		}
		
		//Set hexstring from for full instruction
		instructionBytes = hexString.substring(startingAddr,pc+2);
		
		//Add table entry
		result += "<tr>"
		result += "<td>" + address + "</td>";
		result += "<td>"+ instructionBytes + "</td>";
		result += "<td>"+ syntax + "</td>";
		result += "</tr>";
		
	}
	
	return result;
};