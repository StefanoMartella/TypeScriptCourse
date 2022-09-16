const inventoryItem: [string, number] = ["fidget wibbit", 11];

// Destrutturazione
const [itemName, itemQuantity] = inventoryItem;

const msg = addInventory(itemName, itemQuantity);

console.log(msg);

function addInventory(name: string, quantity: number): string {
  return `Added ${quantity} ${name}s to inventory.`;
}
