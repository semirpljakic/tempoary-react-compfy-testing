// 30 formatPrice - Ovo je nacin od danas kako cemo da postavimo cenu!

// 30                         30
export const formatPrice = number => {
  // 30
  const newNumber = Intl.NumberFormat('en-US', {
    // 30
    style: 'currency',
    // 30
    currency: 'USD',
    // 30
  }).format(number / 100);
  // 30
  return newNumber;
};

// 67
export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type]);
  // 67 posto su boje u nizovima treba mi samo unikatna boja, (jer neki produkti imaju po 2-3 boje itd...)
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)]; //67 idemo u Filters.js
};
