<template>
  <div>
    <div v-if="tokens.length > 0">
      <div class="mt-4 mb-2">
        <p v-if="isRecent" class="font-bold">
          {{ $t("message.recentNFTs", { count: tokens.length }) }}
        </p>
        <p v-else class="font-bold">
          {{ $t("message.nftListTitle", { count: tokens.length }) }}
        </p>
      </div>
      <span v-for="token in tokens" :key="token.tokenId">
        <a
          :href="`${OpenSeaPath}/${token.tokenId}`"
          class="cursor-pointer"
          target="_blank"
        >
          <img
            :src="token.image"
            class="mr-1 mb-1 inline-block w-14 rounded-xl"
          />
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["tokens", "OpenSeaPath", "isRecent"],
});
</script>
