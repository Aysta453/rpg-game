export default function assignOneTradeItemToShop(oldShop, newItem, possitionOfItem) {
    let { data } = {};

    if (possitionOfItem === 1) {
            oldShop.items.firstItemForSell = newItem;
    } else if(possitionOfItem === 2){
            oldShop.items.secondItemForSell = newItem;
    }else if(possitionOfItem === 3){
            oldShop.items.thirdItemForSell = newItem;
    }else if(possitionOfItem === 4){
            oldShop.items.forthItemForSell = newItem;
    }else if(possitionOfItem === 5){
            oldShop.items.fifthItemForSell = newItem;
    }else if(possitionOfItem === 6){
            oldShop.items.sixthItemForSell = newItem;
    }else if(possitionOfItem === 7){
            oldShop.items.seventhItemForSell = newItem;
    }else if(possitionOfItem === 8){
            oldShop.items.eigthItemForSell = newItem;
    }else if(possitionOfItem === 9){
            oldShop.items.ninthItemForSell = newItem;
    }else if(possitionOfItem === 10){
            oldShop.items.tenthItemForSell = newItem;
    }else if(possitionOfItem === 11){
            oldShop.items.eleventhItemForSell = newItem;
    }else if(possitionOfItem === 12){
            oldShop.items.twelfthItemForSell = newItem;
    }else if(possitionOfItem === 13){
            oldShop.items.thirteenthItemForSell = newItem;
    }else if(possitionOfItem === 14){
            oldShop.items.fourteenthItemForSell = newItem;
    }
    data = oldShop;

    return data;
}