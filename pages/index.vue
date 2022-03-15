<template>
  <div>
    <h1>{{ merchant.business_name }}</h1>

    <h3>
      <n-link to="/categories">Categories</n-link>
    </h3>

    <category-list :categories="categories"></category-list>

    <h3>
      <n-link to="/products">Products</n-link>
    </h3>

    <product-list :products="products"></product-list>

  </div>
</template>

<script>
import commerce from "~/plugins/commerce";

export default {
  name: "Index",
  components:{
    "product-list": () => import('~/components/ProductList.vue'),
    "category-list": () => import('~/components/CategoryList.vue')
  },
  async asyncData() {
    const merchant = await commerce.merchants.about();
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return {
      merchant,
      categories,
      products,
    };
  },
}
</script>

<style scoped>

</style>