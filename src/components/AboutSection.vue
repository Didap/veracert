<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-vue-next'

const highlights = [
  'Auditor con pluriennale esperienza nella valutazione di conformita',
  'Partnership con Organismi di Certificazione Accreditati',
  'Audit su tutti gli schemi, settori e tipologie aziendali',
  'Formazione specifica su sistemi, prodotti e normative',
]
</script>

<template>
  <section id="chi-siamo" class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="outline" class="mb-4">Chi Siamo</Badge>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Esperienza e Professionalita al Servizio della Qualita
          </h2>
          <p class="text-lg text-muted-foreground mb-6">
            Ver.A. Cert offre servizi di auditing, certificazioni e formazione su sistemi
            di gestione, prodotti e servizi. I nostri auditor hanno pluriennale esperienza
            nella valutazione di conformita e certificazione a norme tecniche e volontarie.
          </p>
          <p class="text-muted-foreground mb-8">
            Gestiamo direttamente l'auditing e, grazie a partnership con Organismi di
            Certificazione Accreditati, effettuiamo audit di certificazione su tutti gli
            schemi, settori e aziende. Realizziamo anche audit di 1a parte (interni) e
            2a parte (fornitori/subappaltatori/outsourcer).
          </p>
          <ul class="space-y-3">
            <li v-for="item in highlights" :key="item" class="flex items-start gap-3">
              <CheckCircle2 class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-2xl flex items-center justify-center">
            <div class="text-center p-8">
              <div class="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-12 h-12 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <p class="text-2xl font-bold text-primary">Ver.A. Cert</p>
              <p class="text-muted-foreground">Auditing & Certificazioni</p>
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full blur-xl" />
        </div>
      </div>
    </div>
  </section>
</template>
