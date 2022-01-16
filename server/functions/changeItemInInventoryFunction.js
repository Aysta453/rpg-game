export default function changeItemInInventoryFunction(
  inventory,
  item,
  itemNumber
) {
  let { data } = {};

  if (itemNumber == 1) {
    inventory.firstItem = item;
  } else if (itemNumber == 2) {
    inventory.secondItem = item;
  } else if (itemNumber == 3) {
    inventory.thirdItem = item;
  } else if (itemNumber == 4) {
    inventory.forthItem = item;
  } else if (itemNumber == 5) {
    inventory.fifthItem = item;
  } else if (itemNumber == 6) {
    inventory.sixthItem = item;
  } else if (itemNumber == 7) {
    inventory.seventhItem = item;
  } else if (itemNumber == 8) {
    inventory.eigthItem = item;
  } else if (itemNumber == 9) {
    inventory.ninthItem = item;
  }

  data = inventory;

  return data;
}
