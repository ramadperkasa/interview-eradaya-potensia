<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
      v-show="props.modelValue"
    >
      <div
        class="flex items-center justify-center h-screen w-screen pt-24 text-center"
      >
        <transition
          enter-active-class="transition ease-out duration-300 transform "
          enter-from-class="opacity-0 translate-y-10 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
        >
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-modal="true"
            class="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full text-start"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="close()"
                >
                  <svg
                    class="w-3 h-3"
                    aria-modal="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>

                <div class="px-6 py-6 lg:px-8">
                  <h3
                    class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                  >
                    {{ props.title }}
                  </h3>

                  <slot />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script setup>
// Vue
import { defineProps, defineEmits, onMounted } from "vue";

// Flowbite
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  buttonClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * @description
 * Close dialog
 */
const close = () => {
  emit("update:modelValue", false);
};
</script>
