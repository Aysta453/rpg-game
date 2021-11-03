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
    }
    data = oldShop;

    return data;
}