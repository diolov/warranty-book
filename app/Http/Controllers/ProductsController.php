<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    /**
     *
     * @return void
     */
    public function index()
    {
        return Product::all();
    }

    /**
     *
     * @param Product $product
     * @return void
     */
    public function show(Product $product)
    {
        return $product;
    }

    /**
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'categoryId' => 'integer',
            'purchaseDate' => 'date',
            'warrantyMonths' => 'integer',
            // 'notes' => ''
        ]);

        $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    /**
     *
     * @param Request $request
     * @param Product $product
     * @return void
     */
    public function update(Request $request, Product $product)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'categoryId' => 'integer',
            'purchaseDate' => 'date',
            'warrantyMonths' => 'integer',
            // 'notes' => ''
        ]);

        $product->update($request->all());

        return response()->json($product, 200);
    }

    /**
     *
     * @param Product $product
     * @return void
     */
    public function delete(Product $product)
    {
        $product->delete();

        return 204;
    }
}
