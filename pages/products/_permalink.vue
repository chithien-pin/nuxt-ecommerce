<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price.formatted_with_symbol }}</p>

    <pre>{{ JSON.stringify(product, null, 2) }}</pre>
  </div>
</template>

<script>
import commerce from "~/plugins/commerce";
export default {
  async asyncData({ params }) {
    const { permalink } = params;

    const product = await commerce.products.retrieve(permalink, {
      type: "permalink",
    });

    return {
      product,
    };
  },
}
</script>

<style scoped>

</style>