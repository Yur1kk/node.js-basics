const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.status(200).render("admin/add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
     const product = new Product(title, imageUrl, description, price);
     product.save();
    res.redirect("/");
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.status(200).render("admin/products", {
          prods: products,
          pageTitle: "Admin Product",
          path: "/admin/products"
        });
      });
  };