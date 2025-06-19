const products = [
      { id: "product1", name: "Product 1" },
      { id: "product2", name: "Product 2" },
      { id: "product3", name: "Product 3" }
    ];
    const productSelect = document.querySelector('#product');
    products.forEach(prod => {
      const opt = document.createElement('option');
      opt.value = prod.id;
      opt.textContent = prod.name;
      productSelect.appendChild(opt);
    });
