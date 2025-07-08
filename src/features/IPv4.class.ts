export class IPv4 {

    constructor(private base: number, private cidr: number) { }

    // IP
    public get_IP_int() { return this.base; }
    // 192 168 10 12
    public get_IP_decimal() { return this.intToDecimal(this.base); }
    // C0 A8 0A C0
    public get_IP_hexadecimal() { return this.intToHexdecimal(this.base); }
    // 1100 0000 1010 1000 0000 1010 1100 0000
    public get_IP_binary() { return this.intToBinary(this.base); }

    // CIDR
    public get_CIDR_int() { return this.cidr; }
    public get_CIDR_decimal() { return this.intToDecimal(this.CidrToInt()); }
    public get_CIDR_hexadecimal() { return this.intToHexdecimal(this.CidrToInt()); }
    public get_CIDR_binary() { return this.intToBinary(this.CidrToInt()); }

    // Network
    public get_Network_int() { return (this.base & this.get_CIDR_int()) >>> 0; }
    public get_Network_decimal() { return this.intToDecimal(this.get_Network_int()); }
    public get_Network_hexadecimal() { return this.intToHexdecimal(this.get_Network_int()); }
    public get_Network_binary() { return this.intToBinary(this.get_Network_int()); }

    // Broadcast
    public get_Broadcast_int() { return (this.base | ~this.get_CIDR_int()) >>> 0;  }
    public get_Broadcast_decimal() { return this.intToDecimal(this.get_Broadcast_int()); }
    public get_Broadcast_hexadecimal() { return this.intToHexdecimal(this.get_Broadcast_int()); }
    public get_Broadcast_binary() { return this.intToBinary(this.get_Broadcast_int()); }

    // First Address
    public get_FirstAdress_int() { return (this.get_Network_int() + 1) >>> 0;  }
    public get_FirstAdress_decimal() { return this.intToDecimal(this.get_FirstAdress_int()); }
    public get_FirstAdress_hexadecimal() { return this.intToHexdecimal(this.get_FirstAdress_int()); }
    public get_FirstAdress_binary() { return this.intToBinary(this.get_FirstAdress_int()); }





    public set_Ip_with_decimal(decNotation: string) {
        this.base = this.ipToInt(decNotation);
    }

    private ipToInt(ip: string) {
        return ip.split('.').reduce((acc, part) => (acc << 8) + parseInt(part) >>> 0, 0);
    }
    private intToDecimal(int: number) {
        return [24, 16, 8, 0].map(shift => (int >>> shift) & 0xFF);
    }
    private intToHexdecimal(int: number) {
        return int.toString(16).padStart(8, '0').toUpperCase().match(/.{2}/g);
    }
    private intToBinary(int: number) {
        return int.toString(2).padStart(32, '0').match(/.{4}/g);
    }
    private CidrToInt() {
        if (this.cidr === 0) return 0x00000000;
        return (0xFFFFFFFF << (32 - this.cidr)) >>> 0;
    }
}