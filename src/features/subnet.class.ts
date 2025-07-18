import { IPv4 } from "./IPv4.class";

export class Subnet {

    private base: IPv4;
    private maxDiff = 6

    constructor(base:IPv4){
        this.base = base;
    }

    get_possible_range_of_subnetting_cidrs(){
        if(this.base.get_CIDR_int() + 1<=30){
            const min = this.base.get_CIDR_int() + 1;
            const max = Math.min(30,this.base.get_CIDR_int() + this.maxDiff);
            console.log({min,max})
        }

    }
}