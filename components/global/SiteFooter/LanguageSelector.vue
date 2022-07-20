<template>
    <div class="languageSelector">
        <Listbox v-model="selectedLanguage">
            <ListboxButton>
                <GlobalIcon icon="Globe" class="icon" />
                <span class="label">{{ selectedLanguage.name }}</span>
                <GlobalIcon icon="Chevron" class="icon chevron" />
            </ListboxButton>
            <ListboxOptions>
            <ListboxOption
                v-for="(language, index) in languages"
                :key="index"
                :value="language"
                :disabled="language.unavailable"
            >
                {{ language.name }}
            </ListboxOption>
            </ListboxOptions>
        </Listbox>
    </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { GlobalIcon } from '@/components/global/GlobalIcon';
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  export const LanguageSelector = defineComponent({
    name: 'LanguageSelector',
    components: {
        GlobalIcon, Listbox, ListboxButton, ListboxOptions, ListboxOption
    },
    setup(props) {
        const languages = [
            { id: 1, name: 'English', unavailable: false },
            { id: 2, name: 'Deutsch', unavailable: true },
            { id: 3, name: 'Nederlands', unavailable: true },
            { id: 4, name: 'Français', unavailable: true },
            { id: 5, name: 'Español', unavailable: true },
            { id: 6, name: 'Italiano', unavailable: true },
            { id: 7, name: 'Português', unavailable: true },
            { id: 8, name: '中文', unavailable: true },
            { id: 9, name: '日本語', unavailable: true },
            { id: 10, name: '한국어', unavailable: true },
            { id: 11, name: 'Русский', unavailable: true },
            { id: 12, name: 'Български', unavailable: true },
            { id: 13, name: 'Українська', unavailable: true },
            { id: 14, name: 'Српски', unavailable: true },
            { id: 15, name: 'Узбецкая', unavailable: true },
            { id: 16, name: 'Торекская', unavailable: true },
        ]
        const selectedLanguage = ref(languages[0]);
        return { languages, selectedLanguage };
    }
  });

  export default LanguageSelector;
</script>

<style lang="postcss">
.languageSelector {
   @apply relative;
   button {
    @apply flex flex-nowrap content-center items-center relative focus:outline-none focus-visible:ring focus-visible:ring-purple-200 mt-4 md:mt-0 rounded-full font-bold border-2 border-proton-default text-proton-default px-4 py-2;
    &[aria-expanded="true"] {
        @apply text-white bg-proton-default;
        .chevron {
            @apply rotate-180;
        }
    }

    .icon {
        @apply w-5;
    }
    
    .label {
        @apply pl-2 pr-4;
    }
   }
   ul {
    @apply -top-4 md:-left-24 left-0 transform -translate-y-full absolute z-10 w-64 p-3 overflow-auto text-base bg-white rounded-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-100 space-y-1;
    li {
        @apply cursor-pointer select-none relative py-3 px-4 flex items-center hover:bg-purple-50 rounded-lg text-base focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-200 text-gray-900 font-bold;
        &[aria-selected="true"] {
            @apply bg-gray-100 text-proton-default;
        }
        &[aria-disabled="true"] {
            @apply text-gray-400 hover:cursor-not-allowed;
        }
    }
   }
}
</style>