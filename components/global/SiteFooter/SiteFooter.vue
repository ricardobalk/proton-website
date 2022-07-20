<template>
  <footer class="siteFooter">
    <section id="primary">
      <LogoAndSocial class="logoAndSocial" />
      <FooterNavigation />
    </section>

    <section id="secondary">
      <div class="generalInfo">
        <Colofon class="colofon" />
        <LanguageSelector class="languageSelector" />
      </div>
    </section>

    <section class="additionalLinks">
      <QuickLinks />
      <LegalLinks />
    </section>
  </footer>
</template>

<style lang="postcss">
.siteFooter {
  @apply bg-purple-25 w-full px-24 py-12;

  #primary {
    @apply container mx-auto flex gap-8 pb-8 border-b border-b-purple-100 flex-wrap md:flex-nowrap;

    .logoAndSocial {
      @apply w-56 h-full sm:sticky sm:top-8 lg:relative lg:top-0;

      .logoContainer {
        @apply mb-6;

        .logo {
          @apply w-20 h-auto;
        }
      }

      .subtitle {
        @apply text-proton-dark w-40 mb-6;
      }

      .socialLinks {
        @apply flex gap-1;
      }
    }

    .footerNav {
      @apply flex-grow;
    }
  }

  #secondary {
    @apply my-16;

    .generalInfo {
      @apply flex flex-col lg:flex-row gap-8 lg:gap-36 text-xs;

      .colofon {
        @apply flex flex-col lg:flex-row gap-12 flex-grow;

        .companyInformation {
          @apply text-proton-dark;

          .companyName {
            @apply font-bold mb-2 inline-block;
          }

          .companyAddress {
            @apply flex flex-col flex-nowrap;

            span {
              @apply whitespace-nowrap;
            }
          }
        }

        .sponsors {
          .title {
            @apply inline-block font-bold mb-2;
          }

          .details {
            @apply flex flex-col md:flex-row gap-6 w-max;
          }
        }
      }
    }
  }

  .additionalLinks {
    @apply flex flex-col gap-8;
        .quickLinks {

          .navRoot {
            @apply flex flex-wrap gap-4 lg:gap-8;

            a {
              @apply text-proton-dark hover:text-proton-default;
            }
          }
    }

    .legalLinks {
      .navRoot {
        @apply text-xs text-proton-dark flex flex-col gap-6 lg:gap-0 lg:flex-row gap-x-1 lg:divide-purple-200 lg:divide-x flex-wrap;
        .navList {
              @apply lg:px-2 md:first:pl-0;
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
import FooterNavigation from '@/components/global/SiteFooter/Links/FooterNavigation.vue';
import LanguageSelector from '@/components/global/SiteFooter/LanguageSelector.vue';
import QuickLinks from '@/components/global/SiteFooter/Links/QuickLinks.vue';
import LegalLinks from '@/components/global/SiteFooter/Links/LegalLinks.vue';
import Colofon from '@/components/global/SiteFooter/Colofon';
import LogoAndSocial from '@/components/global/SiteFooter/LogoAndSocial.vue';
</script>
