const getEmptyItem = () => {
  const emptyItem = {
    idOwner: 0,
    firstName: null,
    lastName: null,
    phone: null,
    contract: null,
    street: null,
    number: null,
    property: {
      idProperty: 0,
      type: {
        idType: null,
        typeName: null,
      },
      structure: {
        idStructure: null,
        structureType: null,
      },
      rooms: null,
      squareFootage: null,
      bathrooms: null,
      heating: null,
      equipment: {
        equipmentType: null,
        id: null,
      },
      borough: {
        boroughName: null,
        id: null,
      },
      floor: null,
      active: null,
      visible: null,
      category: null,
      deposit: null,
      price: null,
      title: null,
      description: null,
    },
  };
  return emptyItem;
};
export default getEmptyItem;
