<script setup lang="ts">
import { Linkedin, Mail, Phone, MapPin } from 'lucide-vue-next'

const links = {
  servizi: [
    { label: 'Audit di Certificazione', href: '/#servizi' },
    { label: 'Audit Interni', href: '/#servizi' },
    { label: 'Audit Fornitori', href: '/#servizi' },
    { label: 'Formazione', href: '/#servizi' },
  ],
  azienda: [
    { label: 'Chi Siamo', href: '/#chi-siamo' },
    { label: 'Perche Noi', href: '/#perche-noi' },
    { label: 'Valori', href: '/#valori' },
    { label: 'Mission', href: '/#mission' },
    { label: 'Partner', href: '/partner' },
  ],
}
</script>

<template>
  <footer class="bg-foreground text-background py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <span class="font-bold text-xl">Ver.A. Cert</span>
          </div>
          <p class="text-background/70 text-sm mb-4">
            Servizi di auditing, certificazioni e formazione su sistemi di gestione, prodotti e servizi.
          </p>
          <div class="flex space-x-3">
            <a href="#" class="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
              <Linkedin class="h-5 w-5" />
            </a>
            <a href="mailto:veracertsrls@gmail.com" class="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
              <Mail class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Servizi</h3>
          <ul class="space-y-2">
            <li v-for="link in links.servizi" :key="link.label">
              <a :href="link.href" class="text-background/70 hover:text-background transition-colors text-sm">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Azienda</h3>
          <ul class="space-y-2">
            <li v-for="link in links.azienda" :key="link.label">
              <a :href="link.href" class="text-background/70 hover:text-background transition-colors text-sm">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Contatti</h3>
          <ul class="space-y-3 text-sm text-background/70">
            <li class="flex items-start gap-2">
              <Phone class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href="tel:+393497478611" class="hover:text-background transition-colors">+39 349 747 8611</a>
            </li>
            <li class="flex items-start gap-2">
              <MapPin class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Via Puglie, 1<br>72027 San Pietro Vernotico (BR)</span>
            </li>
            <li class="flex items-start gap-2">
              <Mail class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <a href="mailto:veracertsrls@gmail.com" class="hover:text-background transition-colors block">veracertsrls@gmail.com</a>
                <a href="mailto:veracert@pec.it" class="hover:text-background transition-colors block">veracert@pec.it (PEC)</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-background/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-background/60 text-center md:text-left">
            <p>&copy; 2022 Ver.A. Cert S.r.l.s. Tutti i diritti riservati.</p>
            <p class="mt-1">P.IVA: 02505000741</p>
          </div>
          <div class="flex gap-6 text-sm text-background/60">
            <a href="#" class="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
