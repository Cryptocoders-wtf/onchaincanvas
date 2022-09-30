<template>
  <div class="mt-8 bg-gray-300 p-2">
    <div class="mb-2">
      <p class="font-bold">{{ $t("message.resources") }}</p>
    </div>
    <p v-if="EtherscanStore">
      Etherscan:
      <span v-if="TokenName"
        >
        <a :href="EtherscanToken" class="underline" target="_blank">{{
          TokenName
        }}</a>
      </span>
    </p>
    <p>
      GitHub:
      <a
        href="https://github.com/Cryptocoders-wtf/onchaincanvas"
        class="underline"
        target="_blank"
        >OnChainCanvas</a
      >
    </p>
    <p>
      Vision:
      <a
        href="https://hackmd.io/@snakajima/HJva6n-Jj"
        class="underline"
        target="_blank"
        >On-Chain Asset Store, Composer and Decentralized Autonomous Marketplace</a
      >
    </p>
    <p>
      Discord:
      <a href="https://discord.gg/4JGURQujXK" class="underline" target="_blank"
        >Fully On-chain</a
      >
    </p>
    <p>
      Twitter:
      <a href="https://twitter.com/nounsfes" class="underline" target="_blank"
        >@nounsfes (English)</a
      >,
      <a href="https://twitter.com/snakajima" class="underline" target="_blank"
        >@snakajima (Japanese)</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    EtherscanStore: String,
    EtherscanToken: String,
    TokenName: String,
  },
  setup() {
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    return { lang };
  },
});
</script>
