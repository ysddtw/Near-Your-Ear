<template>
  <div
    class="relative min-h-screen text-[#DFDEE0] flex items-center justify-center py-12 px-6 overflow-hidden before:absolute before:inset-0 before:-z-20 before:content-[''] before:bg-[url('/img/cover.png')] before:bg-cover before:bg-center before:scale-110 before:blur-2xl before:opacity-80"
    style="font-family: 'Noto Sans TC', sans-serif"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#040000] via-[#040000] to-[#87B1CC]/20"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[48rem] -translate-x-1/2 rounded-full bg-[#87B1CC]/10 blur-3xl"
      ></div>
    </div>

    <div
      class="ring-1 ring-gray-200 bg-black/5 border border-[#87B1CC]/40 backdrop-blur rounded-3xl shadow-2xl"
    >
      <div
        class="bg-black/5 border border-[#87B1CC]/40 backdrop-blur rounded-3xl shadow-2xl"
      >
        <div class="flex flex-col items-center gap-5 px-8 py-8 sm:px-12">
          <div class="flex flex-col items-center gap-6 text-center">
            <div
              class="flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-lg border border-[#87B1CC]/50 bg-[#87B1CC]/10"
            >
              <img
                src="/img/cover.png"
                alt="專輯封面"
                class="h-full w-full object-contain"
              />
            </div>

            <div class="flex flex-col items-center gap-3">
              <img src="/img/title.png" class="w-32 sm:w-48" />
              <!-- <h1 class="text-3xl font-semibold text-[#87B1CC] sm:text-4xl">
                耳東有爾
              </h1> -->
              <p class="text-[#DFDEE0]/80">
                <span class="text-sm sm:text-base font-normal">
                  《 應聲倒地 On the Floor 》
                </span>
                <br />
                <span class="text-xs sm:text-sm font-normal">
                  ✨ 首張 EP 全平台串流收聽 ✨
                </span>
              </p>
            </div>
          </div>

          <div class="w-full space-y-3">
            <a
              v-for="platform in platforms"
              :key="platform.name"
              :href="platform.href"
              target="_blank"
              rel="noopener"
              @click="handleLinkClick"
              class="active:scale-[.95] gap-3 group flex w-full items-center justify-between rounded-2xl border border-transparent bg-[#040000]/60 py-4 px-6 text-base font-medium text-[#DFDEE0] transition hover:border-[#87B1CC] hover:bg-[#87B1CC]/20 hover:text-[#87B1CC] duration-200"
            >
              <div
                class="flex items-center flex-shrink-0 gap-3 sm:gap-6 text-white"
              >
                <div
                  class="size-8 sm:size-12 rounded-lg overflow-hidden shrink-0 flex justify-center items-center"
                >
                  <img
                    :src="platform.iconSrc"
                    :class="[platform.name == '抖音' ? 'w-full' : 'h-full']"
                  />
                </div>

                <div class="flex flex-col gap-0.5 sm:gap-1 text-left">
                  <span class="text-sm sm:text-base">{{ platform.name }}</span>
                  <span
                    class="text-xs font-normal uppercase tracking-[0.05em] sm:tracking-[0.25em] text-[#DFDEE0]/50"
                  >
                    {{
                      platform.name == 'iTunes'
                        ? 'Download now'
                        : '  Listen now'
                    }}
                  </span>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 sm:size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.app.baseURL?.replace(/\/$/, '') ?? ''
const RICK_ROLL_URL = 'https://youtu.be/dQw4w9WgXcQ' as const

const handleLinkClick = (event: MouseEvent) => {
  if (event.defaultPrevented) return
  if (event.button !== 0) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (Math.random() >= 0.01) return

  event.preventDefault()

  if (typeof window !== 'undefined') {
    window.open(RICK_ROLL_URL, '_blank', 'noopener')
  }
}

const platforms = [
  {
    name: 'Spotify',
    fileName: 'resized_Spotify.png',
    href: 'https://open.spotify.com/album/3nkI6axR2SNcLVCrg17n6x'
  },
  {
    name: 'Apple Music',
    fileName: 'resized_Apple Music.png',
    href: 'https://music.apple.com/tw/album/1845819969'
  },
  {
    name: 'LINE Music',
    fileName: 'resized_LINE Music.png',
    href: 'https://music-tw.line.me/album/7785507'
  },
  {
    name: 'YouTube Music',
    fileName: 'resized_Youtube Music.png',
    href: 'https://music.youtube.com/playlist?list=OLAK5uy_lPC4kHMIlEr3dwTuQYtMZGxeGxp8B87iE'
  },
  {
    name: 'KKBOX',
    fileName: 'resized_KKBOX.png',
    href: 'https://www.kkbox.com/tw/tc/album/DYkZCUk9I9ARUFh821'
  },
  {
    name: 'iTunes',
    fileName: 'resized_iTunes.png',
    href: 'https://music.apple.com/tw/album/1845819969'
  },
  {
    name: 'QQ 音樂',
    fileName: 'resized_QQ 音樂.png',
    href: 'https://y.qq.com/n/ryqq/albumDetail/004E8uay3IczFS'
  },
  {
    name: '酷狗音樂',
    fileName: 'resized_酷狗音樂.png',
    href: 'https://www.kugou.com/album/info/2pys5k1a/'
  },
  {
    name: '網易雲音樂',
    fileName: 'resized_網易雲音樂.png',
    href: 'https://music.163.com/#/album?id=287786718'
  },
  {
    name: '酷我音樂',
    fileName: 'resized_酷我音樂.png',
    href: 'https://www.kuwo.cn/album_detail/77412052'
  },
  {
    name: '咪咕音樂',
    fileName: 'resized_咪咕音樂.png',
    href: 'http://c.migu.cn/00x3Lv?ifrom=954eda11d5a9aefb792519761e8bf334'
  },
  {
    name: 'JOOX',
    fileName: 'resized_JOOX.png',
    href: 'https://www.joox.com/hk/album/kVU6ysl2lKWm6pNsIlwtwA=='
  },
  {
    name: 'Pandora',
    fileName: 'resized_Pandora.png',
    href: 'https://www.pandora.com/artist/on-the-floor/AL62qm56wvjzwlX'
  },
  {
    name: 'Amazon Music',
    fileName: 'resized_Amazon Music.png',
    href: 'https://music.amazon.com/albums/B0FTNH6HM6'
  },
  {
    name: 'Deezer',
    fileName: 'resized_deezer.png',
    href: 'https://www.deezer.com/us/album/831477001'
  },
  {
    name: 'TIDAL',
    fileName: 'resized_TIDAL.png',
    href: 'https://tidal.com/album/464506775'
  },
  {
    name: '抖音',
    fileName: 'resized_抖音.png',
    href: 'https://v.douyin.com/WI1YSJEiMcQ/'
  }
].map((platform) => ({
  ...platform,
  iconSrc: `${baseURL}/img/${platform.fileName}`.replace('//', '/')
}))
</script>
