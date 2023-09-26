<template>
  <teleport to="body" v-if="modelValue">
    <transition
      enter-active-class="transition ease-out duration-300 transform "
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
    >
      <div
        :class="[
          'fixed bottom-0 right-10 flex items-center p-4 mb-4 text-sm rounded-lg z-[100]',
          `text-${props.variant}-800`,
          `border border-${props.variant}-300`,
          `bg-${props.variant}-50`,
          `dark:bg-gray-800 dark:text-${props.variant}-400 dark:border-${props.variant}-800`,
        ]"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">{{ props.title }}</span> {{ props.message }}
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "blue",
  },
  title: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 2000);
    }
  }
);
</script>
