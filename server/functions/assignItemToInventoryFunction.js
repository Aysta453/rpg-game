export default function assignItemToInventoryFunction(inventory, item) {
  let { data } = {};
  if (inventory.firstItem.isEmpty == true) {
    inventory.firstItem = item;
  } else if (inventory.secondItem.isEmpty == true) {
    inventory.secondItem = item;
  } else if (inventory.thirdItem.isEmpty == true) {
    inventory.thirdItem = item;
  } else if (inventory.forthItem.isEmpty == true) {
    inventory.forthItem = item;
  } else if (inventory.fifthItem.isEmpty == true) {
    inventory.fifthItem = item;
  } else if (inventory.sixthItem.isEmpty == true) {
    inventory.sixthItem = item;
  } else if (inventory.seventhItem.isEmpty == true) {
    inventory.seventhItem = item;
  } else if (inventory.eigthItem.isEmpty == true) {
    inventory.eigthItem = item;
  } else if (inventory.ninthItem.isEmpty == true) {
    inventory.ninthItem = item;
  }

  data = inventory;

  return data;
}
