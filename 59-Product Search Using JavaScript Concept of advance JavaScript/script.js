const phones = [
  { id: 1, pName: 'iphone 15 pro max', price: 165000 },
  { id: 2, pName: 'vivo p32 mobile', price: 165000 },
  { id: 3, pName: 'symphony d36 mobile', price: 165000 },
  { id: 4, pName: 'mi 45 phone', price: 165000 },
  { id: 5, pName: 'one plus', price: 165000 },
  { id: 6, pName: 'oppo A45 Phone', price: 165000 },
  { id: 7, pName: 'oppo M89 Mobile', price: 165000 },
  { id: 8, pName: 'nokia B33', price: 165000 },
  { id: 9, pName: 'Nokia W37', price: 165000 },
  { id: 10, pName: 'one plus 5', price: 165000 }
];

const searchPhone = (phones, searchText) => {
    const foundPhone = [];
    for (const phone of phones) {
        if (phone.pName.toLowerCase().includes(searchText.toLowerCase())) {
            foundPhone.push(phone);
        }
    }
    return foundPhone;
}

const result = searchPhone(phones, 'Nokia'); // { id: 8, pName: 'nokia B33', price: 165000 }, { id: 9, pName: 'Nokia W37', price: 165000 }
console.log(result);
