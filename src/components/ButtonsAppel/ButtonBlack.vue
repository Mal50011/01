<script setup>
import { ref } from 'vue'


defineProps({
  text: String,
  subtext: String,
  href: String,
  full_w: String
})

function openExternalLink(href) {
    window.location.href = href;
  }

</script>

<template>
    <button :class="'btn ' + ((full_w=='1') ? 'w-100': '')" @click="openExternalLink(href)">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M14.7973 11.5816C14.8081 10.7469 15.0298 9.92854 15.4418 9.20259C15.8538 8.47663 16.4428 7.86669 17.1539 7.42952C16.7021 6.78436 16.1062 6.25342 15.4134 5.87887C14.7205 5.50431 13.9499 5.29647 13.1627 5.27184C11.4835 5.09558 9.85552 6.27667 8.99981 6.27667C8.12754 6.27667 6.81004 5.28934 5.39131 5.31853C4.47364 5.34818 3.57929 5.61503 2.79541 6.09309C2.01154 6.57115 1.36486 7.24411 0.918393 8.0464C-1.01561 11.3948 0.426982 16.3159 2.27959 19.0225C3.20649 20.3478 4.28977 21.8283 5.70722 21.7758C7.09428 21.7183 7.61232 20.8913 9.28662 20.8913C10.9454 20.8913 11.4314 21.7758 12.8776 21.7424C14.366 21.7182 15.3038 20.4112 16.1981 19.0733C16.8641 18.1289 17.3766 17.0852 17.7166 15.9807C16.8518 15.615 16.1139 15.0028 15.5948 14.2205C15.0757 13.4383 14.7983 12.5204 14.7973 11.5816Z" fill="white"/>
                <path d="M12.0657 3.49062C12.8772 2.51641 13.277 1.26423 13.1802 0C11.9404 0.13022 10.7951 0.722779 9.97262 1.65961C9.57048 2.11728 9.26248 2.64971 9.06624 3.22648C8.86999 3.80325 8.78934 4.41304 8.82891 5.021C9.44905 5.02739 10.0626 4.89297 10.6232 4.62788C11.1839 4.3628 11.6771 3.97395 12.0657 3.49062Z" fill="white"/>
            </svg>
        </div>
        <div class="text">
            <span class="sub">{{ subtext }}</span>
            <span>{{ text }}</span>
        </div>
    </button>
</template>

<style scoped>
    .btn{
        min-width: 92px;
        min-height: 54px;
        color: #ffffff;
        background-color: #000000;
        border: none;
        border-radius: 12px;
        padding: 14px 16px;
        text-align: center;
        transition: 300ms;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
    .btn > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn > div.text > span.sub{
        font-size: 11px;
    }

    .btn.w-100{
        width: 100% !important;
    }


</style>