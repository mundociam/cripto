<template>
  <table class="border-double border-4 border-light-red-800  ">
    <thead  class="border-separate border border-red-400 text-white ">
      <tr class="bg-pink-500 border-b-2 font-bold">
        <th>imagen</th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in assets"
        :key="a.id"
        class="bg-pink-200 hover:bg-pink-300"
      >
        <td>
          <img :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`" :alt="a.name" class="w-6 h-6">
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-pink-500"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >{{ a.name }}</router-link>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar}}</td>
        <td>{{ a.marketCapUsd | dollar}}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | dollarPercent }}
        </td>

      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PxAssetsTable',

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
