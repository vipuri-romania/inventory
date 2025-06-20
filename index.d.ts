import jsonData from "./index";

declare module "@vipuri/inventory_data" {
  export const data: [
    {
      id: string;
      name: string;
      description: string;
      image: string;
      weight: number;
      itemType: string;
      isEquippable: boolean;
      isStackable: boolean;
      maxStack: number;
    }
  ];

  export default jsonData;
}
