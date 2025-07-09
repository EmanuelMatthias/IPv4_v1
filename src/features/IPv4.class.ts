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
    // net: 1100 0000 1010 10, host: 00 0000 1010 1100 0000
    public get_IP_binary_splited() { return this.binary_split(this.intToBinary(this.base)?.join('')); }

    // CIDR
    public get_CIDR_int() { return this.cidr; }
    public get_CIDR_decimal() { return this.intToDecimal(this.CidrToInt()); }
    public get_CIDR_hexadecimal() { return this.intToHexdecimal(this.CidrToInt()); }
    public get_CIDR_binary() { return this.intToBinary(this.CidrToInt()); }
    public get_CIDR_binary_splited() { return this.binary_split(this.intToBinary(this.CidrToInt())?.join('')); }

    // Network
    public get_Network_int() { return (this.base & this.CidrToInt()) >>> 0; }
    public get_Network_decimal() { return this.intToDecimal(this.get_Network_int()); }
    public get_Network_hexadecimal() { return this.intToHexdecimal(this.get_Network_int()); }
    public get_Network_binary() { return this.intToBinary(this.get_Network_int()); }
    public get_Network_binary_splited() { return this.binary_split(this.intToBinary(this.get_Network_int())?.join('')); }

    // Broadcast
    public get_Broadcast_int() { return (this.base | ~this.CidrToInt()) >>> 0; }
    public get_Broadcast_decimal() { return this.intToDecimal(this.get_Broadcast_int()); }
    public get_Broadcast_hexadecimal() { return this.intToHexdecimal(this.get_Broadcast_int()); }
    public get_Broadcast_binary() { return this.intToBinary(this.get_Broadcast_int()); }
    public get_Broadcast_binary_splited() { return this.binary_split(this.intToBinary(this.get_Broadcast_int())?.join('')); }

    // First Address
    public get_FirstAddress_int() { return (this.get_Network_int() + 1) >>> 0; }
    public get_FirstAddress_decimal() { return this.intToDecimal(this.get_FirstAddress_int()); }
    public get_FirstAddress_hexadecimal() { return this.intToHexdecimal(this.get_FirstAddress_int()); }
    public get_FirstAddress_binary() { return this.intToBinary(this.get_FirstAddress_int()); }
    public get_FirstAddress_binary_splited() { return this.binary_split(this.intToBinary(this.get_FirstAddress_int())?.join('')); }

    // First Address
    public get_LastAddress_int() { return (this.get_Broadcast_int() - 1) >>> 0; }
    public get_LastAddress_decimal() { return this.intToDecimal(this.get_LastAddress_int()); }
    public get_LastAddress_hexadecimal() { return this.intToHexdecimal(this.get_LastAddress_int()); }
    public get_LastAddress_binary() { return this.intToBinary(this.get_LastAddress_int()); }
    public get_LastAddress_binary_splited() { return this.binary_split(this.intToBinary(this.get_LastAddress_int())?.join('')); }


    // setter
    public set_Ip_with_decimal(decNotation: string) {
        this.base = this.ipToInt(decNotation);
    }

    public set_CIDR_with_int(value: number | string) {
        this.cidr = Number(value);
    }

    // helper
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
        return int.toString(2).padStart(32, '0').match(/.{4}/g) as string[];
    }
    private CidrToInt() {
        if (this.cidr === 0) return 0x00000000;
        return (0xFFFFFFFF << (32 - this.cidr)) >>> 0;
    }
    binary_split(bin:string) {
        const splitPoint = this.cidr;
        let lan: string[] = [];
        let host: string[] = [];
        if (0 < splitPoint && splitPoint < 29) {
            lan = bin.slice(0, splitPoint).match(/.{1,4}/g) as string[];
            host = [
                bin.slice(splitPoint).slice(0, (32 - splitPoint) % 4),
                ...bin.slice(splitPoint).slice((32 - splitPoint) % 4).match(/.{4}/g) as string[],
            ].filter(a => a !== '');
        } else if (splitPoint === 32) {
            lan = bin.match(/.{4}/g) as string[];
        } else if (splitPoint === 0) {
            host = bin.match(/.{4}/g) as string[];
        } else if (splitPoint >= 29) {
            lan = bin.slice(0, splitPoint).match(/.{1,4}/g) as string[];
            host = [bin.slice(splitPoint)];
        }
        return { lan, host }
    }
}