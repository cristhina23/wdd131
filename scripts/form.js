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

    // getdates.js
    const lastUpdated = document.querySelector("#last-updated");
    const today = new Date();
    lastUpdated.textContent = `Last Updated: ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;