<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}

const navLinks = [
  { href: '/#servizi', label: 'Servizi' },
  { href: '/#chi-siamo', label: 'Chi Siamo' },
  { href: '/#perche-noi', label: 'Perché Noi' },
  { href: '/#valori', label: 'Valori' },
  { href: '/#mission', label: 'Mission' },
  { href: '/#contatti', label: 'Contatti' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <RouterLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <span class="font-bold text-xl">Ver.A. Cert</span>
        </RouterLink>

        <div class="hidden md:flex items-center space-x-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {{ link.label }}
          </a>
          <Button @click="toggleDarkMode" variant="ghost" size="icon">
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </Button>
          <Button as="a" href="/#contatti">Contattaci</Button>
        </div>

        <div class="md:hidden flex items-center space-x-2">
          <Button @click="toggleDarkMode" variant="ghost" size="icon">
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </Button>
          <Button @click="isMenuOpen = !isMenuOpen" variant="ghost" size="icon">
            <X v-if="isMenuOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div v-if="isMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <Button as="a" href="/#contatti" class="w-full" @click="isMenuOpen = false">
            Contattaci
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>
