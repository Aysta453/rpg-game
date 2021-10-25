export default function deleteItemFronInventoryFunction(inventory, numberOfItem) {
    let { data } = {};

    if (numberOfItem == 1) {
        inventory.firstItem = { isEmpty:true };
    } else if (numberOfItem == 2) {
        inventory.secondItem = { isEmpty:true };
    } else if (numberOfItem == 3 ) {
        inventory.thirdItem = { isEmpty:true };
    } else if (numberOfItem == 4 ) {
        inventory.forthItem = { isEmpty:true };
    } else if (numberOfItem == 5 ) {
        inventory.fifthItem = { isEmpty:true };
    } else if (numberOfItem == 6) {
        inventory.sixthItem = { isEmpty:true };
    } else if (numberOfItem == 7) {
        inventory.seventhItem = { isEmpty:true };
    } else if (numberOfItem == 8) {
        inventory.eigthItem = { isEmpty:true };
    } else if (numberOfItem == 9) {
        inventory.ninthItem = { isEmpty:true };
    }
     
     
    data = inventory;

    return data;
}