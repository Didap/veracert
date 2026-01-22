<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { BookOpen, Scale, Eye, RefreshCw } from 'lucide-vue-next'

const values = [
  {
    icon: BookOpen,
    title: 'Preparazione Tecnica',
    description: 'Competenze tecniche approfondite e continuamente aggiornate per garantire audit di massima qualita.',
  },
  {
    icon: RefreshCw,
    title: 'Aggiornamento Continuo',
    description: 'Monitoraggio costante degli aggiornamenti normativi e delle best practice di settore.',
  },
  {
    icon: Scale,
    title: 'Imparzialita',
    description: 'Autonomia e indipendenza garantiscono imparzialita, uniformita e obiettivita in ogni audit.',
  },
  {
    icon: Eye,
    title: 'Obiettivita',
    description: 'Valutazioni oggettive basate su evidenze concrete e criteri definiti dalle normative.',
  },
]
</script>

<template>
  <section id="valori" class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <Badge variant="outline" class="mb-4">I Nostri Valori</Badge>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Valori che Guidano il Nostro Lavoro
        </h2>
        <p class="text-lg text-muted-foreground">
          La nostra attivita si fonda su principi solidi che garantiscono
          la massima qualita e affidabilita dei nostri servizi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="value in values"
          :key="value.title"
          class="flex gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <component :is="value.icon" class="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ value.title }}</h3>
            <p class="text-muted-foreground">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
