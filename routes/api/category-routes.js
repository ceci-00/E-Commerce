const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
            },
        ],
    })
        .then((categoryData) => res.json(categoryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
            },
        ],
    })
        .then((categoryData) => {
            if (!categoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(categoryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // create a new category
    Category.create(req.body)
    .then((categoryData) => {
        if(req.body.productIds.length){
            const categoryProductIdsArr = req.body.productIds.map((product_id) => {
                return {
                    category_id: categoryData.id,
                    product_id,
                };
            });
            return Category.bulkCreate(categoryProductIdsArr);
        }
        // if no product tags, just respond
        res.status(200).json(categoryData);
    })
    .then((categoryProductIds) => res.status(200).json(categoryProductIds))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((categoryData) => {
            if (req.body.productIds && req.body.productIds.length) {
                Category.findAll({
                    where: { category_id: req.params.id }
                }).then((categoryProducts) => {
                    const categoryProductIds = categoryProducts.map(({ product_id }) => product_id);
                    const newCategoryProducts = req.body.productIds
                        .filter((product_id) => !categoryProductIds.includes(product_id))
                        .map((product_id) => {
                            return {
                                category_id: req.params.id,
                                product_id,
                            };
                        });
                        // figure out which ones to remove
                    const categoryProductsToRemove = categoryProducts
                        .filter(({ product_id }) => !req.body.productIds.includes(product_id))
                        .map(({ id }) => id);
                        // run both actions
                    return Promise.all([
                        Category.destroy({ where: { id: categoryProductsToRemove } }),
                        Category.bulkCreate(newCategoryProducts),
                    ]);
                });
            }

            return res.json(categoryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    });

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;