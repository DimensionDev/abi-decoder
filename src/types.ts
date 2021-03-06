export namespace ABI {
  export type Type = "function" | "constructor" | "event" | "fallback";
  export type StateMutabilityType = "pure" | "view" | "nonpayable" | "payable";

  export interface Item {
    type: Type;
    anonymous?: boolean;
    constant?: boolean;
    gas?: number;
    inputs?: Input[];
    name?: string;
    outputs?: Output[];
    payable?: boolean;
    stateMutability?: StateMutabilityType;
  }

  export interface Input {
    name: string;
    type: string;
    indexed?: boolean;
    components?: Input[];
    internalType?: string;
  }

  export interface Output {
    name: string;
    type: string;
    components?: Output[];
    internalType?: string;
  }
}
